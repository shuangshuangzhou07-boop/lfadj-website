import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Industrial Lighting Applications | Mining, Construction, Emergency & Rental | LFADJ",
  description:
    "Industrial use-case hub for mining lighting, construction lighting, emergency lighting and rental fleet lighting projects.",
  alternates: { canonical: "https://lfadj.com/applications" },
};

export default function ApplicationsHubPage() {
  return (
    <IndustrialSeoPage
      eyebrow="Use-Case Layer"
      title="Industrial Lighting Applications for Buyers and Project Teams"
      subtitle="This layer captures commercial use-case intent and routes buyers into LF955 after they choose the right application."
      summary="Designed to rank for mining lighting, construction lighting, emergency lighting and rental fleet lighting searches."
      keywords={["mining lighting", "construction lighting", "emergency lighting", "rental lighting"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Light Tower Categories"
      secondaryHref="/light-towers"
      cards={[
        {
          title: "Mining lighting",
          description: "Night operations, haul roads and off-grid industrial sites.",
          href: "/applications/mining-lighting",
          tag: "Mining SEO",
        },
        {
          title: "Construction lighting",
          description: "Civil works, infrastructure projects and highway maintenance.",
          href: "/applications/construction-lighting",
          tag: "Construction SEO",
        },
        {
          title: "Emergency lighting",
          description: "Power outage response, rescue support and recovery lighting.",
          href: "/applications/emergency-lighting",
          tag: "Emergency SEO",
        },
        {
          title: "Rental lighting",
          description: "Fleet utilization, short-term deployment and customer-ready uptime.",
          href: "/applications/rental-lighting",
          tag: "Rental SEO",
        },
      ]}
      stats={[
        { value: "4", label: "use-case pages" },
        { value: "1", label: "LF955 conversion page" },
        { value: "South Africa", label: "mining focus" },
      ]}
      note="Use-case pages sit between blog education and product conversion."
      bottomTitle="Use-Case Intent Should Feed the LF955 Conversion Page"
      bottomText="The application layer captures commercial and operational intent, then routes qualified traffic into the product inquiry system."
    />
  );
}
