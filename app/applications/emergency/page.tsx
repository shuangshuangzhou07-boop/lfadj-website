import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "Emergency Lighting Tower | Mobile Light Tower for Rescue and Repair",
  description:
    "Professional emergency lighting tower guide for rescue teams, utilities, municipalities and rental companies needing rapid mobile illumination.",
  alternates: { canonical: "https://lfadj.com/applications/emergency" },
};

export default function EmergencyApplicationPage() {
  return <AuthorityPage content={authorityPages.emergency} />;
}
