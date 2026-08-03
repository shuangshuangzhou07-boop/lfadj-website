import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Custom Light Tower Projects | LFADJ",
  description: "Custom light tower projects route for LFADJ OEM and ODM planning.",
  alternates: { canonical: "https://lfadj.com/oem/custom-projects" },
};

export default function CustomProjectsPage() {
  return (
    <SeoClusterPage
      eyebrow="OEM"
      title="Custom Light Tower Projects"
      description="Custom project route for buyers planning mobile light tower specifications and project requirements."
      links={[
        { label: "Contact", href: "/en/contact" },
        { label: "OEM Solutions", href: "/oem/oem-solutions" },
        { label: "Applications", href: "/applications" },
      ]}
    />
  );
}
