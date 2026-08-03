import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "Light Tower Blog for Long-tail Informational Queries | LFADJ",
  description:
    "Long-tail informational query hub for light tower guides, comparisons, buying questions and construction lighting education.",
  alternates: {
    canonical: "https://lfadj.com/blog",
  },
};

const links = [
  { label: "LF955 Conversion Page", href: "/products/lf955" },
  { label: "Light Towers", href: "/light-towers" },
  { label: "Mining Lighting", href: "/applications/mining-lighting" },
  { label: "Construction Lighting", href: "/applications/construction-lighting" },
  { label: "Emergency Lighting", href: "/applications/emergency-lighting" },
  { label: "Rental Lighting", href: "/applications/rental-lighting" },
  { label: "What Is a Mobile Light Tower?", href: "/en/blog/what-is-mobile-light-tower" },
  { label: "Diesel vs Solar Light Tower", href: "/en/blog/diesel-vs-solar-light-tower" },
  { label: "Construction Light Tower Guide", href: "/en/blog/how-to-choose-light-tower-for-construction" },
  { label: "Mining Site Lighting Guide", href: "/en/blog/mining-site-lighting-solution-guide" },
  { label: "Portable Light Tower Buying Guide", href: "/en/blog/portable-light-tower-buying-guide" },
  { label: "Light Tower Rental vs Buying", href: "/en/blog/light-tower-rental-vs-buying" },
  { label: "Emergency Lighting Solution Guide", href: "/en/blog/emergency-lighting-solution-guide" },
  { label: "Light Tower Manufacturers Comparison", href: "/en/blog/top-light-tower-manufacturers-comparison" },
  { label: "What Is a Light Tower?", href: "/blog/what-is-light-tower" },
  { label: "Diesel vs LED Light Tower", href: "/blog/diesel-vs-led-light-tower" },
  { label: "How to Choose Light Tower", href: "/blog/how-to-choose-light-tower" },
  { label: "Construction Lighting Guide", href: "/blog/construction-lighting-guide" },
  { label: "Products", href: "/products" },
  { label: "Diesel Light Tower", href: "/light-towers/diesel-light-tower" },
  { label: "Applications", href: "/applications" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/en/contact" },
];

export default function BlogPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              Blog
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              Light Tower Blog for Long-tail Informational Queries
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Blog routing supports long-tail informational search intent and
              sends qualified readers back to product, OEM and contact pages.
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
