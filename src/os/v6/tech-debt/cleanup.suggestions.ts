import type { DebtSignal } from "./debt.scanner";

export function suggestCleanup(signal: DebtSignal): string {
  if (signal.type === "long-file") return "Consider splitting into smaller modules.";
  if (signal.type === "todo") return "Resolve or document TODO/FIXME item.";
  return "Review duplicate logic and extract shared helper.";
}
