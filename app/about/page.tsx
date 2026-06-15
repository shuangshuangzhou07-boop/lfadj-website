import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "About LFADJ Mobile Light Tower Manufacturer",
  description:
    "LFADJ is a mobile light tower manufacturer serving construction, mining, emergency and rental lighting projects.",
  alternates: {
    canonical: "https://lfadj.com/about",
  },
  openGraph: {
    title: "About LFADJ Mobile Light Tower Manufacturer",
    description:
      "Industrial lighting solutions for global construction and mining projects.",
    url: "https://lfadj.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            About
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            About LFADJ Mobile Light Tower Manufacturer
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            LFADJ focuses on industrial mobile lighting products for construction,
            mining, emergency and rental applications. The company supports
            diesel light tower supply, LED lighting tower projects and OEM / ODM
            communication for global buyers.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/products" className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700">
              Mobile Light Tower
            </a>
            <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Lighting Tower Manufacturer
            </a>
          </div>
        </div>
      </section>
      <ConversionFlow />
      </main>
    </>
  );
}
