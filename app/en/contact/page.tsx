import type { Metadata } from "next";
import Link from "next/link";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";

export const metadata: Metadata = {
  title: "Contact LFADJ | Discuss Your Mobile Lighting Project",
  description:
    "Contact LFADJ to share your mobile light tower application, operating conditions, configuration requirements, and project procurement plans.",
  alternates: {
    canonical: "https://lfadj.com/en/contact",
    languages: { en: "/en/contact", "zh-CN": "/zh/contact" },
  },
  openGraph: {
    title: "Contact LFADJ | Discuss Your Mobile Lighting Project",
    description:
      "Share your mobile light tower application, operating conditions, configuration requirements, and project procurement plans with LFADJ.",
    url: "https://lfadj.com/en/contact",
    type: "website",
  },
};

const preparationItems = [
  { title: "Application", body: "Where and how the mobile lighting equipment will be used.", href: "/en/applications" },
  { title: "Quantity and timeline", body: "Estimated unit quantity and the expected project schedule.", href: "/en/products" },
  { title: "Operating conditions", body: "Working hours, climate, site access, and special requirements.", href: "/en/solutions" },
];

const processSteps = [
  {
    title: "Requirement Review",
    body: "We review your application, quantity, operating conditions, and project timeline.",
  },
  {
    title: "Configuration Discussion",
    body: "We may contact you to clarify the lighting output, power source, mast system, or optional equipment.",
  },
  {
    title: "Project Recommendation",
    body: "We prepare a suitable configuration direction for further commercial discussion.",
  },
];

export default function EnglishContactPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">CONTACT LFADJ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[56px]">
            Discuss Your Mobile Lighting Project
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Share your application, operating conditions, and procurement requirements. Our team will review the information and help identify a suitable mobile lighting configuration.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:items-start lg:gap-12">
          <aside className="min-w-0 lg:sticky lg:top-28" aria-labelledby="prepare-heading">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">PROJECT DETAILS</p>
            <h2 id="prepare-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950">
              What to Prepare
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Provide what you already know. Optional operating details can be added when they are available.
            </p>
            <ol className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              {preparationItems.map((item, index) => (
                <li key={item.title} className="py-5">
                  <div className="flex gap-4">
                    <span className="shrink-0 text-sm font-bold tabular-nums text-blue-700">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <h3 className="font-bold leading-6 text-slate-950">
                        <Link href={item.href} className="transition hover:text-blue-700 hover:underline hover:underline-offset-4">{item.title}</Link>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </aside>

          <div className="min-w-0">
            <ProjectInquiryForm language="en" embedded />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">AFTER SUBMISSION</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            What Happens After You Submit
          </h2>
          <ol className="mt-10 grid border-y border-slate-200 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step.title} className="min-w-0 border-b border-slate-200 py-6 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <p className="text-sm font-bold tabular-nums text-blue-700">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
