import type { Metadata } from "next";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";

export const metadata: Metadata = {
  title: "Request a Project Lighting Recommendation | LFADJ",
  description:
    "Share your mobile lighting project requirements with LFADJ for diesel, solar or monitoring trailer configuration support.",
  alternates: {
    canonical: "https://lfadj.com/en/contact/request-a-quote",
    languages: {
      en: "/en/contact/request-a-quote",
      "zh-CN": "/zh/contact/request-a-quote",
    },
  },
};

export default function EnglishProjectInquiryPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-white text-slate-950">
      <section className="px-6 pb-12 pt-16 sm:pb-16 sm:pt-20">
        <div className="mx-auto max-w-[960px]">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            PROJECT INQUIRY
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Request a Project Lighting Recommendation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Tell us about your project, application and operating conditions. We will review the
            information and help you compare suitable diesel, solar or monitoring trailer
            configurations.
          </p>
        </div>
      </section>

      <ProjectInquiryForm language="en" />
    </main>
  );
}
