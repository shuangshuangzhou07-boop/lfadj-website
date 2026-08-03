export type SeoStructureAudit = {
  hasProducts: boolean;
  hasApplications: boolean;
  hasOem: boolean;
  hasBlog: boolean;
  hasContact: boolean;
};

export function auditSeoStructure(routes: string[]): SeoStructureAudit {
  return {
    hasProducts: routes.some((route) => route.startsWith("/products")),
    hasApplications: routes.some((route) => route.startsWith("/applications")),
    hasOem: routes.some((route) => route.startsWith("/oem")),
    hasBlog: routes.some((route) => route.startsWith("/blog")),
    hasContact: routes.includes("/en/contact") || routes.includes("/zh/contact"),
  };
}
