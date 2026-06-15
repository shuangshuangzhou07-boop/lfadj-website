export type SystemReadSummary = {
  root: string;
  modules: string[];
};

export function summarizeSystem(root: string, modules: string[]): SystemReadSummary {
  return {
    root,
    modules,
  };
}
