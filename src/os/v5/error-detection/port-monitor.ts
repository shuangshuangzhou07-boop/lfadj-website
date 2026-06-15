export type PortStatus = "available" | "in-use" | "unknown";

export function classifyPortOutput(output: string): PortStatus {
  if (/EADDRINUSE|already in use/i.test(output)) {
    return "in-use";
  }

  if (/ready|started|listening/i.test(output)) {
    return "available";
  }

  return "unknown";
}
