import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Construction Lighting Applications",
    subtitle:
      "Mobile light towers support night work across building sites, road and infrastructure projects, and temporary work zones where lighting positions need to move as construction progresses.",
    heroCta: "Discuss Your Construction Application",
    ctaDescription:
      "Share the project type, work areas, expected operating hours, site environment, and available fuel, power, or solar conditions. This background helps identify the relevant product and selection information for the application.",
    imageAlt:
      "Mobile light tower illuminating construction machinery and tower cranes at a construction site at night",
    applicationsTitle: "Construction Work Areas and Project Stages",
    applications: [
      {
        title: "Building Construction Sites",
        description:
          "Structural work, outdoor work faces, and material or equipment areas may need temporary lighting before permanent power and lighting are available. Mobile units can be repositioned as access routes, structures, and active work areas change between project stages.",
      },
      {
        title: "Road and Infrastructure Work",
        description:
          "Road, bridge, utility, and infrastructure work often advances through linear or separated work zones. Temporary lighting can move with crews while accommodating changing traffic controls, barriers, and construction boundaries.",
      },
      {
        title: "Concrete Pours and Night Operations",
        description:
          "Concrete pours and other time-sensitive activities may continue after dark or across extended shifts. Movable lighting helps crews maintain visibility as the active pour, access route, and finishing area progress across the site.",
      },
      {
        title: "Temporary Work Zones",
        description:
          "Short-term construction, temporary repairs, and changing support areas may not justify permanent lighting. Mobile equipment allows the illuminated area to follow the current task instead of remaining fixed after the work zone moves.",
      },
      {
        title: "Equipment Staging and Material Handling",
        description:
          "Machinery staging, loading, unloading, and material transfer bring workers, vehicles, and equipment into the same area. Temporary lighting may need to cover movement paths and then relocate when staging or storage areas are reorganized.",
      },
      {
        title: "Site Inspection and Unplanned Work",
        description:
          "Night inspections, temporary repairs, and unplanned construction tasks can occur away from established lighting. A mobile light source can be deployed near the immediate work area and moved again when access or task priorities change.",
      },
    ],
    requirementsTitle: "Construction-Site Lighting Challenges",
    requirements: [
      {
        title: "Changing Work Areas",
        description:
          "Work faces, material areas, access routes, and equipment zones shift as the project advances. Lighting equipment may therefore need to be redeployed or repositioned within the site.",
      },
      {
        title: "Mixed Site Activity",
        description:
          "Workers, vehicles, lifting equipment, and construction machinery may operate at the same time. Lighting placement needs to account for movement paths, temporary obstacles, structures, and visibility from different directions.",
      },
      {
        title: "Dust, Weather and Temperature",
        description:
          "Dust, rain, wind, and changing temperatures form part of outdoor construction conditions. Equipment use and placement need to reflect the conditions present at each site and stage of work.",
      },
      {
        title: "Uneven Ground and Deployment Space",
        description:
          "Temporary work areas may have uneven ground, restricted access, or limited space around machinery and materials. Available deployment space can change as site routes and work zones are reorganized.",
      },
      {
        title: "Transport and Site Relocation",
        description:
          "Lighting equipment may move between projects, work areas, and construction stages. Transport access, unloading, initial deployment, and later repositioning all form part of its construction-site use.",
      },
      {
        title: "Fuel, Noise and Power Conditions",
        description:
          "Fuel access, noise limits, usable sunlight, and external power availability differ between projects. These conditions affect the role a lighting system can perform, while detailed configuration decisions belong in the selection guide.",
      },
    ],
    productsTitle: "Equipment Roles on Construction Sites",
    roleLabel: "Typical construction role",
    conditionsLabel: "Relevant site conditions",
    boundaryLabel: "Next-step check",
    productLinkLabel: "View product details",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        type: "Diesel-powered mobile lighting equipment",
        role: "Construction night work that calls for higher-output lighting and operation across longer work periods.",
        conditions: "Building, road, infrastructure, and industrial work areas where diesel fuel is available and external power is not the planned lighting source.",
        boundary: "The product page provides model specifications; project conditions still determine whether a diesel-powered role fits the task.",
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        type: "Solar and battery-powered mobile lighting equipment",
        role: "Temporary, off-grid, or remote construction lighting where the operating schedule can align with solar charging and stored energy.",
        conditions: "Sites with usable sunlight, limited routine fuel access, or a need for lower-noise battery-powered lighting during operation.",
        boundary: "Its role depends on solar conditions, lighting load, battery capacity, operating hours, and the site environment; it does not replace diesel equipment for every task.",
      },
    ],
    selectionDescription:
      "This application page explains construction tasks and operating conditions. Use the selection guide to assess diesel, solar, and configuration directions, check each product page for model specifications, and share the actual project background through Contact.",
    selectionLinkLabel: "Read the Mobile Light Tower Selection Guide",
    bottomCtaTitle: "Share Your Construction-Site Conditions",
    bottomCtaLabel: "Submit Your Construction Application",
    relatedInformationTitle: "Related Information",
    relatedResourcesTitle: "Construction Lighting Knowledge",
    resourceDescription:
      "Continue with the lighting concepts that affect how output is distributed across changing construction work areas.",
    resourceLinkLabel: "How to Choose Lumens and Beam Angle",
    relatedSolutionsTitle: "Related Solutions",
    relatedApplicationsTitle: "Related Applications",
    relatedApplications: [
      { slug: "mining-lighting", label: "Mining Lighting" },
      { slug: "rental-lighting", label: "Rental Lighting" },
      { slug: "emergency-lighting", label: "Emergency Lighting" },
      { slug: "oil-gas-lighting", label: "Oil & Gas Lighting Applications" },
    ],
  },
  zh: {
    title: "工程施工照明应用",
    subtitle:
      "移动照明灯塔可用于建筑工地、道路与基础设施工程及临时作业区的夜间施工，并能随施工阶段和作业位置变化进行移动部署。",
    heroCta: "沟通施工照明需求",
    ctaDescription:
      "请说明项目类型、作业区域、预计运行时间、现场环境，以及可用的燃油、电力或日照条件。这些背景信息有助于进一步确认与应用相关的产品和选型资料。",
    imageAlt: "移动照明灯塔在夜间建筑工地为工程机械和塔吊作业提供照明",
    applicationsTitle: "施工区域与项目阶段",
    applications: [
      {
        title: "建筑施工现场",
        description: "建筑主体、室外作业面以及材料和设备区域，在永久供电与固定照明投入使用前可能需要临时照明。随着通行路线、建筑结构和作业面在不同阶段发生变化，移动设备可相应调整位置。",
      },
      {
        title: "道路与基础设施施工",
        description: "道路、桥梁、管线和基础设施工程通常沿线推进，或分布在相互分隔的作业区。临时照明可随施工班组移动，并适应交通管制、围挡和施工边界的变化。",
      },
      {
        title: "混凝土浇筑与夜间工序",
        description: "混凝土浇筑等对时间连续性有要求的工序，可能延续至夜间或跨越较长班次。移动照明可随浇筑位置、通行路线和收面区域的推进调整部署。",
      },
      {
        title: "临时作业区",
        description: "短期施工、临时检修和不断变化的辅助区域未必具备固定照明条件。移动设备可以跟随当前任务调整照明位置，避免作业区转移后照明仍停留在原处。",
      },
      {
        title: "机械待命与材料转运区",
        description: "机械待命、材料装卸和转运会使人员、车辆与设备集中在同一区域。临时照明需要兼顾活动路径，并在待命区或堆放区重新安排后随之转移。",
      },
      {
        title: "现场检查与非计划作业",
        description: "夜间检查、临时维修和非计划施工任务可能发生在既有照明范围之外。移动光源可部署到当前作业位置，并在通行条件或任务重点变化后再次转移。",
      },
    ],
    requirementsTitle: "施工现场的照明运行挑战",
    requirements: [
      {
        title: "不断变化的作业区域",
        description: "作业面、材料区、通行路线和设备区域会随项目推进而改变，因此照明设备可能需要在现场重新部署或调整位置。",
      },
      {
        title: "人员、车辆与机械混合作业",
        description: "人员、车辆、起重设备和工程机械可能同时活动，照明位置需要考虑移动路径、临时障碍物、建筑结构和不同方向的可视性。",
      },
      {
        title: "粉尘、风雨与温度变化",
        description: "粉尘、降雨、风和温度变化是户外施工环境的一部分，设备使用与部署需要结合各现场及施工阶段的实际条件。",
      },
      {
        title: "不平整地面与有限部署空间",
        description: "临时作业区可能存在不平整地面、受限通道，或机械和材料周边空间有限等情况；随着路线和作业区调整，可用部署位置也会变化。",
      },
      {
        title: "运输与现场转移",
        description: "照明设备可能在不同项目、作业区域和施工阶段之间移动，运输通行、卸载、初次部署及后续重新定位都属于施工现场使用的一部分。",
      },
      {
        title: "燃油、噪声与供电条件",
        description: "不同项目的燃油补给、噪声限制、可用日照和外部电力条件并不相同。这些条件会影响照明设备承担的应用角色，具体配置判断应进入选型指南。",
      },
    ],
    productsTitle: "施工现场中的设备应用角色",
    roleLabel: "典型施工角色",
    conditionsLabel: "相关现场条件",
    boundaryLabel: "下一步确认",
    productLinkLabel: "查看产品详情",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        type: "柴油动力移动照明设备",
        role: "用于照明输出要求较高，并需要覆盖较长作业时段的施工夜间任务。",
        conditions: "具备燃油补给条件，且照明不以外部电力作为计划供电来源的建筑、道路、基础设施和工业作业区。",
        boundary: "具体型号规格由产品页说明；柴油动力是否符合任务，仍需结合实际项目条件判断。",
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        type: "太阳能与储能供电的移动照明设备",
        role: "用于运行周期能够与太阳能充电和储能条件匹配的临时、离网或偏远施工照明任务。",
        conditions: "具备可用日照、日常燃油补给受限，或运行期间需要较低噪声电池供电照明的现场。",
        boundary: "其应用角色取决于日照、照明负载、电池容量、运行时间和现场环境，不能替代所有施工任务中的柴油设备。",
      },
    ],
    selectionDescription:
      "本应用页说明施工任务与运行条件；柴油、太阳能和具体配置方向由选型指南承接，型号规格由产品详情页说明，实际项目背景可通过 Contact 提交。",
    selectionLinkLabel: "查看移动照明灯塔选型指南",
    bottomCtaTitle: "提交施工现场应用背景",
    bottomCtaLabel: "提交施工应用需求",
    relatedInformationTitle: "相关信息",
    relatedResourcesTitle: "施工照明知识",
    resourceDescription:
      "进一步了解流明与投射角度如何影响不断变化的施工作业区域中的光线分布。",
    resourceLinkLabel: "移动照明灯塔的流明与投射角度怎么选",
    relatedSolutionsTitle: "相关解决方案",
    relatedApplicationsTitle: "相关应用",
    relatedApplications: [
      { slug: "mining-lighting", label: "矿山照明" },
      { slug: "rental-lighting", label: "租赁照明" },
      { slug: "emergency-lighting", label: "应急照明" },
      { slug: "oil-gas-lighting", label: "油气行业照明应用" },
    ],
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
  const url = `https://lfadj.com/${lang}/applications/construction-lighting`;
  const title = zh
    ? "工程施工照明应用 | 移动照明灯塔 | LFADJ"
    : "Construction Lighting Applications | Mobile Light Towers | LFADJ";
  const description = zh
    ? "了解移动照明设备在建筑工地、基础设施建设和临时施工区域中的夜间照明应用。"
    : "Explore mobile lighting applications for construction sites, infrastructure projects and temporary night work areas.";
  const image =
    "https://lfadj.com/images/applications/construction-lighting/construction-lighting-application-hero.webp";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/applications/construction-lighting",
        "zh-CN": "https://lfadj.com/zh/applications/construction-lighting",
        "x-default":
          "https://lfadj.com/en/applications/construction-lighting",
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
            ? "移动照明灯塔为夜间工程施工提供照明"
            : "Mobile light tower illuminating a construction site at night",
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

