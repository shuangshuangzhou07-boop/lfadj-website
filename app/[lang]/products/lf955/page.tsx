import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type Lang = "en" | "zh";

function isLang(value: string): value is Lang {
  return value === "en" || value === "zh";
}

function LF955Hero({ zh }: { zh: boolean }) {
  const advantages = zh
    ? [
        {
          title: "高效LED照明覆盖",
          description: "标配4×400W LED灯具，可根据项目需求定制。通过优化灯具配置和配光设计，在相同功率下实现更大的照明覆盖范围。",
        },
        {
          title: "可靠柴油动力系统",
          description: "支持 Kubota、Yanmar 等国际品牌柴油动力方案，也可根据项目需求选择经济型动力配置，在可靠性、维护便利性和使用成本之间实现平衡。",
        },
        {
          title: "120L大容量油箱",
          description: "≥120L油箱容量，支持长时间户外照明运行，并可根据项目需求提供定制配置。",
        },
      ]
    : [
        {
          title: "Efficient LED Lighting Coverage",
          description: "Equipped with 4×400W LED lights with customizable lighting options. Optimized light configuration and beam design help achieve wider illumination coverage.",
        },
        {
          title: "Reliable Diesel Power System",
          description: "Supports Kubota, Yanmar and other diesel engine options, balancing reliability, maintenance convenience and operating cost requirements.",
        },
        {
          title: "120L Large Fuel Tank",
          description: "≥120L fuel tank capacity supports extended outdoor lighting operation with customized options available.",
        },
      ];

  return (
    <section className="border-b border-slate-200 bg-slate-50 text-slate-950">
      <div className="relative mx-auto max-w-[1120px] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
              {zh ? (
                <>
                  LF955柴油移动照明<span className="whitespace-nowrap">灯塔</span>
                </>
              ) : (
                "LF955 Diesel Mobile Light Tower"
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              {zh
                ? "高效LED照明系统，结合可靠柴油动力，为建筑施工、矿山及工业项目提供稳定照明。"
                : "High-efficiency LED lighting combined with reliable diesel power for stable illumination in construction, mining and industrial projects."}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href={zh ? "/zh/contact" : "/en/contact"}
                className="inline-flex min-h-14 items-center justify-center rounded-md bg-amber-500 px-8 text-base font-semibold text-slate-950 shadow-sm transition-colors hover:bg-amber-400"
              >
                {zh ? "获取报价" : "Request a Quote"}
              </Link>
              <a
                href="#technical-specifications"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-slate-300 bg-white px-8 text-base font-semibold text-slate-900 transition-colors hover:border-slate-500 hover:bg-slate-100"
              >
                {zh ? "下载技术参数表" : "Download Datasheet"}
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:min-h-[460px] lg:min-h-[540px]">
            <Image
              src="/images/products/lf955/hero/lf955-hero.jpg"
              alt={zh ? "LF955柴油移动照明灯塔用于建筑施工、矿山及工业项目" : "LF955 diesel mobile light tower for construction, mining and industrial projects"}
              fill
              priority
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

function LF955Overview({ zh }: { zh: boolean }) {
  const technicalInformation = zh
    ? [
        { label: "照明系统", value: "4×400W LED" },
        { label: "最大光通量", value: "272,000 lm" },
        { label: "灯杆高度", value: "7.5m" },
        { label: "升降方式", value: "电动升降" },
        { label: "发动机", value: "Kubota / Yanmar柴油发动机" },
        { label: "油箱容量", value: "≥120L（油箱容量可根据项目需求定制）" },
        { label: "旋转角度", value: "0–350°" },
        { label: "重量", value: "≤750kg" },
      ]
    : [
        { label: "Lighting System", value: "4×400W LED" },
        { label: "Maximum Luminous Flux", value: "272,000 lm" },
        { label: "Mast Height", value: "7.5m" },
        { label: "Lifting Method", value: "Electric mast operation" },
        { label: "Engine", value: "Kubota / Yanmar diesel engine" },
        { label: "Fuel Tank Capacity", value: "≥120L (customizable)" },
        { label: "Rotation Angle", value: "0–350°" },
        { label: "Weight", value: "≤750kg" },
      ];

  return (
    <section aria-labelledby="lf955-overview-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[800px] px-6 sm:px-8 lg:px-12">
        <div>
          <h2
            id="lf955-overview-title"
            className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            {zh ? "LF955柴油移动照明灯塔" : "LF955 Diesel Mobile Light Tower"}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              {zh
                ? "LF955柴油移动照明灯塔专为建筑施工、矿山作业、道路建设及设备租赁项目设计。"
                : "The LF955 Diesel Mobile Light Tower is designed for construction lighting, mining lighting, road construction and rental lighting projects."}
            </p>
            <p>
              {zh
                ? "采用高效LED照明系统和可靠柴油动力平台，在提供高亮度照明覆盖的同时，兼顾长期运行稳定性和维护便利性。"
                : "Its high-efficiency LED lighting system and reliable diesel power platform deliver high-output illumination while supporting long-term operating stability and convenient maintenance."}
            </p>
            <p>
              {zh
                ? "支持 Kubota、Yanmar 及经济型动力方案选择，可根据不同项目需求匹配合适配置。"
                : "Kubota, Yanmar and cost-effective power options are available to match different project requirements."}
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <h3 className="text-2xl font-bold tracking-tight text-slate-950">
            {zh ? "技术信息" : "Technical Information"}
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

function LF955ProductResources({ zh }: { zh: boolean }) {
  const applications = zh
    ? [
        { label: "建筑施工照明", href: "/applications/construction" },
        { label: "矿山照明", href: "/applications/mining" },
        { label: "道路建设照明", href: "/applications/road-infrastructure" },
        { label: "设备租赁照明", href: "/applications/rental-lighting" },
        { label: "应急照明", href: "/applications/emergency" },
      ]
    : [
        { label: "Construction Lighting", href: "/applications/construction" },
        { label: "Mining Lighting", href: "/applications/mining" },
        { label: "Road Construction Lighting", href: "/applications/road-infrastructure" },
        { label: "Equipment Rental Lighting", href: "/applications/rental-lighting" },
        { label: "Emergency Lighting", href: "/applications/emergency" },
      ];
  const solutions = zh
    ? [
        { label: "如何选择适合项目需求的移动照明灯塔升降系统", href: "/zh/solutions/how-to-choose-light-tower-mast-system" },
        { label: "如何选择适合项目需求的灯塔动力系统", href: "/zh/solutions/how-to-choose-right-light-tower-power-system" },
        { label: "如何降低柴油移动照明灯塔运营成本" },
      ]
    : [
        { label: "How to Choose the Right Light Tower Mast System", href: "/en/solutions/how-to-choose-light-tower-mast-system" },
        { label: "How to Choose the Right Light Tower Power System", href: "/en/solutions/how-to-choose-right-light-tower-power-system" },
        { label: "How to Reduce Diesel Mobile Light Tower Operating Costs" },
      ];

  return (
    <section aria-labelledby="lf955-resources-title" className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[800px] px-6 sm:px-8 lg:px-12">
        <h2 id="lf955-resources-title" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
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
                  {solution.href ? (
                    <Link className="font-medium leading-7 text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700" href={solution.href}>
                      {solution.label}
                    </Link>
                  ) : (
                    <span className="font-medium leading-7 text-slate-500">{solution.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-950">{zh ? "产品资料" : "Downloads"}</h3>
            <div className="mt-5 flex flex-col items-start gap-3">
              <button type="button" disabled className="cursor-not-allowed font-medium text-slate-500" title={zh ? "文件待提供" : "File not yet available"}>
                {zh ? "LF955技术参数表" : "LF955 Technical Datasheet"}
              </button>
              <button type="button" disabled className="cursor-not-allowed font-medium text-slate-500" title={zh ? "文件待提供" : "File not yet available"}>
                {zh ? "LF955产品宣传册" : "LF955 Brochure"}
              </button>
              <button type="button" disabled className="cursor-not-allowed font-medium text-slate-500" title={zh ? "文件待提供" : "File not yet available"}>
                {zh ? "LF955使用说明书" : "LF955 User Manual"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg bg-slate-950 px-6 py-8 text-white sm:px-8 lg:flex-row lg:items-center">
          <h3 className="max-w-2xl text-2xl font-bold leading-tight">
            {zh ? "需要选择适合您项目的移动照明灯塔？" : "Need help choosing the right mobile light tower for your project?"}
          </h3>
          <Link
            href={zh ? "/zh/contact" : "/en/contact"}
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-amber-500 px-6 font-semibold text-slate-950 hover:bg-amber-400"
          >
            {zh ? "获取项目配置建议" : "Get Project Configuration Advice"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";
  const title = zh
    ? "LF955柴油移动照明灯塔 | LFADJ"
    : "LF955 Diesel Mobile Light Tower | LFADJ";
  const description = zh
    ? "了解LF955柴油移动照明灯塔，采用液压升降灯杆，适用于建筑施工、矿山及工业项目，并支持项目配置定制。"
    : "Explore LF955 diesel mobile light tower with hydraulic mast, reliable LED lighting and customizable configurations for construction and industrial projects.";
  const url = zh ? "https://lfadj.com/zh/products/lf955" : "https://lfadj.com/en/products/lf955";
  const image = "https://lfadj.com/images/products/lf955/applications/road-construction.jpg";
  const imageAlt = zh
    ? "LF955\u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854\u7528\u4e8e\u591c\u95f4\u5de5\u7a0b\u9879\u76ee\u7167\u660e"
    : "LF955 diesel mobile light tower for night construction site lighting";

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
          "LF955 light tower",
        ],
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/products/lf955",
        "zh-CN": "https://lfadj.com/zh/products/lf955",
        "x-default": "https://lfadj.com/en/products/lf955",
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

function getLf955ProductSchema(zh: boolean) {
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
    name: zh ? "LF955 \u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854" : "LF955 Diesel Mobile Light Tower",
    alternateName: zh
      ? "LF955 \u6db2\u538b\u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854"
      : "LF955 Hydraulic Diesel Mobile Lighting Tower",
    description: zh
      ? "LF955\u67f4\u6cb9\u79fb\u52a8\u7167\u660e\u706f\u5854\uff0c\u9002\u7528\u4e8e\u65bd\u5de5\u3001\u77ff\u5c71\u3001\u6cb9\u6c14\u3001\u79df\u8d41\u548c\u5e94\u6025\u9879\u76ee\uff0c\u5e76\u652f\u6301\u9ad8\u6e29\u3001\u98ce\u6c99\u3001\u6cbf\u6d77\u8150\u8680\u53ca\u9ad8\u6d77\u62d4\u73af\u5883\u914d\u7f6e\u3002"
      : "LF955 diesel mobile light tower for construction, mining, oil and gas, rental and emergency projects, with project-specific configurations for high temperature, dust, coastal and high-altitude environments.",
    sku: "LF955",
    mpn: "LF955",
    url: zh ? "https://lfadj.com/zh/products/lf955" : "https://lfadj.com/en/products/lf955",
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

export default function LF955Page({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) {
    redirect("/en/products/lf955");
  }

  const lang = params.lang;
  const zh = lang === "zh";
  const productSchema = getLf955ProductSchema(zh);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: zh ? "首页" : "Home",
        item: zh ? "https://lfadj.com/zh" : "https://lfadj.com/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: zh ? "产品中心" : "Products",
        item: zh ? "https://lfadj.com/zh/products" : "https://lfadj.com/en/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: zh ? "LF955柴油移动照明灯塔" : "LF955 Diesel Mobile Light Tower",
        item: zh ? "https://lfadj.com/zh/products/lf955" : "https://lfadj.com/en/products/lf955",
      },
    ],
  };

  const whyLf955 = zh
    ? {
        title: "为什么选择 LF955 柴油移动照明灯塔？",
        description: "LF955柴油移动照明灯塔集成液压升降灯杆、LED照明系统、柴油动力系统和项目配置能力。",
        items: [
          {
            title: "可靠的液压升降系统",
            description: "液压升降系统提供稳定的升降性能，满足工程项目长期户外照明需求。",
          },
          {
            title: "高亮度 LED 照明系统",
            description: "高输出 LED 照明系统为大型户外作业区域提供高效照明。",
          },
          {
            title: "可靠柴油动力系统",
            description: "柴油动力系统满足复杂工程环境下稳定运行需求。",
          },
          {
            title: "项目化配置能力",
            description: "LFADJ根据项目需求和使用条件提供配置调整。",
          },
        ],
      }
    : {
        title: "Why Choose LF955 Diesel Mobile Light Tower?",
        description: "The LF955 diesel mobile light tower combines a hydraulic mast, LED lighting system, diesel power system and customized configuration support in one project-ready product.",
        items: [
          {
            title: "Reliable Hydraulic Mast System",
            description: "The hydraulic mast system provides stable lifting performance and efficient operation for professional outdoor lighting projects.",
          },
          {
            title: "High Output LED Lighting",
            description: "High output LED lighting provides effective illumination for large outdoor working areas.",
          },
          {
            title: "Reliable Diesel Power System",
            description: "The diesel power system is designed for dependable operation in demanding project environments.",
          },
          {
            title: "Project-Based Configuration",
            description: "LFADJ supports customized configurations based on project requirements and operating conditions.",
          },
        ],
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
              "Stable Output: Configure LF955 for consistent mobile lighting under high-temperature duty cycles.",
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
              "Project Fit: Build the LF955 package around actual elevation and duty cycle.",
            ],
          },
        ],
      };

  const specificationGroups = zh
    ? [
        {
          title: "灯光系统",
          rows: [
            { label: "灯光类型", value: "LED" },
            { label: "灯具配置", value: "4×400W LED投光灯" },
            { label: "照明输出", value: "约230,000流明" },
          ],
        },
        {
          title: "灯杆系统",
          rows: [
            { label: "灯杆类型", value: "液压升降灯杆" },
            { label: "升降高度", value: "7.5米" },
            { label: "旋转范围", value: "0–350°，灯具角度可调" },
          ],
        },
        {
          title: "动力系统",
          rows: [
            { label: "发动机", value: "Kubota / Yanmar柴油发动机选项" },
            { label: "发电机", value: "5kVA单相发电机" },
            { label: "油箱容量", value: "120L独立油箱" },
          ],
        },
        {
          title: "拖车结构",
          rows: [
            { label: "拖车类型", value: "两轮移动拖车" },
            { label: "支撑系统", value: "四个支撑腿" },
          ],
        },
        {
          title: "尺寸与重量",
          rows: [
            { label: "展开尺寸", value: "当前已确认资料未公布" },
            { label: "运输尺寸", value: "当前已确认资料未公布" },
            { label: "重量", value: "当前已确认资料未公布" },
          ],
        },
      ]
    : [
        {
          title: "Lighting System",
          rows: [
            { label: "Lighting Type", value: "LED" },
            { label: "Lamp Configuration", value: "4×400W LED floodlights" },
            { label: "Lighting Output", value: "Approx. 230,000 lumens" },
          ],
        },
        {
          title: "Mast System",
          rows: [
            { label: "Mast Type", value: "Hydraulic lifting mast" },
            { label: "Mast Height", value: "7.5 m" },
            { label: "Rotation", value: "0–350°, adjustable lamp angle" },
          ],
        },
        {
          title: "Power System",
          rows: [
            { label: "Engine", value: "Kubota / Yanmar diesel engine options" },
            { label: "Generator", value: "5kVA single-phase generator" },
            { label: "Fuel Tank Capacity", value: "120L independent fuel tank" },
          ],
        },
        {
          title: "Trailer Structure",
          rows: [
            { label: "Trailer Type", value: "Two-wheel mobile trailer" },
            { label: "Support System", value: "Four support legs" },
          ],
        },
        {
          title: "Dimensions & Weight",
          rows: [
            { label: "Operating Dimensions", value: "Not published in the currently verified data" },
            { label: "Transport Dimensions", value: "Not published in the currently verified data" },
            { label: "Net Weight", value: "Not published in the currently verified data" },
          ],
        },
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
          solution: "LF955面向重视持续稳定运行的买家，目标是在现场熄灯前保持可预测运行。",
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
          solution: "LF955 is configured for uptime-focused buyers who need predictable operation before the site goes dark.",
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
          title: "建筑施工项目",
          description: "为施工现场和户外作业区域提供可靠移动照明。",
        },
        {
          title: "矿山作业",
          description: "适用于需要稳定照明支持的矿山作业场景。",
        },
        {
          title: "油气项目",
          description: "为户外工业作业提供移动照明支持。",
        },
        {
          title: "设备租赁",
          description: "适用于需要可靠、灵活设备配置的租赁公司。",
        },
        {
          title: "应急照明",
          description: "为应急场景提供快速部署照明支持。",
        },
      ]
    : [
        {
          title: "Construction Projects",
          description: "Reliable mobile lighting for construction sites and outdoor working areas.",
        },
        {
          title: "Mining Operations",
          description: "Suitable for mining sites requiring dependable lighting support.",
        },
        {
          title: "Oil & Gas Projects",
          description: "Provides mobile lighting support for outdoor industrial operations.",
        },
        {
          title: "Rental Fleets",
          description: "Designed for rental companies requiring durable and flexible lighting equipment.",
        },
        {
          title: "Emergency Response",
          description: "Provides fast-deployable lighting support for emergency situations.",
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
        { title: "发动机选项", options: "Kubota / Yanmar / Perkins", recommendation: "可根据项目需求选择不同发动机配置。" },
        { title: "灯具配置选项", options: "LED 功率选项 / 灯具数量选项", recommendation: "根据不同照明需求提供不同LED灯具配置。" },
        { title: "灯杆配置选项", options: "手动灯杆 / 电动灯杆 / 液压灯杆", recommendation: "根据使用需求选择合适的灯杆系统。" },
        { title: "项目定制配置", options: "根据确认的项目需求进行配置调整", recommendation: "LFADJ支持根据项目需求进行配置调整。" },
      ]
    : [
        { title: "Engine Options", options: "Kubota / Yanmar / Perkins", recommendation: "Available engine options can be selected according to project requirements." },
        { title: "Lighting Options", options: "LED power options / Lighting quantity options", recommendation: "Different LED lighting configurations are available for different lighting requirements." },
        { title: "Mast Options", options: "Manual mast / Electric mast / Hydraulic mast", recommendation: "Select suitable mast systems according to operation requirements." },
        { title: "Custom Project Configuration", options: "Custom configuration based on confirmed project requirements", recommendation: "LFADJ supports customized configurations based on project requirements." },
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
      body: zh ? "8台 LF955，用于夜间道路施工与桥梁工程" : "8 LF955 units for night roadworks and bridge projects",
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
        {
          q: "LF955柴油移动照明灯塔主要用于哪些场景？",
          a: "LF955适用于需要可靠移动照明的户外项目，包括建筑施工、矿山、工业项目和应急照明场景。",
        },
        {
          q: "LF955有哪些发动机配置选择？",
          a: "LF955可根据项目需求选择合适的柴油发动机配置。",
        },
        {
          q: "LF955柴油移动照明灯塔可以定制吗？",
          a: "可以。LFADJ支持根据项目需求调整灯具、灯杆和动力等配置。",
        },
        {
          q: "LF955灯杆高度是多少？",
          a: "LF955采用液压升降灯杆，工作高度以产品确认参数为准。",
        },
        {
          q: "如何选择合适的LF955配置？",
          a: "LFADJ根据项目需求、使用条件和照明要求，推荐合适的配置方案。",
        },
      ]
    : [
        {
          q: "What is LF955 diesel mobile light tower used for?",
          a: "LF955 is designed for outdoor projects requiring reliable mobile lighting, including construction, mining, industrial and emergency applications.",
        },
        {
          q: "What engine options are available for LF955?",
          a: "LF955 can be configured with suitable diesel engine options according to project requirements.",
        },
        {
          q: "Can LF955 diesel mobile light tower be customized?",
          a: "Yes. LFADJ supports customized configurations including lighting, mast and power options based on project requirements.",
        },
        {
          q: "What is the mast height of LF955?",
          a: "LF955 uses a hydraulic mast system with a working height based on the confirmed product specification.",
        },
        {
          q: "How can I select the right LF955 configuration?",
          a: "LFADJ evaluates project requirements and recommends suitable configurations based on operating conditions and lighting needs.",
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  void whyLf955;
  void costLossSection;
  void specificationGroups;
  void manufacturingProcess;
  void riskCards;
  void scenarioCards;
  void manufacturingSteps;
  void configGroups;
  void comparisonRows;
  void failureCostCards;
  void cases;
  void faqSchema;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-white text-slate-950">
        <LF955Hero zh={zh} />
        <LF955Overview zh={zh} />
        <LF955ProductResources zh={zh} />
      </main>
    </>
  );
}
