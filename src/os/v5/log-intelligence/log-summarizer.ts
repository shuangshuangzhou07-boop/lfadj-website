import { classifyError } from "./error-classifier";
import { parseLog } from "./log-parser";

export function summarizeLog(log: string): string {
  const parsed = parseLog(log);
  const classes = parsed.errors.map(classifyError);
  const uniqueClasses = Array.from(new Set(classes));

  return uniqueClasses.length > 0
    ? `Detected error classes: ${uniqueClasses.join(", ")}.`
    : "No error classes detected.";
}
