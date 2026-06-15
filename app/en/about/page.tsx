import type { Metadata } from "next";
import { getDictionary } from "@/src/i18n/getDictionary";

const t = getDictionary("en");

export const metadata: Metadata = {
  title: "LFADJ Mobile Light Tower Manufacturer",
  description:
    "LFADJ is a professional manufacturer of mobile light towers for construction, mining, and emergency applications. OEM/ODM available.",
  alternates: {
    canonical: "https://lfadj.com/en/about",
  },
  openGraph: {
    title: "LFADJ Mobile Light Tower Manufacturer",
    description:
      "Industrial mobile lighting solutions for construction, mining, and emergency use.",
    url: "https://lfadj.com/en/about",
    type: "website",
  },
};

const authorityLinks = [
  { label: "LF6130 Product Hub", href: "/en/products/lf6130" },
  { label: "Applications", href: "/en/applications" },
  { label: "Case Studies", href: "/en/case-studies" },
  { label: "OEM Manufacturing", href: "/en/oem" },
  { label: "Blog Guides", href: "/en/blog" },
  { label: "Contact LFADJ", href: "/en/contact" },
];

export default function EnglishAboutPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            {t.about.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {t.about.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {t.about.description}
          </p>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.strengths.map((strength) => (
            <article key={strength} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-bold text-black">{strength}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            LFADJ SEO Authority Network
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-600">
            LFADJ builds authority around mobile light tower manufacturing,
            diesel light tower supply, construction lighting applications and
            OEM support. The pages below connect company credibility with
            product selection and lead generation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {authorityLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black hover:border-blue-500">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
