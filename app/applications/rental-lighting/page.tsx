import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Rental Lighting for Fleet Utilization & Short-Term Projects | LFADJ",
  description:
    "Rental lighting use-case page for fleets, short-term projects and contractor handover requirements.",
  alternates: { canonical: "https://lfadj.com/applications/rental-lighting" },
};

export default function RentalLightingPage() {
  return (
    <IndustrialSeoPage
      eyebrow="Rental Use-Case"
      title="Rental Lighting for Fleet Utilization and Short-Term Projects"
      subtitle="Capture rental lighting queries and move them into the LF955 product page for quotation."
      summary="Rental buyers care about uptime, maintenance cost and deployment speed."
      keywords={["rental lighting", "portable light tower mining use", "off-grid lighting systems", "fleet utilization"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Applications Hub"
      secondaryHref="/applications"
      cards={[
        { title: "Fleet utilization", description: "Increase rental days with predictable uptime.", href: "/products/lf955" },
        { title: "Short-term projects", description: "Deploy quickly for temporary works and handover jobs.", href: "/products/lf955" },
        { title: "Remote operations", description: "Low maintenance support for off-grid customers.", href: "/products/lf955" },
        { title: "Portable tower", description: "Link rental buyers to portable diesel light tower searches.", href: "/light-towers/portable-light-tower" },
      ]}
      stats={[
        { value: "Fleet", label: "utilization focus" },
        { value: "Low", label: "maintenance cost priority" },
        { value: "Fast", label: "deployment on rough terrain" },
      ]}
      note="Rental lighting should convert commercial intent into LF955 inquiries."
      bottomTitle="Rental Intent Should Become an LF955 Quote"
      bottomText="This page supports the rental funnel from SEO discovery into the product page and then into WhatsApp closure."
    />
  );
}
