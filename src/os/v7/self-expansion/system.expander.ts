import type { SystemGap } from "./gap.detector";

export function createExpansionTasks(gaps: SystemGap[]): string[] {
  return gaps.map((gap) => `Create ${gap.missing} for ${gap.area}`);
}
