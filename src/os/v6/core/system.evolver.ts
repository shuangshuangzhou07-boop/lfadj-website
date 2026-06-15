export type EvolutionStep = {
  goal: string;
  action: string;
};

export function createEvolutionStep(goal: string, action: string): EvolutionStep {
  return {
    goal,
    action,
  };
}
