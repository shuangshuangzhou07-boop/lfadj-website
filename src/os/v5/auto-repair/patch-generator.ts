export type RepairPatch = {
  file: string;
  reason: string;
  suggestedChange: string;
};

export function generatePatch(file: string, reason: string, suggestedChange: string): RepairPatch {
  return {
    file,
    reason,
    suggestedChange,
  };
}
