import type { Metadata } from "next";
import { ConversionFlow } from "./conversion-flow";
import { SiteNav } from "./site-nav";

export const metadata: Metadata = {
  title: "Mobile Light Tower | LFADJ",
  description:
    "LFADJ provides mobile light tower products, applications, OEM support, case studies and contact pathways for industrial B2B buyers.",
  alternates: {
    canonical: "https://lfadj.com",
  },
  openGraph: {
    title: "Mobile Light Tower | LFADJ",
    description:
      "Mobile light tower product, application, OEM and case study entry page.",
    url: "https://lfadj.com",
    type: "website",
  },
};

const productCluster = [
  {
    title: "Diesel Mobile Light Tower",
    href: "/products/diesel-light-tower",
    text: "Product category for stable mobile light tower operation on industrial jobsites.",
  },
  {
    title: "LED Mobile Light Tower",
    href: "/products/led-light-tower",
    text: "Product category for efficient mobile light tower visibility and long runtime planning.",
  },
  {
    title: "Portable Mobile Light Tower",
    href: "/products/portable-light-tower",
    text: "Product category for trailer-mounted mobile light tower deployment and rental use.",
  },
  {
    title: "LF6130 Mobile Light Tower",
    href: "/products/lf6130",
    text: "Core product page for the LF6130 hydraulic mobile light tower platform.",
  },
];

const applicationOverview = [
  { title: "Construction", href: "/applications/construction" },
  { title: "Mining", href: "/applications/mining" },
  { title: "Emergency", href: "/applications/emergency" },
  { title: "Events & Rental", href: "/applications/events-rental" },
];

const oemTrust = [
  "Factory direct communication",
  "OEM / ODM project support",
  "Custom mobile light tower planning",
  "Export-ready B2B coordination",
];

const caseStudyPreview = [
  { title: "Mining Projects", href: "/case-studies/mining-projects" },
  { title: "Government Projects", href: "/case-studies/government-projects" },
  { title: "Rental Company Cases", href: "/case-studies/rental-company-cases" },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              LFADJ Industrial Lighting
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              Mobile Light Tower Manufacturer
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              LFADJ is a mobile light tower manufacturer supporting construction,
              mining, emergency response and rental applications. Buyers can
              review diesel light tower and LED tower options, compare LF6130 for
              industrial jobsites, evaluate OEM / ODM manufacturer support and
              contact LFADJ for quotation planning.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Mobile Light Tower
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
              >
                Contact Us
              </a>
              <a
                href="/applications"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
              >
                Applications
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white p-4">
              <img
                src="/images/products/lf6130.png"
                alt="mobile light tower LF6130"
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Mobile Light Tower Product Cluster
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productCluster.map((topic) => (
              <a
                key={topic.title}
                href={topic.href}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold text-black">{topic.title}</h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {topic.text}
                </p>
              </a>
            ))}
          </div>
        </div>
        </section>

        <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Mobile Light Tower Applications
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applicationOverview.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-blue-600 shadow-sm">
                {item.title}
              </a>
            ))}
          </div>
        </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            OEM Trust for Mobile Light Tower Buyers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oemTrust.map((item) => (
              <a key={item} href="/oem/light-tower-manufacturer" className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-blue-600 shadow-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
        </section>

        <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Mobile Light Tower Case Study Preview
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {caseStudyPreview.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-blue-600 shadow-sm">
                {item.title}
              </a>
            ))}
          </div>
        </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Contact LFADJ for Mobile Light Tower Support
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
            Send your mobile light tower application, quantity, target market
            and OEM requirements. LFADJ will help connect the right product page,
            application path and quotation discussion.
          </p>
          <a href="/contact" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700">
            Contact
          </a>
        </div>
        </section>
        <ConversionFlow />
      </main>
    </>
  );
}
