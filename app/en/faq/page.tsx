import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Light Tower FAQ | LF6130 Diesel Lighting Tower Questions",
  description:
    "Product, technical, OEM and pricing FAQ for mobile light tower buyers comparing LF6130, diesel light tower suppliers and portable lighting tower OEM service.",
  alternates: {
    canonical: "https://lfadj.com/en/faq",
    languages: {
      en: "/en/faq",
      zh: "/zh/常见问题",
    },
  },
};

const sections = [
  {
    title: "Product FAQ",
    items: [
      {
        q: "What is a mobile light tower used for?",
        a: "A mobile light tower is used for temporary outdoor illumination in construction, mining, emergency rescue, municipal work and rental projects. Buyers choose it when fixed lighting is unavailable or when the worksite changes location. LF6130 is designed as an industrial diesel mobile light tower with 4x400W LED lamps, a hydraulic mast and trailer mobility, making it suitable for construction lighting solution and mining lighting equipment demand.",
      },
      {
        q: "Is LF6130 a diesel light tower?",
        a: "Yes. LF6130 is a diesel-powered LED hydraulic mobile lighting tower using a Kubota Z482 engine. It is suitable for buyers who need a diesel light tower supplier for long runtime, independent power and outdoor operation. The diesel platform is especially practical for remote jobsites, construction projects and rental fleets.",
      },
    ],
  },
  {
    title: "Technical FAQ",
    items: [
      {
        q: "What is the lifespan of LF6130 LED lighting?",
        a: "The LED lamp system is designed for long service life, with the product data listing up to 100,000 hours for the lamp lifetime. Actual performance depends on operating environment, maintenance and usage pattern. For buyers comparing mobile light tower manufacturer options, LED lifetime, IP protection and engine reliability should be reviewed together.",
      },
      {
        q: "How long can a diesel light tower run?",
        a: "Runtime depends on fuel tank design, engine load, lighting power and site conditions. LF6130 is positioned for long runtime industrial use and is listed with 48 hours runtime. For overnight work, rental fleets and emergency lighting system planning, runtime should be confirmed with LFADJ during quotation.",
      },
    ],
  },
  {
    title: "OEM FAQ",
    items: [
      {
        q: "Can LFADJ provide portable lighting tower OEM service?",
        a: "Yes. LFADJ can discuss portable lighting tower OEM and ODM requirements such as branding, product configuration, documentation and market positioning. LF6130 can serve as a base platform for distributors, rental companies and construction equipment channels that need a practical mobile light tower product.",
      },
      {
        q: "What should buyers confirm for construction lighting tower OEM?",
        a: "Buyers should confirm lighting power, mast height, engine configuration, protection level, branding requirements, documentation, target market and after-sales expectations. A clear OEM brief helps LFADJ match LF6130 or related products to the intended construction lighting solution.",
      },
    ],
  },
  {
    title: "Pricing FAQ",
    items: [
      {
        q: "How much does a diesel light tower cost?",
        a: "Diesel light tower price depends on engine brand, lamp power, mast system, trailer configuration, quantity and OEM requirements. LFADJ recommends requesting a quote based on the target application, because mining lighting equipment, rental fleet products and construction lighting solution projects may require different specifications.",
      },
      {
        q: "How do I request a quote for LF6130?",
        a: "Send LFADJ the target country, application, quantity, expected runtime, branding needs and any technical requirements. The sales team can use LF6130 as the main reference product and provide specification, pricing and project support for mobile light tower buyers.",
      },
    ],
  },
];

export default function EnglishFaqPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            FAQ
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Mobile Light Tower FAQ for LF6130 Buyers
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            This FAQ targets long-tail SEO questions from buyers comparing a
            mobile light tower manufacturer, diesel light tower supplier and
            portable lighting tower OEM partner. It answers product, technical,
            OEM and pricing questions while linking back to LF6130 as the
            central product page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/en/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">LF6130</a>
            <a href="/en/applications" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Applications</a>
            <a href="/en/case-studies" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Case Studies</a>
            <a href="/en/blog" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Blog</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px] space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-black">{section.title}</h2>
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                {section.items.map((item) => (
                  <article key={item.q} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-black">{item.q}</h3>
                    <p className="mt-4 text-sm leading-6 text-gray-600">{item.a}</p>
                    <a href="/en/products/lf6130" className="mt-5 inline-flex text-sm font-bold text-blue-600">
                      View LF6130
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            FAQ Trust Signals
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Product FAQ coverage", "Technical buyer support", "OEM question targeting", "Pricing intent pathway"].map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold">Still Have Questions?</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/en/contact" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white">Contact Us</a>
            <a href="/en/products/lf6130" className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white">View LF6130</a>
          </div>
        </div>
      </section>
    </main>
  );
}
