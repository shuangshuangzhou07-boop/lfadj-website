export function removeDeadExport(source: string, exportName: string): string {
  const pattern = new RegExp(`^export\\s+.*\\b${exportName}\\b.*$\\n?`, "m");
  return source.replace(pattern, "");
}
