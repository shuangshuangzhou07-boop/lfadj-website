import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LFADJ | Mobile Lighting Company Information",
  description:
    "Learn about LFADJ, our mobile lighting focus, the project buyers we serve and how we help organize diesel and solar lighting requirements.",
  alternates: {
    canonical: "https://lfadj.com/en/about",
    languages: { en: "/en/about", "zh-CN": "/zh/about" },
  },
  openGraph: {
    title: "About LFADJ | Mobile Lighting Company Information",
    description:
      "Company information, mobile lighting focus and project support for contractors, equipment rental companies and industrial buyers.",
    url: "https://lfadj.com/en/about",
    type: "website",
  },
};

const capabilityItems = [
  { title: "Project Configuration", body: "Match the power source, lighting output, mast system, runtime and optional equipment to the application and operating conditions." },
  { title: "OEM / ODM Support", body: "Support practical branding, specification and configuration requirements after technical review." },
  { title: "Quality Checkpoints", body: "Follow key checks covering incoming components, assembly, electrical functions, final testing and shipment preparation." },
  { title: "Export Documentation", body: "Help organize specifications, product information and shipment-related documentation for project delivery." },
];

const exploreItems = [
  { title: "Mobile Lighting Products", body: "Compare diesel and solar mobile light towers for different operating requirements.", label: "View Products", href: "/en/products" },
  { title: "Lighting Applications", body: "Explore lighting requirements for construction, mining, oil and gas, rental and emergency projects.", label: "Explore Applications", href: "/en/applications" },
  { title: "Project Solutions", body: "Review selection, extreme-environment and mast-system guidance before choosing a configuration.", label: "Review Solutions", href: "/en/solutions" },
];

export default function EnglishAboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-hidden bg-white">
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/70 px-6 py-14 md:min-h-[500px] md:py-16 lg:min-h-[560px] lg:py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:min-h-[400px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">About LFADJ</p>
            <h1 className="mt-5 max-w-[680px] text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
              About LFADJ and Our Mobile Lighting Focus
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              LFADJ focuses on mobile lighting products and project support for contractors, equipment rental companies and industrial buyers. We help customers understand available diesel and solar options, organize project requirements and identify a practical next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/en/products" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Explore Our Products</Link>
              <Link href="/en/contact/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Discuss Your Project</Link>
            </div>
            <p className="mt-6 text-sm font-semibold leading-6 text-slate-600">
              Mobile Lighting Focus <span className="px-1 text-blue-600" aria-hidden="true">·</span> Project Requirement Support <span className="px-1 text-blue-600" aria-hidden="true">·</span> B2B Buyer Information
            </p>
          </div>
          <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl shadow-slate-900/10">
            <div className="relative aspect-[16/10] w-full">
              <Image src="/images/solutions/temporary-site-lighting/hero-temporary-site-lighting.webp" alt="Mobile light tower illuminating an active construction site at night" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              WHO WE SUPPORT
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Helping Project Buyers Find the Right Information
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Contractors, rental teams and industrial buyers often begin with different levels of project information. LFADJ helps organize the questions, compare relevant lighting directions and connect each buyer with the pages needed for a sound next decision.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
            {[
              {
                title: "Understand the Buyer Context",
                body: "Start with the application, operating pattern, site environment and the information already available to the project team.",
              },
              {
                title: "Navigate Relevant Options",
                body: "Use product, application and solution information to compare diesel, solar and project-specific lighting directions.",
              },
              {
                title: "Prepare the Next Discussion",
                body: "Collect the key questions and requirements that need to be confirmed before a product or configuration decision.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-7"
              >
                <h3 className="text-xl font-bold leading-7 text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>

          <Link
            href="/en/solutions/how-to-choose-the-right-light-tower"
            className="mt-9 inline-flex rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          >
            Learn how to choose the right light tower →
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start lg:gap-16">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">PROJECT CAPABILITIES</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Configuration, Quality Follow-Up and Export Support
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              LFADJ connects project requirements with practical mobile lighting configurations. We focus on specification clarity, quality checkpoints and the information buyers need before shipment and operation.
            </p>
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="text-lg font-bold text-slate-950">Management Systems</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['ISO 9001', 'ISO 14001', 'ISO 45001'].map((certification) => (
                  <span key={certification} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-800">{certification}</span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Management systems supporting quality, environmental and occupational health and safety processes.</p>
            </div>
            <Link href="/en/about/manufacturing" className="mt-6 inline-flex rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
              Explore Manufacturing &amp; Quality →
            </Link>
          </div>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {capabilityItems.map((item, index) => (
              <article key={item.title} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-7">
                <p className="text-sm font-bold text-blue-700">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">EXPLORE LFADJ</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">Find the Information Relevant to Your Project</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
            {exploreItems.map((item) => (
              <Link key={item.href} href={item.href} className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 sm:p-7">
                <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-800">{item.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{item.body}</p>
                <span className="mt-6 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 group-hover:decoration-blue-700">{item.label} →</span>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-blue-700 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Tell Us About Your Project Conditions</h2>
              <p className="mt-5 text-base leading-8 text-blue-50 sm:text-lg">Share the application, quantity, operating environment and preferred power source. We will help organize a practical mobile lighting configuration for further discussion.</p>
              <p className="mt-4 text-sm leading-6 text-blue-100">No fixed configuration required — tell us what you know about the project.</p>
            </div>
            <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link href="/en/contact/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-center text-sm font-bold text-blue-800 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700">Request a Project Recommendation</Link>
              <Link href="/en/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-blue-200 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700">Contact LFADJ</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
