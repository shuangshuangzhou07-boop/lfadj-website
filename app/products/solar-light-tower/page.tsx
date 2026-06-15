import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Solar Light Tower | LFADJ",
  description: "Solar light tower route for LFADJ mobile lighting products.",
  alternates: { canonical: "https://lfadj.com/products/solar-light-tower" },
};

export default function SolarLightTowerPage() {
  return (
    <SeoClusterPage
      eyebrow="Products"
      title="Solar Light Tower"
      description="Solar light tower category route for buyers comparing renewable temporary lighting options."
      links={[
        { label: "Diesel vs LED Guide", href: "/blog/diesel-vs-led-light-tower" },
        { label: "Products", href: "/products" },
        { label: "Applications", href: "/applications" },
        { label: "Light Tower Manufacturer", href: "/oem/light-tower-manufacturer" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
