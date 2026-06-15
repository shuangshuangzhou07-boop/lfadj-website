import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "Mobile Light Tower FAQ | LFADJ",
  description:
    "Mobile light tower FAQ routing for product, technical, OEM and pricing questions connected to LF6130 and contact.",
  alternates: {
    canonical: "https://lfadj.com/faq",
  },
};

const links = [
  { label: "Diesel Light Tower", href: "/products/lf6130" },
  { label: "Mobile Light Tower", href: "/products" },
  { label: "Lighting Tower Manufacturer", href: "/oem" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function FAQPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              FAQ
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              Mobile Light Tower FAQ
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              FAQ routing captures long-tail buyer questions and returns users
              to LF6130, OEM capability and contact pages.
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
