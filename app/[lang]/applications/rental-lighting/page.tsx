import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    eyebrow: "Rental Applications",
    title: "Mobile Light Towers for Rental Fleets",
    subtitle:
      "Rental fleets support changing jobsites, operators and operating schedules. Mobile lighting equipment must therefore be practical to transport, deploy, operate and maintain across different customer assignments.",
    cta: "Discuss Your Rental Application",
    selectionLink: "Learn how to compare light tower configurations",
    imageAlt:
      "Mobile light tower fleet prepared for rental deployment at a construction site",
    challengesTitle: "Rental Fleet Operating Challenges",
    challenges: [
      {
        title: "Changing Jobsites",
        description:
          "A unit may move between construction, infrastructure, maintenance and temporary facilities, each with different access and lighting conditions.",
      },
      {
        title: "Frequent Transport and Deployment",
        description:
          "Repeated loading, towing or onsite repositioning makes transport and straightforward setup part of daily fleet operations.",
      },
      {
        title: "Different Operators",
        description:
          "Controls, mast operation and lamp adjustment need to remain clear when equipment is handed between customers and crews.",
      },
      {
        title: "Variable Operating Hours",
        description:
          "Short evening tasks and extended night work create different demands for runtime, refueling and charging access.",
      },
      {
        title: "Maintenance Between Assignments",
        description:
          "Inspection and service work often take place during the turnaround between one customer assignment and the next.",
      },
      {
        title: "Noise, Fuel and Site Access",
        description:
          "Urban sites, remote areas and fuel-constrained locations can require different equipment roles within the same rental fleet.",
      },
    ],
    operationsTitle: "Supporting Fleet Operations",
    operations: [
      {
        title: "Transport and Site Deployment",
        description:
          "Equipment must fit the fleet's established transport methods and the access conditions found across customer sites.",
      },
      {
        title: "Clear Operator Handover",
        description:
          "Consistent operating information helps different users understand controls, mast movement and safe deployment steps.",
      },
      {
        title: "Between-Rental Inspection",
        description:
          "Accessible inspection and service points support routine checks before a unit is assigned to another jobsite.",
      },
      {
        title: "Configuration and Documentation Consistency",
        description:
          "Clearly identified configurations, components and documents help teams manage handover and maintenance across the fleet.",
      },
      {
        title: "Scheduling Across Customer Tasks",
        description:
          "Fleet teams need visibility into jobsite type, operating schedule, transport access and energy availability when assigning equipment.",
      },
    ],
    tcoLabel: "Read about light tower total cost of ownership",
    applicationsHubLabel: "Explore all lighting applications",
    productsTitle: "Equipment Roles in a Rental Fleet",
    roleLabel: "Typical rental role",
    conditionsLabel: "Relevant operating conditions",
    productLinkLabel: "View product details",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        role: "Project-based assignments that need higher-output lighting and sustained diesel operation.",
        conditions: "Construction, infrastructure and industrial sites with established fuel access and longer operating schedules.",
      },
      {
        slug: "lf951",
        title: "LF951 Portable Light Tower",
        role: "Compact lighting tasks that benefit from flexible positioning within the work area.",
        conditions: "Sites with limited deployment space, short-distance repositioning needs or flexible transport arrangements.",
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        role: "Low-noise or fuel-constrained assignments where solar generation and battery storage suit the operating schedule.",
        conditions: "Outdoor and off-grid sites with suitable solar conditions; it does not replace diesel equipment for every duty cycle.",
      },
    ],
    transitionTitle: "From Application Needs to Configuration",
    transitionDescription:
      "Rental equipment needs vary with customer industries, jobsite conditions, operating schedules, transport methods and available energy. This page explains the application environment; use the selection guide for diesel, solar, mast and configuration decisions.",
    bottomCtaTitle: "Discuss Your Rental Fleet Applications",
    ctaDescription:
      "Share the jobsites, operating schedules and deployment conditions your rental fleet needs to support. We can help identify the product and solution pages relevant to your requirements.",
    bottomCtaLabel: "Discuss Your Rental Application",
  },
  zh: {
    eyebrow: "设备租赁应用",
    title: "租赁车队用移动照明灯塔",
    subtitle:
      "租赁车队需要服务不断变化的工地、操作人员和运行周期，因此移动照明设备应适应不同客户任务下的运输、部署、操作与维护需求。",
    cta: "提交租赁应用需求",
    selectionLink: "进一步了解移动照明灯塔选型方法",
    imageAlt: "建筑项目现场准备部署的移动照明灯塔租赁车队",
    challengesTitle: "租赁车队的运行挑战",
    challenges: [
      {
        title: "不断变化的工地",
        description: "同一设备可能服务施工、基础设施、维修和临时设施等任务，各现场的通行与照明条件并不相同。",
      },
      {
        title: "频繁运输与部署",
        description: "重复装卸、拖运或场内转移，使运输适应性和清晰的部署方式成为车队日常运营的一部分。",
      },
      {
        title: "不同操作人员",
        description: "设备在客户和班组之间交接时，控制方式、灯杆操作与灯具调节需要保持清晰。",
      },
      {
        title: "不固定的运行时间",
        description: "短时夜间任务与长时间夜班对运行、燃油补给和充电条件提出不同要求。",
      },
      {
        title: "租赁间隔期间的维护",
        description: "设备检查和维护通常需要在上一项任务结束与下一次出租之间完成。",
      },
      {
        title: "噪声、燃油与现场通行条件",
        description: "城市工地、偏远区域及燃油补给受限现场，可能需要车队中的设备承担不同任务角色。",
      },
    ],
    operationsTitle: "配合租赁车队运营",
    operations: [
      {
        title: "运输与现场部署",
        description: "设备需要适应车队现有运输方式，以及不同客户现场的通行和部署条件。",
      },
      {
        title: "清晰的操作交接",
        description: "一致的操作资料有助于不同使用者理解控制、灯杆移动和安全部署步骤。",
      },
      {
        title: "租赁间隔检查",
        description: "便于接近的检查与维护位置，有助于设备在转入下一工地前完成常规检查。",
      },
      {
        title: "配置与文件一致性",
        description: "清晰标识设备配置、部件和资料，有助于车队进行交接与维护管理。",
      },
      {
        title: "不同客户任务之间的调度",
        description: "安排设备时，需要掌握工地类型、运行周期、运输条件和可用能源等应用背景。",
      },
    ],
    tcoLabel: "延伸阅读：移动照明灯塔总拥有成本",
    applicationsHubLabel: "查看全部照明应用",
    productsTitle: "租赁车队中的设备角色",
    roleLabel: "典型租赁任务",
    conditionsLabel: "相关运行条件",
    productLinkLabel: "查看产品详情",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        role: "承担照明输出要求较高、需要柴油持续运行的项目型租赁任务。",
        conditions: "具备燃油补给条件、运行周期较长的施工、基础设施和工业现场。",
      },
      {
        slug: "lf951",
        title: "LF951 手推式移动照明灯塔",
        role: "承担需要在作业区域内灵活移动的紧凑型照明任务。",
        conditions: "部署空间较小、需要短距离转移或运输安排较灵活的现场。",
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        role: "承担低噪声或燃油补给受限，且运行周期适合太阳能与储能方式的任务。",
        conditions: "具备适宜日照的户外或离网现场；不能替代所有运行条件下的柴油设备。",
      },
    ],
    transitionTitle: "从应用需求进入配置判断",
    transitionDescription:
      "租赁设备需求会随主要客户行业、工地环境、运行周期、运输方式和能源条件而变化。本页说明应用环境；柴油与太阳能比较、升降系统及具体配置判断应进入正式选型指南。",
    bottomCtaTitle: "沟通您的租赁车队应用需求",
    ctaDescription:
      "提交车队需要服务的工地类型、运行周期和部署条件，我们可以协助您进一步确认相关产品与选型方案。",
    bottomCtaLabel: "提交租赁应用需求",
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
    ? "租赁车队用移动照明灯塔应用 | LFADJ"
    : "Mobile Light Towers for Rental Fleets | LFADJ";
  const description = zh
    ? "了解移动照明灯塔如何适应租赁车队在不同工地、运输部署、操作交接和维护管理方面的应用需求。"
    : "Explore how mobile light towers support rental fleets across changing jobsites, transport, deployment, operation and maintenance conditions.";
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              {content.eyebrow}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {content.subtitle}
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {content.cta}
              </Link>
              <Link
                href={`/${locale}/solutions/how-to-choose-the-right-light-tower`}
                className="text-sm font-semibold leading-6 text-slate-200 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-white"
              >
                {content.selectionLink}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-16 text-slate-950 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {content.challengesTitle}
          </h2>

          <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
            {content.challenges.map((challenge, index) => (
              <li
                key={challenge.title}
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
                    {challenge.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {challenge.description}
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
            {content.operationsTitle}
          </h2>

          <div className="mt-12 grid border-y border-slate-200 md:grid-cols-2">
            {content.operations.map((operation, index) => (
              <article
                key={operation.title}
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
                  {operation.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                  {operation.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {content.productsTitle}
          </h2>

          <div className="mt-12 grid border-y border-slate-300 lg:grid-cols-3">
            {content.products.map((product, index) => (
              <article
                key={product.slug}
                className={[
                  "py-9",
                  index < content.products.length - 1 ? "border-b border-slate-300 lg:border-b-0 lg:border-r" : "",
                  index === 0 ? "lg:pr-8" : "lg:px-8 last:lg:pr-0",
                ].join(" ")}
              >
                <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                  {product.title}
                </h3>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                  {content.roleLabel}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {product.role}
                </p>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                  {content.conditionsLabel}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {product.conditions}
                </p>
                <Link
                  href={`/${locale}/products/${product.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-800"
                >
                  {content.productLinkLabel}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 border-y border-slate-300 py-9">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {content.transitionTitle}
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
              {content.transitionDescription}
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <Link href={`/${locale}/solutions/how-to-choose-the-right-light-tower`} className="text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800">
                {content.selectionLink}
              </Link>
              <Link href={`/${locale}/resources/light-tower-total-cost-of-ownership`} className="text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800">
                {content.tcoLabel}
              </Link>
              <Link href={`/${locale}/applications`} className="text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800">
                {content.applicationsHubLabel}
              </Link>
            </div>
          </div>

          <div
            id="rental-fleet-review"
            className="mt-12 flex scroll-mt-24 flex-col items-start justify-between gap-6 bg-slate-950 px-6 py-8 sm:px-8 lg:flex-row lg:items-center"
          >
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold leading-8 text-white sm:text-2xl">
                {content.bottomCtaTitle}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {content.ctaDescription}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
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
