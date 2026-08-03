import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Lighting Products | Light Towers & Monitoring Trailers | LFADJ",
  description:
    "Compare LFADJ site lighting equipment, including diesel and solar mobile light towers and mobile monitoring trailers, and find the right direction for your project.",
  alternates: {
    canonical: "https://lfadj.com/en/products",
    languages: {
      en: "https://lfadj.com/en/products",
      "zh-CN": "https://lfadj.com/zh/products",
      "x-default": "https://lfadj.com/en/products",
    },
  },
  openGraph: {
    title: "Mobile Lighting Products | Light Towers & Monitoring Trailers | LFADJ",
    description:
      "Compare LFADJ site lighting equipment, including diesel and solar mobile light towers and mobile monitoring trailers, and find the right direction for your project.",
    url: "https://lfadj.com/en/products",
    type: "website",
  },
};

const mobileLightTowers = [
  {
    model: "LF951",
    title: "LF951 Portable Light Tower",
    href: "/en/products/lf951",
    image: "/images/products/lf951/lf951-mobile-light-tower-hero.webp",
    alt: "LF951 portable light tower with manual mast and push-type chassis",
    category: "Diesel",
    anchor: "diesel-products",
    description: "A compact option for smaller mobile work areas, maintenance, emergency and rental projects.",
    differences: ["Manual mast lifting", "Four-wheel push-type chassis", "Configurable lamp and generator options"],
    featured: false,
  },
  {
    model: "LF955",
    title: "LF955 Diesel Mobile Light Tower",
    href: "/en/products/lf955",
    image: "/images/products/lf955/hero/lf955-hero.jpg",
    alt: "LF955 diesel mobile light tower",
    category: "Diesel",
    anchor: undefined,
    description: "For construction, mining, roadwork and rental projects requiring dependable mobile lighting.",
    differences: ["Diesel power system", "High-efficiency LED lighting", "Project-matched configurations"],
    featured: true,
  },
  {
    model: "LF971",
    title: "LF971 Solar Mobile Light Tower",
    href: "/en/products/lf971",
    image: "/images/products/lf971/hero/lf971-hero.webp",
    alt: "LF971 solar mobile light tower",
    category: "Solar",
    anchor: "solar-products",
    description: "For outdoor and off-grid projects that can support solar charging and battery-powered lighting.",
    differences: ["Solar power and battery storage", "Electric mast lifting", "Low-maintenance operation"],
    featured: true,
  },
] as const;

