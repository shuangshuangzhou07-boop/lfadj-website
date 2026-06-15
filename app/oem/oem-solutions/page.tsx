import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "OEM Light Tower Solutions | LFADJ",
  description: "OEM light tower solutions route for LFADJ custom mobile lighting projects.",
  alternates: { canonical: "https://lfadj.com/oem/oem-solutions" },
};

export default function OemSolutionsPage() {
  return (
    <SeoClusterPage
      eyebrow="OEM"
      title="OEM Light Tower Solutions"
      description="OEM route for brand, configuration and export planning around mobile light towers."
      links={[
        { label: "Contact", href: "/contact" },
        { label: "Custom Projects", href: "/oem/custom-projects" },
        { label: "LF6130", href: "/products/lf6130" },
      ]}
    />
  );
}
