import type { Metadata } from "next";
import { SeoClusterPage } from "../../seo-cluster-template";

export const metadata: Metadata = {
  title: "Rental Company Light Tower Cases | LFADJ",
  description: "Rental company case study route for LFADJ portable light towers.",
  alternates: { canonical: "https://lfadj.com/case-studies/rental-company-cases" },
};

export default function RentalCompanyCasesPage() {
  return (
    <SeoClusterPage
      eyebrow="Case Studies"
      title="Rental Company Light Tower Cases"
      description="Case-study route for rental fleets using portable and diesel mobile light towers."
      links={[
        { label: "Events and Rental", href: "/applications/events-rental" },
        { label: "Portable Light Tower", href: "/products/portable-light-tower" },
        { label: "Contact", href: "/en/contact" },
      ]}
    />
  );
}
