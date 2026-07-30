import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Resources | LFADJ",
  description:
    "Explore mobile light tower guides, selection resources, application solutions, and technical information from LFADJ.",
};

const resourceCategories = [
  {
    title: "Knowledge Center",
    description: "Build mobile light tower knowledge around equipment structure, operating principles, and technology.",
    href: "/en/resources/knowledge-center",
    buttonLabel: "Explore Knowledge",
  },
  {
    title: "Selection Guides",
    description: "Use project conditions, lighting demand, runtime, and power availability to compare suitable options.",
    href: "/en/resources/selection-guides",
    buttonLabel: "View Selection Guides",
  },
  {
    title: "Application Guides",
    description: "Explore mobile lighting solutions for construction, mining, rental, emergency, and oil and gas projects.",
    href: "/en/resources/application-guides",
    buttonLabel: "Explore Applications",
  },
  {
    title: "Technical Documents",
    description: "Access verified mobile light tower datasheets, installation guidance, and technical support resources.",
    href: "/en/resources/technical-documents",
    buttonLabel: "View Documents",
  },
];

const recommendedApplications = [
  {
    title: "Mining Lighting",
    description: "Explore mobile lighting solutions for remote sites, night operations, and demanding mining environments.",
    href: "/en/applications/mining-lighting",
    relatedProducts: [
      { label: "LF955", href: "/en/products/lf955" },
      { label: "LF971", href: "/en/products/lf971" },
    ],
  },
  {
    title: "Construction Lighting",
    description: "Review mobile lighting options for construction sites, infrastructure work, and changing project conditions.",
    href: "/en/applications/construction-lighting",
    relatedProducts: [{ label: "LF955", href: "/en/products/lf955" }],
  },
  {
    title: "Emergency Lighting",
    description: "Understand rapidly deployable mobile lighting solutions for emergency response and temporary operations.",
    href: "/en/applications/emergency-lighting",
    relatedProducts: [
      { label: "LF955", href: "/en/products/lf955" },
      { label: "LF971", href: "/en/products/lf971" },
    ],
  },
  {
    title: "Rental Lighting",
    description: "Explore durable, easy-to-deploy mobile lighting options for rental fleets and changing project needs.",
    href: "/en/applications/rental-lighting",
    relatedProducts: [
      { label: "LF955", href: "/en/products/lf955" },
      { label: "LF971", href: "/en/products/lf971" },
    ],
  },
  {
    title: "Oil & Gas Lighting",
    description: "Review mobile lighting solutions for remote oil and gas sites, temporary work areas, and night operations.",
    href: "/en/applications/oil-gas-lighting",
    relatedProducts: [{ label: "LF955", href: "/en/products/lf955" }],
  },
];

const recommendedSolutions = [
  {
    title: "How to Choose the Right Light Tower",
    description: "Compare project conditions, lighting requirements, operating time, and power options.",
    href: "/en/solutions/how-to-choose-the-right-light-tower",
    relatedApplications: [
      { label: "Mining Lighting", href: "/en/applications/mining-lighting" },
      { label: "Construction Lighting", href: "/en/applications/construction-lighting" },
      { label: "Rental Lighting", href: "/en/applications/rental-lighting" },
    ],
  },
  {
    title: "Extreme Environment Configuration",
    description: "Review configuration priorities for dust, wind, temperature, terrain, and weather exposure.",
    href: "/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
    relatedApplications: [
      { label: "Mining Lighting", href: "/en/applications/mining-lighting" },
      { label: "Oil & Gas Lighting", href: "/en/applications/oil-gas-lighting" },
    ],
  },
  {
    title: "Mast System Selection",
    description: "Compare mast systems based on project duration, movement frequency, operating height, and budget.",
    href: "/en/solutions/how-to-choose-light-tower-mast-system",
    relatedApplications: [
      { label: "Construction Lighting", href: "/en/applications/construction-lighting" },
      { label: "Mining Lighting", href: "/en/applications/mining-lighting" },
    ],
  },
];

const recommendedProducts = [
  {
    title: "Diesel Mobile Light Tower",
    model: "LF955",
    description: "Reliable lighting solution for construction, mining, rental, and emergency applications.",
    href: "/en/products/lf955",
  },
  {
    title: "Solar Mobile Light Tower",
    model: "LF971",
    description: "Low-maintenance solar lighting solution for remote and long-term deployment projects.",
    href: "/en/products/lf971",
  },
];

