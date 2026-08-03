import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LFADJ | Mobile Lighting Company Information",
  description:
    "Learn how LFADJ supports mobile lighting buyers with project configuration, quality coordination, management systems, and delivery preparation.",
  alternates: {
    canonical: "https://lfadj.com/en/about",
    languages: { en: "/en/about", "zh-CN": "/zh/about" },
  },
  openGraph: {
    title: "About LFADJ | Mobile Lighting Company Information",
    description:
      "LFADJ company information, mobile lighting project configuration, quality coordination, and delivery preparation for equipment buyers.",
    url: "https://lfadj.com/en/about",
    type: "website",
  },
};

const capabilityItems = [
  { title: "Mobile Lighting Focus", body: "Product discussions stay centered on mobile lighting applications and operating conditions." },
  { title: "Buyer Requirement Review", body: "Project information is reviewed before a configuration direction is recommended." },
  { title: "Manufacturing & Quality Coordination", body: "Coordinate agreed product specifications, production requirements, and quality checkpoints." },
  { title: "OEM, ODM and Export Support", body: "Branding, configuration details, documentation, and delivery preparation can be coordinated for project needs." },
];

export default function EnglishAboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-hidden bg-white">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:min-h-[480px] lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] lg:gap-14">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">ABOUT LFADJ</p>
            <h1 className="mt-5 max-w-[660px] text-[38px] font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-[42px] lg:text-[56px]">
              Mobile Lighting Decisions Built Around Real Project Conditions
            </h1>
            <p className="mt-6 max-w-[650px] text-lg leading-8 text-slate-600">
              LFADJ helps equipment buyers evaluate mobile lighting options around application, runtime, site conditions, deployment requirements, and project priorities. We coordinate product configuration, manufacturing requirements, quality checkpoints, OEM or ODM details, and export documentation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/en/contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Discuss Your Project</Link>
              <Link href="/en/about/manufacturing" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 transition hover:border-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">See How We Manage Quality</Link>
            </div>
          </div>
          <aside className="min-w-0 border border-slate-300 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="buyer-clarity-heading">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">PROJECT JUDGMENT FRAMEWORK</p>
            <h2 id="buyer-clarity-heading" className="mt-3 text-2xl font-bold tracking-tight text-slate-950">What We Help Buyers Clarify</h2>
            <ol className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              {["Application and coverage", "Runtime and power choice", "Environment and deployment", "Configuration and delivery"].map((item, index) => (
                <li key={item} className="flex items-center gap-5 py-4">
                  <span className="text-sm font-bold tabular-nums text-blue-700">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-semibold leading-6 text-slate-800">{item}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">HOW WE WORK</p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-slate-950 lg:text-[40px]">
              From Buyer Requirements to Delivery-Ready Configuration
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Our role is to turn project information into clearer equipment decisions and coordinate the details that matter before delivery.
            </p>
          </div>

          <ol className="mt-10 grid border-b border-slate-300 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Understand the Project", body: "Application, lighting area, operating hours, climate, access, transport, and site limitations." },
              { title: "Evaluate the Direction", body: "Compare diesel, solar, portable, mast, and optional equipment requirements against actual operating priorities." },
              { title: "Coordinate the Configuration", body: "Confirm key specifications, OEM or ODM details, quality checkpoints, documentation, and manufacturing coordination." },
              { title: "Prepare for Delivery", body: "Review the agreed configuration and organize the product and export information required for project handover." },
            ].map((step, index) => (
              <li key={step.title} className="relative border-t border-slate-300 py-6 md:px-6 lg:first:pl-0 lg:last:pr-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold tracking-[0.14em] text-blue-700">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-slate-300" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-7 text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.body}</p>
                {index < 3 && <span className="absolute right-0 top-[18px] hidden translate-x-1/2 bg-slate-50 px-1 text-sm text-blue-700 lg:block" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>

          <Link href="/en/solutions" className="mt-7 inline-flex rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
            Explore Mobile Lighting Solutions →
          </Link>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-14">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">WHY BUYERS WORK WITH LFADJ</p>
              <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px]">
                Clearer Coordination Before Equipment Reaches the Site
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                A mobile lighting project depends on more than a model number. We focus on requirement clarity, configuration alignment, quality follow-up, and the information buyers need before delivery.
              </p>
              <div className="mt-8 border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold">Management Systems</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Our management approach is supported by ISO 9001, ISO 14001, and ISO 45001 systems.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["ISO 9001", "ISO 14001", "ISO 45001"].map((certification) => (
                    <span key={certification} className="rounded-full border border-slate-600 bg-slate-900 px-3 py-1.5 text-sm font-bold text-blue-200">{certification}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {capabilityItems.map((item, index) => (
              <article key={item.title} className="min-w-0 border border-slate-700 bg-slate-900/70 p-6 sm:p-7">
                <p className="text-sm font-bold text-blue-300">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-bold leading-7">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 pt-8 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Planning a Mobile Lighting Project?</h2>
              <p className="mt-4 leading-7 text-slate-300">Share the application, quantity, operating conditions, and preferred delivery schedule. We will help organize the next configuration discussion.</p>
            </div>
            <div className="mt-7 flex shrink-0 flex-col items-start gap-4 sm:flex-row sm:items-center lg:mt-0 lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
              <Link href="/en/contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Request a Project Recommendation</Link>
              <Link href="/en/about/manufacturing" className="inline-flex rounded-sm font-bold text-blue-200 underline decoration-blue-400 underline-offset-4 transition hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950">View Manufacturing &amp; Quality →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
