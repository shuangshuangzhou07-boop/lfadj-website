import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "Construction Lighting Tower | Mobile Light Tower for Jobsites",
  description:
    "High-authority construction lighting tower guide for contractors, road work, civil engineering and temporary jobsite lighting decisions.",
  alternates: { canonical: "https://lfadj.com/applications/construction" },
};

export default function ConstructionApplicationPage() {
  return <AuthorityPage content={authorityPages.construction} />;
}
