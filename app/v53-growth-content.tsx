export type GrowthLanguage = "en" | "zh";

export type GrowthBlogSlug =
  | "what-is-mobile-light-tower"
  | "diesel-vs-solar-light-tower"
  | "how-to-choose-light-tower-for-construction"
  | "mining-site-lighting-solution-guide"
  | "portable-light-tower-buying-guide"
  | "light-tower-rental-vs-buying"
  | "emergency-lighting-solution-guide"
  | "top-light-tower-manufacturers-comparison";

export type GrowthApplicationSlug =
  | "construction-site-lighting"
  | "mining-site-lighting"
  | "emergency-rescue-lighting"
  | "rental-fleet-lighting";

type GrowthLink = {
  label: string;
  href: string;
};

type GrowthPageData = {
  eyebrow: string;
  title: string;
  description: string;
  scenario?: string;
  recommendation?: string;
  primaryKeyword: string;
  intent: string;
  audience: string;
  environment: string;
  sections: string[];
  faq: Array<{ q: string; a: string }>;
  links: GrowthLink[];
};

const coreLinks: GrowthLink[] = [
  { label: "LF6130 Mobile Light Tower", href: "/products/lf6130" },
  { label: "Diesel Light Tower", href: "/products/diesel-light-tower" },
  { label: "LED Light Tower", href: "/products/led-light-tower" },
  { label: "Light Tower Manufacturer OEM", href: "/oem/light-tower-manufacturer" },
  { label: "Construction Lighting Application", href: "/applications/construction-site-lighting" },
  { label: "Mining Lighting Application", href: "/applications/mining-site-lighting" },
  { label: "Emergency Lighting Application", href: "/applications/emergency-rescue-lighting" },
  { label: "Contact Sales", href: "/contact" },
];

