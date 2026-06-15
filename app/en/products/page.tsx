import type { Metadata } from "next";
import { getDictionary } from "@/src/i18n/getDictionary";

const t = getDictionary("en");

export const metadata: Metadata = {
  title: "LFADJ Mobile Light Tower Manufacturer",
  description:
    "LFADJ is a professional manufacturer of mobile light towers for construction, mining, and emergency applications. OEM/ODM available.",
  alternates: {
    canonical: "https://lfadj.com/en/products",
  },
  openGraph: {
    title: "LFADJ Mobile Light Tower Manufacturer",
    description:
      "Industrial mobile lighting solutions for construction, mining, and emergency use.",
    url: "https://lfadj.com/en/products",
    type: "website",
  },
};

const seoUseCases = [
  {
    title: "Construction Light Tower",
    text: "Mobile light towers support night road work, building sites and temporary civil engineering lighting.",
  },
  {
    title: "Mining Light Tower",
    text: "Diesel light towers help illuminate remote mining roads, maintenance areas and material yards.",
  },
  {
    title: "Emergency Lighting System",
    text: "Portable lighting towers can be deployed quickly for rescue, repair and public safety operations.",
  },
  {
    title: "Rental Fleet Lighting",
    text: "Trailer-mounted products give rental companies a practical lighting solution for multiple industries.",
  },
];

const trustBlocks = [
  "Mobile light tower manufacturer focus",
  "OEM / ODM product support",
  "Industrial application knowledge",
  "Export-ready B2B documentation",
];

const clusterLinks = [
  { label: "LF6130 Product Hub", href: "/en/products/lf6130" },
  { label: "Applications", href: "/en/applications" },
  { label: "Case Studies", href: "/en/case-studies" },
  { label: "Blog Guides", href: "/en/blog" },
  { label: "OEM Capability", href: "/en/oem" },
  { label: "Request Quote", href: "/en/contact" },
];

export default function EnglishProductsPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto grid min-h-[460px] max-w-[1200px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              {t.productsPage.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              {t.productsPage.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-9 text-gray-900">
              {t.productsPage.heroLead}
              <br />
              {t.productsPage.heroMarkets}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              {t.productsPage.description}
            </p>
            <a
              href="#products"
              className="mt-9 inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {t.productsPage.browseProducts}
            </a>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8">
              {t.productsPage.trustNumbers.map((item) => (
                <div key={item.value}>
                  <p className="text-2xl font-bold tracking-tight text-black">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <div className="aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-4">
              <img
                src="/images/products/lf6130.png"
                alt={t.productsPage.imageAlt}
                className="mx-auto h-full max-h-[460px] w-full scale-125 object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-gray-100 bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
                {t.productsPage.productRangeLabel}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                {t.productsPage.productRangeTitle}
              </h2>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {t.productsPage.tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`h-10 rounded-full px-5 text-sm font-semibold transition-colors ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <article className="mt-12 grid overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl md:grid-cols-[0.9fr_1.1fr]">
            <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
              <img
                src="/images/products/lf6130.png"
                alt={t.productsPage.imageAlt}
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col p-0 pt-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                {t.productsPage.lf6130.model}
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-black">
                {t.productsPage.lf6130.title}
              </h3>
              <ul className="mt-6 grid gap-3 text-base font-medium text-gray-700 sm:grid-cols-2">
                {t.productsPage.lf6130.highlights.map((highlight) => (
                  <li key={highlight}>
                    {t.common.checkmark} {highlight}
                  </li>
                ))}
              </ul>
              <a
                href="/en/products/lf6130"
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-44"
              >
                {t.common.viewDetails}
              </a>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.productsPage.lf6130.trustLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.productsPage.categories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                  {category.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-black">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm font-medium text-gray-700">
                  {category.features.map((feature) => (
                    <li key={feature}>
                      {t.common.checkmark} {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-sm font-semibold text-gray-500">
                    {category.count}
                  </span>
                  <a href="/en/products" className="text-sm font-bold text-blue-600">
                    {t.common.viewProducts} {t.common.arrow}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            Use Cases
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Mobile Light Tower Use Cases by Industry
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seoUseCases.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            Trust
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Why Source Mobile Light Towers from LFADJ
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustBlocks.map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm">
                {item}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {clusterLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-black hover:border-blue-500">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
