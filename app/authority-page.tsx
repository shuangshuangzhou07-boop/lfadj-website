import { ConversionFlow } from "./conversion-flow";
import { SiteNav } from "./site-nav";

export type AuthoritySection = {
  title: string;
  body: string[];
};

export type AuthorityLink = {
  label: string;
  href: string;
};

export type AuthorityPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  sections: AuthoritySection[];
  links: AuthorityLink[];
};

export function AuthorityPage({ content }: { content: AuthorityPageContent }) {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              {content.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              {content.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {content.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-black hover:border-blue-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-[1200px] space-y-8">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-2xl font-bold tracking-tight text-black">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Procurement Checklist for Mobile Light Tower Buyers
              </h2>
              <div className="mt-5 space-y-4">
                <p className="text-base leading-8 text-gray-600">
                  Before sending an inquiry, industrial buyers should document
                  the target application, operating hours, required lighting
                  coverage, mast height, transport method, local climate, fuel
                  or charging access, operator skill and maintenance plan. These
                  details help a manufacturer recommend a mobile light tower
                  configuration that fits the actual jobsite instead of relying
                  only on generic catalog specifications. Procurement teams,
                  contractors, mining operators and rental companies should also
                  compare total cost of ownership, service access, lamp life,
                  engine or battery support, spare parts availability and export
                  documentation.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  A professional sourcing process should connect product
                  selection with application proof, OEM capability and contact
                  conversion. Buyers can review the product hub, compare
                  application pages, read blog guides, evaluate manufacturer
                  support and then contact LFADJ with project requirements. This
                  internal path creates a clear B2B decision flow: understand the
                  equipment, match it to the industry, confirm supplier
                  capability and request a quotation. For Google and for human
                  buyers, that structure reinforces topical authority around
                  mobile light tower equipment.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  For competitive purchasing, buyers should also record whether
                  the project is for direct operation, resale, rental fleet
                  expansion or OEM distribution. This affects the importance of
                  branding, manuals, spare parts, packaging, training,
                  inspection documents and long-term supplier communication. A
                  contractor may prioritize immediate performance on one
                  project, while a distributor or rental company needs repeatable
                  product quality across many customers. Treating the mobile
                  light tower as an industrial asset, not a simple lamp, leads
                  to better sourcing decisions.
                  It also improves quotation accuracy and reduces costly
                  specification changes after production begins.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                E-E-A-T Authority: LFADJ Manufacturer Background
              </h2>
              <div className="mt-5 space-y-4">
                <p className="text-base leading-8 text-gray-600">
                  LFADJ (Zhejiang Longfa Lighting Equipment Co., Ltd) is
                  positioned as a mobile light tower manufacturer with 15+ years
                  of manufacturing experience and OEM/ODM factory capability in
                  China. For B2B buyers, this identity matters because lighting
                  tower procurement is not only a catalog selection. It requires
                  technical review, stable production, export communication,
                  documentation, after-sales planning and the ability to support
                  contractors, mining operators, municipal buyers and rental
                  fleets over repeated projects.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  The engineering authority behind {content.title} includes LED
                  efficiency, mast system engineering, generator system matching,
                  fuel runtime optimization and IP protection for outdoor
                  environments. A professional lighting tower must balance lamp
                  performance, mast height, wind resistance, power stability,
                  trailer mobility and maintenance access. These factors help
                  buyers compare a mobile light tower manufacturer by practical
                  operating value instead of surface-level specifications.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  LFADJ content is written for industrial usage scenarios:
                  mining, construction, emergency rescue, municipal work and
                  rental fleets. These industries require equipment that can be
                  deployed quickly, operate in difficult weather, support long
                  runtime and remain serviceable in the field. The goal of this
                  page is to help buyers understand how the technology,
                  application and sourcing decision fit together.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Engineering Features and Technical Authority
              </h2>
              <div className="mt-5 space-y-4">
                <p className="text-base leading-8 text-gray-600">
                  The generator system is the foundation of a diesel mobile
                  lighting tower because it determines voltage stability, fuel
                  consumption and whether the LED lamp system can operate
                  consistently during long shifts. A well-matched generator
                  reduces overload risk, supports cleaner power delivery and
                  helps extend the useful life of electrical components.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  LED lumen performance should be evaluated through useful light
                  coverage, beam angle, fixture quality and energy efficiency,
                  not wattage alone. A high-efficiency LED system can reduce
                  generator load and improve runtime. The mast system structure
                  also matters: hydraulic or telescopic mast engineering affects
                  deployment time, stability, working height and lighting
                  distribution across the jobsite.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  Wind resistance capability and IP rating are critical for
                  outdoor use. Wind resistance supports safer mast operation in
                  open construction, mining and road infrastructure conditions.
                  IP protection helps protect lamp assemblies against dust and
                  rain. Runtime calculation should consider fuel tank capacity,
                  generator load, LED efficiency, temperature and actual duty
                  cycle. These details are essential for buyers comparing a
                  diesel light tower for mining, a construction lighting
                  solution or an emergency lighting tower supplier.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Real Project Case
              </h2>
              <div className="mt-5 space-y-4">
                <p className="text-base leading-8 text-gray-600">
                  A representative field deployment for {content.title} is a
                  night construction and emergency repair environment where the
                  work area has no stable grid power. An LF6130 or equivalent
                  diesel LED mobile light tower can be positioned near a road
                  repair zone, mining access road, flood recovery site or
                  municipal maintenance area. The deployment environment may
                  include dust, rain, uneven ground, vehicle movement and long
                  operating hours after sunset.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  In this type of project, the operating conditions typically
                  require stable generator output, LED brightness, elevated mast
                  coverage, weather protection and runtime planning for a full
                  shift. The model used should provide enough lighting coverage
                  for workers and equipment while keeping setup time low. For
                  procurement teams, the case demonstrates why equipment choice
                  must consider field environment, runtime, mast operation, fuel
                  logistics and service access rather than price alone.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Buyer Decision System and Total Cost of Ownership
              </h2>
              <div className="mt-5 space-y-4">
                <p className="text-base leading-8 text-gray-600">
                  Buyers should choose {content.title} by comparing procurement
                  risk, operating cost and deployment value. Fuel cost,
                  maintenance frequency, lamp life, setup time, transport
                  effort, spare parts and downtime all contribute to total cost
                  of ownership. A low purchase price can become expensive if the
                  tower uses more fuel, takes longer to deploy, lacks spare
                  parts or does not match the application.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  The buyer checklist should include application type, required
                  lighting area, runtime target, mast height, site weather,
                  expected wind, operator skill, fuel or charging access,
                  transport route, maintenance resources, OEM branding needs and
                  documentation requirements. This helps a contractor, rental
                  company, mining operator or municipal procurement team select
                  the correct model instead of overbuying or under-specifying.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  Comparison insight is important. Diesel towers are strong for
                  long runtime and remote worksites. LED systems are important
                  for efficiency and lamp life. Solar towers can reduce fuel
                  demand in suitable climates, while battery systems may support
                  low-noise projects. For many industrial sites, a diesel LED
                  tower such as LF6130 or an equivalent model remains practical
                  because it combines independent power with efficient
                  illumination and mobile deployment.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 space-y-5">
                {[
                  {
                    q: `What is the main buyer value of ${content.title}?`,
                    a: "The main value is dependable temporary illumination for industrial environments where fixed lighting is unavailable or inefficient. Buyers gain mobility, faster deployment, independent operation and a clearer path from application requirement to quotation.",
                  },
                  {
                    q: "How should buyers compare diesel, LED, solar and battery options?",
                    a: "Buyers should separate power source from lamp technology. Diesel supports long runtime and remote operation, LED improves efficiency, solar reduces fuel use in suitable climates, and battery systems can help low-noise projects. The right choice depends on operating hours, weather, charging access and duty cycle.",
                  },
                  {
                    q: "Why does mast system engineering matter?",
                    a: "The mast system controls working height, deployment speed, stability and light distribution. Hydraulic or telescopic mast quality affects operator effort, jobsite setup time and the ability to illuminate a large work area safely.",
                  },
                  {
                    q: "What should procurement teams ask a mobile light tower manufacturer?",
                    a: "Procurement teams should ask about generator configuration, LED performance, IP protection, wind resistance, runtime, spare parts, warranty support, OEM/ODM capability, documentation and global shipping. These questions reveal whether the supplier can support real industrial projects.",
                  },
                  {
                    q: "When should a buyer contact LFADJ?",
                    a: "Buyers should contact LFADJ when they know the application, approximate lighting area, runtime requirement, quantity, target market and any OEM needs. This information helps LFADJ recommend a suitable mobile light tower configuration and quotation path.",
                  },
                ].map((item) => (
                  <div key={item.q}>
                    <h3 className="text-lg font-bold text-black">{item.q}</h3>
                    <p className="mt-2 text-base leading-8 text-gray-600">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
        <ConversionFlow />
      </main>
    </>
  );
}
