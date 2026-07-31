import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Language = "en" | "zh";

const content = {
  en: {
    title: "Light Tower Total Cost of Ownership: What Buyers Should Calculate",
    description:
      "Learn how to calculate light tower total cost of ownership using purchase, energy, maintenance, parts, transport, downtime and residual value.",
    eyebrow: "Selection Guide",
    resourcesLabel: "Resources",
    selectionGuidesLabel: "Selection Guides",
    breadcrumbCurrentLabel: "Light Tower TCO Guide",
    introduction:
      "Purchase price is only one part of a light tower’s total cost. Over the planned operating period, buyers should also consider energy use, maintenance, transport, downtime, equipment service life, and its expected resale or remaining value at the end of use so that different options can be compared on a consistent basis.",
    frameworkTitle: "Light tower TCO calculation framework",
    frameworkDescription:
      "Use the same planned operating period and cost assumptions when comparing options. Enter only project-specific figures that your team can verify.",
    totalCostLabel: "Total Cost of Ownership",
    totalCostItems: [
      { operator: "", label: "Initial Purchase Cost" },
      { operator: "+", label: "Fuel or Energy Cost" },
      { operator: "+", label: "Scheduled Maintenance" },
      { operator: "+", label: "Wear Parts and Spare Parts" },
      { operator: "+", label: "Transport and Deployment" },
      { operator: "+", label: "Downtime Cost" },
      {
        operator: "−",
        label: "Residual Value (expected resale or remaining value)",
      },
    ],
    hourlyCostLabel: "Cost per Operating Hour",
    hourlyCostFormula: "Total Cost of Ownership ÷ Total Operating Hours",
    note:
      "This framework explains the calculation method. It does not assume prices, consumption rates, maintenance intervals, service life or residual value.",
    componentsEyebrow: "Cost components",
    componentsTitle: "Seven components of light tower total cost of ownership",
    componentsIntroduction:
      "A useful comparison separates each cost category instead of treating the purchase price as the complete light tower operating cost.",
    costComponents: [
      {
        title: "Initial Purchase Cost",
        description:
          "Equipment price, options, accessories and project-specific configurations all affect the initial investment, but purchase price alone does not represent long-term cost.",
      },
      {
        title: "Fuel or Energy Cost",
        description:
          "Evaluate energy requirements using daily operating hours, annual operating days, load conditions and local energy availability. Use verified project inputs rather than assumed consumption, prices or savings.",
      },
      {
        title: "Scheduled Maintenance",
        description:
          "Include the materials and labor needed for inspections, servicing, lubrication, filters and other planned work. Light tower maintenance cost should follow the applicable equipment documentation and operating conditions, not an assumed universal interval.",
      },
      {
        title: "Wear Parts and Spare Parts",
        description:
          "Replacement needs for lamps, batteries, filter components, tires, electrical parts and other fitted components depend on the equipment type and operating conditions; not every light tower uses the same parts.",
      },
      {
        title: "Transport and Deployment",
        description:
          "Equipment weight, stowed dimensions, towing frequency, movement around the site and the personnel needed for deployment can all affect cost.",
      },
      {
        title: "Downtime Cost",
        description:
          "Downtime may lead to lost rental income, construction delays, replacement-equipment expense and onsite service cost. The calculation should use project evidence rather than an assumed failure probability.",
      },
      {
        title: "Service Life and Residual Value",
        description:
          "Maintenance history, operating environment, intensity of use and market demand can influence service life and residual value. Neither a fixed lifespan nor a resale price should be assumed.",
      },
    ],
    comparisonEyebrow: "Power-system comparison",
    comparisonTitle: "Diesel and solar light tower cost drivers",
    comparisonIntroduction:
      "Diesel and solar systems have different cost structures. The lower total cost of ownership depends on the actual configuration, operating profile, site conditions and available service support.",
    factorLabel: "Cost driver",
    dieselLabel: "Diesel light tower",
    solarLabel: "Solar light tower",
    comparisonRows: [
      {
        factor: "Initial equipment configuration",
        diesel:
          "Account for the engine, generator, fuel system and the lighting configuration required for the project.",
        solar:
          "Account for solar generation, battery storage, power controls and the lighting configuration required for the project.",
      },
      {
        factor: "Fuel or energy dependency",
        diesel:
          "Costs depend on fuel availability, delivery, storage, local pricing and the load placed on the configured system.",
        solar:
          "Costs and suitability depend on available sunlight, charging conditions, storage capacity, load and any required backup energy.",
      },
      {
        factor: "Daily operating hours",
        diesel:
          "May suit high-hour or continuous-output projects when refueling is defined and the equipment is configured for the duty.",
        solar:
          "Operating hours must be matched with solar generation, usable storage, charging time and the actual lighting load.",
      },
      {
        factor: "Scheduled maintenance",
        diesel:
          "Plan engine, generator and fuel-system maintenance using the applicable documentation, workload and site conditions.",
        solar:
          "Plan inspection of panels, electrical connections, controls and storage components according to the installed configuration and site conditions.",
      },
      {
        factor: "Battery or engine-related service",
        diesel:
          "Engine-related materials, parts, labor and local service access can influence lifecycle cost.",
        solar:
          "Battery condition, replacement requirements, control components, labor and local service access can influence lifecycle cost.",
      },
      {
        factor: "Transport and redeployment",
        diesel:
          "Towing, site movement and fuel logistics should be evaluated using actual weight, stowed dimensions and deployment frequency.",
        solar:
          "Towing, site movement and setup should reflect the panel and battery layout, actual dimensions and deployment frequency.",
      },
      {
        factor: "Noise-sensitive locations",
        diesel:
          "Engine noise, operating restrictions and any required mitigation can add project-specific constraints or cost.",
        solar:
          "Battery-powered operation may suit some noise-sensitive sites, but runtime, charging conditions and backup needs still require assessment.",
      },
      {
        factor: "Long-term or frequently relocated projects",
        diesel:
          "For long or frequently moved projects, include repeated refueling, service access, towing and deployment requirements.",
        solar:
          "Long-term deployment may be suitable where solar conditions support the load; frequent moves also require panel siting, setup and transport assessment.",
      },
      {
        factor: "Downtime and service accessibility",
        diesel:
          "Assess access to fuel, engine parts, qualified service and replacement equipment without assuming a failure rate.",
        solar:
          "Assess access to battery, electrical and solar-system diagnostics, parts and replacement equipment without assuming a failure rate.",
      },
    ],
    comparisonNote:
      "Neither power system is automatically cheaper or more reliable. Compare both options with the same operating period, workload and verified local cost inputs.",
    checklistEyebrow: "Procurement worksheet",
    checklistTitle: "Information to collect before calculating TCO",
    checklistIntroduction:
      "Use this checklist to establish a consistent project baseline. It is an information worksheet, not an automatic calculator, and no field has a default value.",
    checklistItems: [
      "Planned ownership period",
      "Operating hours per day",
      "Operating days per year",
      "Local fuel or energy cost",
      "Maintenance labor and parts",
      "Transport frequency",
      "Expected downtime impact",
      "Expected resale or residual value",
    ],
    calculationPromptTitle: "Calculation prompts",
    estimatedHoursLabel: "Estimated Total Operating Hours",
    estimatedHoursFormula:
      "Operating Hours per Day × Operating Days per Year × Ownership Years",
    estimatedCostLabel: "Cost per Operating Hour",
    estimatedCostFormula:
      "Estimated TCO ÷ Estimated Total Operating Hours",
    lfadjTitle: "How LFADJ supports project evaluation",
    lfadjStatement:
      "LFADJ evaluates fuel consumption, maintenance requirements, operating hours and project conditions to help customers select a more cost-effective lighting configuration.",
    relatedTitle: "Related resources",
    relatedLinks: [
      {
        label: "Review the LF955 diesel mobile light tower configuration",
        href: "/en/products/lf955",
      },
      {
        label: "Review the LF971 solar mobile light tower configuration",
        href: "/en/products/lf971",
      },
      {
        label: "Explore mobile lighting considerations for rental fleets",
        href: "/en/applications/rental-lighting",
      },
      {
        label: "Learn how to choose a light tower for your project",
        href: "/en/solutions/how-to-choose-the-right-light-tower",
      },
    ],
    ctaTitle: "Compare costs using your project conditions",
    ctaDescription:
      "Share your operating schedule, location, energy conditions, transport needs and maintenance resources. The review is based on the project information you provide; it is not an automatic quotation or a guarantee of cost savings.",
    ctaLabel: "Request a Project Lighting Cost Review",
    ctaHref: "/en/contact/request-a-quote",
    breadcrumbAria: "Breadcrumb",
  },
  zh: {
    title: "移动照明灯塔总拥有成本：采购前应该计算什么？",
    description:
      "了解如何将采购、能源、维护、备件、运输、停机和残值纳入移动照明灯塔总拥有成本计算。",
    eyebrow: "选型指南",
    resourcesLabel: "资源中心",
    selectionGuidesLabel: "选型指南",
    breadcrumbCurrentLabel: "移动照明灯塔TCO指南",
    introduction:
      "采购价格只是移动照明灯塔总成本的一部分。采购方还应在计划使用周期内评估能源消耗、维护、运输、停机、设备使用寿命，以及使用期结束后的转售或剩余价值，才能采用一致口径比较不同方案。",
    frameworkTitle: "移动照明灯塔总拥有成本计算框架",
    frameworkDescription:
      "比较不同方案时，应采用相同的计划使用周期和成本口径，并且只填写团队能够核实的项目数据。",
    totalCostLabel: "总拥有成本",
    totalCostItems: [
      { operator: "", label: "初始采购成本" },
      { operator: "+", label: "燃油或能源成本" },
      { operator: "+", label: "计划维护成本" },
      { operator: "+", label: "易损件和备件成本" },
      { operator: "+", label: "运输与部署成本" },
      { operator: "+", label: "停机成本" },
      { operator: "−", label: "残值（预计转售或剩余价值）" },
    ],
    hourlyCostLabel: "每运行小时成本",
    hourlyCostFormula: "总拥有成本 ÷ 总运行小时数",
    note:
      "本框架仅解释计算方法，不预设价格、消耗率、维护周期、使用寿命或残值。",
    componentsEyebrow: "成本组成",
    componentsTitle: "移动照明灯塔总拥有成本的七个组成部分",
    componentsIntroduction:
      "有效的成本比较需要拆分各项支出，而不能把采购价格视为移动照明灯塔的全部运行成本。",
    costComponents: [
      {
        title: "初始采购成本",
        description:
          "设备价格、选配件、附件和项目化配置都会影响初始投入，但采购价格本身不能代表设备的长期成本。",
      },
      {
        title: "燃油或能源成本",
        description:
          "应结合每天运行时间、年度使用天数、负载情况和当地能源供应条件评估能源需求，并使用经过核实的项目数据，不预设消耗量、能源价格或节省比例。",
      },
      {
        title: "定期保养成本",
        description:
          "应计入检查、保养、润滑、过滤器和其他计划性服务所需的材料与人工。保养成本应依据适用的设备文件和实际工况计算，不能套用未经确认的统一保养周期。",
      },
      {
        title: "易损件与备件成本",
        description:
          "灯具、电池、过滤部件、轮胎、电气部件及其他已配置部件的更换需求取决于设备类型和工况，并非所有移动照明灯塔都使用相同部件。",
      },
      {
        title: "运输与部署成本",
        description:
          "设备重量、收起尺寸、拖运频率、现场移动次数以及部署所需人员都会影响相关成本。",
      },
      {
        title: "故障与停机成本",
        description:
          "停机可能造成租赁收入损失、施工延误、替代设备支出和现场服务成本。计算时应采用项目依据，不能预设故障或停机概率。",
      },
      {
        title: "设备使用寿命和残值",
        description:
          "保养情况、运行环境、使用强度和市场需求都会影响设备寿命与残值，不能承诺固定使用寿命或转售价格。",
      },
    ],
    comparisonEyebrow: "动力方案比较",
    comparisonTitle: "柴油与太阳能移动照明灯塔的成本驱动因素",
    comparisonIntroduction:
      "柴油与太阳能方案具有不同的成本结构。哪种方案的总拥有成本更低，取决于实际配置、运行方式、现场条件和可获得的维修支持。",
    factorLabel: "成本驱动因素",
    dieselLabel: "柴油移动照明灯塔",
    solarLabel: "太阳能移动照明灯塔",
    comparisonRows: [
      {
        factor: "初始设备配置",
        diesel:
          "应计入发动机、发电机、燃油系统以及项目所需的照明配置。",
        solar:
          "应计入太阳能发电、储能电池、电源控制系统以及项目所需的照明配置。",
      },
      {
        factor: "燃油或能源依赖",
        diesel:
          "成本取决于燃油供应、运输、储存、当地价格以及实际配置所承受的负载。",
        solar:
          "成本与适用性取决于可用日照、充电条件、储能容量、负载以及是否需要备用能源。",
      },
      {
        factor: "每天运行时间",
        diesel:
          "在燃油补给明确且设备按实际工况配置时，可能适合高运行时长或需要持续输出的项目。",
        solar:
          "运行时间必须与太阳能发电量、可用储能、充电时间和实际照明负载相匹配。",
      },
      {
        factor: "计划维护",
        diesel:
          "应依据适用的设备文件、工作负载和现场条件，规划发动机、发电机及燃油系统维护。",
        solar:
          "应根据实际安装配置和现场条件，规划太阳能板、电气连接、控制系统及储能部件的检查。",
      },
      {
        factor: "电池或发动机相关维护",
        diesel:
          "发动机相关材料、部件、人工以及当地维修可达性都会影响全周期成本。",
        solar:
          "电池状态、更换需求、控制部件、人工以及当地维修可达性都会影响全周期成本。",
      },
      {
        factor: "运输和重新部署",
        diesel:
          "应根据实际重量、收起尺寸和部署频率，评估拖运、现场移动及燃油物流。",
        solar:
          "应结合太阳能板和电池布局、实际尺寸及部署频率，评估拖运、现场移动和安装。",
      },
      {
        factor: "对噪声敏感的场地",
        diesel:
          "发动机噪声、运行限制和可能需要的降噪措施会带来项目特定的约束或成本。",
        solar:
          "电池供电运行可能适合部分噪声敏感场地，但仍需评估运行时间、充电条件和备用能源需求。",
      },
      {
        factor: "长期项目或频繁转场项目",
        diesel:
          "对于长期或频繁转场项目，应计入重复燃油补给、维修可达性、拖运和部署要求。",
        solar:
          "日照条件能够支持负载时可能适合长期部署；频繁转场还需评估太阳能板选址、安装和运输。",
      },
      {
        factor: "停机及维修可达性",
        diesel:
          "应评估燃油、发动机部件、合格维修服务和替代设备的可获得性，不预设故障概率。",
        solar:
          "应评估电池、电气和太阳能系统诊断、部件及替代设备的可获得性，不预设故障概率。",
      },
    ],
    comparisonNote:
      "任何一种动力方案都不会自动拥有更低成本或更高可靠性。比较时应采用相同的运行周期、工作负载和经过核实的当地成本数据。",
    checklistEyebrow: "采购信息清单",
    checklistTitle: "计算总拥有成本前需要收集的信息",
    checklistIntroduction:
      "使用本清单建立统一的项目比较基准。它只用于收集信息，不提供自动计算功能，也不为任何项目预设默认数值。",
    checklistItems: [
      "计划持有时间",
      "每天运行时间",
      "每年运行天数",
      "当地燃油或能源成本",
      "维护人工和配件",
      "运输频率",
      "预计停机影响",
      "预计转售或残值",
    ],
    calculationPromptTitle: "计算提示",
    estimatedHoursLabel: "预计总运行小时数",
    estimatedHoursFormula:
      "每天运行小时数 × 每年运行天数 × 持有年数",
    estimatedCostLabel: "每运行小时成本",
    estimatedCostFormula:
      "预计总拥有成本 ÷ 预计总运行小时数",
    lfadjTitle: "LFADJ 如何支持项目评估",
    lfadjStatement:
      "LFADJ会结合燃油或能源消耗、维护要求、运行时间和项目条件进行评估，帮助客户选择更具成本效益的照明配置。",
    relatedTitle: "相关资源",
    relatedLinks: [
      {
        label: "查看 LF955 柴油移动照明灯塔配置",
        href: "/zh/products/lf955",
      },
      {
        label: "查看 LF971 太阳能移动照明灯塔配置",
        href: "/zh/products/lf971",
      },
      {
        label: "了解租赁车队的移动照明考虑因素",
        href: "/zh/applications/rental-lighting",
      },
      {
        label: "了解如何根据项目条件选择照明灯塔",
        href: "/zh/solutions/how-to-choose-the-right-light-tower",
      },
    ],
    ctaTitle: "根据您的项目条件比较成本",
    ctaDescription:
      "请提供运行计划、项目地点、能源条件、运输需求和维护资源。评估以您提交的项目资料为基础，不是自动报价，也不构成成本节省保证。",
    ctaLabel: "获取项目照明成本评估",
    ctaHref: "/zh/contact/request-a-quote",
    breadcrumbAria: "面包屑",
  },
} satisfies Record<
  Language,
  {
    title: string;
    description: string;
    eyebrow: string;
    resourcesLabel: string;
    selectionGuidesLabel: string;
    breadcrumbCurrentLabel: string;
    introduction: string;
    frameworkTitle: string;
    frameworkDescription: string;
    totalCostLabel: string;
    totalCostItems: Array<{ operator: string; label: string }>;
    hourlyCostLabel: string;
    hourlyCostFormula: string;
    note: string;
    componentsEyebrow: string;
    componentsTitle: string;
    componentsIntroduction: string;
    costComponents: Array<{ title: string; description: string }>;
    comparisonEyebrow: string;
    comparisonTitle: string;
    comparisonIntroduction: string;
    factorLabel: string;
    dieselLabel: string;
    solarLabel: string;
    comparisonRows: Array<{
      factor: string;
      diesel: string;
      solar: string;
    }>;
    comparisonNote: string;
    checklistEyebrow: string;
    checklistTitle: string;
    checklistIntroduction: string;
    checklistItems: string[];
    calculationPromptTitle: string;
    estimatedHoursLabel: string;
    estimatedHoursFormula: string;
    estimatedCostLabel: string;
    estimatedCostFormula: string;
    lfadjTitle: string;
    lfadjStatement: string;
    relatedTitle: string;
    relatedLinks: Array<{ label: string; href: string }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaLabel: string;
    ctaHref: string;
    breadcrumbAria: string;
  }
