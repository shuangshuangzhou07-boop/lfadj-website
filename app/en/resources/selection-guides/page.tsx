import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Selection Guides | LFADJ",
  description:
    "Learn how to choose a mobile light tower based on project conditions, lighting demand, power source, operating time, and product configuration.",
};

const selectionSteps = [
  "Understand Project Conditions",
  "Define Lighting Requirements",
  "Choose Power Solution",
  "Select Configuration",
  "Get Project Recommendation",
];

const engineeringApproach = [
  {
    title: "Project Requirements",
    description: "Evaluate application type, working hours and deployment requirements.",
  },
  {
    title: "Operating Conditions",
    description: "Consider temperature, dust, corrosion and site conditions.",
  },
  {
    title: "Configuration Selection",
    description: "Match power source, lighting output and equipment configuration.",
  },
  {
    title: "Application Experience",
    description: "Support mining, construction, rental and emergency lighting projects.",
  },
];

const featuredSelectionGuides = [
  {
    title: "How To Choose The Right Light Tower",
    status: "Published",
    description:
      "Learn how project conditions, lighting requirements and operating environments affect mobile light tower selection.",
    relatedSolution: "How To Choose The Right Light Tower",
    relatedProducts: [
      { label: "LF955", href: "/en/products/lf955" },
      { label: "LF971", href: "/en/products/lf971" },
    ],
  },
  {
    title: "Diesel vs Solar Mobile Light Tower",
    status: "Coming Soon",
    description:
      "Compare diesel and solar mobile lighting solutions based on runtime, maintenance requirements and project conditions.",
  },
  {
    title: "Light Tower Selection For Harsh Environments",
    status: "Coming Soon",
    description:
      "Understand how temperature, dust and challenging environments influence equipment configuration.",
  },
];

const products = [
  {
    title: "LF955 Diesel Mobile Light Tower",
    description:
      "Suitable for mining, construction, rental and long-duration lighting projects requiring reliable operation.",
    bestFor: ["Mining", "Construction", "Rental"],
    href: "/en/products/lf955",
  },
  {
    title: "LF971 Solar Mobile Light Tower",
    description:
      "Suitable for remote projects requiring low maintenance, quiet operation and solar-powered lighting.",
    bestFor: ["Remote Projects", "Emergency Lighting", "Low Maintenance Applications"],
    href: "/en/products/lf971",
  },
];

export default function EnglishSelectionGuidesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <li>
                <Link href="/en/resources" className="transition hover:text-amber-700">
                  Resources
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-slate-700">
                Selection Guides
              </li>
            </ol>
          </nav>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Mobile Light Tower Selection Guides
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Practical guides to help you select the right mobile lighting solution based on project conditions,
            operating requirements and application needs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/en/resources/application-guides"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              Choose By Application
            </Link>
            <div className="flex min-h-12 flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-md border border-slate-300 bg-white px-5 py-3 font-bold text-slate-950">
              <span>Compare Diesel vs Solar:</span>
              <Link href="/en/products/lf955" className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
                LF955
              </Link>
              <Link href="/en/products/lf971" className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
                LF971
              </Link>
            </div>
            <Link
              href="/en/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Get Project Recommendation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mobile Light Tower Selection Process
          </h2>
          <div className="mt-10 max-w-3xl">
            {selectionSteps.map((step, index) => (
              <div key={step}>
                <article className="flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="shrink-0 rounded-md bg-amber-500 px-3 py-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-950">
                    Step {index + 1}
                  </span>
                  <h3 className="text-xl font-bold">{step}</h3>
                </article>
                {index < selectionSteps.length - 1 ? (
                  <div className="py-2 text-center text-2xl font-bold leading-none text-amber-700" aria-hidden="true">
                    ↓
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">LFADJ Engineering Approach</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Our selection approach considers project requirements, operating conditions and application experience to
            recommend suitable mobile lighting solutions.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringApproach.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Selection Guides</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredSelectionGuides.map((guide) => (
              <article
                key={guide.title}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{guide.title}</h3>
                  <span
                    className={
                      guide.status === "Published"
                        ? "shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800"
                        : "shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600"
                    }
                  >
                    {guide.status}
                  </span>
                </div>
                {guide.description ? (
                  <p className="mt-4 leading-7 text-slate-600">{guide.description}</p>
                ) : (
                  <p className="mt-4 font-semibold text-slate-500">Coming Soon</p>
                )}
                {guide.relatedSolution ? (
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-sm font-bold text-slate-500">Related Solution</p>
                    <p className="mt-2 font-semibold text-slate-900">{guide.relatedSolution}</p>
                    <p className="mt-4 text-sm font-bold text-slate-500">Related Products</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                      {guide.relatedProducts?.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="font-semibold text-amber-700 transition hover:text-amber-800"
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recommended Mobile Light Towers</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{product.description}</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Best For</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.bestFor.map((item) => (
                      <span key={item} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  View Product →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-slate-950 px-6 py-12 text-center text-white shadow-sm sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need help selecting the right mobile lighting solution for your project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Get a project lighting recommendation based on your application, operating conditions and lighting requirements.
            </p>
            <Link
              href="/en/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Request Project Recommendation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
