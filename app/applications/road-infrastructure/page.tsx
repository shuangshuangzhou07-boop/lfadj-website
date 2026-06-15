import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "Road Infrastructure Lighting Tower | Mobile Light Tower Guide",
  description:
    "Professional guide to road infrastructure lighting towers for highways, municipal repair, paving and traffic-sensitive night work.",
  alternates: { canonical: "https://lfadj.com/applications/road-infrastructure" },
};

export default function RoadInfrastructurePage() {
  return <AuthorityPage content={authorityPages.roadInfrastructure} />;
}
