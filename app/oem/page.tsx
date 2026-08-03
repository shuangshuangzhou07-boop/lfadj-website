import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "Light Tower Manufacturer | OEM / ODM Supplier",
  description:
    "LFADJ provides factory direct custom lighting tower solutions, OEM / ODM production and global export support for mobile light tower buyers.",
  alternates: {
    canonical: "https://lfadj.com/oem",
  },
  openGraph: {
    title: "Light Tower Manufacturer | OEM / ODM Supplier",
    description:
      "Industrial lighting solutions for global construction and mining projects.",
    url: "https://lfadj.com/oem",
    type: "website",
  },
};

export default function OEMPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            OEM / ODM
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Light Tower Manufacturer | OEM / ODM Supplier
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            LFADJ supports factory direct mobile light tower supply for buyers
            who need custom lighting tower solutions, OEM / ODM production and
            global export coordination. Our product structure is built for
            construction lighting, rental fleets, mining projects and temporary
            industrial illumination. Customers can discuss brand requirements,
            product configuration, documentation and project positioning with a
            lighting tower manufacturer focused on practical B2B deployment.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/en/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700">
              Contact
            </a>
            <a href="/oem/light-tower-manufacturer" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Manufacturer
            </a>
            <a href="/oem/oem-solutions" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              OEM Solutions
            </a>
            <a href="/oem/custom-projects" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Custom Projects
            </a>
            <a href="/oem/factory-capability" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Factory Capability
            </a>
            <a href="/products/lf6130" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Diesel Light Tower
            </a>
            <a href="/products" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50">
              Portable Light Tower
            </a>
          </div>
        </div>
      </section>
      <ConversionFlow />
      </main>
    </>
  );
}
