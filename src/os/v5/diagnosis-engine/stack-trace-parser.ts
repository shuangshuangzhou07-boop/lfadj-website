export type ParsedStackFrame = {
  file?: string;
  line?: number;
  column?: number;
};

export function parseStackTrace(stack: string): ParsedStackFrame[] {
  return stack
    .split("\n")
    .map((line) => {
      const match = line.match(/([A-Za-z]:\\[^:]+):(\d+):(\d+)/);
      return match
        ? { file: match[1], line: Number(match[2]), column: Number(match[3]) }
        : {};
    })
    .filter((frame) => frame.file);
}
