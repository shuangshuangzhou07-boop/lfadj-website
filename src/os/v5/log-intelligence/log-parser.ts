export type ParsedLog = {
  lines: string[];
  errors: string[];
};

export function parseLog(log: string): ParsedLog {
  const lines = log.split(/\r?\n/).filter(Boolean);

  return {
    lines,
    errors: lines.filter((line) => /error|failed|fatal/i.test(line)),
  };
}
