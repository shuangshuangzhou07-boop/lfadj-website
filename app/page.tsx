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
    models: "LF955 / LF968",
    href: "/products/lf955",
    text: "Reliable lighting solutions for construction, mining and long-term outdoor projects.",
    image: "/images/products/lf955/hero/lf955-hero.jpg",
    imageAlt: "LF955 diesel mobile light tower on a white background",
  },
  {
    title: "Solar Mobile Light Tower",
    models: "LF971",
    href: "/products/lf971",
    text: "Low-maintenance solar lighting solutions for remote and off-grid projects.",
    image: "/images/products/lf971/hero/lf971-hero.webp",
    imageAlt: "LF971 solar mobile light tower on a white background",
  },
];

const selectionFactors = [
  { title: "Application Type", items: ["Construction Projects", "Mining Operations", "Oil & Gas Projects", "Emergency Lighting"], href: "/applications", linkLabel: "Explore Applications" },
  { title: "Operating Environment", items: ["Remote or Off-grid Areas", "Hot and Desert Conditions", "Urban Construction Sites", "Harsh Outdoor Environments"], href: undefined, linkLabel: undefined },
  { title: "Operating Requirements", items: ["Long Operating Hours", "Frequent Relocation", "Temporary Night Lighting", "External Power Requirements"], href: undefined, linkLabel: undefined },
  { title: "Power System Selection", items: ["Diesel Solution: High power output for long-duration operation", "Solar Solution: Low maintenance solution for off-grid and quiet operation environments", "Project Configuration Solution: Select the right configuration based on lighting requirements, operating hours and project conditions"], href: undefined, linkLabel: undefined },
];

const solutionsResources = [
  {
    title: "Lighting Solutions",
    items: ["How to Choose a Mobile Light Tower", "Diesel vs Solar Light Tower", "Light Tower Power Configuration Guide"],
    href: "/solutions",
    linkLabel: "View Solutions",
  },
  {
    title: "Resources",
    items: ["Product Catalog", "Technical Documents", "FAQ", "Video Resources"],
    href: "/resources",
    linkLabel: "Visit Resources",
  },
  {
    title: "Project Configuration",
    items: ["Project Type", "Operating Environment", "Lighting Requirements", "Operating Hours"],
    href: "/en/contact",
    linkLabel: "Request a Quote",
  },
  {
    title: "About LFADJ",
    items: ["Mobile lighting industry experience, OEM/ODM project support, project configuration capability and quality management system."],
    href: "/about",
    linkLabel: "Learn More",
  },
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
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              Mobile Light Tower Solutions for Construction, Mining and Emergency Projects
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              We provide diesel and solar mobile light towers with project-based configuration recommendations according to operating environment and lighting requirements.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/en/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Request a Quote
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/hero/construction-mobile-light-tower.webp"
                alt="Construction mobile light tower for project site lighting"
                className="h-full w-full object-cover object-[70%_center]"
              />
            </div>
          </div>
        </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Choose the Right Mobile Light Tower
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {productCluster.map((topic) => (
              <article
                key={topic.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] bg-white">
                  {topic.image ? (
                    <img src={topic.image} alt={topic.imageAlt} className="h-full w-full object-contain p-4" />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100 px-6 text-center text-sm font-semibold text-slate-500">
                      {topic.imageAlt}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col border-t border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-black">{topic.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-blue-700">{topic.models}</p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{topic.text}</p>
                  <a href={topic.href} className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-blue-700 px-4 text-sm font-bold text-blue-700 hover:bg-blue-50">
                    View Configurations
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        </section>

        <section id="project-selection" className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            How to Choose the Right Mobile Light Tower?
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-600">
            Different project conditions, operating hours and lighting requirements require different mobile lighting solutions. LFADJ provides suitable light tower configuration recommendations.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {selectionFactors.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-black">{card.title}</h3>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-6 text-gray-700">
                  {card.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
                {card.href && card.linkLabel ? <a href={card.href} className="mt-6 text-sm font-bold text-blue-700 hover:underline">{card.linkLabel} →</a> : null}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <a href="/solutions" className="inline-flex text-sm font-bold text-blue-700 hover:underline">View Solutions →</a>
            <a href="/en/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700">Get Project Configuration</a>
          </div>
        </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Explore LFADJ Solutions &amp; Resources
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionsResources.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-black">{card.title}</h3>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-6 text-gray-700">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={card.href} className="mt-7 inline-flex text-sm font-bold text-blue-700 hover:underline">
                  {card.linkLabel} →
                </a>
              </article>
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
            Get the Right Mobile Light Tower Configuration for Your Project
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
            Tell us your project location, operating environment, working hours and lighting requirements. We will recommend a suitable mobile light tower configuration.
          </p>
          <a href="/en/contact" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700">
            Request a Quote
          </a>
        </div>
        </section>
        <ConversionFlow />
      </main>
    </>
  );
}
