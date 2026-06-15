import type { Metadata } from "next";
import { getDictionary } from "@/src/i18n/getDictionary";

const t = getDictionary("en");

export const metadata: Metadata = {
  title: "LFADJ Mobile Light Tower Manufacturer",
  description:
    "LFADJ is a professional manufacturer of mobile light towers for construction, mining, and emergency applications. OEM/ODM available.",
  alternates: {
    canonical: "https://lfadj.com/en/contact",
  },
  openGraph: {
    title: "LFADJ Mobile Light Tower Manufacturer",
    description:
      "Industrial mobile lighting solutions for construction, mining, and emergency use.",
    url: "https://lfadj.com/en/contact",
    type: "website",
  },
};

const useCases = [
  "Construction site lighting quote",
  "Mining project lighting support",
  "Emergency temporary lighting plan",
  "Rental fleet mobile light tower sourcing",
];

const trustPoints = [
  "Manufacturer direct communication",
  "LF6130 product specification support",
  "OEM / ODM discussion available",
  "Export market project coordination",
];

export default function EnglishContactPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            {t.contact.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Contact Mobile Light Tower Manufacturer LFADJ
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Contact LFADJ to discuss mobile light tower specifications, diesel
            lighting tower pricing, OEM requirements and application support.
            Buyers can share project country, quantity, worksite environment,
            preferred engine, mast height and delivery schedule. LFADJ can help
            compare LF6130 with project needs and guide customers toward the
            right mobile lighting solution for construction, mining, emergency
            or rental use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/en/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">LF6130</a>
            <a href="/en/products" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Products</a>
            <a href="/en/applications" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Applications</a>
            <a href="/en/case-studies" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Case Studies</a>
            <a href="/en/blog" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Blog</a>
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Request Support by Use Case
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-4">
          {t.contact.methods.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-2xl border border-gray-200 bg-white p-6 text-base font-bold text-black shadow-sm transition-colors hover:border-blue-500"
            >
              {item}
            </a>
          ))}
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Why Contact LFADJ Manufacturer
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold">Request a Mobile Light Tower Quote</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/en/contact" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white">Contact Us</a>
            <a href="/en/contact" className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white">Request Quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}
