export type SystemGap = {
  area: string;
  missing: string;
  priority: "low" | "medium" | "high";
};

export function detectGaps(required: string[], existing: string[]): SystemGap[] {
  return required
    .filter((item) => !existing.includes(item))
    .map((missing) => ({ area: "system", missing, priority: "medium" }));
}
