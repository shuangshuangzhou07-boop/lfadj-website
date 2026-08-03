import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Construction Lighting Guide | LFADJ",
  description: "Construction lighting guide route for jobsite light tower planning.",
  alternates: { canonical: "https://lfadj.com/blog/construction-lighting-guide" },
};

export default function ConstructionLightingGuidePage() {
  return (
    <SeoClusterPage
      eyebrow="Blog"
      title="Construction Lighting Guide"
      description="Guide route for construction lighting tower planning, product selection and contact flow."
      links={[
        { label: "Construction Lighting Tower", href: "/applications/construction" },
        { label: "Diesel Light Tower", href: "/products/diesel-light-tower" },
        { label: "Products", href: "/products" },
        { label: "LF6130", href: "/products/lf6130" },
        { label: "Contact", href: "/en/contact" },
      ]}
    />
  );
}
