import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Government Lighting Tower Projects | LFADJ",
  description: "Government project case study route for LFADJ mobile light towers.",
  alternates: { canonical: "https://lfadj.com/case-studies/government-projects" },
};

export default function GovernmentProjectsPage() {
  return (
    <SeoClusterPage
      eyebrow="Case Studies"
      title="Government Lighting Tower Projects"
      description="Case-study route for emergency, municipal and road infrastructure lighting projects."
      links={[
        { label: "Emergency Lighting Tower", href: "/applications/emergency" },
        { label: "Road Infrastructure", href: "/applications/road-infrastructure" },
        { label: "Contact", href: "/en/contact" },
      ]}
    />
  );
}