export default function ConstructionLightingPage({
  params,
}: {
  params: { lang: string };
}) {
  const locale: Lang = isLang(params.lang) ? params.lang : "en";
  const content = copy[locale];

  return (
    <main className="bg-slate-950">
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden px-6 py-24 sm:min-h-[720px] sm:px-8 lg:px-10">
        <Image
          src="/images/applications/construction-lighting/construction-lighting-application-hero.webp"
          alt={content.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/20" />

        <div className="relative mx-auto w-full max-w-[1280px]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {content.subtitle}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="mt-9 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {content.heroCta}
            </Link>
          </div>
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
                  index < content.applications.length - 2
                    ? ""
                    : "md:border-b-0",
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

      <section className="bg-slate-100 px-6 py-20 text-slate-950 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            {content.requirementsTitle}
          </h2>

          <div className="border-t border-slate-300">
            {content.requirements.map((requirement, index) => (
              <article
                key={requirement.title}
                className="grid gap-3 border-b border-slate-300 py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5"
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
                <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-500">
                  {product.type}
                </p>
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
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                  {content.boundaryLabel}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {product.boundary}
                </p>
                <Link
                  href={`/${locale}/products/${product.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold leading-6 text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-800"
                >
                  {content.productLinkLabel}
                </Link>
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
                  {content.relatedResourcesTitle}
                </h4>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {content.resourceDescription}
                </p>
                <Link
                  href={`/${locale}/resources/how-to-choose-light-tower-lumens-beam-angle`}
                  className="mt-5 inline-flex text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                >
                  {content.resourceLinkLabel}
                </Link>
              </div>

              <div className="border-b border-slate-200 py-7 lg:border-b-0 lg:border-r lg:px-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedSolutionsTitle}
                </h4>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {content.selectionDescription}
                </p>
                <ul className="mt-5">
                  <li>
                    <Link
                      href={`/${locale}/solutions/how-to-choose-the-right-light-tower`}
                      className="text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                    >
                      {content.selectionLinkLabel}
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
                    return (
                      <li key={application.slug}>
                        <Link
                          href={`/${locale}/applications/${application.slug}`}
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

          <div className="mt-12 flex flex-col items-start justify-between gap-6 bg-slate-950 px-6 py-8 sm:px-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold leading-8 text-white sm:text-2xl">
                {content.bottomCtaTitle}
              </h3>
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