export const blogCluster: Record<GrowthBlogSlug, GrowthPageData> = {
  "what-is-mobile-light-tower": {
    eyebrow: "SEO Guide",
    title: "What Is a Mobile Light Tower?",
    description:
      "A mobile light tower is a portable lighting system for construction, mining, emergency rescue and rental projects that need reliable outdoor illumination.",
    primaryKeyword: "Mobile Light Tower",
    intent: "definition and industrial buyer education",
    audience: "contractors, rental companies, mining operators and procurement teams",
    environment: "temporary jobsites, remote work areas and night operations",
    sections: [
      "Mobile light tower definition and core components",
      "How diesel light tower systems support remote work",
      "LED efficiency, mast height and lighting coverage",
      "Construction lighting solution selection factors",
      "Mining lighting tower safety and runtime planning",
      "Portable light tower manufacturer evaluation",
      "When LF6130 becomes the practical product choice",
    ],
    faq: [
      {
        q: "What is a mobile light tower used for?",
        a: "A mobile light tower is used to illuminate temporary outdoor work areas where fixed lighting or grid power is not available.",
      },
      {
        q: "Is LF6130 suitable for construction lighting?",
        a: "Yes. LF6130 supports construction lighting solution needs with a diesel power system, hydraulic mast and LED lighting output.",
      },
      {
        q: "Why compare mobile light tower manufacturers?",
        a: "Manufacturer capability affects OEM support, spare parts, export documentation, production consistency and long-term service value.",
      },
    ],
    links: coreLinks,
  },
  "diesel-vs-solar-light-tower": {
    eyebrow: "Comparison Guide",
    title: "Diesel vs Solar Light Tower Comparison",
    description:
      "Compare diesel light tower and solar light tower systems for runtime, deployment, maintenance, climate suitability and industrial project use.",
    primaryKeyword: "Diesel Light Tower",
    intent: "comparison and procurement decision",
    audience: "buyers comparing fuel-powered and renewable temporary lighting",
    environment: "construction sites, mines, road work, municipal projects and rental fleets",
    sections: [
      "Diesel light tower operating advantages",
      "Solar light tower limitations and best-use conditions",
      "Runtime, weather and energy reliability comparison",
      "Maintenance cost and total cost of ownership",
      "Construction and mining application decision rules",
      "When to select LF6130 for diesel LED performance",
      "How OEM manufacturer support reduces sourcing risk",
    ],
    faq: [
      {
        q: "Is diesel or solar better for mining lighting?",
        a: "Diesel is often stronger for remote mining lighting where long runtime, stable power and weather independence are critical.",
      },
      {
        q: "Can solar light towers replace diesel systems?",
        a: "Solar towers can help suitable low-load projects, but diesel towers remain practical for heavy-duty night operations and remote sites.",
      },
      {
        q: "Does LF6130 support long runtime projects?",
        a: "LF6130 is positioned for long-duration industrial lighting where diesel power, LED efficiency and mobile deployment are required.",
      },
    ],
    links: coreLinks,
  },
  "how-to-choose-light-tower-for-construction": {
    eyebrow: "Construction Buyer Guide",
    title: "How to Choose a Light Tower for Construction",
    description:
      "A construction lighting solution guide for selecting mobile light tower equipment by mast height, LED output, runtime, mobility and supplier support.",
    primaryKeyword: "Construction Lighting Solution",
    intent: "construction procurement guidance",
    audience: "contractors, road builders, civil engineering buyers and rental managers",
    environment: "building sites, concrete work, highway projects, tunnel entrances and infrastructure zones",
    sections: [
      "Define the construction lighting area and safety requirement",
      "Choose mast height and LED coverage for night work",
      "Compare diesel, LED and portable light tower options",
      "Plan runtime, fuel logistics and maintenance access",
      "Evaluate road construction and tunnel lighting needs",
      "Use LF6130 as a construction mobile lighting benchmark",
      "Request RFQ data from a lighting tower manufacturer",
    ],
    faq: [
      {
        q: "What light tower is best for construction sites?",
        a: "A diesel LED mobile light tower is often suitable when the site needs independent power, reliable runtime and wide-area illumination.",
      },
      {
        q: "Why does mast height matter for construction lighting?",
        a: "Mast height affects light distribution, shadows, worker visibility and how many towers are needed for a jobsite.",
      },
      {
        q: "Should contractors buy or rent light towers?",
        a: "Contractors should compare project duration, fleet utilization, maintenance capacity and long-term equipment demand before deciding.",
      },
    ],
    links: coreLinks,
  },
  "mining-site-lighting-solution-guide": {
    eyebrow: "Mining Lighting Guide",
    title: "Mining Site Lighting Solution Guide",
    description:
      "Industrial guide for mining lighting tower selection covering open pit mines, night operations, remote power, wind resistance and LF6130 deployment.",
    primaryKeyword: "Mining Lighting Tower",
    intent: "mining application and equipment planning",
    audience: "mine operators, contractors, equipment distributors and safety managers",
    environment: "open pit mining, haul roads, maintenance pads and remote mineral projects",
    sections: [
      "Mining lighting tower requirements for remote operation",
      "Open pit mining visibility and safety planning",
      "Diesel generator stability and LED efficiency",
      "Mast system, wind resistance and IP protection",
      "Night operations, maintenance zones and equipment yards",
      "LF6130 recommendation for mining site lighting",
      "OEM support for mining contractors and distributors",
    ],
    faq: [
      {
        q: "What makes a mining lighting tower different?",
        a: "Mining lighting towers must support remote operation, dust, vibration, long runtime, wide coverage and field maintenance access.",
      },
      {
        q: "Can LF6130 be used for open pit mining?",
        a: "LF6130 is suitable for open pit mining support areas, haul roads and temporary night operation zones that need mobile LED lighting.",
      },
      {
        q: "Why is diesel power common in mining lighting?",
        a: "Diesel power is common because many mining sites are remote and require independent energy for long shifts.",
      },
    ],
    links: coreLinks,
  },
  "portable-light-tower-buying-guide": {
    eyebrow: "Buying Guide",
    title: "Portable Light Tower Buying Guide",
    description:
      "Portable light tower buying guide for B2B teams comparing mobile lighting equipment, diesel LED systems, OEM suppliers and application needs.",
    primaryKeyword: "Portable Light Tower Manufacturer",
    intent: "commercial buying decision",
    audience: "importers, distributors, rental fleets, project contractors and procurement teams",
    environment: "construction, mining, emergency, rental and municipal temporary lighting projects",
    sections: [
      "Define portable light tower project requirements",
      "Compare trailer structure, mast system and lamp output",
      "Check diesel generator, LED efficiency and runtime",
      "Review manufacturer certifications and OEM capability",
      "Calculate total cost of ownership before purchase",
      "Use LF6130 as a portable diesel LED reference",
      "Build an RFQ package for a light tower manufacturer",
    ],
    faq: [
      {
        q: "What should buyers check before purchasing a portable light tower?",
        a: "Buyers should check application, runtime, mast height, lamp efficiency, generator system, service access and OEM documentation.",
      },
      {
        q: "Is LF6130 a portable light tower?",
        a: "LF6130 is a trailer-mounted mobile light tower designed for portable deployment in industrial outdoor projects.",
      },
      {
        q: "Why is OEM capability important?",
        a: "OEM capability helps distributors and project buyers align branding, documentation, configuration and repeat supply needs.",
      },
    ],
    links: coreLinks,
  },
  "light-tower-rental-vs-buying": {
    eyebrow: "Rental vs Buying",
    title: "Light Tower Rental vs Buying",
    description:
      "Compare light tower rental and buying decisions for contractors, rental fleets, construction projects and long-term industrial lighting needs.",
    primaryKeyword: "Mobile Light Tower",
    intent: "rental and ownership decision",
    audience: "contractors, fleet owners, distributors, municipal buyers and project planners",
    environment: "temporary lighting projects, seasonal work, fleet expansion and recurring construction demand",
    sections: [
      "When renting light towers makes sense",
      "When buying improves long-term project control",
      "Fleet utilization, maintenance and TCO calculation",
      "Diesel light tower value for recurring night work",
      "Rental fleet lighting requirements and equipment durability",
      "LF6130 for rental-ready industrial deployment",
      "Manufacturer support for dealers and fleet buyers",
    ],
    faq: [
      {
        q: "Is it better to rent or buy a light tower?",
        a: "Renting fits short projects, while buying may be better for repeated use, rental fleet operation or long-term industrial demand.",
      },
      {
        q: "What matters for rental fleet lighting?",
        a: "Rental fleets need durable trailer structure, reliable engine systems, easy maintenance, clear documentation and high utilization value.",
      },
      {
        q: "Can LF6130 support rental companies?",
        a: "LF6130 is designed for mobile deployment, making it suitable for equipment rental fleets and temporary lighting projects.",
      },
    ],
    links: coreLinks,
  },
  "emergency-lighting-solution-guide": {
    eyebrow: "Emergency Lighting Guide",
    title: "Emergency Lighting Solution Guide",
    description:
      "Emergency lighting solution guide for flood control, fire rescue, repair teams and municipal response using mobile light tower equipment.",
    primaryKeyword: "Emergency Lighting Solution",
    intent: "emergency procurement and response planning",
    audience: "municipal buyers, emergency contractors, repair crews and public safety teams",
    environment: "flood control zones, fire rescue scenes, road repair and disaster recovery",
    sections: [
      "Emergency lighting tower deployment requirements",
      "Flood control and disaster response visibility",
      "Fire rescue support and rapid setup needs",
      "Diesel LED systems for independent emergency power",
      "Mast coverage, mobility and night repair operations",
      "LF6130 as an emergency mobile lighting option",
      "Contact and RFQ preparation for urgent projects",
    ],
    faq: [
      {
        q: "What is an emergency lighting tower?",
        a: "An emergency lighting tower is a mobile system used to provide temporary illumination during rescue, repair and disaster response.",
      },
      {
        q: "Why use diesel light towers for emergency work?",
        a: "Diesel light towers provide independent power and long runtime when grid power is unavailable or unreliable.",
      },
      {
        q: "Is LF6130 suitable for flood control lighting?",
        a: "LF6130 can support flood control and night repair areas where mobile lighting and stable outdoor operation are needed.",
      },
    ],
    links: coreLinks,
  },
  "top-light-tower-manufacturers-comparison": {
    eyebrow: "Manufacturer Comparison",
    title: "Top Light Tower Manufacturers Comparison",
    description:
      "Compare light tower manufacturers by product engineering, OEM support, export capability, application experience and industrial buyer value.",
    primaryKeyword: "Lighting Tower Manufacturer",
    intent: "supplier comparison and commercial evaluation",
    audience: "global importers, distributors, OEM buyers, contractors and rental fleet owners",
    environment: "international sourcing, OEM projects, fleet procurement and industrial tenders",
    sections: [
      "How to compare mobile light tower manufacturers",
      "Product engineering and diesel LED system quality",
      "OEM/ODM support and production capability",
      "Global export, FOB/CIF support and documentation",
      "Application knowledge for construction and mining",
      "LFADJ and LF6130 as the authority hub",
      "Internal evaluation checklist before supplier contact",
    ],
    faq: [
      {
        q: "How do buyers compare light tower manufacturers?",
        a: "Buyers should compare engineering depth, certifications, OEM capability, export support, product range, spare parts and response quality.",
      },
      {
        q: "Why is manufacturer direct supply important?",
        a: "Factory direct supply can improve communication, configuration control, documentation accuracy and long-term sourcing consistency.",
      },
      {
        q: "Does LFADJ support OEM light tower projects?",
        a: "LFADJ supports OEM/ODM requirements for industrial mobile lighting tower projects and global B2B customers.",
      },
    ],
    links: coreLinks,
  },
};

