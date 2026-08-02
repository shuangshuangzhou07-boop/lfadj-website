import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Applications for Industrial Projects | LFADJ",
  description:
    "Explore mobile light tower applications for construction, mining, oil and gas, equipment rental and emergency response projects, with guides for real site conditions.",
  alternates: {
    canonical: "https://lfadj.com/en/applications",
    languages: {
      en: "https://lfadj.com/en/applications",
      "zh-CN": "https://lfadj.com/zh/applications",
      "x-default": "https://lfadj.com/en/applications",
    },
  },
  openGraph: {
    title: "Mobile Light Tower Applications for Industrial Projects | LFADJ",
    description:
      "Explore mobile light tower applications and site considerations across construction, mining, oil and gas, rental and emergency projects.",
    url: "https://lfadj.com/en/applications",
    type: "website",
  },
};

const siteConditions = [
  ["Operating Hours", "Daily runtime and shift patterns"],
  ["Power and Fuel Access", "Available energy sources at the project site"],
  ["Dust, Heat and Weather", "Exposure conditions across the working area"],
  ["Coverage and Visibility", "Work zones and visibility requirements"],
];

const applicationLinks = [
  ["Construction", "/en/applications/construction-lighting"],
  ["Mining", "/en/applications/mining-lighting"],
  ["Oil & Gas", "/en/applications/oil-gas-lighting"],
  ["Equipment Rental", "/en/applications/rental-lighting"],
  ["Emergency Response", "/en/applications/emergency-lighting"],
];

const applications = [
  {
    name: "Construction",
    title: "Construction Lighting",
    description: "Support changing work zones across building, road and infrastructure projects, especially where crews and equipment move between night-shift work areas.",
    requirements: ["Frequent relocation", "Flexible coverage", "Night-shift visibility"],
    href: "/en/applications/construction-lighting",
    linkLabel: "View Construction Lighting Guide",
  },
  {
    name: "Mining",
    title: "Mining Lighting",
    description: "Illuminate active mine areas where extended shifts, airborne dust and difficult ground shape how lighting is deployed across the site.",
    requirements: ["Long operating hours", "Dust and uneven ground", "Reliable wide-area lighting"],
    href: "/en/applications/mining-lighting",
    linkLabel: "View Mining Lighting Guide",
  },
  {
    name: "Oil & Gas",
    title: "Oil & Gas Project Lighting",
    description: "Provide temporary illumination for remote work areas and maintenance tasks exposed to demanding weather and site-specific operating requirements.",
    requirements: ["Remote-site operation", "Heat, dust and weather exposure", "Project-specific safety requirements"],
    href: "/en/applications/oil-gas-lighting",
    linkLabel: "View Oil & Gas Lighting Guide",
  },
  {
    name: "Equipment Rental",
    title: "Equipment Rental Lighting",
    description: "Serve changing customer sites with lighting equipment prepared for repeated dispatch, straightforward handover and efficient return to the rental fleet.",
    requirements: ["Rapid deployment", "Transport and operating simplicity", "Maintenance and utilization control"],
    href: "/en/applications/rental-lighting",
    linkLabel: "View Rental Lighting Guide",
    layout: "xl:col-span-3",
  },
  {
    name: "Emergency Response",
    title: "Emergency Response Lighting",
    description: "Restore temporary visibility for response teams and essential work areas when normal lighting or grid power is unavailable.",
    requirements: ["Rapid response", "Independent temporary lighting", "Reliable deployment during outages"],
    href: "/en/applications/emergency-lighting",
    linkLabel: "View Emergency Lighting Guide",
    layout: "md:col-span-2 xl:col-span-3",
  },
];

const projectMatches = [
  {
    condition: "Long operating periods or dependable continuous power",
    assessment: "Consider diesel mobile light towers",
  },
  {
    condition: "No grid connection or difficult fuel logistics",
    assessment: "Evaluate solar mobile light towers",
  },
  {
    condition: "Frequent relocation between work areas",
    assessment: "Prioritize transport, setup time and mast operation",
  },
  {
    condition: "Dust, heat, wind or remote locations",
    assessment: "Confirm environmental protection and project-specific configuration",
  },
];

const projectInformation = [
  "Application",
  "Required quantity",
  "Daily operating hours",
  "Temperature and site environment",
  "Fuel, grid or solar conditions",
  "Delivery destination and schedule",
];

