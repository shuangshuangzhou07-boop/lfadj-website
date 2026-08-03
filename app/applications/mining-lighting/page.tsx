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
      "Reliable mobile lighting equipment designed for open-pit mining, mining operations, remote sites and temporary working areas.",
    cta: "Request Your Mining Lighting Recommendation",
    imageAlt:
      "Mobile light tower illuminating excavators and haul equipment at an open-pit mine at night",
    applicationsTitle: "Mining Lighting Applications",
    applications: [
      {
        title: "Open Pit Mining Areas",
        description:
          "Lighting for mining areas, excavation zones and loading operations during night shifts.",
      },
      {
        title: "Mining Roads",
        description:
          "Providing reliable lighting for mining roads and transportation areas.",
      },
      {
        title: "Equipment Maintenance Areas",
        description:
          "Supporting equipment inspection, maintenance and temporary working areas.",
      },
      {
        title: "Temporary Mining Facilities",
        description:
          "Lighting for temporary camps, storage areas and supporting facilities.",
      },
    ],
    requirementsTitle: "Mining Lighting Requirements",
    requirements: [
      {
        title: "Long Operation Time",
        description:
          "Mining operations at night typically require stable and reliable lighting support.",
      },
      {
        title: "Large Lighting Coverage",
        description:
          "Mining work areas are extensive and require illumination across a broad operating area.",
      },
      {
        title: "Remote Mining Locations",
        description:
          "Some mining sites are far from urban power infrastructure and require independent lighting equipment.",
      },
      {
        title: "Easy Relocation",
        description:
          "As mining areas change, lighting equipment needs to be easy to relocate.",
      },
    ],
    productsTitle: "Recommended Mobile Lighting Products for Mining",
    suitableLabel: "Suitable for:",
    products: [
      {
        slug: "lf955",
        title: "LF955 Diesel Mobile Light Tower",
        applications: [
          "Continuous mining operations",
          "Large working areas",
          "Remote sites without stable power supply",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 Solar Mobile Light Tower",
        applications: [
          "Remote mining locations",
          "Long-term deployment",
          "Low maintenance applications",
        ],
      },
    ],
    relatedInformationTitle: "Related Information",
    relatedProductsTitle: "Related Products",
    relatedSolutionsTitle: "Related Solutions",
    relatedSolutionLabel: "How to Choose the Right Light Tower",
    relatedApplicationsTitle: "Related Applications",
    relatedApplications: [
      { slug: "construction-lighting", label: "Construction Lighting" },
      { slug: "rental-lighting", label: "Rental Lighting" },
      { slug: "emergency-lighting", label: "Emergency Lighting" },
      { slug: "oil-gas-lighting", label: "Oil & Gas Lighting" },
    ],
  },
  zh: {
    title: "矿山照明应用",
    subtitle:
      "为露天矿山、采矿现场和偏远作业区域提供可靠的移动照明设备，支持夜间运输、设备作业和临时工作区域照明需求。",
    cta: "获取矿山照明配置建议",
    imageAlt: "移动照明灯塔在夜间露天矿区为挖掘设备和运输作业提供照明",
    applicationsTitle: "矿山照明应用场景",
    applications: [
      {
        title: "露天采矿区域",
        description: "用于采矿作业区域、挖掘区域和装载区域的夜间照明。",
      },
      {
        title: "矿区运输道路",
        description: "为矿区运输道路和车辆通行区域提供持续照明支持。",
      },
      {
        title: "设备维护区域",
        description: "用于大型矿山设备检查、维修和临时维护区域照明。",
      },
      {
        title: "临时矿区设施",
        description: "适用于临时营地、仓储区域和辅助作业区域。",
      },
    ],
    requirementsTitle: "矿山作业照明需求",
    requirements: [
      {
        title: "长时间运行",
        description: "矿山夜间作业通常需要稳定可靠的照明支持。",
      },
      {
        title: "大范围照明覆盖",
        description: "矿区工作区域广，需要覆盖较大范围的照明能力。",
      },
      {
        title: "偏远作业环境",
        description: "部分矿区远离城市电力设施，需要独立照明设备。",
      },
      {
        title: "移动部署需求",
        description: "随着采矿区域变化，照明设备需要方便移动部署。",
      },
    ],
    productsTitle: "推荐移动照明产品",
    suitableLabel: "适用：",
    products: [
      {
        slug: "lf955",
        title: "LF955 柴油移动照明灯塔",
        applications: [
          "长时间连续运行",
          "大面积矿区照明",
          "无稳定电源环境",
        ],
      },
      {
        slug: "lf971",
        title: "LF971 太阳能移动照明灯塔",
        applications: [
          "偏远矿区",
          "长期部署区域",
          "低维护需求场景",
        ],
      },
    ],
    relatedInformationTitle: "相关信息",
    relatedProductsTitle: "相关产品",
    relatedSolutionsTitle: "相关解决方案",
    relatedSolutionLabel: "如何选择合适的移动照明灯塔",
    relatedApplicationsTitle: "相关应用",
    relatedApplications: [
      { slug: "construction-lighting", label: "工程施工照明" },
      { slug: "rental-lighting", label: "租赁照明" },
      { slug: "emergency-lighting", label: "应急照明" },
      { slug: "oil-gas-lighting", label: "油气行业照明" },
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
          src="/images/applications/mining-lighting/mining-lighting-night-operations.png"
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
                  {content.relatedApplications.map((application) => (
                    <li key={application.slug}>
                      <Link
                        href={
                          application.slug === "oil-gas-lighting"
                            ? `/${locale}/applications`
                            : `/applications/${application.slug}`
                        }
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
            <p className="max-w-2xl text-xl font-bold leading-8 text-white sm:text-2xl">
              {content.cta}
            </p>
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
