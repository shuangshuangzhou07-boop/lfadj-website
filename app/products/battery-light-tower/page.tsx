import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Battery Light Tower | LFADJ",
  description: "Battery light tower route for LFADJ mobile lighting products.",
  alternates: { canonical: "https://lfadj.com/products/battery-light-tower" },
};

export default function BatteryLightTowerPage() {
  return (
    <SeoClusterPage
      eyebrow="Products"
      title="Battery Light Tower"
      description="Battery light tower category route for low-noise temporary lighting comparison and planning."
      links={[
        { label: "How to Choose Light Tower", href: "/blog/how-to-choose-light-tower" },
        { label: "Products", href: "/products" },
        { label: "Applications", href: "/applications" },
        { label: "Light Tower Manufacturer", href: "/oem/light-tower-manufacturer" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
