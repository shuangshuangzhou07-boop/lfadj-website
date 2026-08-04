import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Mining Lighting Solutions | Mobile Light Towers for Mine Sites | LFADJ",
  description:
    "Reliable mobile lighting for open-pit mines, remote mining sites, transportation areas and temporary night work zones.",
  alternates: {
    canonical: "https://lfadj.com/applications/mining-lighting",
  },
};

const copy = {
  en: {
    title: "Mining Lighting Applications",
    subtitle:
      "Mobile light towers support night work across open-pit work areas, haul roads, loading zones, maintenance areas and temporary mining tasks where lighting must move with operations.",
    heroCta: "Discuss Your Mining Application",
    bottomCtaTitle: "Share Your Mining Lighting Requirements",
    bottomCtaDescription:
      "Share the work areas, night operating hours, deployment conditions, energy supply and expected quantity for your mining project. LFADJ can use this background to discuss relevant equipment directions for further comparison.",
    bottomCtaLabel: "Submit Your Mining Application",
    imageAlt:
      "Mobile light tower illuminating excavators and haul equipment at an open-pit mine at night",
    applicationsTitle: "Mining Work Areas and Operating Tasks",
    applications: [
      {
        title: "Open-Pit Working Areas",
        description:
          "Night excavation, loading and temporary work faces may extend beyond fixed lighting. Mobile lighting can be repositioned as active benches, equipment routes and work points change.",
      },
      {
        title: "Haul Roads and Intersections",
        description:
          "Haul roads, intersections and temporary traffic points bring transport vehicles and equipment into shared movement areas. Mobile lighting can support visibility as routes or traffic arrangements change.",
      },
      {
        title: "Loading and Unloading Areas",
        description:
          "Ore loading, unloading, stockpiling and vehicle coordination create changing work areas around material handling. Lighting may need to move when loading points or staging arrangements are reorganized.",
      },
      {
        title: "Equipment Maintenance Areas",
        description:
          "Inspection and maintenance of haul trucks, excavators and site equipment may take place away from established lighting. A mobile source can be deployed near the current maintenance position.",
      },
      {
        title: "Crushing and Processing Areas",
        description:
          "Equipment around crushers, conveyors and processing areas may require temporary visibility for inspection, material handling or short maintenance tasks without assuming any special hazardous-area certification.",
      },
      {
        title: "Exploration and Temporary Work Zones",
        description:
          "Exploration points and temporary mining work zones can change location or have limited fixed power. Mobile lighting can follow the task while the work area, access route and operating schedule develop.",
      },
    ],
    requirementsTitle: "Mining-Site Lighting Challenges",
    requirements: [
      {
        title: "Large and Changing Work Areas",
        description:
          "Benches, loading points, roads and equipment areas can cover large distances and shift as extraction or site work progresses. Lighting placement therefore needs to follow the current work face and access pattern.",
      },
      {
        title: "Dust and Reduced Visibility",
        description:
          "Dust from excavation, traffic and material handling can reduce visibility and change how light is perceived across the work area. Placement and aiming need to reflect the actual site conditions rather than relying on output alone.",
      },
      {
        title: "Long Nighttime Operating Hours",
        description:
          "Night shifts, maintenance windows and extended operating periods create lighting needs that vary by task and schedule. The operating period is one of the conditions to carry into a later solution or configuration review.",
      },
      {
        title: "Uneven Ground and Deployment Stability",
        description:
          "Mine roads, benches and temporary work areas may be uneven or constrained by equipment and material. Available deployment space and ground conditions affect where mobile lighting can be positioned.",
      },
      {
        title: "Equipment Movement and Glare Control",
        description:
          "Haul trucks, loaders and other equipment move through shared areas, so lighting needs to consider travel paths, changing sight lines and glare toward operators without claiming to remove operational risk.",
      },
      {
        title: "Remote Locations and Energy Supply",
        description:
          "Remote locations may have limited grid access, fuel logistics or suitable charging conditions. These factors influence the role a lighting system can perform and belong in a project-specific selection discussion.",
      },
    ],
    productsTitle: "Equipment Roles in Mining Operations",
    suitableLabel: "Typical mining role:",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        applications: [
          "A diesel-powered reference role for extended night work where independent generation support is part of the operating plan.",
          "May suit open-pit work faces, haul routes, loading areas or maintenance tasks when fuel logistics and deployment conditions support that role.",
          "The product page provides model facts; project conditions still determine whether this role fits the task.",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        applications: [
          "A solar-and-battery reference role for temporary or changing mining tasks where usable sunlight and the deployment period support stored-energy operation.",
          "May suit exploration points, temporary work zones or locations where routine fuel supply is limited and the operating schedule can align with charging conditions.",
          "The product page provides model facts; solar conditions, load, operating hours and site access still require project review.",
        ],
      },
    ],
    relatedInformationTitle: "Related Information",
    relatedProductsTitle: "Related Products",
    relatedSolutionsTitle: "Related Solutions",
    relatedSolutionLabel: "How to Choose the Right Light Tower",
    relatedResourceTitle: "Mining Lighting Knowledge",
    relatedResourceDescription:
      "Review how lumens, working-plane illuminance and beam angle affect lighting across changing mine work areas.",
    relatedResourceLabel: "How to Choose Lumens and Beam Angle",
    relatedApplicationsTitle: "Related Applications",
    relatedApplications: [
      { slug: "construction-lighting", label: "Construction Lighting" },
      { slug: "rental-lighting", label: "Rental Lighting" },
      { slug: "emergency-lighting", label: "Emergency Lighting" },
      { slug: "oil-gas-lighting", label: "Oil & Gas Lighting Applications" },
    ],
  },
  zh: {
    title: "矿山照明应用",
    subtitle:
      "移动照明灯塔可用于露天矿作业面、矿区运输道路、装卸区、设备检修区和临时矿山任务，并随作业位置和运行安排变化进行部署。",
    heroCta: "沟通矿山照明需求",
    bottomCtaTitle: "提交您的矿山照明需求",
    bottomCtaDescription:
      "请提供作业区域、夜间运行时间、部署条件、供能方式和预计数量等矿山项目背景。LFADJ 可据此沟通适合进一步比较的设备方向。",
    bottomCtaLabel: "提交矿山应用需求",
    imageAlt: "移动照明灯塔在夜间露天矿区为挖掘设备和运输作业提供照明",
    applicationsTitle: "矿山作业区域与运行任务",
    applications: [
      {
        title: "露天矿作业区域",
        description: "夜间采掘、装载和临时工作面可能超出固定照明范围。随着作业台阶、设备路线和工作点变化，移动照明可以相应调整位置。",
      },
      {
        title: "矿区运输道路与交叉口",
        description: "运输道路、交叉口和临时交通点会形成车辆与设备共同通行的区域。随着路线或交通组织变化，移动照明可以继续支持现场可视性。",
      },
      {
        title: "装卸作业区",
        description: "矿石装载、卸载、堆放和车辆配合作业会形成不断变化的物料处理区域。装卸点或待命安排调整后，照明位置也可能需要转移。",
      },
      {
        title: "设备检修区域",
        description: "矿用车辆、挖掘设备和现场机械的检查维护可能发生在既有照明范围之外。移动光源可部署到当前检修位置附近。",
      },
      {
        title: "破碎与处理区域",
        description: "破碎机、输送设备和处理区域周边可能需要临时照明，用于检查、物料处理或短期检修；本页不对特殊危险区域认证作出假设。",
      },
      {
        title: "勘探与临时作业区",
        description: "勘探点和临时矿山作业区可能快速变化，或缺少固定供电。移动照明可以跟随任务，并适应作业区、通行路线和运行安排的变化。",
      },
    ],
    requirementsTitle: "矿山现场的照明运行挑战",
    requirements: [
      {
        title: "大范围且持续变化的作业面",
        description: "作业台阶、装卸点、道路和设备区域可能覆盖较大范围，并随采掘或现场任务推进而变化。因此照明位置需要配合作业面和通行模式调整。",
      },
      {
        title: "粉尘与能见度下降",
        description: "采掘、车辆通行和物料处理产生的粉尘可能降低能见度，并改变作业区域对光线的感受。照明位置和方向需要结合现场条件判断，而不能只看输出量。",
      },
      {
        title: "长时间夜间运行",
        description: "夜班、维护窗口和较长运行时段会形成不同的照明需求，具体运行时间应作为后续方案或配置判断的一部分。",
      },
      {
        title: "不平整地面与部署稳定性",
        description: "矿区道路、作业台阶和临时工作区可能不平整，设备和物料也会限制可用空间。部署位置需要结合地面和现场通行条件确认。",
      },
      {
        title: "设备移动与眩光控制",
        description: "运输车辆、装载设备和其他机械会在共同区域移动，照明需要考虑行进路线、变化中的视线和面向操作人员的眩光，不能宣称消除运行风险。",
      },
      {
        title: "偏远区域与能源补给",
        description: "偏远区域可能面临外部电力有限、燃油运输或充电条件受限等情况。这些因素会影响照明设备承担的应用角色，并应进入项目选型讨论。",
      },
    ],
    productsTitle: "矿山作业中的设备应用角色",
    suitableLabel: "典型矿山角色：",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        applications: [
          "作为柴油动力参考角色，用于持续夜间作业，且独立发电支持属于运行安排的一部分。",
          "当燃油补给和部署条件能够支持该角色时，可用于露天作业面、运输路线、装卸区或设备检修任务。",
          "产品详情页负责说明型号事实，具体项目仍需判断这一角色是否符合任务条件。",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        applications: [
          "作为太阳能与电池供电的参考角色，用于日照条件和部署周期能够支持储能运行的临时或变化中的矿山任务。",
          "可用于勘探点、临时作业区，或日常燃油补给受限且运行安排能够配合充电条件的地点。",
          "产品详情页负责说明型号事实，日照、负载、运行时间和现场通行条件仍需结合项目确认。",
        ],
      },
    ],
    relatedInformationTitle: "相关信息",
    relatedProductsTitle: "相关产品",
    relatedSolutionsTitle: "相关解决方案",
    relatedSolutionLabel: "如何选择合适的移动照明灯塔",
    relatedResourceTitle: "矿山照明知识",
    relatedResourceDescription:
      "进一步了解流明、工作面照度和投射角度如何影响不断变化的矿山作业区域照明。",
    relatedResourceLabel: "移动照明灯塔的流明与投射角度怎么选",
    relatedApplicationsTitle: "相关应用",
    relatedApplications: [
      { slug: "construction-lighting", label: "工程施工照明" },
      { slug: "rental-lighting", label: "租赁照明" },
      { slug: "emergency-lighting", label: "应急照明" },
      { slug: "oil-gas-lighting", label: "油气行业照明应用" },
    ],
  },
} as const;

