import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Lighting Tower Solutions | LFADJ",
  description:
    "LFADJ provides diesel mobile light tower solutions for construction, mining, emergency and rental customers.",
  alternates: {
    canonical: "https://lfadj.com/en/solutions",
    languages: {
      en: "/en/solutions",
      zh: "/zh/解决方案",
    },
  },
};

const solutions = [
  "Diesel mobile lighting solution for long-shift outdoor projects",
  "Construction lighting tower OEM solution for branded equipment programs",
  "Rental fleet configuration for contractors and equipment distributors",
];

export default function EnglishSolutionsPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            Solutions
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Mobile Lighting Tower Solutions for Industrial Projects
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            LFADJ builds mobile lighting tower solutions for buyers who need
            practical equipment, dependable supply and export-ready support. A
            light tower solution is more than a product specification; it
            includes lamp power, mast height, runtime, trailer design, weather
            protection, spare parts planning and OEM branding requirements. For
            construction contractors, mining companies and rental businesses,
            the right diesel light tower supplier must understand how machines
            are used in real outdoor conditions. LF6130 is positioned as a core
            diesel lighting tower for demanding worksites, with hydraulic mast
            operation, Kubota engine power and IP65 outdoor protection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/en/products" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">Products</a>
            <a href="/en/products/lf6130" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">LF6130</a>
            <a href="/en/applications" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Applications</a>
            <a href="/en/faq" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">FAQ</a>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">Solution Modules</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {solutions.map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-black">{item}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  LFADJ supports specification review, product matching and project communication for international B2B customers.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold">Build Your Lighting Solution</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/en/contact" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white">Contact Us</a>
            <a href="/en/products/lf6130" className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white">View LF6130</a>
          </div>
        </div>
      </section>
    </main>
  );
}
