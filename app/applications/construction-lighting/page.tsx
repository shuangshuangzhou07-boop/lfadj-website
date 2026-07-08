import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Construction Lighting for Infrastructure, Roads & Utility Projects | LFADJ",
  description:
    "Construction lighting use-case page for infrastructure projects, road works and utility construction.",
  alternates: { canonical: "https://lfadj.com/applications/construction-lighting" },
};

export default function ConstructionLightingPage() {
  return (
    <IndustrialSeoPage
      eyebrow="Construction Use-Case"
      title="Construction Lighting for Infrastructure, Road and Utility Projects"
      subtitle="This page targets buyers looking for construction light tower supplier Africa and project-ready deployment."
      summary="Use-case intent for civil works, roads and utility projects should move to LF955."
      keywords={["construction lighting", "construction light tower supplier Africa", "off-grid lighting systems", "site deployment"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Applications Hub"
      secondaryHref="/applications"
      cards={[
        { title: "Infrastructure projects", description: "Bridges, substations, utilities and civil works.", href: "/products/lf955" },
        { title: "Road maintenance", description: "Highway lighting and lane control during overnight work.", href: "/products/lf955" },
        { title: "Rough terrain", description: "Fast deployment where the ground is uneven or unprepared.", href: "/products/lf955" },
        { title: "Mining crossover", description: "Use the same product page for mining and construction buyers.", href: "/applications/mining-lighting" },
      ]}
      stats={[
        { value: "Construction", label: "commercial intent" },
        { value: "Africa", label: "keyword target" },
        { value: "Fast deployment", label: "buyer expectation" },
      ]}
      note="Construction lighting traffic should be captured before it leaks to generic product pages."
      bottomTitle="Construction Lighting Should Lead Into LF955"
      bottomText="This page is the commercial bridge from construction search intent to the transactional product page."
    />
  );
}
