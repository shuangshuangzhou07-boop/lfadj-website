import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "Industrial Lighting Tower Solutions | LFADJ",
  description:
    "LFADJ organizes mobile light tower solutions for construction, mining, emergency, rental and OEM industrial lighting projects.",
  alternates: {
    canonical: "https://lfadj.com/solutions",
  },
};

const solutionLinks = [
  { label: "Mobile Light Tower", href: "/products" },
  { label: "Diesel Light Tower", href: "/products/lf6130" },
  { label: "Applications", href: "/applications" },
  { label: "Lighting Tower Manufacturer", href: "/oem" },
  { label: "Contact", href: "/contact" },
];

export default function SolutionsPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              Solutions
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              Industrial Lighting Tower Solutions
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Route industrial buyers from application needs to the right mobile
              light tower product, OEM capability and contact path.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {solutionLinks.map((link) => (
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
