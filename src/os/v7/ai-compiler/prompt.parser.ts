export type ParsedPrompt = {
  objective: string;
  constraints: string[];
};

export function parsePrompt(prompt: string): ParsedPrompt {
  const lines = prompt.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return {
    objective: lines[0] ?? "",
    constraints: lines.slice(1),
  };
}
