import type { Metadata } from "next";
import { SiteNav } from "../../site-nav";

export const metadata: Metadata = {
  title: "Backlink Strategy for Mobile Light Tower SEO | LFADJ",
  description:
    "LFADJ off-page SEO strategy for mobile light tower, diesel light tower manufacturer and lighting tower supplier backlink growth.",
  alternates: {
    canonical: "https://lfadj.com/seo/backlink-strategy",
  },
};

const directoryPlan = [
  "Alibaba supplier profile",
  "GlobalSources listing",
  "Made-in-China profile",
  "Industry B2B directories",
];

const outreachPlan = [
  "Guest posts on construction blogs",
  "Mining equipment blogs",
  "Rental equipment platforms",
];

const anchorTexts = [
  "Mobile Light Tower",
  "Diesel Light Tower Manufacturer",
  "Lighting Tower Supplier",
];

export default function BacklinkStrategyPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              Off-page SEO
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Backlink Strategy for Mobile Light Tower SEO
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              This page documents LFADJ backlink strategy foundation for Google
              ranking acceleration. The goal is to build external authority
              signals around Mobile Light Tower, Diesel Light Tower Manufacturer
              and Lighting Tower Supplier keywords while sending authority back
              to LF6130, the homepage, OEM manufacturer page and application
              cluster.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">
                LF6130 Authority Page
              </a>
              <a href="/oem/light-tower-manufacturer" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">
                OEM Manufacturer Page
              </a>
              <a href="/applications/mining-site-lighting" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">
                Mining Light Tower Solution
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
          <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Industry Directory Submission Plan
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
                {directoryPlan.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Content Outreach Strategy
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
                {outreachPlan.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Anchor Text Strategy
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
                {anchorTexts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Authority Flow Target Pages
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Homepage Mobile Light Tower", href: "/" },
                { label: "LF6130 Diesel Light Tower", href: "/products/lf6130" },
                { label: "Lighting Tower Manufacturer", href: "/oem/light-tower-manufacturer" },
                { label: "Mining Light Tower Solution", href: "/applications/mining-site-lighting" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm font-bold text-gray-900 hover:border-blue-500 hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
