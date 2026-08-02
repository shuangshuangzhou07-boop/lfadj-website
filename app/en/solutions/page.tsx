import type { Metadata } from "next";
import Link from "next/link";

const matchedProducts = [
  { model: "LF955", type: "Diesel Mobile Light Tower", conditions: ["Long operating hours", "High lighting demand", "Reliable engine-powered operation"], href: "/en/products/lf955" },
  { model: "LF971", type: "Solar Mobile Light Tower", conditions: ["Remote or off-grid sites", "Lower routine fuel dependence", "Monitoring and auxiliary equipment options"], href: "/en/products/lf971" },
] as const;

const solutionGuides = [
  {
    number: "01",
    category: "Selection starting point",
    title: "How to Choose the Right Light Tower for Your Project",
    description:
      "Start here to compare light tower types against your application, required lighting performance and day-to-day operating conditions.",
    href: "/en/solutions/how-to-choose-the-right-light-tower",
    criteria: ["Application", "Lighting demand", "Operating conditions"],
  },
  {
    number: "02",
    category: "Mast System",
    title: "How to Choose the Right Light Tower Mast System",
    description:
      "Assess deployment height, setup frequency and operating method before choosing a mast lifting system for the project.",
    href: "/en/solutions/how-to-choose-light-tower-mast-system",
  },
  {
    number: "03",
    category: "Power System",
    title: "How to Choose the Right Light Tower Power System",
    description:
      "Match available energy, operating hours and site access to a power approach that can support the planned lighting duty.",
    href: "/en/solutions/how-to-choose-right-light-tower-power-system",
  },
  {
    number: "04",
    category: "Harsh Environments",
    title: "How to Choose a Light Tower for Harsh Environments",
    description:
      "Review heat, dust, corrosion and prolonged operation risks when planning equipment for demanding site conditions.",
    href: "/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
  },
  {
    number: "05",
    category: "Temporary Site Lighting",
    title: "How to Plan Temporary Site Lighting",
    description:
      "Plan lighting zones, work areas and operating schedules so temporary lighting supports safe, practical site coverage.",
    href: "/en/solutions/temporary-site-lighting",
  },
] as const;

export const metadata: Metadata = {
  title: "Mobile Light Tower Solutions and Selection Guides | LFADJ",
  description:
    "Explore LFADJ mobile light tower solutions and learn how to choose suitable equipment based on project needs, power systems, mast configurations and harsh operating environments.",
  alternates: {
    canonical: "https://lfadj.com/en/solutions",
    languages: {
      en: "/en/solutions",
      "zh-CN": "/zh/solutions",
    },
  },
};

export default function EnglishSolutionsPage() {
  return (
    <main className="w-full bg-white">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/en" className="hover:text-blue-700">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-900">Solutions</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            Solutions
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Mobile Light Tower Solutions
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Whether your project involves construction, mining, equipment rental or emergency response, LFADJ helps you choose a suitable mobile lighting solution based on lighting requirements, power systems, mast configurations and operating conditions.
          </p>
        </div>
      </section>
      <section id="solution-guides" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Choose the Right Solution for Your Project
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Choose a guide by light tower type, mast system, power conditions, operating environment or temporary site planning.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
            {solutionGuides.map((guide, index) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={`group flex min-w-0 flex-col rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 sm:p-7 ${
                  index === 0
                    ? "border-blue-200 bg-blue-50/80 md:col-span-2 lg:grid lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.85fr)] lg:gap-10 lg:p-8"
                    : "border-slate-200 bg-white hover:border-slate-400"
                }`}
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                    <span>{guide.number}</span>
                    <span className="h-px w-8 bg-blue-300" aria-hidden="true" />
                    <span>{guide.category}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-8 text-slate-950 sm:text-2xl">
                    {guide.title}
                  </h3>
                  <p className="mt-3 max-w-3xl flex-1 text-base leading-7 text-slate-600">{guide.description}</p>
                  <span className="mt-8 inline-flex min-h-11 items-center font-bold text-blue-700 group-hover:text-blue-800">
                    View Solution <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </div>

                {"criteria" in guide ? (
                  <ul className="mt-7 grid content-center gap-3 border-t border-blue-200 pt-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
                    {guide.criteria.map((criterion) => (
                      <li key={criterion} className="rounded-lg border border-blue-200 bg-white/80 px-4 py-3 text-base font-semibold leading-6 text-slate-800">
                        {criterion}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Match the Solution to the Right Product</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">The final configuration should be confirmed against the application, operating hours, power conditions, site environment and required lighting coverage.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
            {matchedProducts.map((product) => (
              <Link key={product.model} href={product.href} aria-label={`View ${product.model} ${product.type}`} className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 sm:p-8">
                <p className="text-sm font-bold tracking-[0.16em] text-blue-700">{product.model}</p>
                <h3 className="mt-3 text-xl font-bold leading-8 text-slate-950 sm:text-2xl">{product.type}</h3>
                <ul className="mt-6 flex-1 space-y-3.5 text-base leading-7 text-slate-600">
                  {product.conditions.map((condition) => (
                    <li key={condition} className="flex gap-3"><span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" /><span>{condition}</span></li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex min-h-11 items-center font-bold text-blue-700 group-hover:text-blue-800">View Product<span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-8 rounded-2xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:items-center lg:gap-12 lg:px-12">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">Not Sure Which Mobile Lighting Solution Fits Your Project?</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">Share your application, work area, lighting requirements, operating hours and site environment. LFADJ will recommend a suitable product and configuration for your project.</p>
            </div>
            <div className="min-w-0">
              <Link href="/en/contact/request-a-quote" className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-blue-600 px-7 py-3.5 text-center text-base font-bold leading-6 text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50">Get a Project Recommendation</Link>
              <p className="mt-4 text-base leading-6 text-slate-300">Share your project conditions—no complete specification required.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
