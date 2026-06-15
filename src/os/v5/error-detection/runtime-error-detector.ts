export type RuntimeErrorSignal = {
  message: string;
  stack?: string;
};

export function detectRuntimeError(input: string): RuntimeErrorSignal | null {
  const match = input.match(/(TypeError|ReferenceError|RangeError|SyntaxError):[^\n]+/);

  if (!match) {
    return null;
  }

  return {
    message: match[0],
    stack: input,
  };
}
