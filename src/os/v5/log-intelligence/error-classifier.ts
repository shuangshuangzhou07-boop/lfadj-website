export type ErrorClass = "build" | "runtime" | "dependency" | "route" | "unknown";

export function classifyError(line: string): ErrorClass {
  if (/Failed to compile|Build failed/i.test(line)) return "build";
  if (/Cannot find module|dependency/i.test(line)) return "dependency";
  if (/404|500|route/i.test(line)) return "route";
  if (/TypeError|ReferenceError|SyntaxError/i.test(line)) return "runtime";
  return "unknown";
}
