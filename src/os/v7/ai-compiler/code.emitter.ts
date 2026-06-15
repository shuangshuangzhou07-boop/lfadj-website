export type EmittedCode = {
  filename: string;
  source: string;
};

export function emitCode(filename: string, source: string): EmittedCode {
  return {
    filename,
    source,
  };
}
