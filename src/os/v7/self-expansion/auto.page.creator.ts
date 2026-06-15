export function createPagePath(section: string, slug: string): string {
  return `/${section.replace(/^\/+|\/+$/g, "")}/${slug.toLowerCase().replace(/\s+/g, "-")}`;
}
