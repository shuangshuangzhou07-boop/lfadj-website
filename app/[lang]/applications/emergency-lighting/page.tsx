import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Emergency Lighting Applications",
    subtitle:
      "Reliable mobile lighting equipment designed for emergency response, disaster recovery, power outages and temporary work areas, supporting rapid deployment when reliable lighting is required.",
    cta: "Request Your Emergency Lighting Recommendation",
    imageAlt:
      "Mobile light tower providing reliable lighting for emergency response operations",
    applicationsTitle: "Emergency Lighting Applications",
    applications: [
      {
        title: "Emergency Response Sites",
        description:
          "Providing temporary lighting support for emergency response operations and rescue activities.",
      },
      {
        title: "Disaster Recovery Areas",
        description:
          "Supporting recovery operations after natural disasters and unexpected events.",
      },
      {
        title: "Power Outage Areas",
        description:
          "Providing independent lighting when normal power supply is unavailable.",
      },
      {
        title: "Temporary Work Areas",
        description:
          "Lighting for temporary maintenance, repair and support operations.",
      },
    ],
    requirementsTitle: "Emergency Lighting Requirements",
    requirements: [
      {
        title: "Rapid Deployment",
        description:
          "Emergency situations require lighting equipment that can be installed and operated quickly.",
      },
      {
        title: "Reliable Operation",
        description:
          "Emergency lighting equipment must provide stable operation under challenging conditions.",
      },
      {
        title: "Independent Power Supply",
        description:
          "Mobile lighting equipment provides illumination without depending on fixed power infrastructure.",
      },
      {
        title: "Easy Transportation",
        description:
          "Emergency equipment needs to be moved quickly between different locations.",
      },
    ],
    productsTitle: "Recommended Mobile Lighting Products for Emergency",
    suitableLabel: "Suitable for:",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        applications: [
          "Emergency response projects",
          "Long operation requirements",
          "Large working areas",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        applications: [
          "Remote emergency locations",
          "Long-term temporary deployment",
          "Low maintenance requirements",
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
      { slug: "construction-lighting", label: "Construction Lighting" },
      { slug: "rental-lighting", label: "Rental Lighting" },
      { slug: "oil-gas-lighting", label: "Oil & Gas Lighting" },
    ],
    ctaDescription:
      "Share your project type, working environment, operation time and lighting requirements. LFADJ will help you find suitable mobile lighting equipment.",
  },
  zh: {
    title: "应急照明应用",
    subtitle:
      "为应急响应、灾害救援、停电保障和临时作业区域提供可靠的移动照明设备，支持需要快速部署照明的场景。",
    cta: "获取应急照明配置建议",
    imageAlt: "移动照明灯塔为应急响应作业提供可靠照明",
    applicationsTitle: "应急照明应用场景",
    applications: [
      {
        title: "应急救援现场",
        description: "为应急响应行动和救援工作提供临时照明支持。",
      },
      {
        title: "灾害恢复区域",
        description: "支持自然灾害和突发事件后的恢复工作。",
      },
      {
        title: "停电区域",
        description: "在正常电力供应不可用时提供独立照明。",
      },
      {
        title: "临时作业区域",
        description: "用于临时维修、抢修和辅助作业区域照明。",
      },
    ],
    requirementsTitle: "应急照明需求",
    requirements: [
      {
        title: "快速部署",
        description: "应急情况下需要能够快速安装并投入运行的照明设备。",
      },
      {
        title: "可靠运行",
        description: "应急照明设备必须在严苛条件下保持稳定运行。",
      },
      {
        title: "独立供电",
        description: "移动照明设备无需依赖固定电力基础设施即可提供照明。",
      },
      {
        title: "方便运输",
        description: "应急设备需要在不同地点之间快速移动。",
      },
    ],
    productsTitle: "适用于应急照明的移动照明产品",
    suitableLabel: "适用于：",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        applications: ["应急响应项目", "长时间运行需求", "大面积照明区域"],
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        applications: ["偏远应急区域", "长期临时部署", "低维护需求"],
      },
    ],
    relatedInformationTitle: "相关信息",
    relatedProductsTitle: "相关产品",
    relatedSolutionsTitle: "相关解决方案",
    relatedSolutionLabel: "如何选择合适的移动照明灯塔",
    relatedApplicationsTitle: "相关应用",
    relatedApplications: [
      { slug: "mining-lighting", label: "矿山照明" },
      { slug: "construction-lighting", label: "工程施工照明" },
      { slug: "rental-lighting", label: "租赁照明" },
      { slug: "oil-gas-lighting", label: "油气行业照明" },
    ],
    ctaDescription:
      "请提供您的项目类型、工作环境、运行时间和照明需求，LFADJ 将帮助您匹配合适的移动照明设备。",
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
  const url = `https://lfadj.com/${lang}/applications/emergency-lighting`;
  const title = zh
    ? "应急照明应用 | 移动照明设备 | LFADJ"
    : "Emergency Lighting Applications | Mobile Lighting Equipment | LFADJ";
  const description = copy[lang].subtitle;
  const image =
    "https://lfadj.com/images/products/lf971/applications/lf971-emergency-response.webp";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/applications/emergency-lighting",
        "zh-CN": "https://lfadj.com/zh/applications/emergency-lighting",
        "x-default": "https://lfadj.com/en/applications/emergency-lighting",
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

export default function EmergencyLightingPage({
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
          src="/images/products/lf971/applications/lf971-emergency-response.webp"
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
                      application.slug === "oil-gas-lighting"
                        ? `/${locale}/applications`
                        : `/${locale}/applications/${application.slug}`;

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
