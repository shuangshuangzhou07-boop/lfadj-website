export type DuplicateBlock = {
  text: string;
  count: number;
};

export function detectDuplicateLines(source: string): DuplicateBlock[] {
  const counts = new Map<string, number>();

  for (const line of source.split(/\r?\n/).map((item) => item.trim()).filter(Boolean)) {
    counts.set(line, (counts.get(line) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .filter(([, count]) => count > 1)
    .map(([text, count]) => ({ text, count }));
}
