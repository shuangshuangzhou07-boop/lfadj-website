import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Emergency Lighting for Power Outages, Rescue & Recovery | LFADJ",
  description:
    "Emergency lighting use-case page for outage response, rescue operations and recovery work.",
  alternates: { canonical: "https://lfadj.com/applications/emergency-lighting" },
};

export default function EmergencyLightingPage() {
  return (
    <IndustrialSeoPage
      eyebrow="Emergency Use-Case"
      title="Emergency Lighting for Power Outages, Rescue and Recovery"
      subtitle="Capture urgent lighting searches and route them into the LF955 product conversion page."
      summary="Off-grid emergency lighting needs rapid deployment and low maintenance."
      keywords={["emergency lighting", "off-grid lighting systems", "portable diesel light tower", "deployment"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Applications Hub"
      secondaryHref="/applications"
      cards={[
        { title: "Power outage lighting", description: "Immediate visibility when grid power fails.", href: "/products/lf955" },
        { title: "Rescue operations", description: "Support emergency teams with fast deployment.", href: "/products/lf955" },
        { title: "Recovery work", description: "Temporary lighting for repair and restoration work.", href: "/products/lf955" },
        { title: "Portable tower use", description: "Move quickly between sites with minimal maintenance.", href: "/light-towers/portable-light-tower" },
      ]}
      stats={[
        { value: "Fast", label: "deployment expectation" },
        { value: "Off-grid", label: "fit for outages" },
        { value: "Low maintenance", label: "operational priority" },
      ]}
      note="Emergency lighting pages should not leak intent away from the LF955 conversion page."
      bottomTitle="Emergency Search Intent Needs a Direct Conversion Path"
      bottomText="Use this page to catch urgent searches, then move the buyer straight into LF955 and WhatsApp follow-up."
    />
  );
}