export const applicationCluster: Record<GrowthApplicationSlug, GrowthPageData> = {
  "construction-site-lighting": {
    eyebrow: "Application",
    title: "Construction Site Lighting Solution",
    description:
      "Construction site lighting page for road work, tunnel lighting, infrastructure projects and night construction with LF6130 recommendation.",
    scenario:
      "A contractor is preparing night road construction with asphalt paving, traffic control, equipment movement and workers spread across several temporary zones.",
    recommendation:
      "LF6130 is recommended when the project needs a diesel mobile light tower with LED lighting, hydraulic mast deployment and stable outdoor runtime.",
    primaryKeyword: "Construction Lighting Solution",
    intent: "application conversion",
    audience: "construction contractors, infrastructure companies and rental fleets",
    environment: "road construction, tunnel lighting, bridge work and infrastructure projects",
    sections: [
      "Road construction lighting requirements",
      "Tunnel lighting and infrastructure visibility",
      "LF6130 equipment recommendation for construction",
      "Safety, runtime and deployment checklist",
      "Internal link path from application to product RFQ",
    ],
    faq: [
      {
        q: "What lighting is needed for construction sites?",
        a: "Construction sites need stable, wide-area lighting with safe mast height, reliable runtime and quick deployment.",
      },
      {
        q: "Is LF6130 suitable for road construction?",
        a: "Yes. LF6130 supports road construction lighting with diesel power, LED output and mobile trailer deployment.",
      },
      {
        q: "How many light towers does a construction site need?",
        a: "The quantity depends on work area, mast height, beam direction, site layout and required safety visibility.",
      },
    ],
    links: coreLinks,
  },
  "mining-site-lighting": {
    eyebrow: "Application",
    title: "Mining Site Lighting Solution",
    description:
      "Mining site lighting solution for open pit mining, night operations and remote industrial work areas using LF6130 mobile light tower equipment.",
    scenario:
      "A mining operator needs lighting for an open pit access road, maintenance area and loading zone that operate at night in dusty remote conditions.",
    recommendation:
      "LF6130 is recommended for mining support zones that require diesel power, LED efficiency, mast elevation and mobile deployment.",
    primaryKeyword: "Mining Lighting Tower",
    intent: "application conversion",
    audience: "mine operators, mining contractors and industrial distributors",
    environment: "open pit mining, haul roads, maintenance pads and night operations",
    sections: [
      "Open pit mining lighting challenges",
      "Night operations and remote power requirements",
      "LF6130 equipment recommendation for mining",
      "Weather, dust, runtime and service planning",
      "Internal link path from mining application to RFQ",
    ],
    faq: [
      {
        q: "What is a mining lighting tower?",
        a: "A mining lighting tower is a mobile lighting system used to illuminate remote mining work zones, roads and equipment areas.",
      },
      {
        q: "Why use diesel power in mining lighting?",
        a: "Diesel power supports remote operation where grid power is unavailable and long runtime is required.",
      },
      {
        q: "Can LF6130 support open pit mining?",
        a: "LF6130 can support open pit mining roads, support areas and temporary maintenance lighting.",
      },
    ],
    links: coreLinks,
  },
  "emergency-rescue-lighting": {
    eyebrow: "Application",
    title: "Emergency Rescue Lighting Solution",
    description:
      "Emergency rescue lighting solution for flood control, fire rescue, road repair and public safety response with LF6130 mobile light tower support.",
    scenario:
      "A municipal response team needs rapid lighting after a flood damages power access and night repair crews must work safely near water and vehicles.",
    recommendation:
      "LF6130 is recommended for emergency response teams that need mobile LED lighting, independent diesel power and fast site positioning.",
    primaryKeyword: "Emergency Lighting Solution",
    intent: "application conversion",
    audience: "municipal teams, rescue contractors, repair companies and public safety buyers",
    environment: "flood control, fire rescue, disaster recovery and emergency road repair",
    sections: [
      "Emergency lighting deployment scenarios",
      "Flood control and fire rescue visibility",
      "LF6130 equipment recommendation for emergency use",
      "Fast setup, runtime and safety planning",
      "Internal link path from emergency page to product inquiry",
    ],
    faq: [
      {
        q: "What is emergency rescue lighting?",
        a: "Emergency rescue lighting provides temporary illumination for repair, disaster response and public safety work after dark.",
      },
      {
        q: "Why is mobile lighting important in flood control?",
        a: "Mobile lighting supports crews when fixed power is unavailable and work zones shift quickly.",
      },
      {
        q: "Is LF6130 suitable for emergency rescue?",
        a: "LF6130 can support emergency rescue lighting with mobile deployment and independent diesel power.",
      },
    ],
    links: coreLinks,
  },
  "rental-fleet-lighting": {
    eyebrow: "Application",
    title: "Rental Fleet Lighting Solution",
    description:
      "Rental fleet lighting solution for equipment rental companies comparing mobile light tower durability, utilization, maintenance and LF6130 fleet value.",
    scenario:
      "A rental company is expanding its light tower fleet for contractors that need temporary lighting across construction, road work and emergency projects.",
    recommendation:
      "LF6130 is recommended for rental fleet buyers because trailer-mounted diesel LED lighting can support repeated deployment and varied jobsite needs.",
    primaryKeyword: "Portable Light Tower Manufacturer",
    intent: "application conversion",
    audience: "rental companies, distributors and fleet procurement teams",
    environment: "equipment rental fleets, temporary lighting projects and recurring contractor demand",
    sections: [
      "Rental fleet lighting business requirements",
      "Temporary lighting project utilization factors",
      "LF6130 equipment recommendation for fleet buyers",
      "Maintenance, durability and TCO planning",
      "Internal link path from rental application to OEM contact",
    ],
    faq: [
      {
        q: "What light tower is suitable for rental fleets?",
        a: "Rental fleets need durable mobile light towers with easy deployment, reliable runtime, service access and clear documentation.",
      },
      {
        q: "Can LF6130 be used by rental companies?",
        a: "Yes. LF6130 is suitable for rental companies serving construction, mining, emergency and temporary lighting projects.",
      },
      {
        q: "What affects rental light tower profitability?",
        a: "Utilization, downtime, maintenance, fuel use, lamp life and customer demand all affect rental profitability.",
      },
    ],
    links: coreLinks,
  },
};

