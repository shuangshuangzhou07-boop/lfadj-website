export type EvolutionRecord = {
  version: string;
  capability: string;
};

export function createEvolutionRecord(version: string, capability: string): EvolutionRecord {
  return {
    version,
    capability,
  };
}
