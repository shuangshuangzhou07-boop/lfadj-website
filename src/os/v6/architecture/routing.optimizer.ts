export function normalizeRoutePath(path: string): string {
  return `/${path.split("/").filter(Boolean).join("/")}`;
}

export function isKebabCaseRoute(path: string): boolean {
  return path
    .split("/")
    .filter(Boolean)
    .every((segment) => /^\[.+\]$/.test(segment) || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(segment));
}
