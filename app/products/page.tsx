import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "Lighting Tower | LFADJ",
  description:
    "Lighting tower product hub for diesel, LED, portable, solar and battery mobile light tower categories.",
  alternates: {
    canonical: "https://lfadj.com/products",
  },
  openGraph: {
    title: "Lighting Tower | LFADJ",
    description:
      "Industrial lighting solutions for global construction and mining projects.",
    url: "https://lfadj.com/products",
    type: "website",
  },
};

const categories = [
  { label: "Diesel Light Tower", href: "/products/diesel-light-tower" },
  { label: "LED Light Tower", href: "/products/led-light-tower" },
  { label: "Portable Light Tower", href: "/products/portable-light-tower" },
  { label: "Solar Light Tower", href: "/products/solar-light-tower" },
  { label: "Battery Light Tower", href: "/products/battery-light-tower" },
];

export default function ProductsPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            Products
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Lighting Tower
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Professional mobile lighting tower solutions for construction,
            mining, emergency and rental industries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/products/lf6130" className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              Diesel Light Tower
            </a>
            <a href="/products/lf6130" className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              LED Light Tower
            </a>
            <a href="/applications" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
              Mobile Light Tower
            </a>
            <a href="/oem" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
              Lighting Tower Manufacturer
            </a>
            <a href="/oem/light-tower-manufacturer" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
              Factory Direct
            </a>
            <a href="/case-studies" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
              Case Studies
            </a>
            <a href="/contact" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <article className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[0.9fr_1.1fr]">
            <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
              <img
                src="/images/products/lf6130.png"
                alt="LED mobile lighting tower"
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col justify-center p-0 pt-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                LF6130
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">
                LF6130 Hydraulic Mobile Light Tower
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600">
                A diesel and LED mobile lighting tower for construction sites,
                mining operations, emergency rescue and equipment rental use.
              </p>
              <a
                href="/products/lf6130"
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700 sm:w-44"
              >
                Diesel Light Tower
              </a>
            </div>
          </article>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category.href}
                href={category.href}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-bold text-black">{category.label}</h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Industrial lighting category for temporary worksite visibility,
                  mobile deployment and project support.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ConversionFlow />
      </main>
    </>
  );
}
