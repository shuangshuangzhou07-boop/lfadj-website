import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Rental Lighting Applications",
    subtitle:
      "Mobile lighting equipment for rental companies, temporary projects and short-term lighting requirements, with deployment and operating needs that vary by site.",
    cta: "Request Your Rental Lighting Recommendation",
    imageAlt:
      "Mobile light tower fleet prepared for rental deployment at a construction site",
    applicationsTitle: "Rental Lighting Use Cases",
    applications: [
      {
        title: "Construction Equipment Rental",
        description:
          "Providing temporary lighting equipment for construction projects through rental services.",
      },
      {
        title: "Mining & Remote Projects",
        description:
          "Supporting temporary lighting requirements in remote areas without stable power supply.",
      },
      {
        title: "Events & Temporary Facilities",
        description:
          "Lighting solutions for temporary venues, outdoor events and short-term facilities.",
      },
      {
        title: "Emergency & Short-Term Deployment",
        description:
          "Supporting emergency response, maintenance projects and rapid lighting deployment.",
      },
    ],
    requirementsTitle: "Rental Lighting Requirements",
    requirements: [
      {
        title: "Easy Transportation",
        description:
          "Rental equipment needs to be moved frequently between different project locations.",
      },
      {
        title: "Fast Deployment",
        description:
          "Rental projects often require lighting equipment that can be installed and operated quickly.",
      },
      {
        title: "Durable Construction",
        description:
          "Equipment must handle different users and various working environments.",
      },
      {
        title: "Low Maintenance",
        description:
          "Rental operators should evaluate inspection, service and parts requirements across different assignments.",
      },
    ],
    procurementTitle: "Rental Fleet Procurement Considerations",
    procurementConsiderations: [
      {
        title: "Fleet Utilization",
        description:
          "Rental companies should compare expected job types, turnaround time and idle periods so fleet managers can plan which units need to be ready for the next assignment.",
      },
      {
        title: "Fuel Efficiency",
        description:
          "Buyers should evaluate fuel use under the expected load, operating hours and site conditions to support refueling plans and equipment scheduling.",
      },
      {
        title: "Maintenance Access",
        description:
          "Access to inspection points, service tasks, technicians and suitable tools affects maintenance planning and how quickly a unit can return to the rental fleet.",
      },
      {
        title: "Common Spare Parts",
        description:
          "Fleet managers should identify commonly required parts for each equipment configuration so stocking, compatibility checks and parts allocation can be managed clearly.",
      },
      {
        title: "Transport Dimensions",
        description:
          "Buyers should compare stowed dimensions, equipment weight and towing requirements against available transport capacity and typical deployment sites.",
      },
      {
        title: "Downtime Risk",
        description:
          "Rental fleets may need to evaluate how an unavailable unit would affect customer commitments, replacement-equipment planning and access to onsite service.",
      },
      {
        title: "Configuration Consistency",
        description:
          "Consistent controls, components and documentation across a batch can simplify operator handover, training and spare-parts planning while still reflecting project requirements.",
      },
    ],
    procurementResourceLabel: "Calculate Light Tower Total Cost of Ownership",
    relatedBuyingGuidesTitle: "Related Buying Guides",
    productsTitle: "Recommended Mobile Lighting Products for Rental",
    suitableLabel: "Suitable for:",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        positioning:
          "Designed for rental projects with longer operating hours and established fuel supply conditions.",
        applications: [
          "Long-term rental projects",
          "Large construction sites",
          "Continuous operation requirements",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        positioning:
          "Suitable for remote or long-term rental projects where solar conditions and lower routine maintenance requirements can be evaluated.",
        applications: [
          "Remote rental projects",
          "Long-term deployment",
          "Low maintenance requirements",
        ],
      },
    ],
    relatedInformationTitle: "Related Information",
    relatedSolutionsTitle: "Related Solutions",
    relatedSolutionLabel: "Mobile Light Tower Selection Guide",
    relatedApplicationsTitle: "Related Applications",
    relatedApplications: [
      { slug: "mining-lighting", label: "Mining Lighting" },
      { slug: "construction-lighting", label: "Construction Lighting" },
      { slug: "emergency-lighting", label: "Emergency Lighting" },
      { slug: "oil-gas-lighting", label: "Oil & Gas Lighting" },
    ],
    bottomCtaTitle: "Discuss Your Rental Fleet Requirements",
    ctaDescription:
      "Share your fleet size, typical applications, operating hours, transport conditions and maintenance requirements. The team will review these project conditions to help evaluate a suitable lighting configuration.",
    bottomCtaLabel: "Request a Rental Fleet Review",
  },
  zh: {
    title: "租赁照明应用",
    subtitle:
      "面向设备租赁公司、临时项目和短期照明需求，说明不同现场条件下移动照明设备的部署与运行要求。",
    cta: "获取租赁照明配置建议",
    imageAlt: "建筑项目现场准备部署的移动照明灯塔租赁车队",
    applicationsTitle: "租赁照明应用场景",
    applications: [
      {
        title: "工程设备租赁",
        description: "通过租赁服务为建筑施工项目提供临时照明设备。",
      },
      {
        title: "矿山及偏远项目",
        description: "满足偏远地区和无稳定电力环境下的临时照明需求。",
      },
      {
        title: "活动及临时设施",
        description: "用于临时场馆、户外活动和短期设施照明。",
      },
      {
        title: "应急及短期部署",
        description: "支持应急响应、维修工程和快速照明部署。",
      },
    ],
    requirementsTitle: "租赁照明需求",
    requirements: [
      {
        title: "方便运输",
        description: "租赁设备需要在不同项目地点之间频繁移动。",
      },
      {
        title: "快速部署",
        description: "租赁项目通常需要快速安装并投入使用。",
      },
      {
        title: "耐用结构",
        description: "设备需要适应不同客户和复杂工作环境。",
      },
      {
        title: "低维护需求",
        description: "租赁运营方应结合不同项目评估设备检查、保养和配件需求。",
      },
    ],
    procurementTitle: "租赁车队采购关注点",
    procurementConsiderations: [
      {
        title: "设备周转率",
        description:
          "租赁公司应结合预计项目类型、回场周转时间和设备闲置情况进行比较，帮助车队管理人员规划下一项租赁任务所需的可用设备。",
      },
      {
        title: "燃油效率",
        description:
          "采购方应结合预期负载、运行时间和现场工况评估燃油使用情况，为补给计划和设备调度提供依据。",
      },
      {
        title: "维护便利性",
        description:
          "检查位置、保养操作、维修人员和适用工具的可达性会影响维护计划，以及设备完成维护后重新投入车队的效率。",
      },
      {
        title: "常用备件",
        description:
          "车队管理人员应按不同设备配置确认常用备件，以便清晰管理库存、兼容性检查和配件分配。",
      },
      {
        title: "运输尺寸",
        description:
          "采购方应将设备收起尺寸、重量和拖运要求，与现有运输能力及常见部署场地进行比较。",
      },
      {
        title: "停机风险",
        description:
          "租赁车队需要评估设备无法使用时对客户履约、替代设备安排和现场维修可达性的影响。",
      },
      {
        title: "批量设备配置一致性",
        description:
          "在满足项目要求的前提下，批量设备采用一致的控制方式、部件和文件，有助于简化操作交接、培训和备件规划。",
      },
    ],
    procurementResourceLabel: "了解移动照明灯塔总拥有成本",
    relatedBuyingGuidesTitle: "相关采购指南",
    productsTitle: "适用于租赁的移动照明产品",
    suitableLabel: "适用于：",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        positioning: "适合运行时间较长、燃油补给条件明确的租赁项目。",
        applications: ["长期租赁项目", "大型建筑工地", "连续运行需求"],
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        positioning:
          "适合偏远或长期租赁项目，并需结合当地太阳能条件和维护要求评估配置。",
        applications: ["偏远地区租赁项目", "长期部署", "低维护需求"],
      },
    ],
    relatedInformationTitle: "相关信息",
    relatedSolutionsTitle: "相关解决方案",
    relatedSolutionLabel: "移动照明灯塔选型指南",
    relatedApplicationsTitle: "相关应用",
    relatedApplications: [
      { slug: "mining-lighting", label: "矿山照明" },
      { slug: "construction-lighting", label: "工程施工照明" },
      { slug: "emergency-lighting", label: "应急照明" },
      { slug: "oil-gas-lighting", label: "油气行业照明" },
    ],
    bottomCtaTitle: "沟通您的租赁车队需求",
    ctaDescription:
      "请提供车队规模、使用场景、运行时间、运输条件和维护要求，团队将结合这些项目条件评估合适的照明配置。",
    bottomCtaLabel: "获取租赁车队配置评估",
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
  const lang: Lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";
  const url = `https://lfadj.com/${lang}/applications/rental-lighting`;
  const title = zh
    ? "租赁照明应用 | 移动照明设备 | LFADJ"
    : "Rental Lighting Applications | Mobile Lighting Equipment | LFADJ";
  const description = copy[lang].subtitle;
  const image =
    "https://lfadj.com/images/applications/rental-lighting/rental-lighting-fleet-hero.png";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/applications/rental-lighting",
        "zh-CN": "https://lfadj.com/zh/applications/rental-lighting",
        "x-default": "https://lfadj.com/en/applications/rental-lighting",
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
          alt: copy[lang].imageAlt,
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

