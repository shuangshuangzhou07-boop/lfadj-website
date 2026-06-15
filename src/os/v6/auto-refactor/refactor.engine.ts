export type RefactorPlan = {
  target: string;
  reason: string;
  steps: string[];
};

export function createRefactorPlan(target: string, reason: string, steps: string[]): RefactorPlan {
  return {
    target,
    reason,
    steps,
  };
}
