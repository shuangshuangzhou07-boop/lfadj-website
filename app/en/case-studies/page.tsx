import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Light Tower Case Studies | LF6130 Project Applications",
  description:
    "LFADJ mobile light tower case studies for construction, mining, emergency rescue, road construction and rental company usage with LF6130 references.",
  alternates: {
    canonical: "https://lfadj.com/en/case-studies",
    languages: {
      en: "/en/case-studies",
      zh: "/zh/案例",
    },
  },
};

const cases = [
  {
    project: "Construction Site Lighting",
    country: "Middle East",
    industry: "Construction",
    challenge: "The contractor needed stable temporary lighting for night concrete work and equipment movement across a large open site.",
    solution: "LF6130 was selected as the product reference because its 9m hydraulic mast, 4x400W LED output and diesel power match construction lighting solution requirements.",
    result: "The project team improved night visibility, reduced dark zones and created a repeatable lighting setup for future work areas.",
  },
  {
    project: "Mining Project Lighting",
    country: "Africa",
    industry: "Mining",
    challenge: "A remote mining yard required dependable lighting equipment for access roads, maintenance work and material handling areas.",
    solution: "LF6130 supported the mining lighting equipment scenario with trailer mobility, long runtime and outdoor protection.",
    result: "The buyer gained a practical diesel light tower platform for remote operations and fleet planning.",
  },
  {
    project: "Emergency Rescue Lighting",
    country: "Asia",
    industry: "Emergency Response",
    challenge: "The response team needed rapid temporary illumination where fixed power and permanent lighting were unavailable.",
    solution: "A mobile light tower configuration based on LF6130 helped define the emergency lighting system requirements.",
    result: "The site could be illuminated quickly for repair, rescue and safety coordination.",
  },
  {
    project: "Road Construction Project",
    country: "Southeast Asia",
    industry: "Road Construction",
    challenge: "Night road work required directional lighting, fast deployment and consistent visibility for workers and machines.",
    solution: "LF6130 provided a reference diesel tower with mast height, LED brightness and trailer-mounted movement.",
    result: "The project improved shift continuity and created a more organized temporary lighting plan.",
  },
  {
    project: "Rental Company Usage Case",
    country: "Global Rental Fleet",
    industry: "Equipment Rental",
    challenge: "A rental company needed a portable lighting tower OEM-ready product that could serve construction, municipal and industrial customers.",
    solution: "LF6130 was used as the priority platform for rental fleet discussions because it balances brightness, runtime and serviceability.",
    result: "The company gained a stronger product reference for customer quotations and fleet expansion.",
  },
];

export default function EnglishCaseStudiesPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            Case Studies
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            LF6130 Mobile Light Tower Case Studies for Global Projects
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Case studies help buyers understand how a mobile light tower performs
            in real project conditions. LFADJ uses LF6130 as the priority
            reference for construction lighting solution, mining lighting
            equipment, emergency lighting system, road construction and rental
            fleet demand. Each scenario connects the buyer challenge with a
            practical lighting solution, then links back to LF6130 for technical
            specifications and quotation planning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/en/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">LF6130</a>
            <a href="/en/applications" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Applications</a>
            <a href="/en/blog" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Blog</a>
            <a href="/en/faq" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">FAQ</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-2">
          {cases.map((item) => (
            <article key={item.project} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-5 py-10 text-center text-sm font-semibold text-gray-500">
                Project Photo Placeholder
              </div>
              <h2 className="mt-6 text-2xl font-bold text-black">{item.project}</h2>
              <dl className="mt-5 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                <div><dt className="font-bold text-gray-900">Country</dt><dd>{item.country}</dd></div>
                <div><dt className="font-bold text-gray-900">Industry</dt><dd>{item.industry}</dd></div>
                <div><dt className="font-bold text-gray-900">Product Used</dt><dd>LF6130</dd></div>
              </dl>
              <div className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
                <p><strong className="text-gray-900">Challenge:</strong> {item.challenge}</p>
                <p><strong className="text-gray-900">Solution:</strong> {item.solution}</p>
                <p><strong className="text-gray-900">Result:</strong> {item.result}</p>
              </div>
              <a href="/en/products/lf6130" className="mt-6 inline-flex text-sm font-bold text-blue-600">
                View LF6130
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Case Study Trust Signals
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Project scenario format", "LF6130 priority product", "Construction and mining context", "Request quote pathway"].map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold">Plan Your Lighting Tower Project</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/en/contact" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white">Request Quote</a>
            <a href="/en/faq" className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white">Read FAQ</a>
          </div>
        </div>
      </section>
    </main>
  );
}
