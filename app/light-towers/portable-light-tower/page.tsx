import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Portable Light Tower for Rental, Emergency & Temporary Works | LFADJ",
  description:
    "Portable light tower category page for rental fleets, emergency response and temporary industrial lighting projects.",
  alternates: { canonical: "https://lfadj.com/light-towers/portable-light-tower" },
};

export default function PortableLightTowerPage() {
  return (
    <IndustrialSeoPage
      eyebrow="Portable Category"
      title="Portable Light Tower for Rental, Emergency and Temporary Works"
      subtitle="Built for fast deployment, rough terrain and short-term projects that still need industrial performance."
      summary="SEO category page for portable diesel light tower and mining use keywords."
      keywords={["portable diesel light tower", "portable light tower mining use", "rental lighting", "temporary site lighting"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Category Hub"
      secondaryHref="/light-towers"
      cards={[
        { title: "Rental fleets", description: "Increase utilization with fast deployment and simple handover.", href: "/applications/rental-lighting" },
        { title: "Emergency lighting", description: "Rapid response for outage, repair and municipal recovery work.", href: "/applications/emergency-lighting" },
        { title: "Construction lighting", description: "Temporary works lighting for bridges, roads and utilities.", href: "/applications/construction-lighting" },
        { title: "LF955 product page", description: "Qualified buyers move to quotation and WhatsApp inquiry.", href: "/products/lf955" },
      ]}
      stats={[
        { value: "Fast", label: "deployment on rough terrain" },
        { value: "Low", label: "maintenance for remote operations" },
        { value: "1", label: "conversion target" },
      ]}
      note="Portable search intent is commercial when buyers compare mobility, uptime and operating cost."
      bottomTitle="Portable Search Traffic Should End at LF955"
      bottomText="Use this category page to capture temporary-work and rental traffic, then pass it to LF955 for the quote step."
    />
  );
}
