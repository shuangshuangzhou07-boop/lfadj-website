import * as vscode from "vscode";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { createInterface } from "readline";

let statusBarItem: vscode.StatusBarItem | undefined;
let codexProcess: ChildProcessWithoutNullStreams | undefined;
let refreshTimer: NodeJS.Timeout | undefined;
let requestId = 0;
const pendingRequests = new Map<
  number,
  {
    resolve: (result: unknown) => void;
    reject: (error: Error) => void;
    timer: NodeJS.Timeout;
  }
>();
const pendingContextRequests = new Map<
  string,
  {
    resolve: (percent: number) => void;
    reject: (error: Error) => void;
    timer: NodeJS.Timeout;
  }
>();

interface RateLimitWindow {
  remaining?: number;
  remainingPercent?: number;
  remainingPercentage?: number;
  percentRemaining?: number;
  leftPercent?: number;
  leftPercentage?: number;
}

interface RateLimitResponse {
  rateLimits?: {
    primary_window?: RateLimitWindow | null;
    secondary_window?: RateLimitWindow | null;
    primaryWindow?: RateLimitWindow | null;
    secondaryWindow?: RateLimitWindow | null;
    primary?: RateLimitWindow | null;
    secondary?: RateLimitWindow | null;
  };
}

interface ThreadListResponse {
  data?: Array<{ id?: string }>;
}

interface TokenUsageNotification {
  threadId?: string;
  tokenUsage?: {
    last?: { totalTokens?: number };
    modelContextWindow?: number | null;
  };
}

function setUnavailable() {
  if (statusBarItem) {
    statusBarItem.text = "AI usage: unavailable";
    statusBarItem.tooltip = "Codex usage data is unavailable";
  }
}

function readLeftPercent(window?: RateLimitWindow | null): number | undefined {
  const value =
    window?.remaining ??
    window?.remainingPercent ??
    window?.remainingPercentage ??
    window?.percentRemaining ??
    window?.leftPercent ??
    window?.leftPercentage;

  if (typeof value !== "number") {
    return undefined;
  }

  return Math.round(value <= 1 ? value * 100 : value);
}

function formatLeftPercent(value: number | undefined): string {
  return typeof value === "number" ? `${value}% left` : "unavailable";
}

function send(message: object) {
  if (!codexProcess?.stdin.writable) {
    throw new Error("Codex app-server is not running");
  }
  codexProcess.stdin.write(`${JSON.stringify(message)}\n`);
}

function request(method: string, params: object = {}): Promise<unknown> {
  const id = ++requestId;

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pendingRequests.delete(id);
      reject(new Error(`Codex request timed out: ${method}`));
    }, 10_000);

    pendingRequests.set(id, { resolve, reject, timer });
    send({ id, method, params });
  });
}

function handleMessage(line: string) {
  let message: {
    id?: number;
    result?: unknown;
    error?: { message?: string };
    method?: string;
    params?: TokenUsageNotification;
  };

  try {
    message = JSON.parse(line);
  } catch {
    return;
  }

  if (message.id !== undefined) {
    const pending = pendingRequests.get(message.id);
    if (!pending) {
      return;
    }

    clearTimeout(pending.timer);
    pendingRequests.delete(message.id);
    if (message.error) {
      pending.reject(new Error(message.error.message ?? "Codex request failed"));
    } else {
      pending.resolve(message.result);
    }
    return;
  }

  if (message.method === "thread/tokenUsage/updated") {
    const threadId = message.params?.threadId;
    const used = message.params?.tokenUsage?.last?.totalTokens;
    const capacity = message.params?.tokenUsage?.modelContextWindow;
    const pending = threadId
      ? pendingContextRequests.get(threadId)
      : undefined;

    if (
      pending &&
      typeof used === "number" &&
      typeof capacity === "number" &&
      capacity > 0
    ) {
      clearTimeout(pending.timer);
      pendingContextRequests.delete(threadId!);
      pending.resolve(Math.min(100, Math.round((used / capacity) * 100)));
    }
  }
}

