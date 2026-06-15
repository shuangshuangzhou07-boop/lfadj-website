export type CodeFixResult = {
  changed: boolean;
  output: string;
};

export function applySafeTextFix(source: string, search: string, replacement: string): CodeFixResult {
  if (!source.includes(search)) {
    return { changed: false, output: source };
  }

  return {
    changed: true,
    output: source.replace(search, replacement),
  };
}
