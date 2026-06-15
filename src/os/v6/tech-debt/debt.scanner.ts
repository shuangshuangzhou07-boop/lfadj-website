export type DebtSignal = {
  type: "todo" | "long-file" | "duplicate";
  message: string;
};

export function scanDebt(source: string): DebtSignal[] {
  const signals: DebtSignal[] = [];

  if (/TODO|FIXME/i.test(source)) {
    signals.push({ type: "todo", message: "TODO/FIXME marker detected." });
  }

  if (source.split(/\r?\n/).length > 400) {
    signals.push({ type: "long-file", message: "File exceeds 400 lines." });
  }

  return signals;
}