>;

function isLanguage(lang: string): lang is Language {
  return lang === "en" || lang === "zh";
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  if (!isLanguage(params.lang)) {
    return {};
  }

  const copy = content[params.lang];
  const canonical = `https://lfadj.com/${params.lang}/resources/light-tower-total-cost-of-ownership`;

  return {
    title: `${copy.title} | LFADJ`,
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        en: "https://lfadj.com/en/resources/light-tower-total-cost-of-ownership",
        "zh-CN": "https://lfadj.com/zh/resources/light-tower-total-cost-of-ownership",
      },
    },
    openGraph: {
      title: `${copy.title} | LFADJ`,
      description: copy.description,
      url: canonical,
      type: "article",
    },
  };
}

export default function LightTowerTotalCostOfOwnershipPage({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLanguage(params.lang)) {
    notFound();
  }

  const copy = content[params.lang];
  const baseUrl = `https://lfadj.com/${params.lang}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.resourcesLabel,
        item: `${baseUrl}/resources`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.selectionGuidesLabel,
        item: `${baseUrl}/resources/selection-guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: copy.breadcrumbCurrentLabel,
        item: `${baseUrl}/resources/light-tower-total-cost-of-ownership`,
      },
    ],
  };

  return (
    <main className="bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.18),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#111827_100%)]"
        />

        <div className="mx-auto max-w-[1280px]">
          <nav aria-label={copy.breadcrumbAria} className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-400">
              <li>
                <Link
                  href={`/${params.lang}/resources`}
                  className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  {copy.resourcesLabel}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/${params.lang}/resources/selection-guides`}
                  className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  {copy.selectionGuidesLabel}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-slate-200">
                {copy.breadcrumbCurrentLabel}
              </li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="pt-1">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                {copy.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.5rem]">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {copy.introduction}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-7">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {copy.frameworkTitle}
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                {copy.frameworkDescription}
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/70 p-5">
                <p className="font-bold text-blue-300">{copy.totalCostLabel} =</p>
                <div className="mt-3 space-y-2 font-mono text-sm leading-6 text-slate-100 sm:text-base">
                  {copy.totalCostItems.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2"
                    >
                      <span aria-hidden="true" className="text-blue-300">
                        {item.operator}
                      </span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-500/10 p-5">
                <p className="font-bold text-blue-200">{copy.hourlyCostLabel} =</p>
                <p className="mt-2 font-mono text-sm leading-6 text-white sm:text-base">
                  {copy.hourlyCostFormula}
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400">{copy.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-slate-950 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              {copy.componentsEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {copy.componentsTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {copy.componentsIntroduction}
            </p>
          </div>

          <ol className="mt-10 grid gap-x-12 lg:grid-cols-2">
            {copy.costComponents.map((component, index) => (
              <li
                key={component.title}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-t border-slate-200 py-6"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-sm font-bold leading-8 text-blue-700"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {component.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {component.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 text-slate-950 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              {copy.comparisonEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {copy.comparisonTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {copy.comparisonIntroduction}
            </p>
          </div>

          <div className="mt-10 min-w-0 max-w-full">
            <table className="block w-full max-w-full table-auto text-left lg:table lg:table-fixed lg:border-collapse">
              <caption className="sr-only">{copy.comparisonTitle}</caption>
              <thead className="max-lg:sr-only">
                <tr className="border-y border-slate-300 bg-slate-100">
                  <th
                    scope="col"
                    className="w-[24%] px-6 py-5 text-base font-bold leading-6"
                  >
                    {copy.factorLabel}
                  </th>
                  <th
                    scope="col"
                    className="w-[38%] px-6 py-5 text-base font-bold leading-6"
                  >
                    {copy.dieselLabel}
                  </th>
                  <th
                    scope="col"
                    className="w-[38%] px-6 py-5 text-base font-bold leading-6"
                  >
                    {copy.solarLabel}
                  </th>
                </tr>
              </thead>
              <tbody className="block min-w-0 border-t border-slate-300 lg:table-row-group lg:border-t-0">
                {copy.comparisonRows.map((row) => (
                  <tr
                    key={row.factor}
                    className="block min-w-0 border-b border-slate-200 py-6 align-top lg:table-row lg:py-0"
                  >
                    <th
                      scope="row"
                      className="block min-w-0 break-words text-lg font-bold leading-7 [overflow-wrap:anywhere] lg:table-cell lg:px-6 lg:py-7 lg:text-base lg:leading-7"
                    >
                      {row.factor}
                    </th>
                    <td className="mt-4 block min-w-0 break-words text-base leading-7 text-slate-600 [overflow-wrap:anywhere] lg:table-cell lg:px-6 lg:py-7 lg:leading-8">
                      <span
                        aria-hidden="true"
                        className="mb-1 block text-sm font-bold leading-6 text-blue-800 lg:hidden"
                      >
                        {copy.dieselLabel}
                      </span>
                      {row.diesel}
                    </td>
                    <td className="mt-4 block min-w-0 break-words text-base leading-7 text-slate-600 [overflow-wrap:anywhere] lg:table-cell lg:px-6 lg:py-7 lg:leading-8">
                      <span
                        aria-hidden="true"
                        className="mb-1 block text-sm font-bold leading-6 text-emerald-800 lg:hidden"
                      >
                        {copy.solarLabel}
                      </span>
                      {row.solar}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-4xl border-l-4 border-blue-600 pl-4 leading-7 text-slate-700">
            {copy.comparisonNote}
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-slate-950 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                {copy.checklistEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.checklistTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {copy.checklistIntroduction}
              </p>

              <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                {copy.checklistItems.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-slate-200 py-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 font-mono text-sm font-bold text-blue-700"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="self-start rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <h3 className="text-xl font-bold">{copy.calculationPromptTitle}</h3>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="font-bold text-blue-800">
                    {copy.estimatedHoursLabel} =
                  </p>
                  <p className="mt-2 font-mono text-sm leading-6 text-slate-700">
                    {copy.estimatedHoursFormula}
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-5">
                  <p className="font-bold text-blue-800">
                    {copy.estimatedCostLabel} =
                  </p>
                  <p className="mt-2 font-mono text-sm leading-6 text-slate-700">
                    {copy.estimatedCostFormula}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{copy.lfadjTitle}</h2>
              <p className="mt-4 leading-7 text-slate-600">{copy.lfadjStatement}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight">{copy.relatedTitle}</h2>
              <ul className="mt-4 space-y-3">
                {copy.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-sm font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-slate-950 px-5 py-8 text-white sm:px-8 sm:py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {copy.ctaTitle}
                </h2>
                <p className="mt-3 leading-7 text-slate-300">{copy.ctaDescription}</p>
              </div>
              <Link
                href={copy.ctaHref}
                className="inline-flex min-h-12 shrink-0 items-center justify-center self-start rounded-lg bg-blue-600 px-6 py-3 text-center font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 lg:self-auto"
              >
                {copy.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
