import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Construction Lighting Applications",
    subtitle:
      "Mobile light towers support temporary illumination across changing construction work areas, including earthworks, concrete operations, equipment zones, access routes, and material handling areas.",
    heroCta: "Discuss Your Construction Application",
    ctaDescription:
      "Share the project type, work areas, expected operating hours, site environment, and available fuel, power, or solar conditions. This background helps identify the relevant product and selection information for the application.",
    imageAlt:
      "Mobile light tower illuminating construction machinery and tower cranes at a construction site at night",
    applicationsTitle: "Construction Work Areas and Operating Tasks",
    applications: [
      {
        title: "Earthworks and Excavation",
        description:
          "Site grading, excavation and soil loading can continue after dark around excavators and loaders. Mobile lighting provides temporary illumination near changing work faces and equipment areas as earthworks progress.",
      },
      {
        title: "Concrete Placement and Finishing",
        description:
          "Concrete placement, pumping, formwork and finishing may continue through night shifts. Temporary lighting can follow the active pour, reinforcement area and finishing work as the task moves across the site.",
      },
      {
        title: "Road and Infrastructure Construction",
        description:
          "Roads, utility corridors, bridges and municipal works often form linear work areas that change with project progress. Mobile lighting can support temporary work faces, access routes and separated infrastructure zones.",
      },
      {
        title: "Structural Installation and Assembly",
        description:
          "Steel installation, component assembly and equipment installation may take place before permanent site lighting is available. Mobile lighting can be positioned near the current assembly area and adjusted as the structure develops.",
      },
      {
        title: "Equipment Operation and Maintenance Zones",
        description:
          "Cranes, excavators, loaders and other construction equipment may operate or require inspection during low-light periods. Mobile lighting can support temporary operating, parking and service areas without replacing site-specific equipment procedures.",
      },
      {
        title: "Access Routes, Loading Areas and Material Yards",
        description:
          "Temporary vehicle routes, material loading, component storage and tool-handling areas may shift as deliveries and work fronts change. Mobile lighting can be repositioned around the current access and material-handling task.",
      },
    ],
    requirementsTitle: "Construction-Site Lighting Challenges",
    requirements: [
      {
        title: "Changing Work Areas",
        description:
          "Construction stages, equipment positions and active work faces change as the project advances. Lighting equipment may therefore need to be redeployed around the current task and access route.",
      },
      {
        title: "Uneven Ground and Limited Setup Space",
        description:
          "Excavation edges, temporary roads and material areas can limit where equipment is placed, where supports can be deployed and which directions can be illuminated. Available setup space must be considered at the current work stage.",
      },
      {
        title: "Shadows, Glare and Obstructions",
        description:
          "Machinery, formwork, stored materials and temporary structures can block or redirect light. Equipment position and fixture direction affect the visibility available across the active work area.",
      },
      {
        title: "Long or Irregular Operating Hours",
        description:
          "Continuous concrete work, schedule changes and night construction can create different operating periods. The expected hours and site attendance conditions need to be understood before a solution is compared.",
      },
      {
        title: "Power Availability and Fuel Access",
        description:
          "Some work areas have access to grid power, while others rely on temporary power arrangements or fuel delivery. These conditions affect how temporary lighting can be used without deciding the energy option on this page.",
      },
      {
        title: "Dust, Weather and Equipment Movement",
        description:
          "Earthworks, vehicle movement and open-air conditions can change dust, weather exposure and available deployment paths. Lighting use and repositioning need to reflect the conditions present at each stage of work.",
      },
    ],
    equipmentRolesTitle: "Equipment Roles in Construction Operations",
    equipmentRoles: [
      {
        title: "Primary Work-Area Lighting",
        description:
          "Temporary illumination around active work fronts such as excavation areas, concrete operations, structural assembly zones and equipment work areas.",
      },
      {
        title: "Relocatable Lighting Between Work Phases",
        description:
          "Mobile units can be repositioned as work fronts, access routes, equipment locations and material handling areas change during the project.",
      },
      {
        title: "Supplementary Lighting for Temporary or Remote Areas",
        description:
          "Mobile light towers can supplement fixed or temporary site lighting where permanent lighting is unavailable, incomplete or impractical during a construction phase.",
      },
    ],
    productRolesTitle: "Product Roles for Further Evaluation",
    roleLabel: "Typical construction role",
    conditionsLabel: "Relevant site conditions",
    boundaryLabel: "Next-step check",
    productLinkLabel: "View product details",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        type: "Diesel-powered mobile lighting equipment",
        role: "A reference option for construction tasks with longer night operating periods and limited access to planned external power.",
        conditions: "Earthworks, concrete, road or equipment work areas where fuel access, maintenance arrangements and deployment conditions can support a diesel-powered role.",
        boundary: "Further review should confirm operating hours, lighting objectives, site conditions and expected quantity; the product page provides the model facts.",
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        type: "Solar and battery-powered mobile lighting equipment",
        role: "A reference option for temporary access routes, material areas or phase-specific work faces where sunlight and deployment conditions can support solar and stored-energy operation.",
        conditions: "Projects that need to review solar resource, daily lighting hours, weather changes, equipment placement and energy-storage needs.",
        boundary: "It is not a default choice for every construction project; the product page provides model facts for the next project review.",
      },
    ],
    selectionDescription:
      "Diesel and solar lighting conditions depend on operating hours, energy access, deployment conditions, weather, maintenance arrangements and how the work area changes.",
    selectionLinkLabel: "Compare Diesel and Solar Lighting Conditions",
    bottomCtaTitle: "Discuss Your Construction Lighting Requirements",
    bottomCtaDescription:
      "Share the construction work area, operating schedule, ground conditions, available power or fuel, expected quantity and site-specific deployment constraints.",
    bottomCtaLabel: "Share Your Construction Requirements",
    relatedInformationTitle: "Related Information",
    relatedResourcesTitle: "Construction Lighting Knowledge",
    resourceDescription:
      "Continue with the lighting concepts that affect how output is distributed across changing construction work areas.",
    resourceLinkLabel: "How to Choose Lumens and Beam Angle",
    relatedSolutionsTitle: "Related Solutions",
    temporarySolutionLinkLabel: "Temporary Site Lighting",
    temporarySolutionDescription:
      "Review planning considerations for temporary lighting across changing work areas and site conditions.",
    relatedApplicationsTitle: "Related Applications",
    relatedApplications: [
      { slug: "mining-lighting", label: "Mining Lighting" },
      { slug: "rental-lighting", label: "Rental Lighting" },
      { slug: "emergency-lighting", label: "Emergency Lighting" },
      { slug: "oil-gas-lighting", label: "Oil & Gas Lighting Applications" },
    ],
  },
  zh: {
    title: "建筑施工照明应用",
    subtitle:
      "移动照明灯塔可用于不断变化的建筑施工区域，为土方作业、混凝土施工、设备操作、临时通道及物料装卸区域提供临时照明支持。",
    heroCta: "沟通建筑施工照明需求",
    ctaDescription:
      "请说明项目类型、作业区域、预计运行时间、现场环境，以及可用的燃油、电力或日照条件。这些背景信息有助于进一步确认与应用相关的产品和选型资料。",
    imageAlt: "移动照明灯塔在夜间建筑工地为工程机械和塔吊作业提供照明",
    applicationsTitle: "施工区域与作业任务",
    applications: [
      {
        title: "土方与基坑作业",
        description: "场地平整、基坑开挖和土方装运可能在夜间围绕挖掘机、装载机继续进行。移动照明可在作业面和设备区域变化时提供临时照明并调整位置。",
      },
      {
        title: "混凝土浇筑与收面",
        description: "混凝土浇筑、泵送、模板钢筋和收面作业可能跨越夜间班次。临时照明可跟随当前浇筑、钢筋作业面和收面区域的变化进行部署。",
      },
      {
        title: "道路与基础设施施工",
        description: "道路、管线、桥梁和市政工程通常形成随进度变化的线性作业面。移动照明可支持临时工作面、通行路线和分散的基础设施作业区域。",
      },
      {
        title: "结构安装与现场装配",
        description: "钢结构安装、构件装配和设备安装可能发生在固定照明尚未投入使用的阶段。移动照明可部署到当前装配区域，并随结构和作业面发展调整位置。",
      },
      {
        title: "施工设备操作与维护区域",
        description: "起重、挖掘和装载设备可能在低光条件下运行或需要检查维护。移动照明可支持临时操作区、停放区和服务区域，但不替代现场设备作业程序。",
      },
      {
        title: "临时通道、装卸区与材料堆场",
        description: "临时车辆通道、物料装卸、构件堆放和工具材料周转区域会随进场安排和作业面变化。移动照明可围绕当前通行和物料处理任务重新部署。",
      },
    ],
    requirementsTitle: "施工现场的照明运行挑战",
    requirements: [
      {
        title: "不断变化的作业区域",
        description: "施工阶段、设备位置和作业面会随项目推进而改变，因此照明设备可能需要围绕当前任务和通行路线重新部署。",
      },
      {
        title: "不平整地面与有限部署空间",
        description: "基坑边缘、临时道路和材料区可能限制设备放置、支撑展开以及照明方向。可用部署空间需要结合当前施工阶段判断。",
      },
      {
        title: "阴影、眩光与现场遮挡",
        description: "机械、模板、堆放材料和临时结构可能遮挡或改变光线分布，设备位置和灯具方向会影响当前作业面的可视条件。",
      },
      {
        title: "长时间或不规律夜间运行",
        description: "连续浇筑、施工安排变化和夜间作业可能形成不同运行时段，预计运行时间和现场值守条件需要在比较方案前明确。",
      },
      {
        title: "供电条件与燃油补给",
        description: "部分作业区可使用市电，其他区域可能依赖临时供电安排或燃油补给。这些条件会影响临时照明使用方式，但本页不决定能源选项。",
      },
      {
        title: "粉尘、天气与设备移动",
        description: "土方作业、车辆移动和露天环境会改变粉尘、天气暴露和可用通行路径。照明使用与重新定位需要结合各施工阶段的实际条件。",
      },
    ],
    equipmentRolesTitle: "施工运行中的设备应用角色",
    equipmentRoles: [
      {
        title: "主要作业面照明",
        description: "用于土方开挖、混凝土施工、结构装配及设备作业区等当前施工工作面的临时照明。",
      },
      {
        title: "随施工阶段转移的移动照明",
        description: "随着施工工作面、临时通道、设备位置和物料装卸区域变化，移动设备可按项目阶段重新部署。",
      },
      {
        title: "临时及偏远区域的补充照明",
        description: "在固定照明尚未投入、临时供电受限或施工阶段不适合设置永久照明的区域，移动灯塔可作为现场照明补充。",
      },
    ],
    productRolesTitle: "可进一步评估的产品应用方向",
    roleLabel: "典型施工角色",
    conditionsLabel: "相关现场条件",
    boundaryLabel: "下一步确认",
    productLinkLabel: "查看产品详情",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        type: "柴油动力移动照明设备",
        role: "作为施工任务的参考方向，用于夜间运行时段较长且计划外部供电受限的工作。",
        conditions: "可结合土方、混凝土、道路或设备作业区评估，但需要具备燃油补给、维护安排和相应部署条件。",
        boundary: "进一步评估需确认运行时间、照明目标、现场条件和预计数量；型号事实由产品详情页说明。",
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        type: "太阳能与储能供电的移动照明设备",
        role: "作为临时通道、材料区或阶段性工作面的参考方向，前提是日照和部署条件能够支持太阳能与储能运行。",
        conditions: "项目仍需核实太阳能资源、每日照明时长、天气变化、设备摆放和储能需求。",
        boundary: "不应默认适用于所有施工项目；型号事实由产品详情页说明，最终仍需结合项目条件判断。",
      },
    ],
    selectionDescription:
      "柴油与太阳能照明的判断取决于运行时长、能源补给、部署条件、天气变化、维护安排及施工工作面的变化方式。",
    selectionLinkLabel: "对比柴油与太阳能照明条件",
    bottomCtaTitle: "沟通您的建筑施工照明需求",
    bottomCtaDescription:
      "请提供施工作业区域、运行时间、地面条件、供电或燃油条件、预计数量及现场部署限制。",
    bottomCtaLabel: "提交建筑施工照明需求",
    relatedInformationTitle: "相关信息",
    relatedResourcesTitle: "施工照明知识",
    resourceDescription:
      "进一步了解流明与投射角度如何影响不断变化的施工作业区域中的光线分布。",
    resourceLinkLabel: "移动照明灯塔的流明与投射角度怎么选",
    relatedSolutionsTitle: "相关解决方案",
    temporarySolutionLinkLabel: "临时工地照明",
    temporarySolutionDescription:
      "了解如何根据不断变化的作业区域和现场条件规划临时照明。",
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
    ? "建筑施工现场照明应用 | LFADJ"
    : "Construction Site Lighting Applications | LFADJ";
  const description = zh
    ? "了解移动照明灯塔在土方、混凝土施工、临时通道、设备作业区、材料堆场及阶段性工作面中的应用与运行条件。"
    : "Explore mobile light tower applications for construction work areas, including earthworks, concrete operations, access routes, equipment zones and temporary work fronts.";
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
            {content.equipmentRolesTitle}
          </h2>

          <div className="mt-12 grid border-y border-slate-200 md:grid-cols-3">
            {content.equipmentRoles.map((role, index) => (
              <article
                key={role.title}
                className={[
                  "border-b border-slate-200 py-8 md:border-b-0 md:px-8",
                  index < content.equipmentRoles.length - 1
                    ? "md:border-r"
                    : "",
                  index === 0 ? "md:pl-0" : "",
                  index === content.equipmentRoles.length - 1 ? "md:pr-0" : "",
                ].join(" ")}
              >
                <p className="text-sm font-bold tabular-nums text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                  {role.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {role.description}
                </p>
              </article>
            ))}
          </div>

          <h3 className="mt-16 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">
            {content.productRolesTitle}
          </h3>

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
                  {content.productLinkLabel}: {product.title}
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
                      <li className="mt-4">
                        <p className="text-sm leading-6 text-slate-600">
                          {content.temporarySolutionDescription}
                        </p>
                        <Link
                          href={`/${locale}/solutions/temporary-site-lighting`}
                          className="mt-2 inline-flex text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                        >
                          {content.temporarySolutionLinkLabel}
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
                {content.bottomCtaDescription}
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
