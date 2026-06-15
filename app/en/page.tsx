import type { Metadata } from "next";
import { getDictionary } from "@/src/i18n/getDictionary";

const t = getDictionary("en");

export const metadata: Metadata = {
  title: "LFADJ Mobile Light Tower Manufacturer",
  description:
    "LFADJ is a professional manufacturer of mobile light towers for construction, mining, and emergency applications. OEM/ODM available.",
  alternates: {
    canonical: "https://lfadj.com/en",
  },
  openGraph: {
    title: "LFADJ Mobile Light Tower Manufacturer",
    description:
      "Industrial lighting solutions for global construction and mining projects.",
    url: "https://lfadj.com",
    type: "website",
  },
};

const applications = [
  {
    title: "Construction",
    description: "Temporary lighting for building sites, road works and outdoor operations.",
  },
  {
    title: "Mining",
    description: "Reliable illumination for remote mining areas and heavy-duty work zones.",
  },
  {
    title: "Emergency",
    description: "Fast-deployment lighting support for rescue, recovery and public safety.",
  },
  {
    title: "Rental",
    description: "Durable mobile lighting products for rental fleets and project contractors.",
  },
];

const seoCluster = [
  { title: "Products", text: "Mobile light tower product range and LF6130 diesel lighting tower hub.", href: "/en/products" },
  { title: "Applications", text: "Construction, mining, emergency and rental lighting use cases.", href: "/en/applications" },
  { title: "Blog", text: "SEO buying guides for mobile light tower and diesel light tower buyers.", href: "/en/blog" },
  { title: "Case Studies", text: "Project examples showing LF6130 use across industrial worksites.", href: "/en/case-studies" },
  { title: "OEM", text: "Portable lighting tower OEM and ODM manufacturing support.", href: "/en/oem" },
  { title: "FAQ", text: "Long-tail answers for product, technical, OEM and pricing questions.", href: "/en/faq" },
];

const trustPoints = [
  "Industrial mobile light tower focus",
  "LF6130 ranking product hub",
  "OEM / ODM support",
  "Global B2B project communication",
];

export default function EnglishHomePage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              {t.home.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 text-2xl font-semibold text-gray-900">
              {t.home.heroSubtitle}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {t.home.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/en/products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {t.common.products}
              </a>
              <a
                href="/en/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
              >
                {t.common.contact}
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white p-4">
              <img
                src="/images/products/lf6130.png"
                alt={t.home.imageAlt}
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.home.productRangeTitle}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.categories.map((category) => (
              <a
                key={category.title}
                href="/en/products"
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-black">{category.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            Applications
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Applications
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <article
                key={application.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-black">
                  {application.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {application.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            SEO Cluster
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Mobile Light Tower SEO Cluster System
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {seoCluster.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-500">
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Why LFADJ Builds Industrial Lighting Authority
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

      <section id="contact" className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Get Professional Lighting Solution
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              Contact LFADJ for product recommendations, project support and
              mobile lighting tower specifications.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/en/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Contact Us
              </a>
              <a
                href="/en/products"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
              >
                Products
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-900">WhatsApp</p>
              <p className="mt-2 text-sm text-gray-600">Project consultation placeholder</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-900">Email</p>
              <p className="mt-2 text-sm text-gray-600">Sales support placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
