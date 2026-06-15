import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Mining Light Tower Projects | LFADJ",
  description: "Mining project case study route for LFADJ mobile light towers.",
  alternates: { canonical: "https://lfadj.com/case-studies/mining-projects" },
};

export default function MiningProjectsPage() {
  return (
    <SeoClusterPage
      eyebrow="Case Studies"
      title="Mining Light Tower Projects"
      description="Case-study route for mining lighting applications and LF6130 product pathways."
      links={[
        { label: "Mining Application", href: "/applications/mining" },
        { label: "LF6130", href: "/products/lf6130" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
