import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Events and Rental Light Tower | LFADJ",
  description: "Events and rental light tower application route for LFADJ mobile light towers.",
  alternates: { canonical: "https://lfadj.com/applications/events-rental" },
};

export default function EventsRentalPage() {
  return (
    <SeoClusterPage
      eyebrow="Applications"
      title="Events and Rental Light Tower"
      description="Application route for equipment rental fleets, events and temporary outdoor lighting projects."
      links={[
        { label: "Portable Light Tower", href: "/products/portable-light-tower" },
        { label: "Rental Company Cases", href: "/case-studies/rental-company-cases" },
        { label: "Contact", href: "/en/contact" },
      ]}
    />
  );
}
