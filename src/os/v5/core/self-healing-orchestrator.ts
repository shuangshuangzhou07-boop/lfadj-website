import { createRestartPlan } from "../auto-repair/restart-manager";
import { runHealingPipeline } from "./healing-pipeline";
import { createWatchdogStatus } from "./system-watchdog";

export function runSelfHealingOrchestrator(log: string) {
  const result = runHealingPipeline(log);
  const hasIssue = result.rootCause.category !== "unknown";

  return {
    ...result,
    watchdog: createWatchdogStatus(hasIssue ? 1 : 0),
    restartPlan: hasIssue ? createRestartPlan() : null,
  };
}