export function getGrowthMetadata(data: GrowthPageData, canonical: string) {
  return {
    title: `${data.title} | LFADJ Mobile Light Tower`,
    description: data.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${data.title} | LFADJ`,
      description: data.description,
      url: canonical,
      type: "website",
    },
  };
}

function localize(data: GrowthPageData, lang: GrowthLanguage): GrowthPageData {
  if (lang === "en") {
    return data;
  }

  return {
    ...data,
    eyebrow: "SEO 内容集群",
    title: `${data.title} 中文指南`,
    description: `${data.description} 本页面面向工业采购、工程承包商、矿山运营和租赁客户，说明 Mobile Light Tower、Diesel Light Tower 与 Lighting Tower Manufacturer 的选择逻辑。`,
    scenario: data.scenario
      ? `${data.scenario} 该场景适合用于评估移动照明灯塔在中国供应链和全球项目中的实际部署价值。`
      : undefined,
    recommendation: data.recommendation
      ? `${data.recommendation} LFADJ 可根据项目数量、应用环境和 OEM / ODM 需求提供选型建议。`
      : undefined,
    sections: data.sections.map((section) => `${section} 中文采购分析`),
    faq: data.faq.map((item) => ({
      q: `${item.q} 中文说明`,
      a: `${item.a} 采购团队还应结合应用场景、运行时间、维护成本、出口文件和供应商制造能力进行判断。`,
    })),
  };
}

function SectionParagraph({
  data,
  section,
  index,
  lang,
}: {
  data: GrowthPageData;
  section: string;
  index: number;
  lang: GrowthLanguage;
}) {
  if (lang === "zh") {
    return (
      <div className="mt-5 space-y-4">
        <p className="text-base leading-8 text-gray-600">
          {section} 需要把 {data.primaryKeyword} 放在真实工程环境中理解，而不是只看单一参数。
          对建筑施工、矿山作业、应急救援和设备租赁客户来说，采购重点包括照明覆盖、柴油供电、
          LED 效率、桅杆高度、运行时间、维护便利性和制造商长期支持。LF6130 Mobile Light Tower
          是该内容集群的核心产品页面，可帮助买家从应用需求走向 RFQ 询盘。
        </p>
        <p className="text-base leading-8 text-gray-600">
          在 {data.environment} 中，采购方通常需要比较 Diesel Light Tower、LED Light Tower、
          Portable Light Tower Manufacturer 和 OEM 供应能力。一个高质量页面必须解释问题、
          选择标准、真实场景和内链路径，让 Google 和买家都能理解 LFADJ 在移动照明灯塔领域的主题权威。
          本节围绕 {data.intent} 展开，并把内容连接到产品页、应用页、OEM 页和联系页面。
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-4">
      <p className="text-base leading-8 text-gray-600">
        {section} should be evaluated through the full industrial operating
        context, not by one catalog number alone. For {data.audience}, the
        decision normally includes illumination coverage, diesel power
        stability, LED efficiency, mast height, runtime, transport method,
        weather exposure, maintenance access and whether the supplier can
        provide consistent OEM documentation. A mobile light tower is a jobsite
        productivity asset, and the right choice depends on the way people,
        machines and safety supervisors use light after dark.
      </p>
      <p className="text-base leading-8 text-gray-600">
        In {data.environment}, buyers compare Mobile Light Tower, Diesel Light
        Tower, Mining Lighting Tower, Construction Lighting Solution and
        Portable Light Tower Manufacturer options by practical deployment
        value. The LF6130 page is the authority hub in this cluster because it
        connects technical specification, application proof, manufacturer trust
        and RFQ conversion. This section supports {data.intent} and creates a
        crawlable path from informational search to product evaluation, OEM
        review and contact inquiry.
      </p>
      {index % 2 === 0 ? (
        <p className="text-base leading-8 text-gray-600">
          Procurement teams should also compare total cost of ownership. Fuel
          use, service intervals, LED lifetime, mast reliability, spare parts,
          shipping terms and downtime risk often matter more than purchase price
          alone. A lighting tower manufacturer with export experience can help
          reduce specification mistakes, support distributor needs and prepare a
          clearer RFQ package for construction, mining, emergency or rental
          applications.
        </p>
      ) : null}
    </div>
  );
}

function RelatedContent({ links }: { links: GrowthLink[] }) {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-bold tracking-tight text-black">
          Related Content
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-bold text-gray-900 shadow-sm hover:border-blue-500 hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogGrowthPage({
  data,
  lang = "en",
}: {
  data: GrowthPageData;
  lang?: GrowthLanguage;
}) {
  const page = localize(data, lang);

  return (
    <main className="bg-white">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            {page.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            {page.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">
              LF6130 Product Page
            </a>
            <a href="/contact" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px] space-y-8">
          {page.sections.map((section, index) => (
            <article
              key={section}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold tracking-tight text-black">
                {section}
              </h2>
              <SectionParagraph
                data={page}
                section={section}
                index={index}
                lang={lang}
              />
            </article>
          ))}

          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              FAQ
            </h2>
            <div className="mt-5 space-y-5">
              {page.faq.map((item) => (
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
      <RelatedContent links={page.links} />
    </main>
  );
}

export function ApplicationGrowthPage({ data }: { data: GrowthPageData }) {
  return (
    <main className="bg-white">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            {data.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            {data.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/products/lf6130" className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white">
              Request Quote
            </a>
            <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Real Use-case Scenario
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              {data.scenario}
            </p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Equipment Recommendation
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              {data.recommendation}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">
                LF6130 Mobile Light Tower
              </a>
              <a href="/products/diesel-light-tower" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">
                Diesel Light Tower
              </a>
            </div>
          </article>
          {data.sections.map((section, index) => (
            <article
              key={section}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold tracking-tight text-black">
                {section}
              </h2>
              <SectionParagraph
                data={data}
                section={section}
                index={index}
                lang="en"
              />
            </article>
          ))}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              FAQ
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {data.faq.map((item) => (
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
      <RelatedContent links={data.links} />
    </main>
  );
}
