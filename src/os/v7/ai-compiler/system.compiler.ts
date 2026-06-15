import type { ParsedPrompt } from "./prompt.parser";

export function compileSystemSpec(prompt: ParsedPrompt): string {
  return [prompt.objective, ...prompt.constraints.map((item) => `- ${item}`)].join("\n");
}