function readContextPercent(threadId: string): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    const timer = setTimeout(() => {
      pendingContextRequests.delete(threadId);
      reject(new Error("Codex context usage timed out"));
    }, 10_000);

    pendingContextRequests.set(threadId, { resolve, reject, timer });
    request("thread/resume", { threadId }).catch((error) => {
      clearTimeout(timer);
      pendingContextRequests.delete(threadId);
      reject(error);
    });
  });
}

async function refreshUsage() {
  const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (!cwd) {
    setUnavailable();
    return;
  }

  let fiveHourLeft: number | undefined;
  let weeklyLeft: number | undefined;
  let contextLeft: number | undefined;

  try {
    const rateLimitResult = (await request(
      "account/rateLimits/read"
    )) as RateLimitResponse;

    fiveHourLeft = readLeftPercent(
      rateLimitResult.rateLimits?.primary_window ??
        rateLimitResult.rateLimits?.primaryWindow ??
        rateLimitResult.rateLimits?.primary
    );
    weeklyLeft = readLeftPercent(
      rateLimitResult.rateLimits?.secondary_window ??
        rateLimitResult.rateLimits?.secondaryWindow ??
        rateLimitResult.rateLimits?.secondary
    );
  } catch {
    fiveHourLeft = undefined;
    weeklyLeft = undefined;
  }

  try {
    const threadListResult = (await request("thread/list", {
      cwd,
      limit: 1,
      sortKey: "updated_at",
      sortDirection: "desc",
    })) as ThreadListResponse;
    const threadId = threadListResult.data?.[0]?.id;

    if (threadId) {
      const contextUsed = await readContextPercent(threadId);
      contextLeft = Math.max(0, 100 - contextUsed);
    }
  } catch {
    contextLeft = undefined;
  }

  if (statusBarItem) {
    statusBarItem.text = `AI 5h ${formatLeftPercent(
      fiveHourLeft
    )} | 7d ${formatLeftPercent(weeklyLeft)} | ctx ${formatLeftPercent(
      contextLeft
    )}`;
    statusBarItem.tooltip = "Live Codex usage from the Codex app-server";
  }
}

async function connectToCodex() {
  const command =
    process.platform === "win32"
      ? process.env.ComSpec ?? "cmd.exe"
      : "codex";
  const args =
    process.platform === "win32"
      ? ["/d", "/s", "/c", "codex app-server"]
      : ["app-server"];

  codexProcess = spawn(command, args);
  const reader = createInterface({ input: codexProcess.stdout });
  reader.on("line", handleMessage);
  codexProcess.on("error", setUnavailable);
  codexProcess.on("exit", setUnavailable);

  await request("initialize", {
    clientInfo: {
      name: "ai_usage_status_bar",
      title: "AI Usage Status Bar",
      version: "0.0.3",
    },
    capabilities: { experimentalApi: true },
  });
  send({ method: "initialized", params: {} });

  await refreshUsage();
  refreshTimer = setInterval(refreshUsage, 60_000);
}

export function activate(context: vscode.ExtensionContext) {
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  setUnavailable();
  statusBarItem.show();

  void connectToCodex().catch(setUnavailable);

  context.subscriptions.push(statusBarItem, {
    dispose: () => {
      if (refreshTimer) {
        clearInterval(refreshTimer);
      }
      for (const pending of pendingRequests.values()) {
        clearTimeout(pending.timer);
        pending.reject(new Error("Extension deactivated"));
      }
      pendingRequests.clear();
      for (const pending of pendingContextRequests.values()) {
        clearTimeout(pending.timer);
        pending.reject(new Error("Extension deactivated"));
      }
      pendingContextRequests.clear();
      codexProcess?.kill();
    },
  });
}

export function deactivate() {
  statusBarItem?.dispose();
}
