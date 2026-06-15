export type ArchitectureInput = {
  appRoutes: string[];
  productDataFiles: string[];
  seoEngineFiles: string[];
  internalLinks: Array<{ from: string; to: string }>;
};

export type ArchitectureOptimizationReport = {
  appRouterSuggestions: string[];
  productScalabilitySuggestions: string[];
  seoDesignSuggestions: string[];
  linkingEfficiencySuggestions: string[];
  systemSimplificationPlan: string[];
};

export function optimizeArchitecture(input: ArchitectureInput): ArchitectureOptimizationReport {
  const appRouterSuggestions =
    input.appRoutes.length === 0
      ? ["Add App Router page files before production deployment."]
      : ["Keep route files thin and move reusable business logic into src/os modules."];

  const productScalabilitySuggestions =
    input.productDataFiles.length <= 1
      ? ["Prepare product registry expansion so future products can be added through JSON data."]
      : ["Continue using JSON-driven product data and shared product templates."];

  const seoDesignSuggestions =
    input.seoEngineFiles.length === 0
      ? ["Centralize metadata, keyword mapping and content priority in the SEO engine."]
      : ["Use SEO engine outputs consistently across product, blog and application pages."];

  const productLinks = input.internalLinks.filter((link) => link.from.includes("/products"));
  const linkingEfficiencySuggestions =
    productLinks.length === 0
      ? ["Add product page links to contact, applications and OEM conversion routes."]
      : ["Maintain product-to-contact and product-to-application links for conversion flow."];

  return {
    appRouterSuggestions,
    productScalabilitySuggestions,
    seoDesignSuggestions,
    linkingEfficiencySuggestions,
    systemSimplificationPlan: [
      "Keep UI components rendering-focused.",
      "Keep product content in JSON.",
      "Keep SEO strategy in src/os/seo-v4.",
      "Review unused OS engines before wiring runtime behavior.",
    ],
  };
}