export default function EnglishResourcesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="flex border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:min-h-[460px] lg:items-center lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-amber-700">LFADJ Resource Library</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Mobile Light Tower Resources
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Explore mobile light tower knowledge, selection guides, application insights, and technical resources.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Resource Categories</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resourceCategories.map((category) => (
              <article
                key={category.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{category.description}</p>
                <Link
                  href={category.href}
                  className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-center font-bold transition ${
                    category.href.endsWith("/knowledge-center")
                      ? "border-transparent bg-amber-500 text-slate-950 hover:bg-amber-400"
                      : "border-amber-500 bg-white text-amber-700 hover:bg-amber-50 hover:text-amber-800"
                  }`}
                >
                  {category.buttonLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Resources</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-50 shadow-sm lg:h-[240px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/resources/mining-mobile-light-tower-application-guide.webp"
                    alt="Mining mobile light tower application guide"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">Mining Mobile Light Tower Application Guide</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  Learn how mobile light towers support mining operations with reliable night lighting, equipment
                  visibility, and remote site illumination requirements.
                </p>
                <Link
                  href="/en/applications/mining-lighting"
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  Read More →
                </Link>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-500">Related:</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    <Link href="/en/applications/mining-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      Mining Lighting
                    </Link>
                    <Link href="/en/products/lf955" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      LF955
                    </Link>
                    <Link href="/en/solutions/how-to-choose-the-right-light-tower" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      How to Choose the Right Light Tower
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-50 shadow-sm lg:h-[240px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/resources/how-to-choose-right-light-tower.webp"
                    alt="How to choose the right mobile light tower"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">How to Choose the Right Light Tower</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  Understand project conditions, lighting requirements, runtime needs, and power options when selecting
                  the right mobile light tower.
                </p>
                <Link
                  href="/en/solutions/how-to-choose-the-right-light-tower"
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  Read More →
                </Link>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-500">Related:</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    <Link href="/en/applications/construction-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      Construction Lighting
                    </Link>
                    <Link href="/en/products/lf955" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      LF955
                    </Link>
                    <Link href="/en/resources/selection-guides" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      Mobile Light Tower Selection Guides
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-50 shadow-sm lg:h-[240px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/resources/featured-light-tower-mining.webp"
                    alt="Diesel vs solar mobile light tower comparison"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">Diesel vs Solar Mobile Light Tower Comparison</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  Compare diesel and solar mobile light towers based on operating conditions, maintenance requirements,
                  and project needs.
                </p>
                <Link
                  href="/en/resources/knowledge-center"
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  Read More →
                </Link>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-500">Related:</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    <Link href="/en/products/lf955" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      LF955 Diesel Mobile Light Tower
                    </Link>
                    <Link href="/en/products/lf971" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      LF971 Solar Mobile Light Tower
                    </Link>
                    <Link href="/en/resources/selection-guides" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      Selection Guides
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore Mobile Lighting Solutions</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Recommended Applications</h3>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {recommendedApplications.map((application) => (
                  <article key={application.href} className="flex min-h-[320px] h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-xl font-bold">{application.title}</h4>
                    <p className="mt-3 flex-1 leading-7 text-slate-600">{application.description}</p>
                    <Link href={application.href} className="mt-6 font-semibold text-amber-700 hover:text-amber-800">
                      View Application →
                    </Link>
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-slate-500">Recommended Products:</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                        {application.relatedProducts.map((product) => (
                          <Link key={product.href} href={product.href} className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight">Recommended Solutions</h3>
              <div className="mt-6 grid gap-5">
                {recommendedSolutions.map((solution) => (
                  <article key={solution.href} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-xl font-bold">{solution.title}</h4>
                    <p className="mt-3 flex-1 leading-7 text-slate-600">{solution.description}</p>
                    <Link href={solution.href} className="mt-6 font-semibold text-amber-700 hover:text-amber-800">
                      View Solution →
                    </Link>
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-slate-500">Related Applications:</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                        {solution.relatedApplications.map((application) => (
                          <Link key={application.href} href={application.href} className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                            {application.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Recommended Products
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            LFADJ provides diesel and solar mobile lighting solutions based on project conditions, operation
            requirements, and maintenance needs.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {recommendedProducts.map((solution) => (
              <article
                key={solution.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">{solution.model}</p>
                <h3 className="mt-3 text-xl font-bold">{solution.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{solution.description}</p>
                <Link
                  href={solution.href}
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  View Solution →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need a customized mobile lighting solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us about your project conditions, operating requirements, and lighting needs.
          </p>
          <Link
            href="/en/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Request Your Project Lighting Recommendation
          </Link>
        </div>
      </section>
    </main>
  );
}
