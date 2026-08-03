import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Light Tower Factory Capability | LFADJ",
  description: "Factory capability route for LFADJ light tower manufacturing and OEM support.",
  alternates: { canonical: "https://lfadj.com/oem/factory-capability" },
};

export default function FactoryCapabilityPage() {
  return (
    <SeoClusterPage
      eyebrow="OEM"
      title="Light Tower Factory Capability"
      description="Factory capability route for manufacturing, documentation and export-ready B2B support."
      links={[
        { label: "Contact", href: "/en/contact" },
        { label: "Light Tower Manufacturer", href: "/oem/light-tower-manufacturer" },
        { label: "Products", href: "/products" },
      ]}
    />
  );
}
