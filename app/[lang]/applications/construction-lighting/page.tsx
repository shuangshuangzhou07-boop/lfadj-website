import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Construction Lighting Applications",
    subtitle:
      "Reliable mobile lighting equipment designed for construction sites, infrastructure projects and temporary working areas, supporting night operations and continuous project progress.",
    cta: "Request Your Construction Lighting Recommendation",
    ctaDescription:
      "Share your project type, working environment, operation time and lighting requirements. LFADJ will help you find suitable mobile lighting equipment.",
    imageAlt:
      "Mobile light tower illuminating construction machinery and tower cranes at a construction site at night",
    applicationsTitle: "Construction Lighting Applications",
    applications: [
      {
        title: "Building Construction Sites",
        description:
          "Lighting for building construction areas, outdoor work zones and night construction activities.",
      },
      {
        title: "Road & Infrastructure Projects",
        description:
          "Providing reliable lighting for road construction, bridge projects and infrastructure development areas.",
      },
      {
        title: "Temporary Working Areas",
        description:
          "Supporting temporary work zones, material storage areas and construction support areas.",
      },
      {
        title: "Equipment Operation Areas",
        description:
          "Lighting for construction machinery operation areas and heavy equipment working zones.",
      },
    ],
    requirementsTitle: "Construction Lighting Requirements",
    requirements: [
      {
        title: "Flexible Deployment",
        description:
          "Construction sites change throughout project stages and require mobile lighting equipment that can be relocated easily.",
      },
      {
        title: "Wide Area Coverage",
        description:
          "Large construction areas require reliable lighting coverage for multiple working zones.",
      },
      {
        title: "Night Work Support",
        description:
          "Supporting continuous construction schedules and night operations.",
      },
      {
        title: "Reliable Operation",
        description:
          "Construction environments require durable and reliable lighting equipment.",
      },
    ],
    productsTitle: "Recommended Mobile Lighting Products for Construction",
    suitableLabel: "Suitable for:",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        applications: [
          "Large construction projects",
          "Long night operations",
          "Large working areas",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        applications: [
          "Long-term construction areas",
          "Remote construction locations",
          "Low maintenance projects",
        ],
      },
    ],
    relatedInformationTitle: "Related Information",
    relatedProductsTitle: "Related Products",
    relatedSolutionsTitle: "Related Solutions",
    relatedSolutionLabel: "How to Choose the Right Light Tower",
    relatedApplicationsTitle: "Related Applications",
    relatedApplications: [
      { slug: "mining-lighting", label: "Mining Lighting" },
      { slug: "rental-lighting", label: "Rental Lighting" },
      { slug: "emergency-lighting", label: "Emergency Lighting" },
      { slug: "oil-gas-lighting", label: "Oil & Gas Lighting" },
    ],
  },
  zh: {
    title: "工程施工照明应用",
    subtitle:
      "为建筑工地、基础设施建设和临时施工区域提供可靠的移动照明设备，支持夜间施工、现场作业和项目进度需求。",
    cta: "获取工程施工照明配置建议",
    ctaDescription:
      "请提供您的项目类型、工作环境、运行时间和照明需求，LFADJ 将帮助您匹配合适的移动照明设备。",
    imageAlt: "移动照明灯塔在夜间建筑工地为工程机械和塔吊作业提供照明",
    applicationsTitle: "工程施工照明应用场景",
    applications: [
      {
        title: "建筑施工现场",
        description: "用于建筑主体施工区域、室外作业区域和夜间施工活动照明。",
      },
      {
        title: "道路与基础设施工程",
        description: "为道路建设、桥梁施工和基础设施项目提供可靠照明。",
      },
      {
        title: "临时施工区域",
        description: "适用于临时作业区域、材料堆放区域和施工辅助区域。",
      },
      {
        title: "设备作业区域",
        description: "用于施工机械操作区域和大型设备作业区域。",
      },
    ],
    requirementsTitle: "工程施工照明需求",
    requirements: [
      {
        title: "灵活部署",
        description: "施工现场会随着项目阶段变化，需要方便移动部署的照明设备。",
      },
      {
        title: "大范围照明覆盖",
        description: "大型施工区域需要覆盖多个工作区域的可靠照明。",
      },
      {
        title: "夜间施工支持",
        description: "支持连续施工计划和夜间作业。",
      },
      {
        title: "稳定运行",
        description: "施工环境需要耐用可靠的照明设备。",
      },
    ],
    productsTitle: "适用于工程施工的移动照明产品",
    suitableLabel: "适用于：",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        applications: [
          "大型施工项目",
          "长时间夜间施工",
          "大面积施工区域",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        applications: [
          "长期施工区域",
          "偏远施工地点",
          "低维护需求项目",
        ],
      },
    ],
    relatedInformationTitle: "相关信息",
    relatedProductsTitle: "相关产品",
    relatedSolutionsTitle: "相关解决方案",
    relatedSolutionLabel: "如何选择合适的移动照明灯塔",
    relatedApplicationsTitle: "相关应用",
    relatedApplications: [
      { slug: "mining-lighting", label: "矿山照明" },
      { slug: "rental-lighting", label: "租赁照明" },
      { slug: "emergency-lighting", label: "应急照明" },
      { slug: "oil-gas-lighting", label: "油气行业照明" },
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
    "https://lfadj.com/images/hero/construction-mobile-light-tower.webp";

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

            <div className="mt-8 grid border-y border-slate-200 lg:grid-cols-3">
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

              <div className="py-7 lg:pl-8">
                <h4 className="text-base font-bold text-slate-950">
                  {content.relatedApplicationsTitle}
                </h4>
                <ul className="mt-5 space-y-3">
                  {content.relatedApplications.map((application) => {
                    const href =
                      application.slug === "mining-lighting"
                        ? `/${locale}/applications/mining-lighting`
                        : application.slug === "oil-gas-lighting"
                          ? `/${locale}/applications`
                          : `/applications/${application.slug}`;

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

          <div className="mt-12 flex flex-col items-start justify-between gap-6 bg-slate-950 px-6 py-8 sm:px-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold leading-8 text-white sm:text-2xl">
                {content.cta}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {content.ctaDescription}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {content.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