export default function RentalLightingPage({
  params,
}: {
  params: { lang: string };
}) {
  const locale: Lang = isLang(params.lang) ? params.lang : "en";
  const content = copy[locale];

  return (
    <main className="bg-slate-950">
      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden px-6 py-20 sm:min-h-[720px] sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute bottom-5 right-[-8%] top-[29%] w-[170%] opacity-70 sm:inset-y-8 sm:right-[-4%] sm:w-[115%] sm:opacity-80 lg:inset-y-12 lg:right-6 lg:w-[64%] lg:opacity-100">
          <Image
            src="/images/applications/rental-lighting/rental-lighting-fleet-hero.png"
            alt={content.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 64vw, (min-width: 640px) 115vw, 170vw"
            className="object-contain object-right"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/15 sm:via-slate-950/75 sm:to-slate-950/5 lg:via-slate-950/65 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/20" />

        <div className="relative mx-auto w-full max-w-[1280px]">
          <div className="max-w-3xl lg:max-w-[48%]">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {content.subtitle}
            </p>
            <Link
              href="#rental-fleet-review"
              className="mt-9 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {content.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-16 text-slate-950 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {content.procurementTitle}
          </h2>

          <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
            {content.procurementConsiderations.map((consideration, index) => (
              <li
                key={consideration.title}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-t border-slate-200 py-5"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-sm font-bold leading-7 text-blue-700"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                    {consideration.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {consideration.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {content.applicationsTitle}
          </h2>

          <div className="mt-12 grid border-y border-slate-200 md:grid-cols-2">
            {content.applications.map((application, index) => (
              <article
                key={application.title}
                className={[
                  "border-b border-slate-200 py-8 last:border-b-0 md:px-8",
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0",
                  index < 2 ? "" : "md:border-b-0",
                ].join(" ")}
              >
                <p className="text-sm font-bold tabular-nums text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                  {application.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                  {application.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950 sm:px-8 sm:py-24 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)] lg:gap-16">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:pt-6">
            {content.requirementsTitle}
          </h2>

          <div className="border-t border-slate-300">
            {content.requirements.map((requirement, index) => (
              <article
                key={requirement.title}
                className="grid gap-3 border-b border-slate-300 py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5 lg:py-5"
              >
                <p className="text-sm font-bold tabular-nums text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {requirement.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {requirement.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {content.productsTitle}
          </h2>

          <div className="mt-12 grid border-y border-slate-200 lg:grid-cols-2">
            {content.products.map((product, index) => (
              <article
                key={product.slug}
                className={[
                  "py-9",
                  index === 0
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r lg:pr-12"
                    : "lg:pl-12",
                ].join(" ")}
              >
                <Link
                  href={`/${locale}/products/${product.slug}`}
                  className="text-2xl font-bold tracking-tight text-slate-950 underline decoration-blue-300 decoration-2 underline-offset-8 transition-colors hover:text-blue-700"
                >
                  {product.title}
                </Link>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                  {product.positioning}
                </p>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                  {content.suitableLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {product.applications.map((application) => (
                    <li
                      key={application}
                      className="flex gap-3 text-base leading-7 text-slate-700"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                      />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {content.relatedInformationTitle}
            </h3>

            <div className="mt-8 grid border-y border-slate-200 lg:grid-cols-3">
              <div className="border-b border-slate-200 py-7 lg:border-b-0 lg:border-r lg:pr-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedSolutionsTitle}
                </h4>
                <ul className="mt-5">
                  <li>
                    <Link
                      href={`/${locale}/resources/selection-guides`}
                      className="text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                    >
                      {content.relatedSolutionLabel}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border-b border-slate-200 py-7 lg:border-b-0 lg:border-r lg:px-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedBuyingGuidesTitle}
                </h4>
                <ul className="mt-5">
                  <li>
                    <Link
                      href={`/${locale}/resources/light-tower-total-cost-of-ownership`}
                      className="text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                    >
                      {content.procurementResourceLabel}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="py-7 lg:pl-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedApplicationsTitle}
                </h4>
                <ul className="mt-5 space-y-3">
                  {content.relatedApplications.map((application) => {
                    const href = `/${locale}/applications/${application.slug}`;

                    return (
                      <li key={application.slug}>
                        <Link
                          href={href}
                          className="text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                        >
                          {application.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div
            id="rental-fleet-review"
            className="mt-12 flex scroll-mt-24 flex-col items-start justify-between gap-6 bg-slate-950 px-6 py-8 sm:px-8 lg:flex-row lg:items-center"
          >
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold leading-8 text-white sm:text-2xl">
                {content.bottomCtaTitle}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {content.ctaDescription}
              </p>
            </div>
            <Link
              href={`/${locale}/contact/request-a-quote`}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {content.bottomCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
