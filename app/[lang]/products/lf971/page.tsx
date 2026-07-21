import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Fragment } from "react";

/**
 * TODO(LF971): Structural scaffold copied from LF955.
 * Except for the LF971 product name and route, all detailed copy, specifications,
 * images, video, application data, CTA destinations, and shared LF955 section
 * implementations remain LF955 placeholders pending verified LF971 materials.
 */

type Lang = "en" | "zh";

type LF971HeroContent = {
  title: string;
  subtitle: string;
  body: string;
  trustLabels: string[];
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  placeholderLabel: string;
  imageAlt: string;
};

function isLang(value: string): value is Lang {
  return value === "en" || value === "zh";
}

function LF971Hero({ content, zh }: { content: LF971HeroContent; zh: boolean }) {
  const advantages = zh
    ? [
        {
          title: "太阳能供电系统",
          description: "采用太阳能发电与储能系统，减少柴油依赖，适合长期户外照明应用。",
        },
        {
          title: "高效LED照明系统",
          description: "采用高效LED照明技术，提供稳定亮度和广泛照射范围，满足工程项目夜间照明需求。",
        },
        {
          title: "低维护运行",
          description: "减少燃油补给和日常维护需求，提高偏远项目长期运行效率。",
        },
      ]
    : [
        {
          title: "Solar Power System",
          description: "Solar power generation and energy storage system reduce fuel dependency for long-term outdoor lighting applications.",
        },
        {
          title: "High Efficiency LED Lighting",
          description: "High-efficiency LED lighting provides reliable illumination and wide coverage for demanding project environments.",
        },
        {
          title: "Low Maintenance Operation",
          description: "Reduce refueling and maintenance requirements for improved efficiency in remote projects.",
        },
      ];
  return (
    <section className="border-b border-slate-200 bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
              {content.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              {content.body}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href={content.primaryCtaHref}
                className="inline-flex min-h-14 items-center justify-center rounded-md bg-amber-500 px-8 text-base font-semibold text-slate-950 shadow-sm transition-colors hover:bg-amber-400"
              >
                {zh ? "获取报价" : "Get Quote"}
              </Link>
              <a
                href="#technical-specifications"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-slate-300 bg-white px-8 text-base font-semibold text-slate-900 transition-colors hover:border-slate-500 hover:bg-slate-100"
              >
                {zh ? "下载技术参数表" : "Download Technical Datasheet"}
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:min-h-[460px] lg:min-h-[540px]">
            <Image
              src="/images/products/lf971/hero/lf971-hero.webp"
              alt={content.imageAlt}
              fill
              priority={true}
              sizes="(min-width: 1440px) 720px, (min-width: 1024px) 55vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <article key={advantage.title} className="h-full border-t-2 border-amber-500 bg-white p-6 shadow-sm">
              <span className="text-sm font-bold tabular-nums text-amber-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-xl font-bold leading-7 text-slate-950">{advantage.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{advantage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LF971Overview({ zh }: { zh: boolean }) {
  const technicalInformation = zh
    ? [
        { label: "照明系统", value: "LED照明" },
        { label: "灯具功率", value: "4×100W LED" },
        { label: "LED寿命", value: "≥50,000小时" },
        { label: "最大光通量", value: "64,000 lm" },
        { label: "太阳能板功率", value: "3×400W（可定制）" },
        { label: "电池容量", value: "4×200Ah（可定制）" },
        { label: "电池类型", value: "胶体电池 / 锂电池（可选）" },
        { label: "太阳能控制器", value: "MPPT太阳能控制器" },
        { label: "灯杆高度", value: "7.5m" },
        { label: "升降方式", value: "电动升降，5节桅杆（根据配置）" },
        { label: "桅杆旋转角度", value: "0–350°" },
        { label: "云台俯仰角度", value: "0–70° 电动调节" },
        { label: "支撑系统", value: "4个手动重型支撑腿" },
        { label: "拖车系统", value: "两轮拖车，R14轮胎" },
        { label: "悬挂系统", value: "板簧悬挂" },
        { label: "重量", value: "≤900kg" },
        { label: "收起尺寸", value: "≤2500×1400×2750mm" },
        { label: "展开尺寸", value: "≥2500×2050×7500mm" },
      ]
    : [
        { label: "Lighting System", value: "LED Lighting" },
        { label: "Lamp Power", value: "4×100W LED" },
        { label: "LED Lifetime", value: "≥50,000 hours" },
        { label: "Maximum Luminous Flux", value: "64,000 lm" },
        { label: "Solar Panel Power", value: "3×400W (Customizable)" },
        { label: "Battery Capacity", value: "4×200Ah (Customizable)" },
        { label: "Battery Type", value: "Gel Battery / Lithium Battery (Optional)" },
        { label: "Solar Charge Controller", value: "MPPT Controller" },
        { label: "Mast Height", value: "7.5m" },
        { label: "Mast Lifting Method", value: "Electric lifting, 5-section mast (Depending on configuration)" },
        { label: "Mast Rotation", value: "0–350° Manual Rotation" },
        { label: "PTZ Tilt Angle", value: "0–70° Electric Adjustment" },
        { label: "Support System", value: "4 Manual Heavy-duty Support Legs" },
        { label: "Trailer System", value: "Two-wheel Trailer, R14 Tires" },
        { label: "Suspension System", value: "Leaf Spring Suspension" },
        { label: "Net Weight", value: "≤900kg" },
        { label: "Folded Size", value: "≤2500×1400×2750mm" },
        { label: "Unfolded Size", value: "≥2500×2050×7500mm" },
      ];

  return (
    <section aria-labelledby="lf971-overview-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2
            id="lf971-overview-title"
            className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            {zh ? "LF971太阳能移动照明灯塔" : "LF971 Solar Mobile Light Tower"}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              {zh
                ? "LF971太阳能移动照明灯塔结合太阳能供电系统、储能系统和高效LED照明技术，适用于建筑施工、矿山作业、基础设施项目及偏远地区照明项目。"
                : "The LF971 Solar Mobile Light Tower combines a solar power system, battery storage and high-efficiency LED lighting for construction, mining, infrastructure and remote lighting applications."}
            </p>
            <p>
              {zh
                ? "移动拖车结构便于设备运输和现场部署；太阳能与储能系统可降低日常燃油补给需求，适用于缺少电网供应或需要长期户外照明的工程环境。"
                : "Its mobile trailer structure supports transport and flexible site deployment, while the solar and battery systems reduce daily fuel refueling requirements in outdoor and off-grid environments."}
            </p>
          </div>
        </div>

        <div id="technical-specifications" className="mt-12 scroll-mt-24 sm:mt-14">
          <h3 className="text-2xl font-bold tracking-tight text-slate-950">
            {zh ? "技术参数" : "Technical Specifications"}
          </h3>
          <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <tbody>
                {technicalInformation.map((item, index) => (
                  <tr key={item.label} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                    <th
                      scope="row"
                      className="w-[45%] border-r border-slate-200 px-4 py-4 font-semibold text-slate-700 sm:w-1/3 sm:px-6"
                    >
                      {item.label}
                    </th>
                    <td className="px-4 py-4 font-medium text-slate-950 sm:px-6">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function LF971ProductResources({ zh }: { zh: boolean }) {
  const applications = zh
    ? [
        { label: "建筑施工照明", href: "/applications/construction" },
        { label: "矿山照明", href: "/applications/mining" },
        { label: "道路建设照明", href: "/applications/road-infrastructure" },
        { label: "设备租赁照明", href: "/applications/rental" },
        { label: "应急照明", href: "/applications/emergency" },
      ]
    : [
        { label: "Construction Lighting", href: "/applications/construction" },
        { label: "Mining Lighting", href: "/applications/mining" },
        { label: "Road Infrastructure Lighting", href: "/applications/road-infrastructure" },
        { label: "Rental Lighting", href: "/applications/rental" },
        { label: "Emergency Lighting", href: "/applications/emergency" },
      ];
  const solutions = zh
      ? [
        { label: "如何选择适合项目需求的移动照明灯塔", href: "/solutions" },
        { label: "如何降低项目照明运营成本", href: "/solutions" },
      ]
    : [
        { label: "How to Choose the Right Mobile Light Tower for Your Project", href: "/solutions" },
        { label: "How to Reduce Project Lighting Operating Costs", href: "/solutions" },
      ];

  return (
    <section aria-labelledby="lf971-resources-title" className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        <h2 id="lf971-resources-title" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {zh ? "相关信息" : "Related Information"}
        </h2>

        <div className="mt-10 grid gap-10 border-y border-slate-200 py-10 lg:grid-cols-3 lg:gap-14">
          <div>
            <h3 className="text-lg font-bold text-slate-950">{zh ? "相关应用" : "Related Applications"}</h3>
            <ul className="mt-5 space-y-3">
              {applications.map((application) => (
                <li key={application.href}>
                  <Link className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700" href={application.href}>
                    {application.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-950">{zh ? "相关解决方案" : "Related Solutions"}</h3>
            <ul className="mt-5 space-y-3">
              {solutions.map((solution) => (
                <li key={solution.label}>
                  <Link className="font-medium leading-7 text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700" href={solution.href}>
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-950">{zh ? "产品资料" : "Product Documents"}</h3>
            <div className="mt-5 flex flex-col items-start gap-3">
              <button type="button" disabled className="cursor-not-allowed font-medium text-slate-500" title={zh ? "文件待提供" : "File not yet available"}>
                {zh ? "LF971技术参数表" : "LF971 Technical Datasheet"}
              </button>
              <button type="button" disabled className="cursor-not-allowed font-medium text-slate-500" title={zh ? "文件待提供" : "File not yet available"}>
                {zh ? "LF971产品宣传册" : "LF971 Product Brochure"}
              </button>
              <button type="button" disabled className="cursor-not-allowed font-medium text-slate-500" title={zh ? "文件待提供" : "File not yet available"}>
                {zh ? "LF971使用说明书" : "LF971 User Manual"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg bg-slate-950 px-6 py-8 text-white sm:px-8 lg:flex-row lg:items-center">
          <h3 className="max-w-2xl text-2xl font-bold leading-tight">
            {zh ? "需要选择适合您项目的太阳能移动照明灯塔？" : "Need the right solar mobile light tower for your project?"}
          </h3>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-amber-500 px-6 font-semibold text-slate-950 hover:bg-amber-400"
          >
            {zh ? "获取项目配置建议" : "Get Project Configuration Advice"}
          </Link>
        </div>
      </div>
    </section>
  );
}

function SolarBenefitsSection({ zh }: { zh: boolean }) {
  const content = zh
    ? {
        label: "LF971 太阳能移动照明灯塔的客户价值",
        title: "LF971太阳能移动照明灯塔如何降低项目运营成本",
        introduction:
          "对于日照条件和照明需求匹配的项目，LF971 太阳能移动照明灯塔可减少日常柴油补给、燃油运输、发动机相关维护和现场人工干预，同时为夜间作业提供低噪音照明。",
        context:
          "特别适用于日照充足、柴油运输不便或成本较高，并且对夜间低噪音运行有要求的建筑施工、矿山作业、设备租赁及应急照明项目。",
        benefits: [
          ["减少日常柴油补给", "减少现场日常燃油补给工作。", "太阳能板配合储能电池为照明系统供电，在系统配置、日照条件和照明需求匹配时，可减少对柴油补给的依赖。"],
          ["减少燃油运输", "降低燃油配送和现场储存需求。", "对于偏远或燃油运输不便的项目，可减少柴油运送、临时储存及相关现场协调工作。"],
          ["减少日常人工干预", "减少重复性的现场操作。", "通过自动充电、储能供电和定时照明，可减少每日补充燃油和重复启停等操作。"],
          ["减少发动机维护项目", "减少与柴油发动机相关的保养工作。", "照明系统不依赖柴油发动机持续运行，可减少机油、滤芯和发动机检查等相关维护项目。"],
          ["夜间低噪音运行", "改善对噪音敏感区域的夜间作业条件。", "使用储能电池供电时，不需要柴油发动机持续运转，因此夜间照明运行噪音较低。"],
          ["照明运行时无本地尾气", "减少照明现场的发动机尾气影响。", "正常储能供电照明过程中不燃烧柴油，因此照明运行现场不产生发动机尾气。"],
        ],
        note: "实际运行效果取决于项目所在地的日照条件、照明负载、电池容量、每日运行时长及现场环境。LFADJ 可根据项目需求提供配置建议。",
      }
    : {
        label: "Customer Benefits of the LF971 Solar Mobile Light Tower",
        title: "How the LF971 Solar Mobile Light Tower Helps Reduce Operating Costs",
        introduction:
          "For projects with suitable solar conditions and lighting requirements, the LF971 solar mobile light tower can reduce daily diesel refueling, fuel transportation, engine-related maintenance and routine operator intervention while providing low-noise lighting for nighttime operations.",
        context:
          "It is particularly suitable for construction, mining, equipment rental and emergency lighting projects where sunlight is sufficient, diesel delivery is difficult or costly, and low-noise nighttime operation is required.",
        benefits: [
          ["Reduced Daily Diesel Refueling", "Reduce routine fuel refilling at the jobsite.", "Solar panels and battery storage power the lighting system. When system configuration, solar conditions and lighting requirements are properly matched, reliance on diesel refueling can be reduced."],
          ["Reduced Fuel Transportation", "Reduce fuel delivery and onsite storage requirements.", "For remote projects or sites with difficult fuel access, the system can reduce diesel transportation, temporary storage and related onsite coordination."],
          ["Less Routine Operator Intervention", "Reduce repetitive daily operating tasks.", "Automatic charging, battery-powered lighting and scheduled operation can reduce daily refueling and repeated manual start-stop procedures."],
          ["Fewer Engine Maintenance Tasks", "Reduce maintenance work associated with diesel engines.", "Because the lighting system does not depend on continuous diesel engine operation, fewer oil, filter and engine-related maintenance tasks are required."],
          ["Low-Noise Nighttime Operation", "Support nighttime work in noise-sensitive areas.", "When operating from battery storage, the lighting system does not require a diesel engine to run continuously, resulting in lower operating noise."],
          ["No Local Exhaust Emissions During Lighting Operation", "Reduce engine exhaust at the illuminated worksite.", "During normal battery-powered lighting operation, no diesel is burned and no engine exhaust is produced at the point of use."],
        ],
        note: "Actual operating performance depends on local solar conditions, lighting load, battery capacity, daily operating hours and the site environment. LFADJ can provide configuration recommendations based on project requirements.",
      };

  return (
    <section id="solar-benefits" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              {content.label}
            </span>
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">{content.introduction}</p>
          <p className="mt-3 text-base leading-7 text-slate-600">{content.context}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefits.map(([title, value, explanation], index) => (
            <article key={title} className="flex h-full flex-col border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-sm font-bold tabular-nums text-amber-700">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-bold leading-7 text-slate-950">{title}</h3>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-700">{value}</p>
              <p className="mt-3 text-base leading-7 text-slate-600">{explanation}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-4 border-amber-500 bg-white px-5 py-4 text-sm leading-6 text-slate-600">
          {content.note}
        </p>
      </div>
    </section>
  );
}

function SolarSuitabilitySection({ zh }: { zh: boolean }) {
  const content = zh
    ? {
        title: "什么情况下适合选择太阳能移动照明灯塔？",
        introduction:
          "当项目日照、工作时间、照明需求和天气条件能够支持稳定的日间充电与夜间运行时，太阳能照明通常更合适。",
        criteria: [
          ["有足够的有效日照", "项目所在地具备足够的有效日照，可以满足日常发电需求。"],
          ["夜间工作时间可以预测", "每天所需照明时长能够提前估算和规划。"],
          ["电网或柴油供应不便", "现场偏远、无电，或者柴油运输和补给成本较高。"],
          ["对低噪音运行有要求", "项目需要在工人、居民区或敏感区域附近安静运行。"],
          ["天气和备用能力可匹配", "预计的连续阴雨天气可以通过合理的电池容量或备用充电方式覆盖。"],
        ],
        unsuitableTitle: "以下情况太阳能可能不是最佳选择",
        unsuitableItems: [
          "当地长期有效日照不足。",
          "照明负载非常高并且需要持续运行。",
          "连续阴雨时间超出合理的电池备用能力。",
          "项目需要全天候不受限制的持续供电。",
        ],
        conclusion:
          "LFADJ 会先评估项目条件，再推荐太阳能、柴油、混合动力或其他合适的照明方案。",
      }
    : {
        title: "When Is a Solar Mobile Light Tower the Right Choice?",
        introduction:
          "Solar lighting is most suitable when sunlight, operating hours, lighting demand and weather conditions can support stable daily charging and nighttime operation.",
        criteria: [
          ["Sufficient Effective Sunlight", "The project location has enough usable sunlight for daily energy generation."],
          ["Predictable Nighttime Schedule", "The required lighting duration can be estimated and planned in advance."],
          ["Limited Grid or Fuel Access", "The site is remote, off-grid, or expensive to supply with diesel."],
          ["Low-Noise Requirement", "The project needs quiet nighttime operation near workers, residents or sensitive areas."],
          ["Suitable Weather and Backup Design", "The expected cloudy or rainy periods can be covered through appropriate battery storage or backup charging."],
        ],
        unsuitableTitle: "Solar May Not Be the Best Choice When",
        unsuitableItems: [
          "Local sunlight is consistently insufficient.",
          "Lighting demand is extremely high and continuous.",
          "Long cloudy periods exceed the practical battery backup.",
          "The project requires unrestricted power at all times.",
        ],
        conclusion:
          "LFADJ evaluates the project conditions before recommending solar, diesel, hybrid or another suitable lighting solution.",
      };

  return (
    <section className="border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">{content.introduction}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {content.criteria.map(([title, description], index) => (
            <article key={title} className="h-full border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm font-bold tabular-nums text-amber-700">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-amber-200 bg-amber-50/70 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">{content.unsuitableTitle}</h3>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-slate-700 sm:grid-cols-2">
            {content.unsuitableItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 border-l-4 border-slate-900 bg-slate-50 px-5 py-4 text-base font-semibold leading-7 text-slate-800">
          {content.conclusion}
        </p>
      </div>
    </section>
  );
}

function SolarConfigurationProcessSection({ zh }: { zh: boolean }) {
  const content = zh
    ? {
        title: "LFADJ 如何为项目匹配太阳能照明配置",
        introduction: "可靠的太阳能照明方案，应从项目实际条件开始，而不是先套用固定产品参数。",
        steps: [
          ["确认项目地点", "确认国家、地区、项目类型及当地气候。"],
          ["评估日照条件", "了解有效日照时长、季节差异和可能存在的遮挡。"],
          ["确认照明需求", "确认照射面积、目标亮度、灯具数量和每晚工作时间。"],
          ["计算续航要求", "计算所需电池续航以及连续阴雨天气的备用时间。"],
          ["确认外接设备负载", "确认摄像头、喇叭、通信设备或传感器是否需要供电。"],
          ["完成系统匹配", "匹配太阳能板、储能电池、LED灯具、灯杆、控制系统和拖车结构。"],
        ],
        result: "确认运行条件后，LFADJ 将整理推荐配置供客户确认。",
      }
    : {
        title: "How LFADJ Selects the Right Solar Lighting Configuration",
        introduction:
          "A reliable solar lighting system starts with the project conditions, not with a fixed product specification.",
        steps: [
          ["Project Location", "Confirm the country, region, site type and local climate."],
          ["Sunlight Assessment", "Review effective sunshine hours, seasonal differences and possible shading."],
          ["Lighting Demand", "Confirm the lighting area, target brightness, lamp quantity and nightly operating schedule."],
          ["Autonomy Requirement", "Calculate the required battery runtime and cloudy-day backup period."],
          ["External Power Load", "Confirm whether cameras, speakers, communication devices or sensors require power."],
          ["System Matching", "Match the solar array, battery storage, LED lighting, mast, control system and trailer structure."],
        ],
        result:
          "After the operating conditions are confirmed, LFADJ prepares a recommended configuration for customer review.",
      };

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">{content.introduction}</p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.steps.map(([title, description], index) => (
            <li key={title} className="relative border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-sm font-bold tabular-nums tracking-[0.16em] text-amber-700">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-bold leading-7 text-slate-950">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 border-l-4 border-amber-500 bg-white px-5 py-4 text-base font-semibold leading-7 text-slate-800">
          {content.result}
        </p>
      </div>
    </section>
  );
}

function ConfigurationOptionsSection({ zh }: { zh: boolean }) {
  const content = zh
    ? {
        title: "太阳能移动照明灯塔可选配置",
        introduction: "系统主要模块可根据当地日照、照明需求、续航要求和运输条件进行匹配。",
        options: [
          ["太阳能板系统", "根据当地日照和每日能源需求选择太阳能板数量及发电能力。", "/images/products/lf971/gallery/solar-panel.webp", "LF971太阳能移动照明灯塔可配置太阳能板系统"],
          ["储能电池系统", "根据夜间续航和备用要求匹配电池类型及可用容量。", "/images/products/lf971/gallery/battery-compartment.webp", "LF971太阳能移动照明灯塔可配置储能电池舱"],
          ["LED照明系统", "可选择灯具数量、功率、光通量、配光方式和调光策略。", "/images/products/lf971/gallery/led-lamps.webp", "LF971太阳能移动照明灯塔可配置LED灯具总成"],
          ["灯杆系统", "根据照射范围、风况和操作要求选择灯杆高度及升降方式。", "/images/products/lf971/gallery/mast.webp", "LF971太阳能移动照明灯塔可配置伸缩灯杆系统"],
          ["控制系统", "可选光控、定时、调光、自动运行和远程监测。", "/images/products/lf971/gallery/control panel.webp", "控制系统"],
          ["拖车系统", "可根据运输和现场条件调整拖车尺寸、牵引结构和表面防护。", "/images/products/lf971/gallery/trailer-hitch.webp", "LF971太阳能移动照明灯塔可配置拖车牵引结构", "/images/products/lf971/gallery/wheel.webp", "LF971太阳能移动照明灯塔拖车轮胎配置"],
          ["支撑系统", "可根据现场条件匹配支撑方式，帮助设备稳定部署。", "/images/products/lf971/gallery/support-leg.webp", "LF971太阳能移动照明灯塔手摇支撑腿"],
        ],
        note: "最终部件选择以确认后的项目需求和技术计算为准。",
      }
    : {
        title: "Solar Mobile Light Tower Configuration Options",
        introduction:
          "The main system modules can be matched to local sunlight, lighting demand, autonomy and transport requirements.",
        options: [
          ["Solar Array", "Panel quantity and generation capacity are selected according to sunlight and daily energy demand.", "/images/products/lf971/gallery/solar-panel.webp", "LF971 solar panel system for configurable off-grid energy collection"],
          ["Battery Storage", "Battery type and usable capacity are matched to nightly runtime and backup requirements.", "/images/products/lf971/gallery/battery-compartment.webp", "LF971 battery compartment for configurable energy storage capacity"],
          ["LED Lighting", "Lamp quantity, power, lumen output, beam pattern and dimming strategy can be selected.", "/images/products/lf971/gallery/led-lamps.webp", "LF971 LED floodlight assembly for configurable project lighting"],
          ["Mast System", "Mast height and lifting method are selected according to lighting coverage, wind and operating requirements.", "/images/products/lf971/gallery/mast.webp", "LF971 telescopic mast system for configurable lifting height"],
          ["Control System", "Available options may include photocell, timer, dimming, automatic operation and remote monitoring.", "/images/products/lf971/gallery/control panel.webp", "Control System"],
          ["Trailer System", "Trailer size, towing arrangement and surface protection can be adapted to transport and site conditions.", "/images/products/lf971/gallery/trailer-hitch.webp", "LF971 trailer hitch for configurable towing and transport requirements", "/images/products/lf971/gallery/wheel.webp", "LF971 trailer wheel for transport configuration"],
          ["Stabilizer System", "The stabilizer arrangement can be matched to site conditions for stable equipment deployment.", "/images/products/lf971/gallery/support-leg.webp", "LF971 manual stabilizer leg for stable project deployment"],
        ],
        note: "Final component selection depends on the confirmed project requirement and technical calculation.",
      };

  return (
    <section id="configuration-options" className="scroll-mt-24 border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">{content.introduction}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.options.map(([title, description, imageSrc, imageAlt, secondaryImageSrc, secondaryImageAlt], index) => (
            <article key={title} className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                {imageSrc ? (
                  <>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    {secondaryImageSrc ? (
                      <div className="absolute bottom-3 right-3 aspect-square w-20 overflow-hidden rounded-lg border-2 border-white bg-slate-100 shadow-md sm:w-24">
                        <Image
                          src={secondaryImageSrc}
                          alt={secondaryImageAlt}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                  </>
                ) : (
                  // TODO(LF971): 补充LF971 MPPT控制器或控制面板真实照片。
                  <div className="h-full w-full bg-[linear-gradient(135deg,_#E2E8F0_0%,_#F8FAFC_50%,_#CBD5E1_100%)]" aria-hidden="true" />
                )}
              </div>
              <div className="flex flex-1 items-start gap-4 p-6 sm:p-7">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-slate-900 text-sm font-bold tabular-nums text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold leading-7 text-slate-950">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-4 border-amber-500 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-700">
          {content.note}
        </p>
      </div>
    </section>
  );
}

function KeyPerformanceSection({ zh }: { zh: boolean }) {
  const configuredByProject = zh ? "根据项目配置" : "Configured by Project";
  const content = zh
    ? {
        title: "关键性能与标准参考配置",
        introduction:
          "以下配置为 LF971 的实用参考方案，最终参数将根据当地日照、所需续航、照明需求、外接负载和项目条件进行调整。",
        performanceTitle: "关键性能指标",
        performanceFields: [
          ["照射范围", configuredByProject],
          ["平均照度", configuredByProject],
          ["总光通量", "64,000 lm"],
          ["夜间续航", configuredByProject],
          ["阴雨天备用", configuredByProject],
          ["太阳能充电时间", configuredByProject],
          ["抗风能力", configuredByProject],
          ["工作温度", configuredByProject],
        ],
        frameworkTitle: "标准参考配置",
        frameworkDescription:
          "以下参数为 LF971 的参考配置。项目评估后，部件选择和最终性能可能相应调整。",
        headers: ["系统模块", "标准参考配置", "项目调整说明"],
        groups: [
          {
            title: "能源系统",
            rows: [
              ["太阳能板系统", "3 × 400 W", "可根据当地日照和每日能源需求调整太阳能板数量及功率。"],
              ["储能电池系统", "4 × 200 Ah", "可根据夜间续航、外接负载和备用要求调整电池容量。"],
              ["电池类型", "胶体电池", "可根据使用寿命、预算和运行条件选择胶体电池或锂电池。"],
              ["太阳能充电控制器", "MPPT", "根据太阳能板和电池系统匹配控制器规格。"],
              ["太阳能板结构", "固定倾角支架，伸缩式展开", "可根据运输和使用要求调整太阳能板支撑及展开结构。"],
            ],
          },
          {
            title: "照明与灯杆",
            rows: [
              ["灯杆高度", "7.5 米", "可根据照射范围、运输和现场要求调整灯杆高度。"],
              ["灯杆升降系统", "电动升降，5节灯杆", "可根据操作和维护要求选择升降方式及灯杆结构。"],
              ["LED灯具", "4 × 100 W LED", "可根据照明需求调整灯具数量、功率和配光方式。"],
              ["总光通量", "64,000 lm", "最终光通量取决于所选 LED 灯具配置。"],
              ["LED标称寿命", "超过 50,000 小时", "标称寿命取决于所选 LED 规格和实际运行条件。"],
              ["灯杆旋转", "0–350°手动旋转", "可根据操作要求调整旋转范围和锁定结构。"],
              ["灯具云台翻转", "0–70°电动翻转", "根据灯具系统匹配翻转角度和控制方式。"],
            ],
          },
          {
            title: "拖车与物流",
            rows: [
              ["拖车系统", "板簧双轮拖车、球形牵引、R14轮胎、4个手摇支撑腿", "可根据运输和现场要求调整轮胎、牵引方式、支撑腿和拖车结构。"],
              ["净重", "≤ 900 kg", "最终重量取决于电池、太阳能板和结构配置。"],
              ["收起尺寸", "≤ 2500 × 1400 × 2750 mm", "最终收起尺寸取决于所选结构和配置。"],
              ["展开尺寸", "≥ 2500 × 2050 × 7500 mm", "最终展开尺寸取决于灯杆和太阳能板展开结构。"],
              ["包装方式", "防撞气泡膜加铁架底托", "可根据装柜和运输要求调整包装方式。"],
              ["装卸方式", "铲车或吊车", "根据现场和物流条件选择装卸方式。"],
            ],
          },
        ],
        note: "该标准参考配置用于帮助客户快速了解产品基础方案。最终参数将在确认项目地点、日照、照明需求、续航、外接负载和运输条件后确定。",
      }
    : {
        title: "Key Performance and Standard Reference Solar Light Tower Configuration",
        introduction:
          "The following configuration provides a practical reference for LF971. Final specifications are adjusted according to local sunlight, required runtime, lighting demand, external load and project conditions.",
        performanceTitle: "Key Performance Indicators",
        performanceFields: [
          ["Lighting Coverage", configuredByProject],
          ["Average Illuminance", configuredByProject],
          ["Total Lumen Output", "64,000 lm"],
          ["Night Runtime", configuredByProject],
          ["Cloudy-Day Backup", configuredByProject],
          ["Solar Recharging Time", configuredByProject],
          ["Wind Stability", configuredByProject],
          ["Operating Temperature", configuredByProject],
        ],
        frameworkTitle: "Standard Reference Configuration",
        frameworkDescription:
          "The following values describe a reference LF971 configuration. Components and final performance may change after project assessment.",
        headers: ["System Module", "Standard Reference", "Project Adjustment"],
        groups: [
          {
            title: "Energy System",
            rows: [
              ["Solar Panels", "3 × 400 W", "Panel quantity and power can be adjusted according to local sunlight and daily energy demand."],
              ["Battery Storage", "4 × 200 Ah", "Battery capacity is adjusted according to nightly runtime, external load and backup requirement."],
              ["Battery Type", "Gel Battery", "Gel or lithium battery options can be selected according to lifecycle, budget and operating conditions."],
              ["Solar Charge Controller", "MPPT", "Controller specification is matched to the selected solar array and battery system."],
              ["Solar Panel Structure", "Fixed tilt bracket with telescopic deployment", "Panel support and deployment structure can be adapted to transport and operating requirements."],
            ],
          },
          {
            title: "Lighting and Mast",
            rows: [
              ["Mast Height", "7.5 m", "Mast height can be adjusted according to lighting coverage, transport and site requirements."],
              ["Mast Lifting System", "Electric lifting, 5-section mast", "Lifting method and mast structure can be selected according to operation and maintenance requirements."],
              ["LED Floodlights", "4 × 100 W LED", "Lamp quantity, power and beam distribution can be adjusted according to lighting demand."],
              ["Total Lumen Output", "64,000 lm", "Final lumen output depends on the selected LED configuration."],
              ["LED Rated Life", "Over 50,000 hours", "Rated life is based on the selected LED specification and operating conditions."],
              ["Mast Rotation", "0–350° manual rotation", "Rotation range and locking structure can be adjusted according to operating requirements."],
              ["PTZ Tilt", "0–70° electric tilt", "Tilt range and control method are matched to the selected lighting system."],
            ],
          },
          {
            title: "Trailer and Logistics",
            rows: [
              ["Trailer", "Leaf-spring two-wheel trailer, ball hitch, R14 tires, four manual stabilizers", "Tires, towing arrangement, stabilizers and trailer structure can be adapted to transport and site requirements."],
              ["Net Weight", "≤ 900 kg", "Final weight depends on battery, solar panel and structural configuration."],
              ["Transport Dimensions", "≤ 2500 × 1400 × 2750 mm", "Final transport dimensions depend on the selected structure and configuration."],
              ["Operating Dimensions", "≥ 2500 × 2050 × 7500 mm", "Final operating dimensions depend on mast and solar panel deployment."],
              ["Packaging", "Protective bubble film with steel frame base", "Packaging can be adjusted according to container loading and transport requirements."],
              ["Loading and Unloading", "Forklift or crane", "Loading method is selected according to site and logistics conditions."],
            ],
          },
        ],
        note: "This standard reference configuration provides a practical starting point. Final specifications are confirmed after reviewing project location, sunlight, lighting demand, autonomy, external load and transport conditions.",
      };

  // TODO(LF971): Replace the seven project-configured performance placeholders only after verified test data is available.
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">{content.introduction}</p>
        </div>

        <h3 className="mt-12 text-2xl font-bold text-slate-950">{content.performanceTitle}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.performanceFields.map(([field, value]) => (
            <article key={field} className="border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-base font-bold leading-6 text-slate-950">{field}</h4>
              <p className="mt-3 text-sm font-semibold leading-6 text-amber-700">{value}</p>
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-2xl font-bold text-slate-950">{content.frameworkTitle}</h3>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">{content.frameworkDescription}</p>
        <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/products/lf971/gallery/reference.webp"
            alt={zh ? "LF971太阳能移动照明灯塔标准参考配置整机实拍图" : "LF971 solar mobile light tower shown in standard reference configuration"}
            fill
            sizes="(min-width: 1320px) 1224px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 48px)"
            className="object-contain p-8"
          />
        </div>
        <div className="mt-6 hidden overflow-hidden border border-slate-200 bg-white sm:block">
          <table className="w-full table-fixed border-collapse text-left">
            <thead className="bg-slate-900 text-white">
              <tr>
                {content.headers.map((header) => (
                  <th key={header} scope="col" className="px-5 py-4 text-sm font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.groups.map((group) => (
                <Fragment key={group.title}>
                  <tr className="border-t border-slate-300 bg-slate-100">
                    <th colSpan={3} scope="colgroup" className="px-5 py-3 text-sm font-bold text-slate-900">{group.title}</th>
                  </tr>
                  {group.rows.map(([module, reference, adjustment]) => (
                    <tr key={module} className="border-t border-slate-200 align-top">
                      <th scope="row" className="px-5 py-4 text-sm font-bold leading-6 text-slate-950">{module}</th>
                      <td className="px-5 py-4 text-sm font-semibold leading-6 text-amber-700">{reference}</td>
                      <td className="px-5 py-4 text-sm leading-6 text-slate-600">{adjustment}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-7 sm:hidden">
          {content.groups.map((group) => (
            <div key={group.title}>
              <h4 className="border-l-4 border-amber-500 pl-3 text-lg font-bold text-slate-950">{group.title}</h4>
              <div className="mt-4 grid gap-4">
                {group.rows.map(([module, reference, adjustment]) => (
                  <article key={module} className="border border-slate-200 bg-white p-5 shadow-sm">
                    <h5 className="text-base font-bold text-slate-950">{module}</h5>
                    <dl className="mt-4 space-y-3 text-sm leading-6">
                      <div>
                        <dt className="font-semibold text-slate-500">{content.headers[1]}</dt>
                        <dd className="font-semibold text-amber-700">{reference}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-500">{content.headers[2]}</dt>
                        <dd className="text-slate-700">{adjustment}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 border-l-4 border-amber-500 bg-white px-5 py-4 text-sm leading-6 text-slate-700">
          {content.note}
        </p>
      </div>
    </section>
  );
}

function SolarApplicationsSection({ zh }: { zh: boolean }) {
  const content = zh
    ? {
        title: "太阳能移动照明灯塔应用场景",
        introduction: "可配置太阳能照明适合需要离网、低噪音和减少日常干预的夜间作业项目。",
        applications: [
          ["偏远地区施工", "为电网和柴油供应不便的施工现场提供临时照明。", "/images/products/lf971/applications/lf971-construction-application.webp", "LF971太阳能移动照明灯塔为夜间建筑施工现场提供离网照明", "object-[center_10%]"],
          ["矿山作业", "用于部分作业区、维护区域和临时矿山工作的低噪音照明。", "/images/products/lf971/applications/lf971-mining-application.webp", "LF971太阳能移动照明灯塔为夜间矿山作业提供照明"],
          ["设备租赁", "为服务离网及燃油敏感项目的租赁车队提供可配置照明选择。", "/images/products/lf971/applications/lf971-rental-fleet.webp", "LF971太阳能移动照明灯塔在设备租赁场地进行检查和交付准备", "object-top"],
          ["道路与基础设施", "为道路施工、维护和基础设施项目提供临时夜间照明。", "/images/products/lf971/applications/lf971-road-infrastructure-application.webp", "LF971太阳能移动照明灯塔用于夜间道路与基础设施施工"],
          ["应急与临时场地", "用于应急响应、临时营地和恢复工作的快速部署照明。", "/images/products/lf971/applications/lf971-emergency-response.webp", "LF971太阳能移动照明灯塔为夜间应急抢修提供现场照明", "object-top"],
          ["安防与监控", "可选为合适的摄像头、喇叭和通信设备提供照明与供电支持。", "/images/products/lf971/applications/lf971-security-monitoring.webp", "LF971太阳能移动照明灯塔用于工业园区安防与监控"],
        ],
        linkHref: "/zh/applications",
        linkLabel: "查看太阳能照明应用",
      }
    : {
        title: "Solar Mobile Light Tower Applications",
        introduction:
          "Configurable solar lighting can support projects that require off-grid, low-noise and reduced-intervention nighttime operation.",
        applications: [
          ["Remote Construction", "Temporary lighting for construction sites with limited grid and fuel access.", "/images/products/lf971/applications/lf971-construction-application.webp", "LF971 solar mobile light tower providing off-grid lighting at a nighttime construction site", "object-[center_10%]"],
          ["Mining Operations", "Low-noise lighting for selected work zones, maintenance areas and temporary mining operations.", "/images/products/lf971/applications/lf971-mining-application.webp", "LF971 solar mobile light tower illuminating a nighttime mining operation"],
          ["Equipment Rental", "A configurable lighting option for rental fleets serving off-grid and fuel-sensitive projects.", "/images/products/lf971/applications/lf971-rental-fleet.webp", "LF971 solar mobile light towers prepared for inspection and delivery at an equipment rental yard", "object-top"],
          ["Road and Infrastructure", "Temporary nighttime lighting for roadwork, maintenance and infrastructure projects.", "/images/products/lf971/applications/lf971-road-infrastructure-application.webp", "LF971 solar mobile light tower supporting nighttime road and infrastructure construction"],
          ["Emergency and Temporary Sites", "Rapidly deployable lighting for emergency response, temporary camps and recovery work.", "/images/products/lf971/applications/lf971-emergency-response.webp", "LF971 solar mobile light tower providing lighting for emergency utility repair at night", "object-top"],
          ["Security and Monitoring", "Optional lighting and power support for suitable cameras, speakers and communication equipment.", "/images/products/lf971/applications/lf971-security-monitoring.webp", "LF971 solar mobile light tower supporting security and monitoring at an industrial facility"],
        ],
        linkHref: "/en/applications",
        linkLabel: "Explore Solar Lighting Applications",
      };

  return (
    <section className="border-b border-slate-200 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">{content.introduction}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.applications.map(([title, description, imageSrc, imageAlt, imagePosition], index) => (
            <article key={title} className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${imagePosition ?? "object-center"}`}
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm font-bold tabular-nums tracking-[0.16em] text-amber-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-bold leading-7 text-slate-950">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <a
          href={content.linkHref}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700"
        >
          {content.linkLabel}
        </a>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

// TODO(LF971): Replace LF955-derived SEO copy, keywords, and social images.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";
  const title = zh
    ? "LF971 太阳能移动照明灯塔 | LFADJ"
    : "LF971 Solar Mobile Light Tower | LFADJ";
  const description = zh
    ? "LFADJ\u751f\u4ea7LF971\u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854\uff0c\u9002\u7528\u4e8e\u65bd\u5de5\u3001\u77ff\u5c71\u3001\u6cb9\u6c14\u3001\u79df\u8d41\u548c\u5e94\u6025\u9879\u76ee\uff0c\u5e76\u53ef\u6839\u636e\u9ad8\u6e29\u3001\u98ce\u6c99\u3001\u6cbf\u6d77\u8150\u8680\u53ca\u9ad8\u6d77\u62d4\u73af\u5883\u5b9a\u5236\u914d\u7f6e\u3002"
    : "LFADJ manufactures LF971 diesel mobile light towers for construction, mining, oil and gas, rental and emergency projects, with custom configurations for high temperature, dust, coastal and high-altitude environments.";
  const url = zh ? "https://lfadj.com/zh/products/lf971" : "https://lfadj.com/en/products/lf971";
  const image = "https://lfadj.com/images/products/lf955/applications/road-construction.jpg";
  const imageAlt = zh
    ? "LF971\u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854\u7528\u4e8e\u591c\u95f4\u5de5\u7a0b\u9879\u76ee\u7167\u660e"
    : "LF971 diesel mobile light tower for night construction site lighting";

  return {
    title,
    description,
    keywords: zh
      ? undefined
      : [
          "diesel mobile light tower",
          "diesel light tower manufacturer",
          "hydraulic light tower",
          "construction light tower",
          "mining light tower",
          "mobile lighting tower",
          "LF971 light tower",
        ],
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/products/lf971",
        "zh-CN": "https://lfadj.com/zh/products/lf971",
        "x-default": "https://lfadj.com/en/products/lf971",
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
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}

// TODO(LF971): Replace LF955-derived JSON-LD copy, category, parameters, and image.
function getLf971ProductSchema(zh: boolean) {
  const image = "https://lfadj.com/images/products/lf955/applications/road-construction.jpg";
  const brand = {
    "@type": "Brand",
    name: "LFADJ",
  };
  const manufacturer = {
    "@type": "Organization",
    name: "LFADJ",
    legalName: "Longfa Lighting Equipment Co., Ltd.",
    url: "https://lfadj.com",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: zh ? "LF971 太阳能移动照明灯塔" : "LF971 Solar Mobile Light Tower",
    alternateName: zh
      ? "LF971 \u6db2\u538b\u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854"
      : "LF971 Hydraulic Diesel Mobile Lighting Tower",
    description: zh
      ? "LF971\u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854\uff0c\u9002\u7528\u4e8e\u65bd\u5de5\u3001\u77ff\u5c71\u3001\u6cb9\u6c14\u3001\u79df\u8d41\u548c\u5e94\u6025\u9879\u76ee\uff0c\u5e76\u652f\u6301\u9ad8\u6e29\u3001\u98ce\u6c99\u3001\u6cbf\u6d77\u8150\u8680\u53ca\u9ad8\u6d77\u62d4\u73af\u5883\u914d\u7f6e\u3002"
      : "LF971 diesel mobile light tower for construction, mining, oil and gas, rental and emergency projects, with project-specific configurations for high temperature, dust, coastal and high-altitude environments.",
    sku: "LF971",
    mpn: "LF971",
    url: zh ? "https://lfadj.com/zh/products/lf971" : "https://lfadj.com/en/products/lf971",
    category: zh ? "\u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854" : "Diesel Mobile Light Tower",
    brand,
    manufacturer,
    image,
    additionalProperty: zh
      ? [
          { "@type": "PropertyValue", name: "\u706f\u6746\u9ad8\u5ea6", value: "7.5\u7c73\u6db2\u538b\u5347\u964d\u706f\u6746" },
          { "@type": "PropertyValue", name: "\u706f\u6746\u65cb\u8f6c", value: "0\u2013350\u00b0" },
          { "@type": "PropertyValue", name: "\u7167\u660e\u7cfb\u7edf", value: "4 \u00d7 400 W LED\u6295\u5149\u706f" },
          { "@type": "PropertyValue", name: "\u603b\u5149\u901a\u91cf", value: "\u7ea6230,000\u6d41\u660e" },
          { "@type": "PropertyValue", name: "\u53d1\u7535\u673a", value: "5 kVA\u5355\u76f8\u53d1\u7535\u673a" },
          { "@type": "PropertyValue", name: "\u6cb9\u7bb1\u5bb9\u91cf", value: "120 L" },
          { "@type": "PropertyValue", name: "\u5e94\u7528", value: "\u65bd\u5de5\u3001\u77ff\u5c71\u3001\u79df\u8d41\u548c\u5e94\u6025\u7167\u660e" },
          { "@type": "PropertyValue", name: "\u73af\u5883\u914d\u7f6e", value: "\u9ad8\u6e29\u3001\u98ce\u6c99\u3001\u6cbf\u6d77\u548c\u9ad8\u6d77\u62d4\u914d\u7f6e" },
        ]
      : [
          { "@type": "PropertyValue", name: "Mast Height", value: "7.5 m hydraulic lifting mast" },
          { "@type": "PropertyValue", name: "Mast Rotation", value: "0\u2013350\u00b0" },
          { "@type": "PropertyValue", name: "Lighting System", value: "4 \u00d7 400 W LED floodlights" },
          { "@type": "PropertyValue", name: "Total Luminous Flux", value: "Approx. 230,000 lumens" },
          { "@type": "PropertyValue", name: "Generator", value: "5 kVA single-phase generator" },
          { "@type": "PropertyValue", name: "Fuel Tank Capacity", value: "120 L" },
          { "@type": "PropertyValue", name: "Application", value: "Construction, mining, rental and emergency lighting" },
          { "@type": "PropertyValue", name: "Environment Options", value: "High temperature, dust, coastal and high-altitude configurations" },
        ],
  };
}

export default function LF971Page({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) {
    redirect("/en/products/lf971");
  }

  const lang = params.lang;
  const zh = lang === "zh";
  const productSchema = getLf971ProductSchema(zh);

  // TODO(LF971): The four-screen detailed copy, parameters, claims, and media below are LF955 placeholders.
  const heroV7: LF971HeroContent = zh
    ? {
        title: "LF971太阳能移动照明灯塔",
        subtitle: "为施工、矿山、租赁和偏远项目提供可靠的离网照明。",
        body: "高效太阳能移动照明系统，结合储能技术，为建筑施工、矿山及无电力项目提供可靠照明。",
        trustLabels: ["离网照明", "日常无需柴油", "低噪音运行", "根据项目配置"],
        primaryCta: "配置我的太阳能灯塔",
        primaryCtaHref: "/zh/contact/request-a-quote",
        secondaryCta: "查看核心优势",
        placeholderLabel: "LF971 太阳能灯塔图片待补充",
        imageAlt: "LF971太阳能移动照明灯塔在夜间施工现场提供离网照明",
      }
    : {
        title: "LF971 Solar Mobile Light Tower",
        subtitle: "Reliable off-grid lighting for construction, mining, rental and remote projects.",
        body: "High-efficiency solar mobile lighting system with energy storage technology, providing reliable illumination for construction, mining and off-grid projects.",
        trustLabels: ["Off-Grid Lighting", "No Daily Fuel Consumption", "Low-Noise Operation", "Project-Based Configuration"],
        primaryCta: "Configure My Solar Light Tower",
        primaryCtaHref: "/en/contact/request-a-quote",
        secondaryCta: "View Key Benefits",
        placeholderLabel: "LF971 solar light tower image pending",
        imageAlt: "LF971 solar mobile light tower providing off-grid lighting at a nighttime construction site",
      };

  const costLossSection = zh
    ? {
        title: "为什么标准灯塔在真实项目中容易出问题？",
        subtitle: "很多故障不是因为客户使用不当，而是因为配置没有匹配真实工作环境。",
        emphasisText: "不同项目环境，需要不同的移动照明灯塔配置。",
        cards: [
          {
            title: "高温环境",
            problem: "发动机过热、零部件寿命缩短、运行不稳定。",
            solution: "加强散热设计，并根据负载重新匹配发动机功率，让移动照明方案在高温工况下保持稳定。",
          },
          {
            title: "沙漠与风沙环境",
            problem: "滤芯堵塞、通风变差、维护频率增加。",
            solution: "增加防尘保护、优化进气结构，并提供过滤配置。",
          },
          {
            title: "沿海与腐蚀环境",
            problem: "车架腐蚀、螺栓生锈、电气系统故障。",
            solution: "加厚镀锌、防腐喷塑，并加强电气密封。",
          },
          {
            title: "高海拔环境",
            problem: "动力下降、启动困难、照明性能不足。",
            solution: "根据海拔和负载重新匹配发动机与发电机，形成适合现场的移动照明灯塔配置。",
          },
        ],
      }
    : {
        title: "Why Standard Light Towers Fail in Real Projects",
        subtitle: "Most failures come from the wrong configuration for the working environment.",
        emphasisText: "Different project environments need different light tower configurations.",
        cards: [
          {
            title: "High Temperature",
            problem: "Engine overheating, shorter component life, unstable performance.",
            solution: [
              "Enhanced Cooling: Improve airflow for long-shift runtime in hot climates.",
              "Load Matching: Match engine power with lighting load to reduce thermal stress.",
              "Stable Output: Configure LF971 for consistent mobile lighting under high-temperature duty cycles.",
            ],
          },
          {
            title: "Desert & Dust",
            problem: "Blocked filters, poor ventilation, frequent maintenance.",
            solution: [
              "Dust Protection: Add protection around key intake and service points.",
              "Airflow Optimization: Improve intake and ventilation paths for dusty jobsites.",
              "Service Control: Specify filtration options to reduce maintenance frequency.",
            ],
          },
          {
            title: "Coastal & Corrosive Areas",
            problem: "Frame corrosion, rusty bolts, electrical failure.",
            solution: [
              "Corrosion Resistance: Use thicker galvanizing and anti-corrosion coating for exposed structures.",
              "Hardware Protection: Protect bolts, frame areas and trailer components against coastal corrosion.",
              "Electrical Sealing: Seal electrical parts to reduce moisture and salt-air failure risk.",
            ],
          },
          {
            title: "High Altitude",
            problem: "Power drop, difficult starting, insufficient lighting performance.",
            solution: [
              "Power Matching: Match engine and generator capacity to altitude and site load.",
              "Startup Review: Check starting performance and lighting output before configuration.",
              "Project Fit: Build the LF971 package around actual elevation and duty cycle.",
            ],
          },
        ],
      };

  const coreConfiguration = zh
    ? [
        { label: "灯杆高度", value: "7.5米液压升降灯杆" },
        { label: "灯杆控制", value: "0–350°旋转，灯具角度可调" },
        { label: "照明系统", value: "4×400W LED投光灯" },
        { label: "总光通量", value: "约230,000流明" },
        { label: "发动机", value: "国际品牌柴油发动机" },
        { label: "发电系统", value: "5kVA单相发电机" },
        { label: "油箱容量", value: "120L独立油箱" },
        { label: "拖车结构", value: "两轮移动拖车，四个支撑腿" },
        { label: "应用场景", value: "施工、矿山、租赁、应急照明" },
        { label: "定制能力", value: "支持高温、风沙、沿海及高海拔配置" },
      ]
    : [
        { label: "Mast Height", value: "7.5 m hydraulic lifting mast" },
        { label: "Mast Control", value: "0–350° rotation, adjustable lamp angle" },
        { label: "Lighting System", value: "4×400W LED floodlights" },
        { label: "Total Luminous Flux", value: "Approx. 230,000 lumens" },
        { label: "Engine", value: "Kubota / Yanmar diesel engine options" },
        { label: "Generator System", value: "5kVA single-phase generator" },
        { label: "Fuel Tank Capacity", value: "120L independent fuel tank" },
        { label: "Trailer Structure", value: "Two-wheel mobile trailer, four support legs" },
        { label: "Application Scenarios", value: "Construction, mining, rental, emergency lighting" },
        { label: "Customization Capability", value: "Supports high temperature, dust, coastal and high-altitude configurations" },
      ];

  const manufacturingProcess = (zh
    ? [
        ["01", "切割", "/images/products/lf955/manufacturing/02-laser-cutting.png", "LFADJ移动照明灯塔激光切割工艺"],
        ["02", "折弯", "/images/products/lf955/manufacturing/03-bending.jpg", "LFADJ移动照明灯塔钣金折弯工艺"],
        ["03", "焊接", "/images/products/lf955/manufacturing/04-welding.jpg", "LFADJ移动照明灯塔焊接工艺"],
        ["04", "打磨", "/images/products/lf955/manufacturing/05-打磨处理.jpg", "LFADJ移动照明灯塔打磨处理工艺"],
        ["05", "喷塑", "/images/products/lf955/manufacturing/06-anti-corrosion-coating.jpg", "LFADJ移动照明灯塔喷塑防腐工艺"],
        ["06", "接线", "/images/products/lf955/manufacturing/07-assembly.jpg", "LFADJ移动照明灯塔电气接线工艺"],
        ["07", "检测", "/images/products/lf955/manufacturing/08-testing.jpg", "LFADJ移动照明灯塔整机检测工艺"],
        ["08", "出货", "/images/products/lf955/manufacturing/10-shipping.jpg", "LFADJ移动照明灯塔装车出货流程"],
      ]
    : [
        ["01", "Cutting", "/images/products/lf955/manufacturing/02-laser-cutting.png", "LFADJ mobile light tower laser cutting process"],
        ["02", "Bending", "/images/products/lf955/manufacturing/03-bending.jpg", "LFADJ mobile light tower sheet metal bending process"],
        ["03", "Welding", "/images/products/lf955/manufacturing/04-welding.jpg", "LFADJ mobile light tower welding process"],
        ["04", "Grinding", "/images/products/lf955/manufacturing/05-打磨处理.jpg", "LFADJ mobile light tower grinding process"],
        ["05", "Powder Coating", "/images/products/lf955/manufacturing/06-anti-corrosion-coating.jpg", "LFADJ mobile light tower powder coating process"],
        ["06", "Wiring", "/images/products/lf955/manufacturing/07-assembly.jpg", "LFADJ mobile light tower electrical wiring process"],
        ["07", "Testing", "/images/products/lf955/manufacturing/08-testing.jpg", "LFADJ mobile light tower final testing process"],
        ["08", "Delivery", "/images/products/lf955/manufacturing/10-shipping.jpg", "LFADJ mobile light tower delivery loading process"],
      ]
  ).map(([step, title, image, imageAlt]) => ({
    step,
    title,
    image,
    imageAlt,
  }));

  const riskCards = zh
    ? [
        {
          title: "设备故障风险",
          problem: "低端灯塔常常按采购价选型，但在真实项目工况下容易失效。",
          impact: "商业影响：上门维修、替换运输和紧急租赁成本会吃掉原本的节省。",
          solution: "LF971面向重视持续稳定运行的买家，目标是在现场熄灯前保持可预测运行。",
        },
        {
          title: "夜间施工安全风险",
          problem: "光束控制不足会在设备、物料流转和人员交叉点形成盲区。",
          impact: "商业影响：一次事故就可能停工、引发索赔并损害承包商信誉。",
          solution: "大面积发光二极管照明有助于提升夜间作业区的可视性和决策速度。",
        },
        {
          title: "燃油效率风险",
          problem: "发动机和照明负载不匹配时，油耗和输出都会变得不稳定。",
          impact: "商业影响：租赁毛利下降，项目成本更难预测。",
          solution: "发动机、灯组和灯杆会按运行时长与现场负载进行匹配。",
        },
        {
          title: "高温粉尘停机风险",
          problem: "超过45摄氏度的高温、矿区粉尘和偏远油田会快速暴露散热和过滤问题。",
          impact: "商业影响：非计划停机会中断高价值班次。",
          solution: "针对严苛环境的配置可帮助维持持续稳定运行。",
        },
      ]
    : [
        {
          title: "Equipment Failure Risk",
          problem: "Low-grade towers are often selected by purchase price, then fail under real project duty cycles.",
          impact: "Business Impact: service calls, replacement transport and emergency rental costs can erase the original saving.",
          solution: "LF971 is configured for uptime-focused buyers who need predictable operation before the site goes dark.",
        },
        {
          title: "Night Work Safety Risk",
          problem: "Poor beam control creates blind spots around equipment, material movement and crew crossings.",
          impact: "Business Impact: one incident can stop work, trigger claims and damage contractor credibility.",
          solution: "Wide-area LED output helps protect decision speed and visibility across active night zones.",
        },
        {
          title: "Fuel Instability Risk",
          problem: "Unmatched engine and lighting loads create unstable output and unnecessary fuel burn.",
          impact: "Business Impact: rental margin drops and project operating cost becomes harder to forecast.",
          solution: "Engine, lamp and mast choices are matched to runtime and site load requirements.",
        },
        {
          title: "Dust & Heat Shutdown Risk",
          problem: "45C+ heat, dust-heavy mining roads and remote oilfield sites expose weak cooling and filtration quickly.",
          impact: "Business Impact: unplanned shutdowns interrupt high-value shifts where every hour matters.",
          solution: "Harsh-site configuration support helps protect uptime in dust and heat.",
        },
      ];

  const scenarioCards = zh
    ? [
        {
          title: "施工夜间作业",
          problem: "桥梁、道路和市政工程通常配置4-12台。",
          impact: "夜间浇筑和封路场景通常每天运行8-14小时。",
          solution: "投资回报提升：夜间延误成本最高可降低35%。",
          image: "/images/products/lf955/applications/night-construction.jpg",
        },
        {
          title: "矿山与油田",
          problem: "运输道路、料堆和服务区通常配置5-20台。",
          impact: "在高粉尘离网环境中，常常每天运行10-16小时。",
          solution: "投资回报提升：非计划停机风险最高可降低70%。",
          image: "/images/products/lf955/applications/heavy-construction.jpg",
        },
        {
          title: "租赁车队",
          problem: "按客户类型、灯杆高度和功率配置5-20台。",
          impact: "施工、市政和活动租赁常常每天运行8-16小时。",
          solution: "投资回报提升：租赁收入最高可提升25%。",
          image: "/images/products/lf955/applications/rental-project.png",
        },
        {
          title: "应急救援",
          problem: "用于临时抢修、救援和市政应急的5-15台配置。",
          impact: "时间敏感型恢复作业常常每天运行10-24小时。",
          solution: "投资回报提升：部署更快，响应延误成本更低。",
          image: "/images/products/lf955/applications/lifting-operation.jpg",
        },
      ]
    : [
        {
          title: "Construction Night Work",
          problem: "4-12 units around bridges, roads and utility projects.",
          impact: "8-14 hours/day with night pours and lane closures.",
          solution: "ROI lift: reduce night delay cost by up to 35%.",
          image: "/images/products/lf955/applications/night-construction.jpg",
        },
        {
          title: "Mining & Oilfield",
          problem: "5-20 units for haul roads, stockpiles and service yards.",
          impact: "10-16 hours/day in dust-heavy off-grid conditions.",
          solution: "ROI lift: reduce unplanned downtime exposure by up to 70%.",
          image: "/images/products/lf955/applications/heavy-construction.jpg",
        },
        {
          title: "Rental Company Fleet",
          problem: "5-20 units configured by customer segment and mast height.",
          impact: "8-16 hours/day across construction, municipal and event demand.",
          solution: "ROI lift: increase revenue utilization by up to 25%.",
          image: "/images/products/lf955/applications/rental-project.png",
        },
        {
          title: "Emergency & Disaster Response",
          problem: "5-15 units for temporary repair, rescue and utility response zones.",
          impact: "10-24 hours/day during time-critical recovery work.",
          solution: "ROI lift: improve deployment speed and reduce response delay cost.",
          image: "/images/products/lf955/applications/lifting-operation.jpg",
        },
      ];

  const manufacturingSteps = zh
    ? [
        { step: "焊接", title: "结构焊接控制", description: "稳定的机架质量有助于保护持续稳定运行、运输可靠性和租赁资产价值。", image: "/images/products/lf955/manufacturing/04-welding.jpg" },
        { step: "装配", title: "生产线装配", description: "发动机、灯杆、拖车和照明系统被装配成一个可直接交付的项目整机。", image: "/images/products/lf955/manufacturing/07-assembly.jpg" },
        { step: "测试", title: "最终运行测试", description: "照明、动力和展开检查可在出货前降低调试风险。", image: "/images/products/lf955/manufacturing/08-testing.jpg" },
        { step: "包装", title: "出口包装", description: "出口级包装可降低海外工业项目的运输损伤风险。", image: "/images/products/lf955/manufacturing/09-packaging.jpg" },
      ]
    : [
        { step: "Welding", title: "Structural Welding Control", description: "Frame consistency helps protect uptime, transport reliability and rental fleet value.", image: "/images/products/lf955/manufacturing/04-welding.jpg" },
        { step: "Assembly", title: "Production Line Assembly", description: "Engine, mast, trailer and lighting systems are assembled as one project-ready package.", image: "/images/products/lf955/manufacturing/07-assembly.jpg" },
        { step: "Testing", title: "Final Runtime Testing", description: "Lighting, power and deployment checks reduce commissioning risk before shipment.", image: "/images/products/lf955/manufacturing/08-testing.jpg" },
        { step: "Packaging", title: "Export Packaging", description: "Export-ready packing reduces delivery damage risk for overseas industrial projects.", image: "/images/products/lf955/manufacturing/09-packaging.jpg" },
      ];

  const configGroups = zh
    ? [
        { title: "发动机", options: "久保田 / 洋马 / 珀金斯", recommendation: "推荐用于重载矿山、租赁车队和需要持续稳定运行的偏远工业项目。" },
        { title: "灯杆高度", options: "6米 / 7.5米 / 9米", recommendation: "推荐用于施工现场、运输道路和更大作业区，覆盖距离直接影响效率。" },
        { title: "照明功率", options: "300瓦至1000瓦发光二极管灯 / 金属卤化物灯", recommendation: "推荐给需要平衡油耗、亮度和现场安全的买家。" },
        { title: "升降系统", options: "手动 / 液压 / 电动", recommendation: "推荐给需要更快展开和更少人工接触点的租赁车队与承包商。" },
      ]
    : [
        { title: "Engine", options: "Kubota / Yanmar / Perkins", recommendation: "Recommended for heavy-duty mining operations, rental fleets and remote industrial projects that need predictable uptime." },
        { title: "Mast Height", options: "6m / 7.5m / 9m", recommendation: "Recommended for construction sites, haul roads and wider work zones where coverage distance affects productivity." },
        { title: "Lighting Power", options: "300W-1000W LED / Metal Halide", recommendation: "Recommended for buyers balancing fuel cost, light output and site safety requirements." },
        { title: "Lift System", options: "Manual / Hydraulic / Electric", recommendation: "Recommended for rental fleets and contractors that need faster setup with fewer crew touchpoints." },
      ];

  const comparisonRows = zh
    ? [
        ["运行稳定性", "标准产品在长工时和恶劣环境下运行波动更大。", "高稳定性，按项目工况匹配发动机与配置。", "降低停机暴露"],
        ["防尘能力", "标准产品在高粉尘现场往往需要更多维护。", "工业级防尘，适用于严苛现场。", "降低服务中断风险"],
        ["燃油效率", "基础燃油效率，长工时下优化有限。", "按项目配置优化燃油效率和运行时长。", "降低每晚运行成本"],
        ["维护成本", "平均维护成本，更多保养频率。", "工厂测试与配置规划降低维护成本。", "降低生命周期服务支出"],
      ]
    : [
        ["Runtime Stability", "Standard towers often deliver unstable runtime under long shifts and harsh sites.", "High runtime stability with 99.9% uptime reliability target and project-matched configuration.", "Lower shutdown exposure"],
        ["Dust Resistance", "Standard towers often need extra service attention in dust-heavy sites.", "Industrial grade dust resistance with harsh-site configuration support.", "Lower service interruption risk"],
        ["Fuel Efficiency", "Basic fuel efficiency with limited optimization for long shifts.", "Optimized fuel efficiency for long shifts through project-matched engine and LED power.", "Lower operating cost per night shift"],
        ["Maintenance Cost", "Average maintenance cost with more frequent service attention.", "Low maintenance cost through factory-tested assembly and runtime checks.", "Lower lifetime service spend"],
      ];

  const failureCostCards = [
    { title: zh ? "每日停工损失" : "$2,100 / Day Loss", description: zh ? "施工延误 + 人工 + 机械闲置 + 安全风险" : "Construction delay + labor + equipment idle time + safety exposure" },
    { title: zh ? "安全事故风险" : "Safety Risk", description: zh ? "光照不足导致事故、返工、赔偿风险" : "Poor lighting increases incident, rework and compensation exposure" },
    { title: zh ? "项目延期链条" : "Project Delay Chain", description: zh ? "一个照明问题 → 整个施工链延误" : "One lighting issue can delay the entire construction chain" },
  ];

  const cases = [
    {
      title: zh ? "沙特阿拉伯施工现场" : "Saudi Arabia Construction Site",
      body: zh ? "8台 LF971，用于夜间道路施工与桥梁工程" : "8 LF971 units for night roadworks and bridge projects",
      roi: zh ? "投资回报：减少 35% 夜间延误" : "ROI: reduce 35% night delay",
    },
    {
      title: zh ? "澳大利亚租赁公司" : "Australia Rental Company",
      body: zh ? "替换旧柴油灯塔，提高出租率" : "Replace old diesel towers and increase rental utilization",
      roi: zh ? "投资回报：租赁收入 +22%" : "ROI: rental revenue +22%",
    },
    {
      title: zh ? "南非矿山项目" : "South Africa Mining",
      body: zh ? "高粉尘 + 高负载环境连续运行" : "Continuous operation in dust-heavy, high-load conditions",
      roi: zh ? "故障率降低 60%" : "Failure rate reduced by 60%",
    },
  ];

  const faqItems = zh
    ? [
        { q: "起订量是多少？", a: "标准起订量为 1 台，并支持项目试单。" },
        { q: "交货期多久？", a: "根据配置和目的国家不同，交货期为 15 至 30 天。" },
        { q: "是否支持代工生产？", a: "支持品牌代工和项目定制。" },
        { q: "LF971 是否适合高温和多尘环境？", a: "LF971 针对超过 45 摄氏度的高温和重度粉尘环境进行了优化。" },
      ]
    : [
        { q: "What is the MOQ?", a: "Standard MOQ is 1 unit, with project trial orders supported." },
        { q: "What is the lead time?", a: "15-30 days depending on configuration and destination country." },
        { q: "Do you support OEM?", a: "OEM branding and project customization are supported." },
        { q: "Is LF971 suitable for hot and dusty environments?", a: "LF971 is optimized for 45C+ heat and dust-heavy environments." },
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-white text-slate-950">
        <LF971Hero content={heroV7} zh={zh} />
        <LF971Overview zh={zh} />
        <LF971ProductResources zh={zh} />
      </main>
    </>
  );
}
