"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const child_process_1 = require("child_process");
const readline_1 = require("readline");
let statusBarItem;
let codexProcess;
let refreshTimer;
let requestId = 0;
const pendingRequests = new Map();
const pendingContextRequests = new Map();
function setUnavailable() {
    if (statusBarItem) {
        statusBarItem.text = "AI usage: unavailable";
        statusBarItem.tooltip = "Codex usage data is unavailable";
    }
}
function send(message) {
    if (!codexProcess?.stdin.writable) {
        throw new Error("Codex app-server is not running");
    }
    codexProcess.stdin.write(`${JSON.stringify(message)}\n`);
}
function request(method, params = {}) {
    const id = ++requestId;
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            pendingRequests.delete(id);
            reject(new Error(`Codex request timed out: ${method}`));
        }, 10000);
        pendingRequests.set(id, { resolve, reject, timer });
        send({ id, method, params });
    });
}
function handleMessage(line) {
    let message;
    try {
        message = JSON.parse(line);
    }
    catch {
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
        }
        else {
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
        if (pending &&
            typeof used === "number" &&
            typeof capacity === "number" &&
            capacity > 0) {
            clearTimeout(pending.timer);
            pendingContextRequests.delete(threadId);
            pending.resolve(Math.min(100, Math.round((used / capacity) * 100)));
        }
    }
}
function readContextPercent(threadId) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            pendingContextRequests.delete(threadId);
            reject(new Error("Codex context usage timed out"));
        }, 10000);
        pendingContextRequests.set(threadId, { resolve, reject, timer });
        request("thread/resume", { threadId }).catch((error) => {
            clearTimeout(timer);
            pendingContextRequests.delete(threadId);
            reject(error);
        });
    });
}
async function refreshUsage() {
    try {
        const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
        if (!cwd) {
            throw new Error("No workspace is open");
        }
        const [rateLimitResult, threadListResult] = await Promise.all([
            request("account/rateLimits/read"),
            request("thread/list", {
                cwd,
                limit: 1,
                sortKey: "updated_at",
                sortDirection: "desc",
            }),
        ]);
        const rateLimits = rateLimitResult;
        const threads = threadListResult;
        const fiveHour = rateLimits.rateLimits?.primary?.usedPercent;
        const weekly = rateLimits.rateLimits?.secondary?.usedPercent;
        const threadId = threads.data?.[0]?.id;
        if (typeof fiveHour !== "number" ||
            typeof weekly !== "number" ||
            !threadId) {
            throw new Error("Codex usage response is incomplete");
        }
        const context = await readContextPercent(threadId);
        if (statusBarItem) {
            statusBarItem.text = `AI 5h ${fiveHour}% | 7d ${weekly}% | ctx ${context}%`;
            statusBarItem.tooltip = "Live Codex usage from the Codex app-server";
        }
    }
    catch {
        setUnavailable();
    }
}
async function connectToCodex() {
    const command = process.platform === "win32"
        ? process.env.ComSpec ?? "cmd.exe"
        : "codex";
    const args = process.platform === "win32"
        ? ["/d", "/s", "/c", "codex app-server"]
        : ["app-server"];
    codexProcess = (0, child_process_1.spawn)(command, args);
    const reader = (0, readline_1.createInterface)({ input: codexProcess.stdout });
    reader.on("line", handleMessage);
    codexProcess.on("error", setUnavailable);
    codexProcess.on("exit", setUnavailable);
    await request("initialize", {
        clientInfo: {
            name: "ai_usage_status_bar",
            title: "AI Usage Status Bar",
            version: "0.0.2",
        },
        capabilities: { experimentalApi: true },
    });
    send({ method: "initialized", params: {} });
    await refreshUsage();
    refreshTimer = setInterval(refreshUsage, 60000);
}
function activate(context) {
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
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
function deactivate() {
    statusBarItem?.dispose();
}
//# sourceMappingURL=extension.js.map