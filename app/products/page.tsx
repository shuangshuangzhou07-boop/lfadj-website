import type { Metadata } from "next";
import { ConversionFlow } from "../conversion-flow";
import { SiteNav } from "../site-nav";
import { allProducts } from "@/src/product-data";

export const metadata: Metadata = {
  title: "Lighting Tower | LFADJ",
  description:
    "Industrial light tower product hub for diesel, portable and mining application categories.",
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
            <a href="/light-towers/portable-light-tower" className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              Portable Light Tower
            </a>
            <a href="/applications" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
              Mobile Light Tower
            </a>
            <a href="/products/lf955" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
              LF955 Conversion Page
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
            <a href="/en/contact" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product) => (
              <a
                key={product.slug}
                href={`/products/${product.slug}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  {product.category}
                </p>
                <h2 className="mt-3 text-lg font-bold text-black">
                  {product.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {product.subtitle}
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
