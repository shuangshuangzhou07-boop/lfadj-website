import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Knowledge Center | LFADJ",
  description:
    "Explore mobile light tower fundamentals, operating principles, selection methods, application experience, and technical references.",
};

const learningPaths = [
  { title: "Understand Mobile Light Towers", description: "Learn the fundamentals, components and operating principles.", label: "Explore Knowledge Articles", href: "/en/resources/what-is-mobile-light-tower" },
  { title: "Choose The Right Light Tower", description: "Compare project conditions, power options and configuration priorities.", label: "View Selection Guides", href: "/en/resources/selection-guides" },
  { title: "Select By Application", description: "Review lighting considerations for different industries and work sites.", label: "View Application Guides", href: "/en/resources/application-guides" },
  { title: "Find Lighting Solutions", description: "Continue from project requirements to suitable mobile lighting solutions.", label: "Explore Solutions", href: "/en/solutions" },
];

const articleCategories = [
  { title: "Basics", items: [{ title: "What Is a Mobile Light Tower?", href: "/en/resources/what-is-mobile-light-tower" }, { title: "How Does a Mobile Light Tower Work?" }] },
  { title: "Selection", items: [{ title: "How to Choose the Right Light Tower", href: "/en/resources/selection-guides" }, { title: "How Much Lighting Coverage Do You Need?" }] },
  { title: "Applications", items: [{ title: "Mining Lighting Guide", href: "/en/applications/mining-lighting" }, { title: "Construction Lighting Guide", href: "/en/applications/construction-lighting" }, { title: "Oil & Gas Lighting Guide", href: "/en/applications/oil-gas-lighting" }] },
  { title: "Technology", items: [{ title: "LED Mobile Lighting Guide" }, { title: "Mast System Guide", href: "/en/solutions/how-to-choose-light-tower-mast-system" }] },
];

const engineeringInsights = [
  { title: "Environment", description: "Temperature, dust, corrosion exposure and site conditions affect configuration decisions." },
  { title: "Project Duration", description: "Operating hours, available power and maintenance conditions shape long-term planning." },
  { title: "Power Selection", description: "Fuel access, solar resources, deployment conditions and maintenance needs should be evaluated together." },
];

const products = [
  { title: "LF955 Diesel Mobile Light Tower", description: "A diesel mobile lighting option for projects that require dependable fuel-based operation.", href: "/en/products/lf955" },
  { title: "LF971 Solar Mobile Light Tower", description: "A solar mobile lighting option for projects where site conditions support solar charging.", href: "/en/products/lf971" },
];

const applications = [
  { label: "Mining Lighting", href: "/en/applications/mining-lighting" },
  { label: "Construction Lighting", href: "/en/applications/construction-lighting" },
  { label: "Rental Lighting", href: "/en/applications/rental-lighting" },
  { label: "Emergency Lighting", href: "/en/applications/emergency-lighting" },
];

const frequentlyAskedQuestions = [
  { question: "What is a mobile light tower used for?", answer: "A mobile light tower provides temporary illumination where fixed lighting is unavailable or impractical, including construction, mining, maintenance and emergency work areas." },
  { question: "How do I choose between diesel and solar mobile light towers?", answer: "Compare operating hours, lighting demand, sunlight, fuel access, maintenance resources, noise considerations and deployment conditions." },
  { question: "What factors affect mobile light tower selection?", answer: "Key factors include the work area, target lighting level, operating schedule, power source, terrain, weather, mobility, mast requirements and maintenance support." },
  { question: "Why do different environments require different configurations?", answer: "Temperature, wind, dust, moisture, corrosion exposure, terrain and power availability can affect stability, protection, component and maintenance choices." },
  { question: "How long can a mobile light tower run?", answer: "Runtime depends on fuel or energy capacity, load requirements, operating conditions and equipment configuration." },
  { question: "How can LFADJ recommend the right mobile light tower configuration for my project?", answer: "LFADJ can review project conditions, operating environment, lighting requirements, power requirements and deployment conditions to help recommend a suitable mobile light tower configuration." },
];

const sectionClass = "px-6 py-10 sm:px-8 lg:py-12";
const headingClass = "text-3xl font-bold tracking-tight sm:text-4xl";
const cardClass = "rounded-xl border border-slate-200 bg-white p-5 shadow-sm";

export default function EnglishKnowledgeCenterPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold text-slate-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/en/resources" className="transition hover:text-amber-700">Resources</Link></li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li aria-current="page" className="text-slate-950">Knowledge Center</li>
            </ol>
          </nav>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Mobile Light Tower Knowledge Center</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">Technical guides, selection resources and application insights to help you choose the right mobile lighting solution.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/en/resources/what-is-mobile-light-tower" className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-500 px-5 py-2.5 font-bold text-slate-950 hover:bg-amber-400">Learn Basics</Link>
            <Link href="/en/resources/selection-guides" className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 hover:bg-amber-50">Choose The Right Light Tower</Link>
            <Link href="/en/applications" className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 hover:bg-amber-50">Explore Applications</Link>
            <Link href="/en/solutions" className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 hover:bg-amber-50">Find Solutions</Link>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} border-b border-slate-200`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>Learning Paths</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learningPaths.map((path) => (
              <article key={path.title} className={`${cardClass} flex h-full flex-col`}>
                <h3 className="text-xl font-bold">{path.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{path.description}</p>
                <Link href={path.href} className="mt-5 font-semibold text-amber-700 hover:text-amber-800">{path.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>Engineering Insights</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {engineeringInsights.map((insight) => <article key={insight.title} className={cardClass}><h3 className="text-lg font-bold">{insight.title}</h3><p className="mt-2 leading-7 text-slate-600">{insight.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-50`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>Featured Knowledge</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className={cardClass}>
              <span className="text-sm font-bold uppercase tracking-wider text-amber-700">Technical Guide</span>
              <h3 className="mt-3 text-2xl font-bold">What Is a Mobile Light Tower?</h3>
              <p className="mt-3 leading-7 text-slate-600">Understand mobile light tower operating principles, main components and common application scenarios.</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {products.map((product) => <Link key={product.href} href={product.href} className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">{product.title}</Link>)}
              </div>
              <Link href="/en/resources/what-is-mobile-light-tower" className="mt-5 inline-flex font-semibold text-amber-700 hover:text-amber-800">Read More →</Link>
            </article>
            <article className={cardClass}>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Coming Soon</span>
              <h3 className="mt-3 text-2xl font-bold">Diesel vs Solar Mobile Light Tower</h3>
              <p className="mt-3 leading-7 text-slate-600">A planned guide to comparing power options against operating and maintenance requirements.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>Article Categories</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {articleCategories.map((category) => (
              <article key={category.title} className={cardClass}>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <ul className="mt-4 space-y-3">
                  {category.items.map((item) => (
                    <li key={item.title} className="text-sm leading-6">
                      {item.href ? <Link href={item.href} className="font-semibold text-slate-700 hover:text-amber-700">{item.title} →</Link> : <span className="text-slate-500">{item.title} · Coming Soon</span>}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} border-y border-slate-200 bg-slate-50`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>Frequently Asked Questions</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Find answers about mobile light tower selection, configuration, and project requirements before choosing the right lighting solution.</p>
          <div className="mt-4 grid gap-x-6 gap-y-4 md:grid-cols-2">
            {frequentlyAskedQuestions.map((item) => <details key={item.question} className="border-b border-slate-200 pb-4"><summary className="cursor-pointer font-semibold text-slate-700">{item.question}</summary><p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} border-y border-slate-200 bg-slate-50`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>LFADJ Engineering Approach</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">LFADJ helps customers select suitable mobile lighting solutions based on project conditions, environmental requirements and deployment needs.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Project Conditions", "Environmental Requirements", "Configuration Selection", "Application Support"].map((item) => <article key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"><h3 className="font-bold leading-6">{item}</h3></article>)}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>Related Resources</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className={cardClass}>
              <h3 className="text-xl font-bold">Products</h3>
              <div className="mt-4 flex flex-col gap-3">
                {products.map((product) => (
                  <Link key={product.href} href={product.href} className="font-semibold text-slate-700 hover:text-amber-700">
                    {product.title}
                  </Link>
                ))}
              </div>
            </article>
            <article className={cardClass}>
              <h3 className="text-xl font-bold"><Link href="/en/applications" className="hover:text-amber-700">Applications</Link></h3>
              <div className="mt-4 flex flex-col gap-3">
                {applications.map((application) => (
                  <Link key={application.href} href={application.href} className="font-semibold text-slate-700 hover:text-amber-700">
                    {application.label}
                  </Link>
                ))}
              </div>
            </article>
            <article className={cardClass}>
              <h3 className="text-xl font-bold"><Link href="/en/solutions" className="hover:text-amber-700">Solutions</Link></h3>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/en/solutions/how-to-choose-the-right-light-tower" className="font-semibold text-slate-700 hover:text-amber-700">How To Choose The Right Light Tower</Link>
                <Link href="/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" className="font-semibold text-slate-700 hover:text-amber-700">Harsh Environment Configuration</Link>
                <Link href="/en/solutions/how-to-choose-light-tower-mast-system" className="font-semibold text-slate-700 hover:text-amber-700">Mast System</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-10 text-center text-white sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold">Need help selecting the right mobile light tower solution?</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-300">
            Share your project conditions, operating environment, and lighting requirements. LFADJ can help evaluate a suitable mobile lighting configuration.
          </p>
          <Link href="/en/contact" className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 hover:bg-amber-400">Request Your Project Lighting Recommendation</Link>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link href="/en/resources" className="text-slate-300 underline underline-offset-4 hover:text-white">Resources Center</Link>
            <Link href="/en/resources/application-guides" className="text-slate-300 underline underline-offset-4 hover:text-white">Application Guides</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