function ProductCard({ product }: { product: (typeof mobileLightTowers)[number] }) {
  return (
    <article id={product.anchor} className="flex h-full min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg">
      <div className={`border-b border-slate-100 px-6 py-4 ${product.featured ? "bg-blue-50" : "bg-slate-50"}`}>
        <span className={`inline-flex rounded-full px-3 py-1.5 text-sm font-bold ${product.featured ? "bg-blue-700 text-white" : "bg-white text-slate-700 ring-1 ring-inset ring-slate-200"}`}>
          {product.featured ? "Recommended Model" : product.category}
        </span>
      </div>
      <div className="relative h-64 border-b border-slate-100 bg-white sm:h-72 lg:h-80">
        <Image src={product.image} alt={product.alt} fill sizes="(min-width: 1280px) 384px, (min-width: 1024px) 31vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-4 sm:p-5 lg:p-6" />
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="text-base font-bold tracking-[0.16em] text-blue-700">{product.model}</p>
        <h3 className="mt-4 text-xl font-bold leading-snug text-gray-950 sm:text-2xl">{product.title}</h3>
        <p className="mt-4 text-base leading-7 text-gray-600">{product.description}</p>
        <ul className="mt-5 space-y-3 text-base leading-7 text-gray-700">
          {product.differences.map((difference) => <li key={difference} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"/><span>{difference}</span></li>)}
        </ul>
        <Link href={product.href} className="mt-auto self-start pt-8 text-base font-bold text-blue-700 underline-offset-4 hover:underline">View Product →</Link>
      </div>
    </article>
  );
}

export default function EnglishProductsPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(440px,0.92fr)] lg:items-center lg:gap-10 xl:gap-12">
            <div className="max-w-[650px]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Site Lighting Product Range</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-[56px]">
                Mobile Light Towers &amp; Site Lighting Equipment
              </h1>
              <p className="mt-6 max-w-[620px] text-lg leading-8 text-gray-700 sm:text-xl">
                Compare diesel mobile light towers, solar mobile light towers and mobile surveillance solutions, with configuration guidance based on operating hours, lighting coverage and site conditions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="#product-range" className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-700 px-6 font-bold text-white transition hover:bg-blue-800">
                  Explore Products
                </Link>
                <Link href="/en/contact" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-700">
                  Get a Product Recommendation
                </Link>
              </div>
            </div>

            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:aspect-[6/5]">
              <Image
                src="/images/products/lf971/hero/lf971-hero.webp"
                alt="LF971 solar mobile light tower with mast, solar panels, trailer chassis and stabilizing legs"
                fill
                priority
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                className="object-contain p-2 sm:p-4 lg:p-3"
              />
            </div>
          </div>

          <nav aria-label="Product categories" className="mt-10 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-3 lg:mt-12">
            {[
              { name: "Diesel Mobile Light Towers", description: "For extended-runtime site lighting.", href: "#diesel-products" },
              { name: "Solar Mobile Light Towers", description: "For off-grid, low-noise lighting.", href: "#solar-products" },
              { name: "Mobile Surveillance Trailers", description: "For mobile site monitoring.", href: "#product-range" },
            ].map((category) => (
              <Link key={category.name} href={category.href} className="group flex h-full min-h-28 items-center justify-between gap-5 bg-white px-5 py-5 transition hover:bg-blue-50 focus-visible:bg-blue-50 sm:px-6">
                <span>
                  <span className="block font-bold leading-6 text-slate-950 group-hover:text-blue-700">{category.name}</span>
                  <span className="mt-1.5 block text-sm leading-5 text-slate-600">{category.description}</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-xl text-blue-700 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section id="product-range" className="w-full scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Explore Our Mobile Lighting Products</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Compare products by power source, deployment conditions and intended worksite use.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mobileLightTowers.map((product) => <ProductCard key={product.model} product={product} />)}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Not Sure Which Mobile Lighting Solution Fits Your Project?</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Operating hours, energy availability, lighting coverage and site conditions all shape product selection. LFADJ can recommend a suitable configuration based on your actual project requirements.
            </p>
          </div>

          <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.78fr)] lg:items-start lg:gap-12">
            <ol className="min-w-0 divide-y divide-slate-700 border-y border-slate-700">
              {[
                ["Long operating periods or a need for dependable power", "Diesel mobile light towers"],
                ["No grid connection, difficult fuel logistics or reduced routine maintenance", "Solar mobile light towers"],
                ["Remote security, jobsite monitoring or auxiliary equipment", "Mobile monitoring trailers"],
                ["High heat, windblown sand, high altitude or special project conditions", "Request a project-specific configuration recommendation"],
              ].map(([condition, direction], index) => (
                <li key={condition} className="grid min-w-0 gap-3 py-6 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:items-start sm:gap-5 sm:py-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400 text-sm font-bold text-blue-300">{index + 1}</span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold leading-7 text-white">{condition}</p>
                    <p className="mt-2 flex min-w-0 gap-2 text-base font-medium leading-7 text-slate-300"><span className="shrink-0 text-blue-400" aria-hidden="true">→</span><span>{direction}</span></p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl sm:p-8 lg:p-9">
              <h3 className="text-2xl font-bold leading-tight tracking-tight">Prepare for a Configuration Recommendation</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">Share these project details so the configuration guidance reflects your operating requirements.</p>
              <ul className="mt-7 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["Application", "Operating hours", "Lighting coverage", "Site conditions", "Estimated quantity"].map((detail) => (
                  <li key={detail} className="flex min-w-0 items-center gap-3 rounded-lg bg-slate-50 px-4 py-3"><span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true" /><span>{detail}</span></li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Link href="/en/contact" className="inline-flex min-h-14 items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-center text-base font-bold text-white transition hover:bg-blue-800">Get a Project Lighting Configuration Recommendation</Link>
                <Link href="/en/solutions/how-to-choose-the-right-light-tower" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-700">Read the Light Tower Selection Guide</Link>
              </div>
            </aside>
          </div>

          <nav aria-label="Continue exploring" className="mt-12 border-t border-slate-800 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
              <li><Link href="/en/applications" className="transition hover:text-white">Applications →</Link></li>
              <li><Link href="/en/solutions" className="transition hover:text-white">Solutions →</Link></li>
              <li><Link href="/en/resources" className="transition hover:text-white">Resources →</Link></li>
            </ul>
          </nav>
        </div>
      </section>

    </main>
  );
}
