import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Mobile Lighting Manufacturing & Supply Capability",
    subtitle:
      "LFADJ provides project-based mobile lighting solutions with engineering support, quality management, and flexible OEM/ODM capabilities for construction, mining, oil & gas, rental, and emergency applications.",
    trustPoints: [
      {
        title: "Project-Based Lighting Solutions",
        description:
          "Recommend suitable mobile lighting solutions based on project conditions and application requirements.",
      },
      {
        title: "OEM / ODM Support",
        description:
          "Support customized lighting configurations, product requirements, and project-specific solutions.",
      },
      {
        title: "Quality-Controlled Supply Chain",
        description:
          "Manage supplier coordination, product inspection, and delivery quality for reliable field performance.",
      },
    ],
    lf955ImageAlt:
      "LF955 mobile light tower operating at an industrial construction site at night",
    lf971ImageAlt:
      "LF971 solar mobile light tower deployed at an outdoor construction project",
    engineeringTitle:
      "Engineering Capability for Project-Based Lighting Solutions",
    engineeringIntroduction:
      "LFADJ evaluates project conditions and application requirements to recommend suitable mobile lighting solutions for different environments.",
    relatedLinksLabel: "Related:",
    engineeringCapabilities: [
      {
        title: "Project Requirement Analysis",
        description:
          "Define technical requirements by reviewing lighting coverage, operating time, available power, site access, and deployment constraints.",
        links: [],
      },
      {
        title: "Lighting System Design",
        description:
          "Develop a mobile lighting system approach around coverage targets, operating conditions, and available diesel or solar power options.",
        links: [
          {
            label: "LF955 Diesel Mobile Light Tower",
            href: "products/lf955",
          },
          {
            label: "LF971 Solar Mobile Light Tower",
            href: "products/lf971",
          },
        ],
      },
      {
        title: "Environmental Adaptation Support",
        description:
          "Evaluate terrain, weather exposure, access conditions, and equipment deployment requirements across demanding project environments.",
        links: [
          {
            label: "Construction Lighting",
            href: "applications/construction-lighting",
          },
          {
            label: "Mining Lighting",
            href: "applications/mining-lighting",
          },
          {
            label: "Oil & Gas Lighting",
            href: "applications/oil-gas-lighting",
          },
        ],
      },
      {
        title: "Project Customization Support",
        description:
          "Translate project-specific requirements into defined product configurations, accessory needs, and deployment arrangements.",
        links: [],
      },
    ],
    qualityTitle: "Quality Control for Reliable Project Delivery",
    qualityIntroduction:
      "LFADJ manages quality throughout the supply process, from supplier coordination and product inspection to final testing and delivery control, ensuring reliable mobile lighting solutions for project applications.",
    qualityAreas: [
      {
        title: "Supplier Coordination",
        description:
          "Work with qualified manufacturing partners and coordinate product requirements, specifications, and project expectations.",
      },
      {
        title: "Incoming Inspection",
        description:
          "Review key components and materials to ensure compliance with project requirements before assembly.",
      },
      {
        title: "Product Testing",
        description:
          "Perform functional checks including lighting performance, electrical systems, and operational reliability.",
      },
      {
        title: "Delivery Control",
        description:
          "Manage final inspection, documentation, and delivery coordination to support reliable project execution.",
      },
    ],
    customizationTitle: "OEM / ODM Support for Mobile Lighting Projects",
    customizationIntroduction:
      "LFADJ supports customized mobile lighting requirements through engineering coordination, product configuration, accessory integration, and project-specific solution development.",
    customizationAreas: [
      {
        title: "Product Configuration Support",
        description:
          "Adjust lighting specifications, power options, and functional requirements based on project conditions.",
        links: [
          {
            label: "LF955 Diesel Mobile Light Tower",
            href: "products/lf955",
          },
          {
            label: "LF971 Solar Mobile Light Tower",
            href: "products/lf971",
          },
        ],
      },
      {
        title: "Application-Specific Solutions",
        description:
          "Customize mobile lighting solutions according to specific industry requirements and project conditions.",
        links: [
          {
            label: "How to Choose the Right Light Tower",
            href: "solutions/how-to-choose-the-right-light-tower",
          },
          {
            label: "Extreme Environment Configuration",
            href: "solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
          },
        ],
      },
      {
        title: "Accessory Integration",
        description:
          "Support additional requirements such as external power output, monitoring equipment, communication devices, and project accessories.",
        links: [],
      },
      {
        title: "Custom Product Development Support",
        description:
          "Coordinate technical requirements, supplier communication, and delivery expectations throughout the project process.",
        links: [],
      },
    ],
    industriesTitle: "Project Support Across Industrial Applications",
    industriesIntroduction:
      "LFADJ supports different industries with mobile lighting solutions adapted to various working environments, operating conditions, and deployment requirements.",
    industryAreas: [
      {
        title: "Construction Lighting",
        description:
          "Support temporary lighting requirements for construction sites, infrastructure projects, and night operations.",
        linkLabel: "Construction Lighting Application",
        href: "applications/construction-lighting",
      },
      {
        title: "Mining Lighting",
        description:
          "Provide reliable mobile lighting solutions for mining areas, equipment operations, and remote working environments.",
        linkLabel: "Mining Lighting Application",
        href: "applications/mining-lighting",
      },
      {
        title: "Oil & Gas Lighting",
        description:
          "Support demanding environments requiring reliable lighting performance and project-specific configurations.",
        linkLabel: "Oil & Gas Lighting Application",
        href: "applications/oil-gas-lighting",
      },
      {
        title: "Rental Lighting",
        description:
          "Support rental companies with flexible mobile lighting products suitable for different customer projects.",
        linkLabel: "Rental Lighting Application",
        href: "applications/rental-lighting",
      },
      {
        title: "Emergency Lighting",
        description:
          "Provide rapidly deployable lighting solutions for emergency response and temporary operations.",
        linkLabel: "Emergency Lighting Application",
        href: "applications/emergency-lighting",
      },
    ],
    industriesProductsTitle: "Related Products",
    industriesSolutionsTitle: "Related Solutions",
    industriesProducts: [
      {
        label: "LF955 Diesel Mobile Light Tower",
        href: "products/lf955",
      },
      {
        label: "LF971 Solar Mobile Light Tower",
        href: "products/lf971",
      },
    ],
    industriesSolutions: [
      {
        label: "How to Choose the Right Light Tower",
        href: "solutions/how-to-choose-the-right-light-tower",
      },
      {
        label: "Extreme Environment Configuration",
        href: "solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
      },
    ],
    finalTitle: "Why Choose LFADJ for Your Mobile Lighting Project",
    finalIntroduction:
      "From project requirement analysis and engineering support to quality control and customized solutions, LFADJ helps customers develop reliable mobile lighting solutions for different industrial applications.",
    finalPoints: [
      {
        title: "Project-Based Support",
        description:
          "Understand project requirements and provide suitable mobile lighting solutions.",
      },
      {
        title: "Reliable Quality Management",
        description:
          "Control supplier coordination, inspection, testing, and delivery processes.",
      },
      {
        title: "Flexible Customization",
        description:
          "Support customized configurations and project-specific requirements.",
      },
    ],
    finalCtaTitle: "Request Your Project Lighting Solution",
    finalCtaDescription:
      "Tell us your project conditions, application requirements, and lighting expectations. Our team will help recommend a suitable mobile lighting solution.",
    finalCtaButton: "Request Project Consultation",
  },
  zh: {
    title: "移动照明制造与供应能力",
    subtitle:
      "LFADJ 面向建筑、矿山、油气、租赁和应急应用场景，提供基于项目需求的移动照明解决方案，并通过工程支持、质量管理和灵活的 OEM/ODM 能力满足不同项目要求。",
    trustPoints: [
      {
        title: "项目化移动照明解决方案",
        description: "根据项目环境和应用需求推荐合适的移动照明方案。",
      },
      {
        title: "OEM / ODM 定制支持",
        description: "支持照明配置、产品需求和项目方案定制。",
      },
      {
        title: "质量管理供应体系",
        description:
          "通过供应链管理、产品检测和交付控制，保障现场使用可靠性。",
      },
    ],
    lf955ImageAlt: "LF955 移动照明灯塔在夜间工业施工现场运行",
    lf971ImageAlt: "LF971 太阳能移动照明灯塔部署于户外施工项目",
    engineeringTitle: "面向项目的移动照明工程支持能力",
    engineeringIntroduction:
      "LFADJ 根据项目环境和应用需求，为不同使用场景提供合适的移动照明解决方案。",
    relatedLinksLabel: "相关内容：",
    engineeringCapabilities: [
      {
        title: "项目需求分析",
        description:
          "结合照明覆盖、运行时间、可用电源、现场通行条件和部署限制，明确项目技术要求。",
        links: [],
      },
      {
        title: "照明系统设计",
        description:
          "围绕照明覆盖目标、运行条件和现场可用电源，设计柴油或太阳能移动照明系统方案。",
        links: [
          {
            label: "LF955 柴油移动照明灯塔",
            href: "products/lf955",
          },
          {
            label: "LF971 太阳能移动照明灯塔",
            href: "products/lf971",
          },
        ],
      },
      {
        title: "环境适配支持",
        description:
          "评估地形、气候暴露、通行条件和设备部署要求，适配不同复杂项目环境。",
        links: [
          {
            label: "工程施工照明",
            href: "applications/construction-lighting",
          },
          {
            label: "矿山照明",
            href: "applications/mining-lighting",
          },
          {
            label: "油气照明",
            href: "applications/oil-gas-lighting",
          },
        ],
      },
      {
        title: "项目定制支持",
        description:
          "将项目定制要求落实为明确的产品配置、附件需求和现场部署安排。",
        links: [],
      },
    ],
    qualityTitle: "移动照明质量控制与项目交付",
    qualityIntroduction:
      "LFADJ 通过供应商协调、产品检验、功能测试和交付管理，对整个供应过程进行质量控制，确保移动照明产品满足项目应用需求。",
    qualityAreas: [
      {
        title: "供应商协调",
        description:
          "与合作制造伙伴保持协作，确认产品要求、技术规格和项目需求。",
      },
      {
        title: "来料检验",
        description: "对关键部件和材料进行检查，确保符合项目要求。",
      },
      {
        title: "产品测试",
        description: "对照明性能、电气系统和运行可靠性进行功能检查。",
      },
      {
        title: "交付控制",
        description:
          "通过最终检查、文件确认和交付协调，保障项目顺利实施。",
      },
    ],
    customizationTitle: "移动照明项目 OEM / ODM 定制支持",
    customizationIntroduction:
      "LFADJ 通过工程协调、产品配置、附件整合和项目方案开发，支持不同应用场景下的移动照明定制需求。",
    customizationAreas: [
      {
        title: "产品配置支持",
        description: "根据项目条件调整照明规格、电源方案和功能需求。",
        links: [
          {
            label: "LF955 柴油移动照明灯塔",
            href: "products/lf955",
          },
          {
            label: "LF971 太阳能移动照明灯塔",
            href: "products/lf971",
          },
        ],
      },
      {
        title: "行业应用方案",
        description:
          "根据行业特点和项目条件，提供适配的移动照明定制方案。",
        links: [
          {
            label: "如何选择合适的移动照明灯塔",
            href: "solutions/how-to-choose-the-right-light-tower",
          },
          {
            label: "极端环境配置",
            href: "solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
          },
        ],
      },
      {
        title: "附件集成支持",
        description:
          "支持外接电源、监控设备、通信设备以及项目所需附件集成。",
        links: [],
      },
      {
        title: "产品定制开发支持",
        description:
          "协调技术要求、供应商沟通以及项目交付要求，保障项目顺利推进。",
        links: [],
      },
    ],
    industriesTitle: "面向行业应用的移动照明解决方案",
    industriesIntroduction:
      "LFADJ 针对不同工业应用场景，根据工作环境、运行条件和部署需求提供适配的移动照明解决方案。",
    industryAreas: [
      {
        title: "建筑照明",
        description:
          "支持施工现场、基础设施项目以及夜间作业的临时照明需求。",
        linkLabel: "建筑照明应用",
        href: "applications/construction-lighting",
      },
      {
        title: "矿山照明",
        description:
          "为矿区、设备作业区域以及偏远工作环境提供可靠的移动照明方案。",
        linkLabel: "矿山照明应用",
        href: "applications/mining-lighting",
      },
      {
        title: "油气照明",
        description: "针对高要求工业环境提供可靠照明性能和项目适配方案。",
        linkLabel: "油气照明应用",
        href: "applications/oil-gas-lighting",
      },
      {
        title: "租赁照明",
        description:
          "为租赁公司提供适用于不同客户项目的灵活移动照明产品。",
        linkLabel: "租赁照明应用",
        href: "applications/rental-lighting",
      },
      {
        title: "应急照明",
        description: "为应急响应和临时作业提供快速部署的移动照明方案。",
        linkLabel: "应急照明应用",
        href: "applications/emergency-lighting",
      },
    ],
    industriesProductsTitle: "相关产品",
    industriesSolutionsTitle: "相关解决方案",
    industriesProducts: [
      {
        label: "LF955 柴油移动照明灯塔",
        href: "products/lf955",
      },
      {
        label: "LF971 太阳能移动照明灯塔",
        href: "products/lf971",
      },
    ],
    industriesSolutions: [
      {
        label: "如何选择合适的移动照明灯塔",
        href: "solutions/how-to-choose-the-right-light-tower",
      },
      {
        label: "极端环境配置",
        href: "solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
      },
    ],
    finalTitle: "为什么选择 LFADJ 移动照明项目支持",
    finalIntroduction:
      "从项目需求分析、工程支持到质量控制和定制方案开发，LFADJ 为不同工业应用提供可靠的移动照明项目支持。",
    finalPoints: [
      {
        title: "项目支持",
        description: "理解项目需求，提供适合的移动照明解决方案。",
      },
      {
        title: "可靠质量管理",
        description:
          "通过供应商协调、检验、测试和交付管理保障产品可靠性。",
      },
      {
        title: "灵活定制支持",
        description: "支持产品配置调整和项目特殊需求。",
      },
    ],
    finalCtaTitle: "获取您的项目照明方案",
    finalCtaDescription:
      "告诉我们您的项目环境、应用需求和照明要求，我们将帮助您推荐合适的移动照明方案。",
    finalCtaButton: "提交项目需求",
  },
} as const;

