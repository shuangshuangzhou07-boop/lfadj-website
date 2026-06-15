export type ClonePlan = {
  source: string;
  target: string;
  preserveFiles: boolean;
};

export function createClonePlan(source: string, target: string): ClonePlan {
  return {
    source,
    target,
    preserveFiles: true,
  };
}
