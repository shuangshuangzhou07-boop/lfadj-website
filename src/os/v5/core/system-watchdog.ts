export type WatchdogStatus = {
  healthy: boolean;
  message: string;
};

export function createWatchdogStatus(errorCount: number): WatchdogStatus {
  return errorCount === 0
    ? { healthy: true, message: "System healthy." }
    : { healthy: false, message: `${errorCount} issue(s) detected.` };
}
