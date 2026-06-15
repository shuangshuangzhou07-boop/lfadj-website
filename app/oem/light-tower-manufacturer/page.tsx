import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "Light Tower Manufacturer | OEM Mobile Light Tower Supplier",
  description:
    "High-authority light tower manufacturer guide for OEM buyers, distributors, rental companies and global mobile light tower sourcing.",
  alternates: { canonical: "https://lfadj.com/oem/light-tower-manufacturer" },
};

export default function LightTowerManufacturerPage() {
  return <AuthorityPage content={authorityPages.manufacturer} />;
}
