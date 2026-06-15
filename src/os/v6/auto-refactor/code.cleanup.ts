export function removeExtraBlankLines(source: string): string {
  return source.replace(/\n{3,}/g, "\n\n");
}

export function trimTrailingWhitespace(source: string): string {
  return source.replace(/[ \t]+$/gm, "");
}
