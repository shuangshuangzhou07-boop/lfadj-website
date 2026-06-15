import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LFADJ Mobile Light Tower Manufacturer",
  description:
    "LFADJ is a professional manufacturer of mobile light towers for construction, mining, and emergency applications. OEM/ODM available.",
  alternates: {
    canonical: "https://lfadj.com/en/oem",
  },
  openGraph: {
    title: "LFADJ Mobile Light Tower Manufacturer",
    description:
      "Industrial mobile lighting solutions for construction, mining, and emergency use.",
    url: "https://lfadj.com/en/oem",
    type: "website",
  },
};

const cards = [
  "Product configuration",
  "Brand and market adaptation",
  "Export documentation support",
];

export default function EnglishOemPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            OEM & ODM
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Portable Lighting Tower OEM Manufacturer
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            LFADJ provides OEM and ODM support for companies that need mobile
            light tower products under their own market positioning. As a
            mobile light tower manufacturer, LFADJ can support product
            configuration, color and branding coordination, documentation,
            packaging requirements and export communication. OEM customers often
            need a stable diesel light tower supplier who understands
            construction lighting solution requirements, rental fleet durability
            and international buyer expectations. LF6130 is a practical starting
            platform for OEM programs because it combines a 9m hydraulic mast,
            4x400W LED lamps, Kubota Z482 engine and IP65 protection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/en/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">LF6130 Product</a>
            <a href="/en/products" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Products</a>
            <a href="/en/applications" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Applications</a>
            <a href="/en/case-studies" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Case Studies</a>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-3">
          {cards.map((item) => (
            <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-black">{item}</h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Coordinate specifications, target applications and project details with LFADJ before placing OEM or ODM orders.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            OEM Trust Signals
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Manufacturer communication", "Portable lighting tower OEM", "LF6130 base platform", "Export documentation support"].map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold">Start an OEM Light Tower Project</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/en/contact" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white">Contact Us</a>
            <a href="/en/products/lf6130" className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white">View LF6130</a>
          </div>
        </div>
      </section>
    </main>
  );
}
