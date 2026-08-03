import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Towers | Portable, Diesel & Solar Models | LFADJ",
  description:
    "Compare LFADJ portable, diesel and solar mobile light towers, including LF951, LF955 and LF971, by power source, mast operation and site requirements.",
  alternates: {
    canonical: "https://lfadj.com/en/products",
    languages: {
      en: "https://lfadj.com/en/products",
      "zh-CN": "https://lfadj.com/zh/products",
      "x-default": "https://lfadj.com/en/products",
    },
  },
  openGraph: {
    title: "Mobile Light Towers | Portable, Diesel & Solar Models | LFADJ",
    description:
      "Compare LFADJ portable, diesel and solar mobile light towers, including LF951, LF955 and LF971, by power source, mast operation and site requirements.",
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
    category: "Portable Mobile Light Tower",
    anchor: undefined,
    description: "A compact push-type model for smaller work areas and projects that need flexible positioning.",
    differences: ["Push-type mobile chassis", "Manual mast operation", "Compact deployment footprint"],
  },
  {
    model: "LF955",
    title: "LF955 Diesel Mobile Light Tower",
    href: "/en/products/lf955",
    image: "/images/products/lf955/hero/lf955-hero.jpg",
    alt: "LF955 diesel mobile light tower",
    category: "Diesel",
    anchor: "diesel-products",
    description: "A diesel-powered model for projects that need dependable lighting over sustained operating periods.",
    differences: ["Diesel power source", "7.5 m electric mast operation", "Trailer-based site deployment"],
  },
  {
    model: "LF971",
    title: "LF971 Solar Mobile Light Tower",
    href: "/en/products/lf971",
    image: "/images/products/lf971/hero/lf971-hero.webp",
    alt: "LF971 solar mobile light tower",
    category: "Solar",
    anchor: "solar-products",
    description: "A solar-powered model for remote sites or projects seeking to reduce routine fuel supply requirements.",
    differences: ["Solar power with battery storage", "Four-section mast", "Trailer-based off-grid deployment"],
  },
] as const;

function ProductCard({ product }: { product: (typeof mobileLightTowers)[number] }) {
  return (
    <article id={product.anchor} className="flex h-full min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-700 ring-1 ring-inset ring-slate-200">
          {product.category}
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
          {product.differences.map((difference) => <li key={difference} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"/><span>{difference}</span></li>)}
        </ul>
        <Link href={product.href} className="mt-auto rounded-sm pt-8 text-base font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">View {product.model} Details →</Link>
      </div>
    </article>
  );
}

export default function EnglishProductsPage() {
  return (
    <main className="w-full bg-surface-white text-text-primary">
      <section className="w-full border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(440px,0.92fr)] lg:items-center lg:gap-10 xl:gap-12">
            <div className="max-w-[650px]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Mobile Lighting Products</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-[56px]">
                Mobile Light Towers for Different Site Requirements
              </h1>
              <p className="mt-6 max-w-[620px] text-lg leading-8 text-gray-700 sm:text-xl">
                LFADJ provides portable, diesel and solar mobile light towers for construction, mining, rental, emergency and remote-site lighting projects. Compare the available models by power source, mast operation and project suitability.
              </p>
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

        </div>
      </section>

      <section id="product-range" className="w-full scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Compare Featured Mobile Light Tower Models</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Use power source, mast operation, site conditions and deployment pattern to identify which model deserves a closer review.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mobileLightTowers.map((product) => <ProductCard key={product.model} product={product} />)}
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-navy-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Continue from Product Comparison to Project Requirements</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              If the three models do not point to an immediate choice, review the operating conditions below and share the project information needed for configuration discussion.
            </p>
          </div>

          <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.78fr)] lg:items-start lg:gap-12">
            <ol className="min-w-0 divide-y divide-slate-700 border-y border-slate-700">
              {[
                ["Deployment and mobility", "Consider how often the equipment will move and how much space is available for positioning."],
                ["Available fuel or solar conditions", "Confirm fuel access, solar exposure and any limits on routine energy supply."],
                ["Required mast operation", "Identify the preferred lifting method and how operators will deploy the mast on site."],
                ["Runtime and site environment", "Review daily operating hours, temperature, altitude, dust, wind and access conditions."],
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
              <h3 className="text-2xl font-bold leading-tight tracking-tight">Information to Prepare Before Contacting Us</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">These practical details help LFADJ understand the project context before discussing a suitable configuration.</p>
              <ul className="mt-7 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["Application or site type", "Required quantity", "Daily operating hours", "Temperature and altitude", "Fuel availability", "Required delivery time"].map((detail) => (
                  <li key={detail} className="flex min-w-0 items-center gap-3 rounded-lg bg-slate-50 px-4 py-3"><span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" /><span>{detail}</span></li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Link href="/en/contact" className="inline-flex min-h-14 items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-center text-base font-bold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4">Share Your Project Requirements</Link>
                <Link href="/en/solutions/how-to-choose-the-right-light-tower" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">Read the Light Tower Selection Guide</Link>
              </div>
            </aside>
          </div>

          <nav aria-label="Continue exploring" className="mt-12 border-t border-slate-800 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
              <li><Link href="/en/applications" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Applications →</Link></li>
              <li><Link href="/en/solutions" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Solutions →</Link></li>
              <li><Link href="/en/resources" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Resources →</Link></li>
            </ul>
          </nav>
        </div>
      </section>

    </main>
  );
}
