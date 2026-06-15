export type RefactorFinding = {
  type: "duplicate-component" | "redundant-seo" | "unnecessary-file" | "over-engineered";
  severity: "low" | "medium" | "high";
  target: string;
  suggestion: string;
};

export type RefactorPlan = {
  findings: RefactorFinding[];
  safeCleanupPlan: string[];
};

export type RefactorInput = {
  components: string[];
  seoModules: string[];
  files: string[];
  abstractions: string[];
};

function findDuplicates(items: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const item of items) {
    if (seen.has(item)) duplicates.add(item);
    seen.add(item);
  }

  return Array.from(duplicates);
}

export function createRefactorReport(input: RefactorInput): RefactorPlan {
  const duplicateComponents = findDuplicates(input.components).map<RefactorFinding>((component) => ({
    type: "duplicate-component",
    severity: "medium",
    target: component,
    suggestion: "Review whether this component should become a shared reusable component.",
  }));

  const redundantSeo = findDuplicates(input.seoModules).map<RefactorFinding>((moduleName) => ({
    type: "redundant-seo",
    severity: "medium",
    target: moduleName,
    suggestion: "Consolidate repeated SEO logic into the SEO engine or shared metadata helper.",
  }));

  const unnecessaryFiles = input.files
    .filter((file) => file.endsWith(".tmp") || file.endsWith(".bak"))
    .map<RefactorFinding>((file) => ({
      type: "unnecessary-file",
      severity: "low",
      target: file,
      suggestion: "Move backup or temporary files out of production source paths after confirmation.",
    }));

  const overEngineered = input.abstractions
    .filter((name) => name.includes("engine") && input.abstractions.length > 20)
    .map<RefactorFinding>((name) => ({
      type: "over-engineered",
      severity: "low",
      target: name,
      suggestion: "Confirm this abstraction has a concrete caller and business purpose.",
    }));

  const findings = [...duplicateComponents, ...redundantSeo, ...unnecessaryFiles, ...overEngineered];

  return {
    findings,
    safeCleanupPlan: findings.map((finding) => `${finding.target}: ${finding.suggestion}`),
  };
}
