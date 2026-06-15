export type SystemBuildPlan = {
  appName: string;
  layers: string[];
  ready: boolean;
};

export function buildSystemPlan(appName: string, layers: string[]): SystemBuildPlan {
  return {
    appName,
    layers,
    ready: layers.length > 0,
  };
}
