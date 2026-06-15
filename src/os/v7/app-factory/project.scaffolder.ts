export type ScaffoldFile = {
  path: string;
  kind: "page" | "component" | "config" | "data";
};

export function scaffoldProjectFiles(basePath: string, files: ScaffoldFile[]): string[] {
  return files.map((file) => `${basePath.replace(/\/$/, "")}/${file.path}`);
}
