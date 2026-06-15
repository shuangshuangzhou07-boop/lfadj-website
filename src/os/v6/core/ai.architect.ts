import { auditSeoStructure } from "../architecture/seo.structure.audit";

export function reviewArchitecture(routes: string[]) {
  return {
    seo: auditSeoStructure(routes),
    recommendation: "Keep product, application, OEM, blog and contact clusters connected.",
  };
}
