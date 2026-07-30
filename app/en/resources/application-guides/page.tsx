import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Application Guides | LFADJ",
  description:
    "Explore mobile light tower application guides for construction, mining, rental, oil & gas and emergency lighting solutions.",
};

const industrySolutions = [
  {
    title: "Construction Lighting",
    description:
      "Support jobsite safety and productivity with dependable lighting for construction, roadwork, and night operations.",
    href: "/en/applications/construction-lighting",
  },
  {
    title: "Mining Lighting",
    description:
      "Provide reliable illumination for remote mine sites, equipment maintenance, and demanding nighttime operations.",
    href: "/en/applications/mining-lighting",
  },
  {
    title: "Oil & Gas Lighting",
    description:
      "Plan mobile lighting for remote work areas, maintenance activities, and changing oil and gas project conditions.",
    href: "/en/applications/oil-gas-lighting",
  },
  {
    title: "Rental Lighting",
    description:
      "Balance mobility, durability, utilization, and operating efficiency across mobile light tower rental fleets.",
    href: "/en/applications/rental-lighting",
  },
  {
    title: "Emergency Lighting",
    description:
      "Deploy temporary illumination quickly for emergency response, recovery work, and critical field operations.",
    href: "/en/applications/emergency-lighting",
  },
];

const recommendedProducts = [
  {
    title: "LF955 Diesel Mobile Light Tower",
    href: "/en/products/lf955",
  },
  {
    title: "LF971 Solar Mobile Light Tower",
    href: "/en/products/lf971",
  },
];

export default function EnglishApplicationGuidesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Link href="/en/resources" className="inline-flex font-semibold text-amber-700 hover:text-amber-800">
            ← Back to Resources
          </Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Mobile Light Tower Application Guides
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Explore mobile lighting solutions designed for construction, mining, rental, oil &amp; gas, and emergency
            applications.
          </p>
          <Link
            href="/en/applications"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Explore Applications
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find the Right Lighting Solution for Your Industry
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((industry) => (
              <article
                key={industry.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{industry.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{industry.description}</p>
                <Link
                  href={industry.href}
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  View Solution →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Lighting Solutions</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Solution Guide</h3>
              <Link
                href="/en/solutions/how-to-choose-the-right-light-tower"
                className="mt-4 inline-flex text-xl font-bold text-slate-950 transition hover:text-amber-700"
              >
                How to Choose the Right Light Tower →
              </Link>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Recommended Products</h3>
              <ul className="mt-4 space-y-4">
                {recommendedProducts.map((product) => (
                  <li key={product.href}>
                    <Link
                      href={product.href}
                      className="inline-flex text-xl font-bold text-slate-950 transition hover:text-amber-700"
                    >
                      {product.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need a Project Lighting Recommendation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Get a customized mobile lighting configuration based on your working environment.
          </p>
          <Link
            href="/en/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Request Project Lighting Recommendation
          </Link>
        </div>
      </section>
    </main>
  );
}
