import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Portable Light Tower | LFADJ",
  description: "Portable light tower route for LFADJ mobile lighting products.",
  alternates: { canonical: "https://lfadj.com/products/portable-light-tower" },
};

export default function PortableLightTowerPage() {
  return (
    <SeoClusterPage
      eyebrow="Products"
      title="Portable Light Tower"
      description="Portable light tower category page for trailer-mounted temporary lighting and rental projects."
      links={[
        { label: "Mobile Light Tower", href: "/products" },
        { label: "LF6130", href: "/products/lf6130" },
        { label: "Applications", href: "/applications" },
        { label: "Light Tower Manufacturer", href: "/oem/light-tower-manufacturer" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
