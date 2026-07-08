import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Mobile Light Towers | LFADJ",
  description:
    "Frequently asked questions about mobile light towers, diesel light towers, solar light towers, customization and export delivery.",
  alternates: {
    canonical: "https://lfadj.com/en/faq",
    languages: { en: "/en/faq", zh: "/zh/faq" },
  },
};

const sections = [
  {
    title: "Product Selection FAQ",
    items: [
      ["How should I choose between diesel and solar light towers?", "Diesel towers fit high-output, long-runtime jobsites. Solar towers fit low-noise, low-maintenance and emission-sensitive sites."],
      ["What projects use mobile light towers?", "They are used for construction, mining, roadwork, municipal work, rental fleets, emergency repair and industrial maintenance."],
      ["How do I choose mast height?", "Choose mast height by lighting area, work height, site layout and obstacles. Common options include 7.5m and 9m."],
      ["Is higher LED wattage always better?", "Not always. Lighting area, runtime, fuel use and glare control should be evaluated together."],
      ["What configuration suits rental fleets?", "Rental fleets usually need durable, easy-service, transport-friendly models with common voltage options."],
      ["What configuration suits emergency repair work?", "Emergency work needs fast deployment, reliable engine power, long runtime and high-output LED lighting."],
    ],
  },
  {
    title: "Customization FAQ",
    items: [
      ["Do you support OEM / ODM?", "Yes. LFADJ supports OEM / ODM for branding, configuration and market-specific requirements."],
      ["Can the logo and color be customized?", "Yes. Body color, logo placement and basic branding can be customized."],
      ["Can I choose Kubota, Yanmar or Perkins engines?", "Engine options can be discussed based on order quantity, market requirements and supply availability."],
      ["Do you support 50Hz / 60Hz?", "Yes. Frequency can be configured for the target market."],
      ["Do you support 110V / 220V?", "Yes. Voltage can be adjusted according to project and country requirements."],
      ["Can the configuration match local standards?", "Yes. Plug, socket, trailer, voltage and document requirements can be reviewed before quotation."],
    ],
  },
  {
    title: "Export Delivery FAQ",
    items: [
      ["How many light towers fit in one 40HQ container?", "Loading quantity depends on model, packing method and final configuration. We confirm this before quotation."],
      ["Do you support export packing?", "Yes. Units can be fixed and packed for sea freight, land transport and full-container shipment."],
      ["Can you provide English documents?", "Yes. English datasheets, product photos and basic export documents are available."],
      ["What is the usual lead time?", "Lead time depends on configuration, quantity and production schedule. Standard configurations are usually faster."],
      ["Do you support FOB port terms?", "Yes. FOB is available, and CIF can be discussed by destination port."],
      ["What information is needed before quotation?", "Please provide country, application, quantity, voltage/frequency, working environment and customization needs."],
    ],
  },
  {
    title: "Working Environment FAQ",
    items: [
      ["What matters in hot desert environments?", "Cooling, air filtration, heat-rated wiring and fuel capacity should be reviewed."],
      ["What configuration is needed for dusty sites?", "Enhanced air filtration, dust-resistant electrical cabinets and easy-clean radiators are recommended."],
      ["How should coastal or corrosive sites be handled?", "Anti-corrosion coating, galvanized chassis and corrosion-resistant connectors are recommended."],
      ["How can cold-start performance be improved?", "Low-temperature batteries, engine preheating and suitable fluids can improve cold-start reliability."],
      ["How does high altitude affect the engine?", "High altitude may reduce engine output, so power matching and configuration confirmation are needed."],
      ["How do I choose a light tower for my project environment?", "Share country, altitude, temperature, dust, humidity and daily working hours so LFADJ can recommend a configuration."],
    ],
  },
];

export default function EnglishFaqPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">FAQ</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">FAQ</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Frequently Asked Questions About Mobile Light Towers
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.title}</h2>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {section.items.map(([q, a]) => (
                  <article key={q} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">{q}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{a}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
