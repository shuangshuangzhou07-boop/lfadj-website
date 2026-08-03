import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    title: "Project Requirements",
    description:
      "We assess site conditions, operating hours, lighting coverage, power availability, and any supporting equipment needs.",
  },
  {
    title: "Configuration Proposal",
    description:
      "We define a diesel or solar solution and specify power, lighting, mast, trailer, and control configurations.",
  },
  {
    title: "Prototype or Sample",
    description:
      "Where required for suitable custom projects, a prototype or sample can validate the proposed configuration.",
  },
  {
    title: "Small-Batch Validation",
    description:
      "For suitable projects, a small batch can be coordinated to verify assembly, performance, and configuration suitability.",
  },
  {
    title: "Production and Delivery",
    description:
      "After approval, production proceeds with final inspection, packing, and export delivery preparation based on confirmed requirements.",
  },
];

const qualityChecks = [
  {
    title: "Incoming Component Requirements",
    description: "Component specifications and condition are checked against the confirmed supply requirements.",
  },
  {
    title: "Assembly and Functional Checks",
    description: "Assembly and core functions are checked against the approved configuration.",
  },
  {
    title: "Electrical System Checks",
    description: "Electrical connections and system functions are checked against the agreed requirements.",
  },
  {
    title: "Final Configuration Verification",
    description: "The finished configuration is verified against the confirmed project specification.",
  },
  {
    title: "Packing and Shipment Preparation",
    description: "Packing and shipment preparation follow the agreed delivery and protection requirements.",
  },
];

const coreCapabilities = [
  {
    title: "Project Configuration",
    description:
      "Based on site conditions, runtime, and lighting coverage, we recommend diesel or solar solutions and key power, lighting, mast, trailer, and control configurations.",
  },
  {
    title: "Quality Requirement Management",
    description:
      "Confirmed technical, functional, and inspection requirements are applied throughout production, inspection, and final verification.",
  },
  {
    title: "OEM / ODM Support",
    description:
      "For suitable projects, we support configuration adjustments, prototype validation, and small-batch verification.",
  },
  {
    title: "Production & Delivery Support",
    description:
      "Production, final inspection, packing, and export delivery preparation proceed according to the confirmed project requirements.",
  },
];

const experienceVisuals = [
  {
    title: "Mobile Light Tower Production",
    subject:
      "Production proceeds according to the confirmed mobile lighting configuration and technical requirements.",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-manufacturing-process.webp",
    imageAlt: "Mobile light tower production process",
  },
  {
    title: "Quality Inspection",
    subject: "Configuration and system checks completed against the agreed quality requirements.",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-quality-inspection.webp",
    imageAlt: "Quality inspection of a mobile light tower",
  },
  {
    title: "Finished Product & Shipment Preparation",
    subject: "Completed equipment prepared for final verification, packing, and shipment.",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-finished-product-preparation.webp",
    imageAlt: "Finished mobile light tower prepared for shipment",
  },
];

const relatedLinks = [
  { href: "/en/products", label: "Products" },
  { href: "/en/solutions", label: "Solutions" },
  { href: "/en/resources", label: "Resources" },
  { href: "/en/contact", label: "Request a Quote" },
];

export const metadata: Metadata = {
  title: "Mobile Light Tower Project Configuration & Quality Management | LFADJ",
  description:
    "Explore LFADJ project configuration, quality requirement management, OEM/ODM support, production follow-up, and export delivery preparation for mobile light towers.",
  alternates: {
    canonical: "https://lfadj.com/en/about/manufacturing",
    languages: {
      en: "/en/about/manufacturing",
      "zh-CN": "/zh/about/manufacturing",
    },
  },
};

export default function EnglishManufacturingPage() {
  return (
    <main className="bg-white text-slate-950">
      <section
        className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-cover bg-center px-6 py-8 text-white md:min-h-[480px] md:px-8 md:py-16 lg:min-h-[560px] lg:py-20"
        style={{
          backgroundImage:
            "url('/images/about/manufacturing/mobile-light-tower-manufacturing-workshop.webp')",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/30" />

        <div className="mx-auto w-full max-w-[1200px]">
          <div className="max-w-[600px]">
            <h1 className="max-w-[650px] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px] xl:text-[44px]">
              Mobile Light Tower Project Configuration &amp; Quality Management
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-100 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              LFADJ provides mobile lighting configuration support based on project conditions, with production
              follow-up, quality inspection, and export delivery preparation aligned to confirmed requirements.
            </p>
            <Link
              href="/en/contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-center text-base font-bold text-slate-950 transition hover:bg-amber-400 sm:mt-8"
            >
              Get Your Project Lighting Recommendation
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Project Configuration &amp; Delivery Support
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            LFADJ first evaluates the project application, site conditions, expected runtime, lighting coverage, and
            auxiliary equipment requirements. Based on these factors, we recommend a suitable mobile lighting
            configuration. Once confirmed, production, inspection, and delivery preparation are carried out according
            to the agreed technical and quality requirements.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">OEM / ODM Project Process</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Prototype development and small-batch validation are coordinated where required for suitable custom
              projects.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-sm font-bold text-amber-700">{String(index + 1).padStart(2, "0")}</p>
                <h4 className="mt-3 font-bold text-slate-950">{step.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">
              Production Process &amp; Quality Control
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              From component requirements and functional checks to final configuration and packing preparation, each
              stage is reviewed against the confirmed project specifications and quality requirements.
            </p>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {qualityChecks.map((check) => (
              <article key={check.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-950">{check.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{check.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <div className="grid gap-5 md:grid-cols-3">
              {experienceVisuals.map((visual) => (
                <article key={visual.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image
                      src={visual.imageSrc}
                      alt={visual.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-slate-950">{visual.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{visual.subject}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link
              href="/en/resources"
              className="mt-8 inline-flex font-semibold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              Explore Mobile Light Tower Manufacturing Resources →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Configuration &amp; Delivery Capabilities</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Four connected capabilities support configuration decisions, quality follow-up, suitable custom work, and
            delivery preparation.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((capability) => (
              <article key={capability.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="text-xl font-bold text-slate-950">Explore Products, Solutions, and Project Support</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need a Mobile Lighting Configuration for Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Share your operating conditions, expected runtime, lighting area, and configuration requirements. We will
            review the proposed product configuration, manufacturing requirements, and delivery plan.
          </p>
          <Link
            href="/en/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Request a Project Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
