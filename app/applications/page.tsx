import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "Construction / Mining / Emergency Light Tower Applications | LFADJ",
  description:
    "Application hub for construction, mining and emergency light tower use cases from LFADJ.",
  alternates: {
    canonical: "https://lfadj.com/applications",
  },
  openGraph: {
    title: "Construction / Mining / Emergency Light Tower Applications | LFADJ",
    description:
      "Industrial lighting solutions for global construction and mining projects.",
    url: "https://lfadj.com/applications",
    type: "website",
  },
};

const clusters = [
  { label: "Construction lighting tower", href: "/applications/construction" },
  { label: "Mining lighting tower", href: "/applications/mining" },
  { label: "Emergency lighting tower", href: "/applications/emergency" },
  { label: "Road infrastructure lighting", href: "/applications/road-infrastructure" },
  { label: "Events and rental lighting", href: "/applications/events-rental" },
];

export default function ApplicationsPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            Applications
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Construction / Mining / Emergency Light Tower Applications
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            LFADJ mobile light tower products support temporary illumination for
            construction sites, mining roads, emergency response and rental
            projects. This application hub helps buyers compare field scenarios
            before choosing a diesel light tower or portable lighting solution.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clusters.map((cluster) => (
              <a key={cluster.href} href={cluster.href} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-black">{cluster.label}</h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Field lighting scenario for industrial projects that need safe
                  visibility, mobility and stable outdoor operation.
                </p>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/products" className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700">
              Mobile Light Tower
            </a>
            <a href="/products/lf6130" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Diesel Light Tower
            </a>
            <a href="/oem" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Lighting Tower Manufacturer
            </a>
            <a href="/case-studies" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Case Studies
            </a>
          </div>
        </div>
      </section>
      <ConversionFlow />
      </main>
    </>
  );
}