export default function EnglishApplicationsPage() {
  return (
    <main className="w-full bg-white">
      <section aria-labelledby="applications-hero-title" className="w-full border-b border-slate-200 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[560px] max-w-[1280px] flex-col justify-center py-10 sm:py-12 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)] lg:gap-12 xl:gap-14">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Industry application hub</p>
              <h1 id="applications-hero-title" className="mt-4 max-w-[730px] text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-slate-950 sm:text-5xl lg:text-[3rem] xl:text-[3.25rem]">
                Mobile Light Tower Applications for Construction, Mining and Industrial Projects
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Explore how construction, mining, oil and gas, equipment rental and emergency response projects shape operating-environment requirements and the initial mobile lighting configuration assessment.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href="/en/contact/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-center text-sm font-bold leading-5 text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
                  Get a Project Lighting Recommendation
                </Link>
                <Link href="#application-guides" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold leading-5 text-slate-900 transition-colors hover:border-blue-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
                  Explore Application Guides
                </Link>
              </div>
            </div>

            <aside aria-labelledby="site-conditions-title" className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:min-h-[370px]">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Project assessment</p>
              <h2 id="site-conditions-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-[1.7rem]">Project site conditions</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">Site conditions influence the energy solution, mast deployment, lighting output and operating configuration.</p>
              <dl className="mt-6 grid flex-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {siteConditions.map(([term, detail]) => (
                  <div key={term} className="min-w-0 bg-slate-50 p-4 sm:p-[1.125rem]">
                    <dt className="text-base font-bold leading-6 text-slate-950">{term}</dt>
                    <dd className="mt-1.5 text-sm leading-5 text-slate-600">{detail}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <nav aria-label="Application guides" className="mt-10 border-t border-slate-200 pt-5">
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm font-semibold text-slate-700 sm:grid-cols-3 lg:grid-cols-5">
              {applicationLinks.map(([label, href]) => (
                <li key={href} className="min-w-0">
                  <Link href={href} className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 py-2 break-words transition-colors hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section id="application-guides" className="w-full scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Mobile Lighting by Application</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-600 sm:text-lg">
            Different projects vary in operating hours, coverage, site conditions, deployment frequency and access to power or fuel. Use the relevant guide to review the main lighting and configuration considerations.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {applications.map((application) => (
              <article key={application.name} className={`flex h-full min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-7 xl:col-span-2 ${application.layout ?? ""}`}>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{application.name}</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950">{application.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{application.description}</p>
                <ul className="mt-6 flex-1 space-y-3.5 text-base leading-7 text-slate-700">
                  {application.requirements.map((requirement) => (
                    <li key={requirement} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
                <Link href={application.href} className="mt-8 inline-flex min-h-11 items-center self-start rounded-sm py-2 text-base font-bold text-blue-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                  {application.linkLabel} <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="project-conditions-title" className="w-full border-t border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,56fr)_minmax(390px,44fr)] xl:gap-12">
            <div className="min-w-0">
              <h2 id="project-conditions-title" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Match the Lighting System to Your Project Conditions
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                The same mobile light tower application can require a different approach when operating hours, energy access, site conditions or deployment methods change. Use these points for an initial assessment before reviewing a detailed solution.
              </p>

              <dl className="mt-9 divide-y divide-slate-200 border-y border-slate-200">
                {projectMatches.map(({ condition, assessment }, index) => (
                  <div key={condition} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1.08fr)_2rem_minmax(0,0.92fr)] sm:items-center sm:gap-4">
                    <dt className="flex min-w-0 gap-3 font-semibold leading-6 text-slate-950">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{index + 1}</span>
                      <span>{condition}</span>
                    </dt>
                    <span aria-hidden="true" className="hidden items-center justify-center text-xl font-bold text-blue-700 sm:flex">→</span>
                    <dd className="ml-11 min-w-0 border-l-2 border-blue-200 pl-3 font-semibold leading-6 text-blue-800 sm:ml-0 sm:border-0 sm:pl-0">{assessment}</dd>
                  </div>
                ))}
              </dl>

              <nav aria-label="Related lighting solutions" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
                <Link href="/en/solutions/how-to-choose-the-right-light-tower" className="rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
                  How to Choose the Right Light Tower →
                </Link>
                <Link href="/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" className="rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
                  Extreme Environment Lighting →
                </Link>
              </nav>
            </div>

            <aside aria-labelledby="project-information-title" className="min-w-0 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-7 xl:p-8">
              <h3 id="project-information-title" className="text-2xl font-bold tracking-tight text-slate-950">Prepare Your Project Information</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Sharing these details helps us review the operating conditions before recommending a configuration.</p>
              <ul className="mt-6 space-y-3">
                {projectInformation.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-slate-800">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/en/contact/request-a-quote" className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-blue-700 px-4 py-3 text-center text-sm font-bold leading-5 text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 xl:text-base">
                Get a Project Lighting Recommendation
              </Link>
              <Link href="/en/products" className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-blue-300 bg-white px-4 py-2 text-center text-sm font-bold text-blue-800 transition-colors hover:border-blue-600 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
                Compare Mobile Light Tower Products →
              </Link>
            </aside>
          </div>

          <nav aria-label="Related information" className="mt-10 border-t border-slate-200 pt-5">
            <div className="flex flex-col gap-3 text-base sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
              <p className="font-bold uppercase tracking-[0.14em] text-slate-500">Related Information</p>
              <Link href="/en/solutions/how-to-choose-the-right-light-tower" className="rounded-sm font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 hover:decoration-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">Selection Guide</Link>
              <Link href="/en/products" className="rounded-sm font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 hover:decoration-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">Mobile Light Tower Products</Link>
              <Link href="/en/resources" className="rounded-sm font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 hover:decoration-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">Resource Center</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  );
}
