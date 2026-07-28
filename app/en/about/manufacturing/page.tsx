import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  "Project Requirement",
  "Product Configuration",
  "Manufacturing Coordination",
  "Quality Inspection",
  "Delivery",
];

const qualityChecks = [
  "Material Inspection",
  "Structural Quality Check",
  "Electrical Testing",
  "Final Inspection Before Shipment",
];

const configurationCategories = [
  {
    title: "Power Options",
    items: ["Kubota", "Yanmar", "Perkins", "Alternative engine options"],
  },
  {
    title: "Lighting Configuration",
    items: ["LED output options", "Beam configuration", "Lighting coverage"],
  },
  {
    title: "Mast System",
    items: ["Manual mast", "Electric mast"],
  },
];

const qualityStandards = ["ISO9001", "ISO14001", "ISO45001"];

const experienceVisuals = [
  {
    title: "Manufacturing Process",
    subject: "Component processing and welding operations for mobile lighting equipment.",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-manufacturing-process.webp",
    imageAlt: "Mobile light tower manufacturing process including welding",
  },
  {
    title: "Quality Inspection",
    subject: "Electrical inspection and system testing before delivery.",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-quality-inspection.webp",
    imageAlt: "Mobile light tower quality inspection and electrical testing",
  },
  {
    title: "Finished Product Preparation",
    subject: "Finished mobile lighting equipment prepared for inspection and delivery.",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-finished-product-preparation.webp",
    imageAlt: "Mobile light tower finished product preparation for delivery",
  },
];

const manufacturingExperience = [
  "Structural fabrication",
  "Component assembly",
  "Electrical testing",
  "Final inspection",
  "Shipment preparation",
];

const reasonsToChoose = [
  "Project-Based Lighting Solutions",
  "Reliable Supply Chain Management",
  "Flexible Product Configuration",
  "Quality-Controlled Delivery",
];

const relatedLinks = [
  { href: "/en/applications/mining-lighting", label: "Mining Lighting" },
  { href: "/en/applications/construction-lighting", label: "Construction Lighting" },
  { href: "/en/applications/oil-gas-lighting", label: "Oil and Gas Lighting" },
  { href: "/en/applications/rental-lighting", label: "Rental Lighting" },
  { href: "/en/applications/emergency-lighting", label: "Emergency Lighting" },
  { href: "/en/resources/what-is-mobile-light-tower", label: "What Is a Mobile Light Tower?" },
];

export const metadata: Metadata = {
  title: "Mobile Light Tower Manufacturing & Quality Control | LFADJ",
  description:
    "Learn how LFADJ supports reliable mobile lighting solutions through professional manufacturing partners, project-based configuration, and strict quality control.",
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
              <span className="block">Mobile Light Tower Manufacturing</span>
              <span className="block">&amp; Quality Management</span>
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-100 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              LFADJ provides reliable mobile lighting solutions through professional manufacturing partners,
              project-based configuration, and strict quality control.
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
            Manufacturing Approach &amp; Quality Control
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            LFADJ translates project requirements into product configurations, coordinates manufacturing with
            professional partners, and manages quality inspections before delivery.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            LFADJ works with qualified manufacturing partners specializing in mobile lighting equipment production. We
            focus on project requirements, product configuration, quality management, and delivery coordination to
            provide reliable lighting solutions for different applications.
          </p>

          <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {processSteps.map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-3 lg:min-w-0 lg:flex-1 lg:flex-row">
                <article className="flex min-h-24 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm">
                  <h3 className="font-bold text-slate-950">{step}</h3>
                </article>
                {index < processSteps.length - 1 && (
                  <>
                    <span aria-hidden="true" className="font-bold text-amber-600 lg:hidden">
                      ↓
                    </span>
                    <span aria-hidden="true" className="hidden font-bold text-amber-600 lg:inline">
                      →
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityChecks.map((check) => (
              <article key={check} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{check}</h3>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">Manufacturing Experience</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {manufacturingExperience.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Configuration Capability</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Configuration is defined around site conditions, operating needs, and the selected product platform.
            Available options vary by model and project.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {configurationCategories.map((category) => (
              <article key={category.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{category.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="font-bold text-amber-600">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">Quality Standards</h3>
              <ul className="mt-5 space-y-3">
                {qualityStandards.map((standard) => (
                  <li key={standard} className="flex gap-3 text-slate-600">
                    <span aria-hidden="true" className="font-bold text-amber-600">
                      •
                    </span>
                    <span>{standard}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                LFADJ follows internationally recognized quality management practices and works with qualified
                manufacturing partners to ensure reliable product delivery.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                The standards listed are reference frameworks; applicable certification documents and issuing entities
                are reviewed for each project and supply scope.
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/products/lf955"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amber-500"
            >
              Explore LF955 Diesel Mobile Light Tower
            </Link>
            <Link
              href="/en/products/lf971"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amber-500"
            >
              Explore LF971 Solar Mobile Light Tower
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose LFADJ</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasonsToChoose.map((reason) => (
              <article key={reason} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{reason}</h3>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h3 className="text-xl font-bold text-slate-950">Related Applications and Resources</h3>
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
            Need a customized mobile lighting solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us about your project conditions and lighting requirements.
          </p>
          <Link
            href="/en/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Get Your Project Lighting Recommendation
          </Link>
        </div>
      </section>
    </main>
  );
}
