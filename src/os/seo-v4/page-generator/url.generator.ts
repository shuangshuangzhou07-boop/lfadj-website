export function generateSeoUrl(basePath: string, keyword: string): string {
  const slug = keyword
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${basePath.replace(/\/$/, "")}/${slug}`;
}
