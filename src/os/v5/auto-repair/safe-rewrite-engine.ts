export function canSafelyRewrite(filePath: string): boolean {
  return /\.(ts|tsx|json|md|css)$/.test(filePath);
}

export function rejectUnsafeRewrite(filePath: string): void {
  if (!canSafelyRewrite(filePath)) {
    throw new Error(`Unsafe rewrite blocked for file: ${filePath}`);
  }
}
