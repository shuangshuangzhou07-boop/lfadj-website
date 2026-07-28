import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "zh";

const copy = {
  en: {
    title: "Rental Lighting Applications",
    subtitle:
      "Reliable mobile lighting equipment designed for rental companies, temporary projects and short-term lighting requirements, supporting fast deployment and flexible operation.",
    cta: "Request Your Rental Lighting Recommendation",
    imageAlt:
      "Mobile light tower providing temporary lighting at a nighttime work site",
    applicationsTitle: "Rental Lighting Applications",
    applications: [
      {
        title: "Construction Equipment Rental",
        description:
          "Providing temporary lighting equipment for construction projects through rental services.",
      },
      {
        title: "Mining & Remote Projects",
        description:
          "Supporting temporary lighting requirements in remote areas without stable power supply.",
      },
      {
        title: "Events & Temporary Facilities",
        description:
          "Lighting solutions for temporary venues, outdoor events and short-term facilities.",
      },
      {
        title: "Emergency & Short-Term Deployment",
        description:
          "Supporting emergency response, maintenance projects and rapid lighting deployment.",
      },
    ],
    requirementsTitle: "Rental Lighting Requirements",
    requirements: [
      {
        title: "Easy Transportation",
        description:
          "Rental equipment needs to be moved frequently between different project locations.",
      },
      {
        title: "Fast Deployment",
        description:
          "Rental projects often require lighting equipment that can be installed and operated quickly.",
      },
      {
        title: "Durable Construction",
        description:
          "Equipment must handle different users and various working environments.",
      },
      {
        title: "Low Maintenance",
        description:
          "Reliable equipment reduces maintenance requirements during rental operations.",
      },
    ],
    productsTitle: "Recommended Mobile Lighting Products for Rental",
    suitableLabel: "Suitable for:",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        applications: [
          "Long-term rental projects",
          "Large construction sites",
          "Continuous operation requirements",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        applications: [
          "Remote rental projects",
          "Long-term deployment",
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
      { slug: "emergency-lighting", label: "Emergency Lighting" },
      { slug: "oil-gas-lighting", label: "Oil & Gas Lighting" },
    ],
    ctaDescription:
      "Share your project type, working environment, operation time and lighting requirements. LFADJ will help you find suitable mobile lighting equipment.",
  },
  zh: {
    title: "租赁照明应用",
    subtitle:
      "为设备租赁公司、临时项目和短期照明需求提供可靠的移动照明设备，支持快速部署和灵活使用。",
    cta: "获取租赁照明配置建议",
    imageAlt: "移动照明灯塔为夜间临时作业现场提供照明",
    applicationsTitle: "租赁照明应用场景",
    applications: [
      {
        title: "工程设备租赁",
        description: "通过租赁服务为建筑施工项目提供临时照明设备。",
      },
      {
        title: "矿山及偏远项目",
        description: "满足偏远地区和无稳定电力环境下的临时照明需求。",
      },
      {
        title: "活动及临时设施",
        description: "用于临时场馆、户外活动和短期设施照明。",
      },
      {
        title: "应急及短期部署",
        description: "支持应急响应、维修工程和快速照明部署。",
      },
    ],
    requirementsTitle: "租赁照明需求",
    requirements: [
      {
        title: "方便运输",
        description: "租赁设备需要在不同项目地点之间频繁移动。",
      },
      {
        title: "快速部署",
        description: "租赁项目通常需要快速安装并投入使用。",
      },
      {
        title: "耐用结构",
        description: "设备需要适应不同客户和复杂工作环境。",
      },
      {
        title: "低维护需求",
        description: "可靠设备可以减少租赁运营过程中的维护工作。",
      },
    ],
    productsTitle: "适用于租赁的移动照明产品",
    suitableLabel: "适用于：",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        applications: ["长期租赁项目", "大型建筑工地", "连续运行需求"],
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        applications: ["偏远地区租赁项目", "长期部署", "低维护需求"],
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
      { slug: "emergency-lighting", label: "应急照明" },
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
  const url = `https://lfadj.com/${lang}/applications/rental-lighting`;
  const title = zh
    ? "租赁照明应用 | 移动照明设备 | LFADJ"
    : "Rental Lighting Applications | Mobile Lighting Equipment | LFADJ";
  const description = copy[lang].subtitle;
  const image =
    "https://lfadj.com/images/hero/construction-mobile-light-tower.webp";

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
                      application.slug === "mining-lighting" ||
                      application.slug === "construction-lighting"
                        ? `/${locale}/applications/${application.slug}`
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
