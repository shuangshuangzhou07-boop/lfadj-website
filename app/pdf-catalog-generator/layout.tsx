import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LFADJ PDF Catalog Generator",
  description:
    "LFADJ internal PDF catalog generator for mobile light tower product documentation.",
  alternates: {
    canonical: "https://lfadj.com/pdf-catalog-generator",
  },
  openGraph: {
    title: "LFADJ PDF Catalog Generator",
    description:
      "LFADJ internal PDF catalog generator for mobile light tower product documentation.",
    url: "https://lfadj.com/pdf-catalog-generator",
    type: "website",
  },
};

export default function PdfCatalogGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