export default function MiningLightingPage() {
  const locale = headers().get("x-lfadj-locale") === "zh" ? "zh" : "en";
  const content = copy[locale];

  return (
    <main className="bg-slate-950">
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden px-6 py-24 sm:min-h-[720px] sm:px-8 lg:px-10">
        <Image
          src="/images/applications/mining-lighting/mining-lighting-application-hero.webp"
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
                <Link
                  href={`/${locale}/products/${product.slug}`}
                  className="text-2xl font-bold tracking-tight text-slate-950 underline decoration-blue-300 decoration-2 underline-offset-8 transition-colors hover:text-blue-700"
                >
                  {product.title}
                </Link>
                <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
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

            <div className="mt-8 grid border-y border-slate-200 lg:grid-cols-4">
              <div className="border-b border-slate-200 py-7 lg:border-b-0 lg:border-r lg:pr-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedProductsTitle}
                </h4>
                <ul className="mt-5 space-y-3">
                  {content.products.map((product) => (
                    <li key={product.slug}>
                      <Link
                        href={`/${locale}/products/${product.slug}`}
                        className="text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-b border-slate-200 py-7 lg:border-b-0 lg:border-r lg:px-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedSolutionsTitle}
                </h4>
                <ul className="mt-5">
                  <li>
                    <Link
                      href={`/${locale}/solutions/how-to-choose-the-right-light-tower`}
                      className="text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                    >
                      {content.relatedSolutionLabel}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border-b border-slate-200 py-7 lg:border-b-0 lg:border-r lg:px-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedResourceTitle}
                </h4>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {content.relatedResourceDescription}
                </p>
                <Link
                  href={`/${locale}/resources/how-to-choose-light-tower-lumens-beam-angle`}
                  className="mt-5 inline-flex text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                >
                  {content.relatedResourceLabel}
                </Link>
              </div>

              <div className="py-7 lg:pl-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedApplicationsTitle}
                </h4>
                <ul className="mt-5 space-y-3">
                  {content.relatedApplications.map((application) => (
                    <li key={application.slug}>
                      <Link
                        href={`/${locale}/applications/${application.slug}`}
                        className="text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                      >
                        {application.label}
                      </Link>
                    </li>
                  ))}
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
