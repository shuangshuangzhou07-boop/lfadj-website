export type CodeQualityInput = {
  duplicateCount: number;
  routeCount: number;
  sharedComponentCount: number;
  dynamicProductSystem: boolean;
  seoMetadataCoverage: number;
  internalLinkCoverage: number;
};

export type CodeQualityReport = {
  maintainability: "low" | "medium" | "high";
  scalability: "low" | "medium" | "high";
  performanceRisk: "low" | "medium" | "high";
  seoStructureQuality: "low" | "medium" | "high";
  recommendations: string[];
};

function scoreToLevel(score: number): "low" | "medium" | "high" {
  if (score >= 80) return "high";
  if (score >= 50) return "medium";
  return "low";
}

export function evaluateCodeQuality(input: CodeQualityInput): CodeQualityReport {
  const maintainabilityScore = Math.max(0, 100 - input.duplicateCount * 10);
  const scalabilityScore = input.dynamicProductSystem ? 85 : 45;
  const performanceScore = input.routeCount > 100 ? 45 : 85;
  const seoScore = Math.round((input.seoMetadataCoverage + input.internalLinkCoverage) / 2);

  return {
    maintainability: scoreToLevel(maintainabilityScore),
    scalability: scoreToLevel(scalabilityScore),
    performanceRisk: performanceScore >= 80 ? "low" : performanceScore >= 50 ? "medium" : "high",
    seoStructureQuality: scoreToLevel(seoScore),
    recommendations: [
      "Reduce duplicated components before adding new page families.",
      "Keep product pages data-driven through the product engine.",
      "Use shared SEO metadata generators for ranking pages.",
      "Monitor route growth and avoid unused dynamic routes.",
    ],
  };
}
