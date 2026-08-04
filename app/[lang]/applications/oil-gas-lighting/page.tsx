import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Oil & Gas Lighting Applications",
    subtitle:
      "Mobile light towers can support temporary and relocatable lighting in approved non-hazardous, peripheral, and support areas of oil and gas projects. Deployment must follow the site's hazardous-area classification, equipment requirements, and HSE procedures.",
    cta: "Discuss Your Oil & Gas Application",
    ctaDescription:
      "Share the approved work area, operating schedule, access conditions, energy supply, and deployment requirements for project review.",
    imageAlt: "Mobile light tower supporting an outdoor work area",
    applicationsTitle: "Oil & Gas Work Areas and Lighting Tasks",
    applications: [
      {
        title: "Remote Drilling Camp and Support Areas",
        description:
          "Camp perimeters, materials staging, and equipment preparation areas may need temporary lighting where power, fuel access, traffic routes, noise, and work schedules have been confirmed by the project team. This excludes wellhead and other locations with potential hydrocarbon release unless separately approved.",
      },
      {
        title: "Pipeline Construction and Maintenance Corridors",
        description:
          "Trenching, pipe preparation, inspection, and maintenance points can shift along a linear work front. Lighting positions must follow access roads, relocation needs, work direction, and the site approval for each area; ordinary towers are not assumed suitable for leak or pressurized work zones.",
      },
      {
        title: "Equipment Laydown and Material Handling Areas",
        description:
          "Approved laydown yards and loading preparation areas may require temporary illumination around stored equipment and materials. Vehicle routes, equipment obstructions, parking space, and glare direction should be reviewed before deployment.",
      },
      {
        title: "Access Roads, Site Entrances and Parking Areas",
        description:
          "Temporary roads, entrances, vehicle waiting areas, and peripheral parking can change as a project develops. Lighting placement should account for pedestrian and vehicle movement, slopes, ground conditions, and the direction of light without implying traffic-safety guarantees.",
      },
      {
        title: "Shutdown, Turnaround and Maintenance Support Areas",
        description:
          "Approved maintenance support, tool preparation, spares, and inspection areas may need short-term lighting across multiple shifts. Deployment frequency and work permits must be coordinated; ordinary mobile towers are not assumed suitable inside refinery process or other hazardous areas.",
      },
      {
        title: "Temporary Construction and Contractor Work Zones",
        description:
          "Expansion works, civil construction, temporary facilities, fencing, and access works can create changing contractor work fronts. Lighting needs follow project phases, coordination, equipment movement, and available power or fuel within areas confirmed by the project HSE process.",
      },
    ],
    requirementsTitle: "Oil & Gas Site Lighting Challenges",
    requirements: [
      {
        title: "Hazardous-Area Classification and Site Approval",
        description:
          "Before deployment, the project must confirm the area classification, equipment requirements, and HSE approval. This page does not classify zones or claim hazardous-area or explosion-protection certification; ordinary towers are discussed only for approved non-hazardous or peripheral areas.",
      },
      {
        title: "Remote Locations and Limited Infrastructure",
        description:
          "Remote locations may have limited fixed power, transport access, communications, maintenance response, or fuel supply. These conditions should be described for the project before an equipment direction is evaluated.",
      },
      {
        title: "Long or Variable Operating Schedules",
        description:
          "Night shifts, maintenance windows, and temporary construction periods can create different daily operating schedules. Confirm operating hours, energy supply, and maintenance arrangements rather than assuming a fixed runtime.",
      },
      {
        title: "Dust, Heat, Wind and Corrosive Exposure",
        description:
          "Dust, heat, wind, salt spray, or corrosive air may affect deployment and inspection conditions. The project team should provide the actual environmental combination so protection, maintenance, and placement requirements can be reviewed without assuming a fixed rating.",
      },
      {
        title: "Equipment Movement, Access and Ground Conditions",
        description:
          "Road surfaces, turning space, slopes, soft ground, and equipment access affect where a tower can be parked and supported. These site conditions require a field check; no single placement method is assumed for every location.",
      },
      {
        title: "Glare, Shadows and Work-Area Changes",
        description:
          "Vehicles, pipe sections, equipment, and temporary structures can block light or change the useful direction as work fronts move. Position and aiming need to be reviewed with the work area, without claiming to eliminate glare, shadows, or risk.",
      },
    ],
    rolesTitle: "Equipment Roles in Approved Oil & Gas Work Areas",
    roles: [
      {
        title: "Primary Lighting for Temporary Work Zones",
        description:
          "In approved ordinary construction, equipment preparation, pipeline, or maintenance support areas, mobile towers may be evaluated as the main temporary work lighting when fixed lighting is unavailable. Work-area size, obstructions, energy access, operating hours, and relocation needs still require project review.",
      },
      {
        title: "Supplementary Lighting for Changing Tasks",
        description:
          "Mobile units can supplement fixed lighting when work phases change, equipment blocks light, or temporary maintenance tasks increase. Their position should follow vehicle routes, temporary structures, glare direction, and the changing task rather than replace the site's complete lighting design.",
      },
      {
        title: "Relocatable Lighting Across Peripheral Areas",
        description:
          "Approved roads, entrances, laydown yards, contractor zones, and other peripheral areas may need lighting to move between work fronts. Road access, towing, slope, ground stability, and setup space determine whether a relocation plan is practical.",
      },
    ],
    productsTitle: "Equipment Directions to Evaluate",
    productDirectionNote:
      "The appropriate direction depends on the approved deployment area, daily operating hours, energy availability, environmental exposure, maintenance access, movement frequency, and the site's equipment and HSE requirements.",
    suitableLabel: "Conditions to review:",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        applications: [
          "Approved temporary, maintenance, or peripheral areas",
          "Operating hours, fuel access, maintenance planning, and repeated relocation",
          "A diesel-powered direction for further project review",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        applications: [
          "Approved peripheral, road, entrance, laydown, or support areas",
          "Solar availability, lighting load, operating schedule, and seasonal conditions",
          "A solar-powered direction for further project review",
        ],
      },
    ],
    guidanceTitle: "Further Configuration and Selection Guidance",
    extremeEnvironmentTitle: "How to Choose the Right Light Tower for Harsh Environments",
    extremeEnvironmentDescription:
      "When heat, dust, wind-blown material, salt spray, corrosive air, difficult ground, or maintenance access create a complex environment, review the combined exposure, thermal conditions, filtration, surface treatment, placement, and maintenance requirements with the project team. Environmental reinforcement is not the same as hazardous-area certification.",
    extremeEnvironmentLink: "Review Harsh-Environment Considerations",
    selectionTitle: "How to Choose the Right Light Tower",
    selectionDescription:
      "If the diesel or solar direction is not yet clear, compare operating hours, energy supply, maintenance arrangements, movement frequency, and project lighting conditions in the selection guide. It does not replace hazardous-area or certification review.",
    selectionLink: "Compare Diesel and Solar Directions",
    bottomCtaTitle: "Discuss Your Oil & Gas Lighting Requirements",
    bottomCtaButton: "Submit Project Requirements",
    relatedInformationTitle: "Related Information",
    relatedProductsTitle: "Related Products",
    relatedApplicationsTitle: "Related Applications",
    relatedApplications: [
      { slug: "mining-lighting", label: "Mining Lighting" },
      { slug: "construction-lighting", label: "Construction Lighting" },
    ],
  },
  zh: {
    title: "油气照明应用",
    subtitle:
      "移动照明灯塔可用于油气项目中经确认允许部署普通照明设备的非危险区域、外围区域和辅助作业区。实际部署必须遵循现场危险区域划分、设备要求及 HSE 管理规定。",
    cta: "沟通油气项目照明需求",
    ctaDescription:
      "请提供经批准的作业区域、运行时段、通行条件、能源供应和部署要求，以便进一步沟通项目条件。",
    imageAlt: "用于户外作业区域的移动照明灯塔",
    applicationsTitle: "油气项目作业区域与照明任务",
    applications: [
      {
        title: "偏远钻井营地与辅助区域",
        description: "生活营地外围、物资整理区和设备准备区可能需要临时照明，前提是项目已确认电源、燃油、通行、噪声和运行时段条件。井口及可能存在油气释放风险的区域不在本页普通灯塔的适用范围内，除非项目另行批准。",
      },
      {
        title: "管线施工与维护作业带",
        description: "管沟、管段准备、检查和维护点会沿线性工作面变化，照明位置需要结合道路、转场需求、作业方向及各区域的现场许可进行调整；普通灯塔不默认用于泄漏或带压作业区域。",
      },
      {
        title: "设备堆放与物料装卸区域",
        description: "经批准的设备堆场和装卸准备区可能需要围绕设备与材料提供临时照明。部署前应检查车辆流线、设备遮挡、停放空间和眩光方向。",
      },
      {
        title: "现场道路、出入口与停车区域",
        description: "临时道路、项目出入口、车辆等待区和外围停车区域会随项目推进变化。照明位置应考虑人员与车辆动线、坡度、地面条件和光线方向，但不代表交通安全保证。",
      },
      {
        title: "停工检修与维护辅助区域",
        description: "经现场划定的维护支持区、工具准备区、备件区和外围检查区域可能需要跨多个班次的短期照明。部署频率和作业许可需要协调，普通灯塔不默认用于炼化装置或其他危险区域内部。",
      },
      {
        title: "临时施工与承包商作业区",
        description: "项目扩建、土建施工、临建设施、围栏、道路和基础施工会形成不断变化的承包商作业面。照明需求需要结合项目阶段、承包商协调、设备移动以及经 HSE 流程确认的供电或燃油条件判断。",
      },
    ],
    requirementsTitle: "油气项目现场的照明运行挑战",
    requirements: [
      {
        title: "危险区域划分与现场许可",
        description: "部署前必须由项目确认区域划分、设备要求和 HSE 许可。本页不自行判断 Zone，也不声称具有危险区域或防爆认证；普通灯塔只在项目确认允许的非危险或外围区域中讨论。",
      },
      {
        title: "偏远位置与基础设施限制",
        description: "偏远位置可能面临固定供电、运输通行、通信、维护响应或燃油补给限制。进一步评估设备方向前，应先说明这些项目条件。",
      },
      {
        title: "较长或变化的运行时段",
        description: "夜班、临时检修和施工窗口可能对应不同的每日运行安排。应确认运行时间、能源供应和维护计划，不预设固定续航。",
      },
      {
        title: "粉尘、高温、风力与腐蚀环境",
        description: "粉尘、高温、风沙、盐雾或腐蚀性空气会影响部署和检查条件。项目方应提供实际环境组合，以便进一步核对防护、维护和放置要求，不预设固定等级。",
      },
      {
        title: "设备移动、通行与地面条件",
        description: "道路、转弯空间、坡度、松软地面和设备通行条件会影响灯塔停放与支撑，需要现场检查；不假设所有位置都能采用同一种部署方式。",
      },
      {
        title: "眩光、遮挡与作业区域变化",
        description: "车辆、管材、设备和临建设施可能遮挡光线，作业面变化也会改变照明方向。灯塔位置和投射方向需要随现场复核，不宣称可以消除眩光、阴影或风险。",
      },
    ],
    rolesTitle: "设备在经批准油气作业区域中的应用角色",
    roles: [
      {
        title: "临时作业区域的主要照明",
        description:
          "在经项目方批准的普通施工区、设备准备区、管线施工带或维护支持区，固定照明不足时可以进一步评估移动灯塔作为主要临时照明。工作面范围、遮挡、能源补给、运行时段和转场需求仍需结合项目确认。",
      },
      {
        title: "变化作业任务的补充照明",
        description:
          "当施工阶段变化、设备遮挡固定照明或临时维护任务增加时，移动设备可以作为补充照明。设备位置应结合车辆动线、临建设施、眩光方向和作业变化调整，不替代现场完整照明设计。",
      },
      {
        title: "外围区域之间的可转移照明",
        description:
          "经批准的道路、出入口、堆场、承包商作业区及其他外围区域可能需要在不同工作面之间转移照明。道路通行、牵引方式、坡度、地面稳定性和部署空间会影响转场计划。",
      },
    ],
    productsTitle: "可进一步评估的设备方向",
    productDirectionNote:
      "适合的设备方向取决于经批准的部署区域、每日运行时间、能源条件、环境暴露、维护条件、转场频率以及现场设备和 HSE 要求。",
    suitableLabel: "需要确认的条件：",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        applications: [
          "经批准的临时施工、维护或外围作业区",
          "运行时段、燃油补给、维护安排和重复转场条件",
          "可进一步评估柴油方向的项目条件",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        applications: [
          "经批准的外围、道路、出入口、堆场或辅助区域",
          "日照、照明负载、运行时段和季节条件",
          "可进一步评估太阳能方向的项目条件",
        ],
      },
    ],
    guidanceTitle: "进一步配置与选型判断",
    extremeEnvironmentTitle: "如何选择适合恶劣环境的移动照明灯塔",
    extremeEnvironmentDescription:
      "当现场存在高温、粉尘、风沙、盐雾、腐蚀性空气、复杂地面或维护通行限制时，需要结合环境组合进一步核对散热、防尘与过滤、表面处理、设备布置和维护安排。环境强化配置不等同于危险区域认证。",
    extremeEnvironmentLink: "查看恶劣环境配置考虑",
    selectionTitle: "如何选择合适的移动照明灯塔",
    selectionDescription:
      "如果尚未确定柴油或太阳能方向，可通过选型指南比较运行时段、能源供应、维护安排、转场频率和项目照明条件。选型指南不替代危险区域或认证确认。",
    selectionLink: "比较柴油与太阳能方向",
    bottomCtaTitle: "沟通油气项目照明需求",
    bottomCtaButton: "提交项目需求",
    relatedInformationTitle: "相关信息",
    relatedProductsTitle: "相关产品",
    relatedApplicationsTitle: "相关应用",
    relatedApplications: [
      { slug: "mining-lighting", label: "矿山照明" },
      { slug: "construction-lighting", label: "工程施工照明" },
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
  const locale: Lang = isLang(params.lang) ? params.lang : "en";
  const zh = locale === "zh";
  const url = `https://lfadj.com/${locale}/applications/oil-gas-lighting`;
  const title = zh
    ? "油气照明应用与移动照明灯塔选型 | LFADJ"
    : "Oil & Gas Lighting Applications | LFADJ";
  const description = zh
    ? "了解移动照明灯塔在油气项目经批准的非危险、外围及辅助区域中的应用角色，并根据运行、能源、环境和现场要求评估柴油与太阳能设备方向。"
    : "Evaluate mobile light tower roles for approved non-hazardous, peripheral, and support areas in oil and gas projects, including diesel and solar equipment directions.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/applications/oil-gas-lighting",
        "zh-CN": "https://lfadj.com/zh/applications/oil-gas-lighting",
        "x-default": "https://lfadj.com/en/applications/oil-gas-lighting",
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
      alternateLocale: [zh ? "en_US" : "zh_CN"],
      images: [
        {
          url: "https://lfadj.com/images/hero/construction-mobile-light-tower.webp",
          width: 1536,
          height: 1024,
          alt: zh
            ? "用于户外作业区域的移动照明灯塔"
            : "Mobile light tower supporting an outdoor work area",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function OilGasLightingPage({
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
          src="/images/hero/construction-mobile-light-tower.webp"
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
              {content.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {content.rolesTitle}
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {content.roles.map((role, index) => (
              <article key={role.title} className="border-t border-slate-300 pt-6">
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

          <p className="mt-8 max-w-4xl text-base leading-7 text-slate-600">
            {content.productDirectionNote}
          </p>

          <section className="mt-16 border-y border-slate-200 py-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {content.guidanceTitle}
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <article className="border-t border-slate-300 pt-6">
                <h3 className="text-xl font-bold tracking-tight">
                  {content.extremeEnvironmentTitle}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {content.extremeEnvironmentDescription}
                </p>
                <Link
                  href={`/${locale}/solutions/how-to-choose-the-right-light-tower-for-harsh-environments`}
                  className="mt-5 inline-flex font-semibold text-slate-950 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-700"
                >
                  {content.extremeEnvironmentLink}
                </Link>
              </article>
              <article className="border-t border-slate-300 pt-6">
                <h3 className="text-xl font-bold tracking-tight">
                  {content.selectionTitle}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {content.selectionDescription}
                </p>
                <Link
                  href={`/${locale}/solutions/how-to-choose-the-right-light-tower`}
                  className="mt-5 inline-flex font-semibold text-slate-950 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-700"
                >
                  {content.selectionLink}
                </Link>
              </article>
            </div>
          </section>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {content.relatedInformationTitle}
            </h2>

            <div className="mt-8 grid border-y border-slate-200 lg:grid-cols-2">
              {content.relatedApplications.map((application, index) => (
                <article
                  key={application.slug}
                  className={[
                    "py-7",
                    index === 0
                      ? "border-b border-slate-200 lg:border-b-0 lg:border-r lg:pr-8"
                      : "lg:pl-8",
                  ].join(" ")}
                >
                  <h3 className="text-base font-bold text-slate-950">
                    {content.relatedApplicationsTitle}
                  </h3>
                  <Link
                    href={`/${locale}/applications/${application.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                  >
                    {application.label}
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 bg-slate-950 px-6 py-8 sm:px-8 lg:flex-row lg:items-center">
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
              {content.bottomCtaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
