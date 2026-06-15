import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "Mobile Light Tower Case Studies | LFADJ",
  description:
    "Industrial mobile light tower case study structure linking LF6130, applications, FAQ and contact pathways.",
  alternates: {
    canonical: "https://lfadj.com/case-studies",
  },
};

const links = [
  { label: "Diesel Light Tower", href: "/products/lf6130" },
  { label: "Mining Projects", href: "/case-studies/mining-projects" },
  { label: "Government Projects", href: "/case-studies/government-projects" },
  { label: "Rental Company Cases", href: "/case-studies/rental-company-cases" },
  { label: "Applications", href: "/applications" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              Case Studies
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              Mobile Light Tower Case Studies
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Case study pages connect application proof with LF6130 product
              intent, buyer questions and lead generation.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-black hover:border-blue-500">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
        <ConversionFlow />
      </main>
    </>
  );
}
