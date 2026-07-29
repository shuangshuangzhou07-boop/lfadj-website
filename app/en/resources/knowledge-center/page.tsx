import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Knowledge Center | LFADJ",
  description:
    "Explore mobile light tower fundamentals, operating principles, selection methods, application experience, and technical references.",
};

const featuredArticles = [
  {
    title: "What Is a Mobile Light Tower?",
    description:
      "Understand the basic operating principles, main components, and primary application scenarios of mobile light towers.",
    contentType: "Technical Guide",
    audience: "Project Engineers",
    relatedProducts: [
      { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
      { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
    ],
    relatedTopic: "Mobile Light Tower Basics",
    href: "/en/resources/what-is-mobile-light-tower",
  },
  {
    title: "Diesel vs Solar Mobile Light Tower",
    description:
      "Compare diesel and solar mobile lighting approaches for different operating conditions, maintenance needs, and projects.",
    contentType: "Selection Guide",
    audience: "Project Managers",
    relatedProducts: [
      { label: "LF955", href: "/en/products/lf955" },
      { label: "LF971", href: "/en/products/lf971" },
    ],
    relatedTopic: "Power System Selection",
  },
];

const engineeringInsights = [
  {
    title: "Why Light Towers Need Different Configurations For Different Environments",
    description:
      "Temperature, dust, corrosion exposure, and operating conditions all affect component and configuration choices.",
  },
  {
    title: "How To Select A Light Tower For Long-Term Projects",
    description: "Long-term project planning should account for several practical operating factors.",
    considerations: ["Operating hours", "Power requirements", "Maintenance conditions"],
  },
  {
    title: "Diesel And Solar Mobile Light Tower Selection Considerations",
    description: "The appropriate power solution depends on site resources and deployment requirements.",
    considerations: ["Fuel availability", "Maintenance requirements", "Deployment conditions"],
  },
];

const articleCategories = [
  {
    title: "Basics",
    description: "Build a practical understanding of mobile light tower equipment and operation.",
    articles: [
      { title: "What Is a Mobile Light Tower?", href: "/en/resources/what-is-mobile-light-tower" },
      { title: "How Does a Mobile Light Tower Work?" },
    ],
  },
  {
    title: "Selection",
    description: "Evaluate lighting requirements and equipment choices for a specific project.",
    articles: [
      { title: "How to Choose the Right Light Tower" },
      { title: "How Much Lighting Coverage Do You Need?" },
    ],
  },
  {
    title: "Applications",
    description: "Review mobile lighting considerations for demanding industries and work sites.",
    articles: [
      { title: "Mining Lighting Guide" },
      { title: "Construction Lighting Guide" },
      { title: "Oil & Gas Lighting Guide" },
    ],
  },
  {
    title: "Technology",
    description: "Understand the lighting and mast technologies used in mobile light towers.",
    articles: [{ title: "LED Mobile Lighting Guide" }, { title: "Mast System Guide" }],
  },
];

const frequentlyAskedQuestions = [
  {
    question: "What is a mobile light tower used for?",
    answer:
      "A mobile light tower provides temporary illumination where fixed lighting is unavailable or impractical. Common uses include construction work, mining operations, infrastructure maintenance, outdoor projects, emergency response, and other temporary work areas.",
  },
  {
    question: "How do I choose between diesel and solar mobile light towers?",
    answer:
      "The choice depends on operating hours, required lighting output, available sunlight, fuel access, maintenance resources, noise considerations, and deployment conditions. Diesel systems can support projects with dependable fuel access, while solar systems require the solar resource, battery capacity, and operating schedule to be evaluated together.",
  },
  {
    question: "What factors affect mobile light tower selection?",
    answer:
      "Key factors include the area to be illuminated, target lighting level, operating schedule, available power sources, site access, terrain, expected weather, movement frequency, mast requirements, and the maintenance support available during the project.",
  },
  {
    question: "Why do different environments require different configurations?",
    answer:
      "Temperature, wind, dust, moisture, corrosion exposure, terrain, and power availability can affect mast stability, enclosure protection, component selection, energy supply, and maintenance planning. The configuration should therefore be matched to verified site conditions and project requirements.",
  },
  {
    question: "How long can a mobile light tower run?",
    answer:
      "Runtime depends on factors such as fuel capacity, load requirements, operating conditions, and configuration. Diesel models are commonly selected for long-duration projects where continuous lighting is required.",
  },
  {
    question: "What is the difference between diesel and solar mobile light towers?",
    answer:
      "Diesel mobile light towers provide flexible operation for demanding projects, while solar mobile light towers are suitable for applications requiring lower maintenance, quiet operation, and renewable energy.",
  },
];

export default function EnglishKnowledgeCenterPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold text-slate-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/en/resources" className="transition hover:text-amber-700">
                  Resources
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li aria-current="page" className="text-slate-950">
                Knowledge Center
              </li>
            </ol>
          </nav>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Mobile Light Tower Knowledge Center
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Technical guides, selection resources and application insights to help you choose the right mobile
            lighting solution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/resources/what-is-mobile-light-tower"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-500 px-5 py-2.5 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Learn Basics
            </Link>
            <Link
              href="/en/solutions/how-to-choose-the-right-light-tower"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 transition hover:bg-amber-50 hover:text-amber-800"
            >
              Choose The Right Light Tower
            </Link>
            <Link
              href="/en/applications"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 transition hover:bg-amber-50 hover:text-amber-800"
            >
              Explore Applications
            </Link>
            <Link
              href="/en/solutions"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 transition hover:bg-amber-50 hover:text-amber-800"
            >
              Find Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Learning Paths</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Understand Mobile Light Towers</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                Learn the basics, components and working principles of mobile light towers.
              </p>
              <Link
                href="/en/resources/what-is-mobile-light-tower"
                className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
              >
                What Is a Mobile Light Tower →
              </Link>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Choose The Right Light Tower</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                Understand project conditions, diesel vs solar options and configuration considerations.
              </p>
              <Link
                href="/en/resources/selection-guides"
                className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
              >
                Selection Guides →
              </Link>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Select By Application</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                Explore lighting requirements for different industries.
              </p>
              <Link
                href="/en/resources/application-guides"
                className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
              >
                Application Guides →
              </Link>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">Find Lighting Solutions</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                Explore project-based mobile lighting recommendations.
              </p>
              <Link
                href="/en/solutions"
                className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
              >
                Solutions →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engineering Insights</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Explore practical engineering factors that influence mobile light tower selection and configuration.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {engineeringInsights.map((insight) => (
              <article
                key={insight.title}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-bold">{insight.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{insight.description}</p>
                {insight.considerations ? (
                  <ul className="mt-5 space-y-2 text-slate-600">
                    {insight.considerations.map((consideration) => (
                      <li key={consideration} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden="true" />
                        <span>{consideration}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <span className="mt-5 inline-flex font-semibold text-slate-500">Coming Soon</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Knowledge</h2>
          <div className="mt-4">
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-2">
              <div className="relative min-h-[220px] bg-slate-100 lg:min-h-full">
                <Image
                  src="/images/hero/construction-mobile-light-tower.webp"
                  alt="Mobile light tower illuminating a construction site at night"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-3xl font-bold tracking-tight">{featuredArticles[0].title}</h3>
                <dl className="mt-4 grid gap-4 border-y border-slate-200 py-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Content Type</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{featuredArticles[0].contentType}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Audience</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{featuredArticles[0].audience}</dd>
                  </div>
                </dl>
                <p className="mt-4 leading-7 text-slate-600">{featuredArticles[0].description}</p>
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Related Products</p>
                  <div className="mt-3 flex flex-col gap-2">
                    {featuredArticles[0].relatedProducts.map((product) => (
                      <Link key={product.href} href={product.href} className="font-semibold text-slate-900 transition hover:text-amber-700">
                        {product.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/en/resources/what-is-mobile-light-tower"
                  className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  Read More →
                </Link>
              </div>
            </article>

            <article className="mt-4 max-w-2xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold tracking-tight">{featuredArticles[1].title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{featuredArticles[1].description}</p>
              <span className="mt-4 inline-flex font-semibold text-slate-500">Coming Soon</span>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Article Categories</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {articleCategories.map((category) => (
              <article key={category.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-2xl font-bold">{category.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{category.description}</p>
                <ul className="mt-4 divide-y divide-slate-200">
                  {category.articles.map((article) => (
                    <li
                      key={article.title}
                      className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                      {article.href ? (
                        <Link href={article.href} className="font-semibold text-slate-900 transition hover:text-amber-700">
                          {article.title}
                        </Link>
                      ) : (
                        <span className="font-semibold text-slate-800">{article.title}</span>
                      )}
                      {!article.href && <span className="shrink-0 text-sm font-semibold text-slate-500">Coming Soon</span>}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Products</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/en/products/lf955"
                className="text-2xl font-bold tracking-tight text-slate-950 transition hover:text-amber-700"
              >
                LF955 Diesel Mobile Light Tower
              </Link>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                Suitable for long-term projects requiring reliable lighting, high output and flexible deployment.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-500">Related Applications:</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  <Link href="/en/applications/mining-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                    Mining
                  </Link>
                  <Link href="/en/applications/construction-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                    Construction
                  </Link>
                  <Link href="/en/applications/rental-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                    Rental
                  </Link>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/en/products/lf971"
                className="text-2xl font-bold tracking-tight text-slate-950 transition hover:text-amber-700"
              >
                LF971 Solar Mobile Light Tower
              </Link>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                Designed for remote projects requiring low maintenance, quiet operation and solar-powered lighting.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-500">Related Applications:</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-slate-700">
                  <span>Remote Projects</span>
                  <Link href="/en/applications/emergency-lighting" className="underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                    Emergency Lighting
                  </Link>
                  <span>Long-term Deployment</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Applications</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href="/en/applications/mining-lighting" className="text-xl font-bold text-slate-950 transition hover:text-amber-700">
                Mining Lighting
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                Lighting solutions for mining sites, maintenance areas and remote operations.
              </p>
            </article>
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href="/en/applications/construction-lighting" className="text-xl font-bold text-slate-950 transition hover:text-amber-700">
                Construction Lighting
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                Temporary lighting solutions for construction sites and infrastructure projects.
              </p>
            </article>
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href="/en/applications/rental-lighting" className="text-xl font-bold text-slate-950 transition hover:text-amber-700">
                Rental Lighting
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                Flexible mobile lighting solutions for rental fleets and temporary projects.
              </p>
            </article>
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href="/en/applications/emergency-lighting" className="text-xl font-bold text-slate-950 transition hover:text-amber-700">
                Emergency Lighting
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                Rapid deployment lighting solutions for emergency response and temporary operations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Solutions</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/en/solutions/how-to-choose-the-right-light-tower"
                className="text-xl font-bold text-slate-950 transition hover:text-amber-700"
              >
                How To Choose The Right Light Tower
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                Understand project conditions, lighting requirements and configuration factors to select suitable
                mobile lighting solutions.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments"
                className="text-xl font-bold text-slate-950 transition hover:text-amber-700"
              >
                Harsh Environment Configuration
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                Learn how temperature, dust, corrosion and operating conditions affect mobile light tower configuration.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/en/solutions/how-to-choose-light-tower-mast-system"
                className="text-xl font-bold text-slate-950 transition hover:text-amber-700"
              >
                Mast System
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                Understand lifting systems and deployment requirements for different projects.
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/en/resources" className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
              Resources Center
            </Link>
            <Link href="/en/resources/application-guides" className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
              Application Guides
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {frequentlyAskedQuestions.map((item) => (
              <article key={item.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold leading-7">{item.question}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>

          <section aria-labelledby="engineering-approach-heading" className="mt-8 border-t border-slate-200 pt-8">
            <h2 id="engineering-approach-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
              LFADJ Engineering Approach
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              LFADJ helps customers select suitable mobile lighting solutions based on project conditions, environmental requirements and deployment needs.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold leading-6">Project Conditions</h3>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold leading-6">Environmental Requirements</h3>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold leading-6">Configuration Selection</h3>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold leading-6">Application Support</h3>
              </article>
            </div>
          </section>

          <div className="mt-6 rounded-xl bg-slate-950 px-6 py-8 text-center text-white shadow-sm sm:px-10">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">
              Need help choosing the right mobile lighting solution?
            </p>
            <Link
              href="/en/contact"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Request Your Project Lighting Recommendation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
