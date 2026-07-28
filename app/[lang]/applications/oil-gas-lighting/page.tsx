import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Oil & Gas Lighting Applications",
    subtitle:
      "Reliable mobile lighting equipment designed for oil and gas sites, remote operations and temporary work areas, supporting safe and efficient night operations.",
    cta: "Request Your Oil & Gas Lighting Recommendation",
    ctaDescription:
      "Share your project type, working environment, operation time and lighting requirements. LFADJ will help you find suitable mobile lighting equipment.",
    imageAlt: "Mobile light tower supporting outdoor night operations",
    applicationsTitle: "Oil & Gas Lighting Applications",
    applications: [
      {
        title: "Remote Oil & Gas Sites",
        description:
          "Providing lighting support for oil and gas operations in remote locations without stable infrastructure.",
      },
      {
        title: "Drilling & Work Areas",
        description:
          "Supporting night operations, equipment inspection and temporary working areas.",
      },
      {
        title: "Maintenance Areas",
        description:
          "Providing temporary lighting during maintenance and repair operations.",
      },
      {
        title: "Temporary Facilities",
        description:
          "Lighting for temporary camps, storage areas and supporting facilities.",
      },
    ],
    requirementsTitle: "Oil & Gas Lighting Requirements",
    requirements: [
      {
        title: "Reliable Operation",
        description:
          "Oil and gas operations require dependable lighting equipment for continuous field work.",
      },
      {
        title: "Remote Deployment",
        description:
          "Remote sites require mobile lighting solutions that can operate independently.",
      },
      {
        title: "Long Operation Time",
        description:
          "Extended operations require stable lighting performance throughout working periods.",
      },
      {
        title: "Easy Relocation",
        description:
          "Mobile equipment needs to be relocated as project areas change.",
      },
    ],
    productsTitle: "Recommended Mobile Lighting Products for Oil & Gas",
    suitableLabel: "Suitable for:",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        applications: [
          "Long operation oil and gas projects",
          "Large working areas",
          "Remote sites without stable power supply",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        applications: [
          "Remote oil and gas locations",
          "Long-term temporary deployment",
          "Low maintenance requirements",
        ],
      },
    ],
    relatedInformationTitle: "Related Information",
    relatedProductsTitle: "Related Products",
    relatedSolutionsTitle: "Related Solutions",
    relatedSolutions: [
      {
        slug: "how-to-choose-the-right-light-tower",
        label: "How to Choose the Right Light Tower",
      },
      {
        slug: "how-to-choose-the-right-light-tower-for-harsh-environments",
        label: "Extreme Environment Configuration",
      },
    ],
    relatedApplicationsTitle: "Related Applications",
    relatedApplications: [
      { slug: "mining-lighting", label: "Mining Lighting" },
      { slug: "construction-lighting", label: "Construction Lighting" },
      { slug: "rental-lighting", label: "Rental Lighting" },
      { slug: "emergency-lighting", label: "Emergency Lighting" },
    ],
  },
  zh: {
    title: "油气照明应用",
    subtitle:
      "为油气现场、偏远作业区域和临时工作区域提供可靠的移动照明设备，支持安全高效的夜间作业。",
    cta: "获取油气照明配置建议",
    ctaDescription:
      "请提供您的项目类型、工作环境、运行时间和照明需求，LFADJ 将帮助您匹配合适的移动照明设备。",
    imageAlt: "为户外夜间作业提供照明的移动照明灯塔",
    applicationsTitle: "油气照明应用场景",
    applications: [
      {
        title: "偏远油气现场",
        description: "为缺少稳定基础设施的偏远油气作业区域提供照明支持。",
      },
      {
        title: "钻井与作业区域",
        description: "支持夜间作业、设备检查和临时工作区域照明。",
      },
      {
        title: "维护检修区域",
        description: "为维护和检修工作提供临时照明。",
      },
      {
        title: "临时设施区域",
        description: "用于临时营地、储存区域和辅助设施照明。",
      },
    ],
    requirementsTitle: "油气照明需求",
    requirements: [
      {
        title: "可靠运行",
        description: "油气作业需要可靠的照明设备，以支持持续的现场工作。",
      },
      {
        title: "偏远部署",
        description: "偏远现场需要能够独立运行的移动照明解决方案。",
      },
      {
        title: "长时间运行",
        description: "长时间作业需要在整个工作期间保持稳定的照明性能。",
      },
      {
        title: "快速转移",
        description: "随着项目区域变化，移动设备需要能够快速转移。",
      },
    ],
    productsTitle: "适用于油气照明的移动照明产品",
    suitableLabel: "适用于：",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        applications: [
          "长时间油气项目",
          "大面积作业区域",
          "无稳定电源区域",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        applications: [
          "偏远油气区域",
          "长期临时部署",
          "低维护需求",
        ],
      },
    ],
    relatedInformationTitle: "相关信息",
    relatedProductsTitle: "相关产品",
    relatedSolutionsTitle: "相关解决方案",
    relatedSolutions: [
      {
        slug: "how-to-choose-the-right-light-tower",
        label: "如何选择合适的移动照明灯塔",
      },
      {
        slug: "how-to-choose-the-right-light-tower-for-harsh-environments",
        label: "极端环境配置",
      },
    ],
    relatedApplicationsTitle: "相关应用",
    relatedApplications: [
      { slug: "mining-lighting", label: "矿山照明" },
      { slug: "construction-lighting", label: "工程施工照明" },
      { slug: "rental-lighting", label: "租赁照明" },
      { slug: "emergency-lighting", label: "应急照明" },
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
    ? "油气照明应用 | 移动照明灯塔 | LFADJ"
    : "Oil & Gas Lighting Applications | Mobile Light Towers | LFADJ";
  const description = zh
    ? "了解移动照明设备在偏远油气现场、钻井作业区域、维护检修区域和临时设施中的应用与照明需求。"
    : "Explore mobile lighting applications and lighting requirements for remote oil and gas sites, drilling work areas, maintenance areas and temporary facilities.";

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
              href={`/${locale}/contact/request-a-quote`}
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
                <ul className="mt-5 space-y-3">
                  {content.relatedSolutions.map((solution) => (
                    <li key={solution.slug}>
                      <Link
                        href={`/${locale}/solutions/${solution.slug}`}
                        className="text-sm font-semibold leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700"
                      >
                        {solution.label}
                      </Link>
                    </li>
                  ))}
                </ul>
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
                {content.cta}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {content.ctaDescription}
              </p>
            </div>
            <Link
              href={`/${locale}/contact/request-a-quote`}
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
