export type DependencyIssue = {
  packageName: string;
  issue: string;
};

export function analyzeDependencyOutput(output: string): DependencyIssue[] {
  const issues: DependencyIssue[] = [];

  if (/Cannot find module/i.test(output)) {
    issues.push({ packageName: "unknown", issue: "Missing module detected." });
  }

  if (/peer dependency/i.test(output)) {
    issues.push({ packageName: "unknown", issue: "Peer dependency warning detected." });
  }

  return issues;
}
