import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LFADJ Mobile Light Tower Manufacturer",
  description:
    "LFADJ is a professional manufacturer of mobile light towers for construction, mining, and emergency applications. OEM/ODM available.",
  alternates: {
    canonical: "https://lfadj.com/en/applications",
  },
  openGraph: {
    title: "LFADJ Mobile Light Tower Manufacturer",
    description:
      "Industrial mobile lighting solutions for construction, mining, and emergency use.",
    url: "https://lfadj.com/en/applications",
    type: "website",
  },
};

const applicationCards = [
  {
    title: "Construction Lighting",
    text: "Mobile light towers support night work, concrete pouring, road construction and temporary outdoor operations where stable illumination is required.",
  },
  {
    title: "Mining Lighting",
    text: "Diesel light towers help mining teams illuminate remote yards, access roads and maintenance zones with dependable runtime.",
  },
  {
    title: "Emergency Lighting",
    text: "Fast-deployment light towers provide temporary site visibility for rescue, recovery, public safety and disaster relief.",
  },
  {
    title: "Rental Fleet Lighting",
    text: "Trailer-mounted lighting towers are practical assets for rental companies serving construction, municipal and industrial clients.",
  },
];

export default function EnglishApplicationsPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            Applications
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Mobile Light Tower Applications for Outdoor Worksites
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            LFADJ mobile light towers are designed for demanding B2B worksites
            where reliable temporary lighting is essential. Construction
            contractors, mining operators, emergency teams and rental fleets
            need equipment that can be transported quickly, deployed safely and
            operated for long shifts. A professional mobile light tower combines
            high-brightness LED lamps, a stable hydraulic mast, durable trailer
            structure and weather protection for outdoor operation. For buyers
            comparing a mobile light tower manufacturer, diesel light tower
            supplier or portable lighting tower OEM partner, application fit is
            often the first decision point. LF6130 gives project teams a
            practical lighting platform for construction sites, mining areas,
            municipal maintenance, road work, rescue scenes and temporary event
            support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/en/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">LF6130 Product</a>
            <a href="/en/products" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Products</a>
            <a href="/en/case-studies" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Case Studies</a>
            <a href="/en/blog" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">Blog</a>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Application Scenarios
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applicationCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Choosing Lighting by Project Type
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              "Select diesel-powered lighting for long runtime and remote areas.",
              "Choose hydraulic mast systems when fast setup and height control matter.",
              "Work with LFADJ for OEM configuration, branding and export-ready support.",
            ].map((item) => (
              <p key={item} className="rounded-2xl border border-gray-200 p-6 text-sm leading-6 text-gray-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            LFADJ Application Support Trust
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["LF6130 product hub", "Construction and mining use cases", "OEM project support", "Global B2B communication"].map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold">Need Lighting for Your Worksite?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Contact LFADJ for mobile light tower specifications, pricing and application support.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/en/contact" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white">Contact Us</a>
            <a href="/en/products/lf6130" className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white">View LF6130</a>
          </div>
        </div>
      </section>
    </main>
  );
}
