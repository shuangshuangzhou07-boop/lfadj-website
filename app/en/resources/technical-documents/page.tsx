import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Technical Documents | LFADJ",
  description:
    "Access mobile light tower specifications, configuration guides and technical information for construction, mining and industrial lighting projects.",
};

const technicalCategories = [
  {
    title: "Product Specifications",
    description: "Technical specifications and configuration information for LFADJ mobile light towers.",
    href: "/en/products",
    linkLabel: "View Products",
  },
  {
    title: "Configuration Guides",
    description: "Learn how different project conditions affect mobile lighting configuration.",
    href: "/en/solutions/how-to-choose-the-right-light-tower",
    linkLabel: "Explore Solutions",
  },
  {
    title: "Application Requirements",
    description: "Understand lighting requirements for different working environments.",
    href: "/en/applications",
    linkLabel: "View Applications",
  },
  {
    title: "Project Support Documents",
    description: "Technical information prepared for project evaluation and communication.",
  },
];

const relatedProducts = [
  {
    title: "LF955 Diesel Mobile Light Tower",
    description: "Reliable diesel mobile lighting solution for continuous operation and demanding environments.",
    href: "/en/products/lf955",
  },
  {
    title: "LF971 Solar Mobile Light Tower",
    description: "Low-maintenance solar lighting solution for remote areas and long-term deployment.",
    href: "/en/products/lf971",
  },
];

export default function EnglishTechnicalDocumentsPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
            LFADJ Technical Resources
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Mobile Light Tower Technical Documents
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Access product specifications, configuration information, and technical references for mobile lighting
            projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/en/products"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              View Products
            </Link>
            <Link
              href="/en/resources"
              className="inline-flex min-h-12 items-center font-semibold text-amber-700 transition hover:text-amber-800"
            >
              ← Back to Resources Center
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Information Categories</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {technicalCategories.map((category) => (
              <article
                key={category.title}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{category.description}</p>
                {category.href ? (
                  <Link
                    href={category.href}
                    className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                  >
                    {category.linkLabel} →
                  </Link>
                ) : (
                  <span className="mt-6 font-semibold text-slate-500">Coming Soon</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Products and Solutions</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {relatedProducts.map((product) => (
              <article
                key={product.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{product.description}</p>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  View Product →
                </Link>
              </article>
            ))}
          </div>
          <article className="mt-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">Selection Solution</p>
            <h3 className="mt-3 text-xl font-bold">How to Choose the Right Light Tower</h3>
            <Link
              href="/en/solutions/how-to-choose-the-right-light-tower"
              className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
            >
              Read the Solution →
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need Technical Support for Your Project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Our team can recommend suitable mobile lighting configurations based on your project requirements.
          </p>
          <Link
            href="/en/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Request Project Lighting Recommendation
          </Link>
        </div>
      </section>
    </main>
  );
}
