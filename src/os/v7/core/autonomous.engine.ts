export type AutonomousAction = {
  name: string;
  status: "planned" | "ready" | "blocked";
};

export function planAutonomousActions(actions: string[]): AutonomousAction[] {
  return actions.map((name) => ({ name, status: "planned" }));
}