function isLang(value: string): value is Lang {
  return value === "en" || value === "zh";
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const locale: Lang = isLang(params.lang) ? params.lang : "en";
  const zh = locale === "zh";
  const url = `https://lfadj.com/${locale}/manufacturing`;
  const title = zh
    ? "移动照明制造与供应能力 | LFADJ"
    : "Mobile Lighting Manufacturing & Supply Capability | LFADJ";
  const description = zh
    ? "了解 LFADJ 如何通过工程支持、质量管理、供应链协作和灵活的 OEM/ODM 能力，为建筑、矿山、油气、租赁及应急项目提供移动照明解决方案。"
    : "Learn how LFADJ supports construction, mining, oil and gas, rental and emergency projects with engineering support, quality management and flexible OEM/ODM capabilities.";
  const image =
    "https://lfadj.com/images/products/lf955/applications/heavy-construction.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/manufacturing",
        "zh-CN": "https://lfadj.com/zh/manufacturing",
        "x-default": "https://lfadj.com/en/manufacturing",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "LFADJ",
      locale: zh ? "zh_CN" : "en_US",
      images: [
        {
          url: image,
          alt: zh
            ? "LF955 移动照明灯塔在夜间工业施工现场运行"
            : "LF955 mobile light tower operating at an industrial construction site at night",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function ManufacturingPage({
  params,
}: {
  params: { lang: string };
}) {
  const locale: Lang = isLang(params.lang) ? params.lang : "en";
  const content = copy[locale];

  return (
    <main className="bg-slate-950">
      <section className="relative isolate overflow-hidden px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.22),transparent_34%),linear-gradient(115deg,#020617_0%,#0f172a_55%,#111827_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-slate-700/70" />

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 lg:min-h-[720px] lg:grid-cols-[minmax(0,0.98fr)_minmax(420px,1.02fr)] lg:gap-16">
          <div>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {locale === "zh" ? (
                  <>
                    <span className="block">移动照明制造</span>
                    <span className="block">与供应能力</span>
                  </>
                ) : (
                  content.title
                )}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
                {content.subtitle}
              </p>
            </div>

            <ul className="mt-10 border-y border-slate-700/80">
              {content.trustPoints.map((point, index) => (
                <li
                  key={point.title}
                  className="grid gap-3 border-b border-slate-700/80 py-6 last:border-b-0 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-5"
                >
                  <span className="text-sm font-bold tabular-nums text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-white">
                      {point.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative min-h-[460px] overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30 sm:min-h-[620px] lg:h-[680px] lg:min-h-0">
            <Image
              src="/images/products/lf971/applications/lf971-construction-application.webp"
              alt={content.lf971ImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          </figure>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900 px-6 pb-20 pt-[4.5rem] text-white sm:px-8 sm:pb-24 sm:pt-[5.25rem] lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {content.engineeringTitle}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {content.engineeringIntroduction}
            </p>
          </div>

          <div className="mt-12 grid border-y border-slate-700 md:grid-cols-2">
            {content.engineeringCapabilities.map((capability, index) => (
              <article
                key={capability.title}
                className={[
                  "border-b border-slate-700 py-9 md:px-9",
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0",
                  index < 2 ? "" : "md:border-b-0",
                  index === 3 ? "border-b-0" : "",
                ].join(" ")}
              >
                <p className="text-sm font-bold tabular-nums text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                  {capability.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  {capability.description}
                </p>

                {capability.links.length > 0 ? (
                  <div className="mt-6 border-l-2 border-blue-500/70 pl-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                      {content.relatedLinksLabel}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                      {capability.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={`/${locale}/${link.href}`}
                            className="text-sm font-semibold leading-6 text-slate-200 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-blue-300"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950 px-6 pb-20 pt-[4.5rem] text-white sm:px-8 sm:pb-24 sm:pt-[5.25rem] lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {content.qualityTitle}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {content.qualityIntroduction}
            </p>
          </div>

          <div className="mt-12 grid border-y border-slate-800 md:grid-cols-2">
            {content.qualityAreas.map((area, index) => (
              <article
                key={area.title}
                className={[
                  "border-b border-slate-800 py-9 md:px-9",
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0",
                  index < 2 ? "" : "md:border-b-0",
                  index === 3 ? "border-b-0" : "",
                ].join(" ")}
              >
                <p className="text-sm font-bold tabular-nums text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                  {area.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900 px-6 pb-20 pt-[4.5rem] text-white sm:px-8 sm:pb-24 sm:pt-[5.25rem] lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {content.customizationTitle}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {content.customizationIntroduction}
            </p>
          </div>

          <div className="mt-12 grid border-y border-slate-700 md:grid-cols-2">
            {content.customizationAreas.map((area, index) => (
              <article
                key={area.title}
                className={[
                  "border-b border-slate-700 py-9 md:px-9",
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0",
                  index < 2 ? "" : "md:border-b-0",
                  index === 3 ? "border-b-0" : "",
                ].join(" ")}
              >
                <p className="text-sm font-bold tabular-nums text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                  {area.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  {area.description}
                </p>

                {area.links.length > 0 ? (
                  <div className="mt-6 border-l-2 border-blue-500/70 pl-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                      {content.relatedLinksLabel}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                      {area.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={`/${locale}/${link.href}`}
                            className="text-sm font-semibold leading-6 text-slate-200 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-blue-300"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950 px-6 pb-20 pt-[4.5rem] text-white sm:px-8 sm:pb-24 sm:pt-[5.25rem] lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {content.industriesTitle}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {content.industriesIntroduction}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.industryAreas.map((industry, index) => (
              <article
                key={industry.href}
                className="flex min-h-72 flex-col border border-slate-800 bg-slate-900/70 p-7"
              >
                <p className="text-sm font-bold tabular-nums text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-xl font-bold tracking-tight">
                  {industry.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-300">
                  {industry.description}
                </p>
                <Link
                  href={`/${locale}/${industry.href}`}
                  className="mt-6 text-sm font-semibold leading-6 text-slate-200 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-blue-300"
                >
                  {industry.linkLabel}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 grid border-y border-slate-800 md:grid-cols-2">
            <div className="border-b border-slate-800 py-7 md:border-b-0 md:border-r md:pr-8">
              <h3 className="text-base font-bold">
                {content.industriesProductsTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {content.industriesProducts.map((product) => (
                  <li key={product.href}>
                    <Link
                      href={`/${locale}/${product.href}`}
                      className="text-sm font-semibold leading-6 text-slate-300 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-blue-300"
                    >
                      {product.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-7 md:pl-8">
              <h3 className="text-base font-bold">
                {content.industriesSolutionsTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {content.industriesSolutions.map((solution) => (
                  <li key={solution.href}>
                    <Link
                      href={`/${locale}/${solution.href}`}
                      className="text-sm font-semibold leading-6 text-slate-300 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-blue-300"
                    >
                      {solution.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-900 px-6 pb-20 pt-[4.5rem] text-white sm:px-8 sm:pb-24 sm:pt-[5.25rem] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(37,99,235,0.16),transparent_38%)]" />
        <div className="relative mx-auto max-w-[1120px] text-center">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {content.finalTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {content.finalIntroduction}
          </p>

          <div className="mt-10 grid border-y border-slate-700 text-left md:grid-cols-3">
            {content.finalPoints.map((point, index) => (
              <article
                key={point.title}
                className={[
                  "border-b border-slate-700 py-7 md:border-b-0 md:px-7",
                  index === 0 ? "md:pl-0" : "md:border-l",
                  index === 2 ? "border-b-0 md:pr-0" : "",
                ].join(" ")}
              >
                <p className="text-sm font-bold tabular-nums text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-bold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {point.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 border border-slate-700 bg-slate-950/80 px-6 py-10 sm:px-10 sm:py-12">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {content.finalCtaTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              {content.finalCtaDescription}
            </p>
            <Link
              href={`/${locale}/contact/request-a-quote`}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-7 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {content.finalCtaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
