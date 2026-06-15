export type LinkStrategyRule = {
  pageType: "product" | "blog" | "application" | "oem";
  requiredLinks: string[];
  rule: string;
};

export const linkStrategyRules: LinkStrategyRule[] = [
  {
    pageType: "product",
    requiredLinks: ["/contact"],
    rule: "Product pages must link to the contact page for inquiry conversion.",
  },
  {
    pageType: "blog",
    requiredLinks: ["/products", "/products/lf6130"],
    rule: "Blog pages must link to related product pages.",
  },
  {
    pageType: "application",
    requiredLinks: ["/products", "/products/lf6130"],
    rule: "Application pages must link to related products.",
  },
  {
    pageType: "oem",
    requiredLinks: [
      "/products",
      "/products/lf6130",
      "/products/diesel-light-tower",
      "/products/led-light-tower",
    ],
    rule: "OEM pages must link to all core product pages.",
  },
];

export function getRequiredLinks(pageType: LinkStrategyRule["pageType"]): string[] {
  return linkStrategyRules.find((rule) => rule.pageType === pageType)?.requiredLinks ?? [];
}
