import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔资源中心 | LFADJ",
  description: "探索移动照明灯塔知识、选型指南、行业应用和技术资料。",
};

const resourceCategories = [
  {
    title: "知识中心",
    description: "系统了解移动照明灯塔结构、工作原理和照明技术知识。",
    href: "/zh/resources/knowledge-center",
    buttonLabel: "探索知识中心",
  },
  {
    title: "选型指南",
    description: "根据项目条件、照明需求、运行时间和动力方式比较合适的灯塔配置。",
    href: "/zh/resources/selection-guides",
    buttonLabel: "查看选型指南",
  },
  {
    title: "应用指南",
    description: "探索建筑、矿山、租赁、应急和油气项目中的移动照明解决方案。",
    href: "/zh/resources/application-guides",
    buttonLabel: "探索行业应用",
  },
  {
    title: "技术资料",
    description: "获取经过核实的移动照明灯塔数据表、安装指导和技术支持资料。",
    href: "/zh/resources/technical-documents",
    buttonLabel: "查看技术资料",
  },
];

const recommendedApplications = [
  {
    title: "矿山照明",
    description: "了解适用于偏远矿区、夜间作业和复杂项目环境的移动照明解决方案。",
    href: "/zh/applications/mining-lighting",
    relatedProducts: [
      { label: "LF955", href: "/zh/products/lf955" },
      { label: "LF971", href: "/zh/products/lf971" },
    ],
  },
  {
    title: "建筑照明",
    description: "了解适用于建筑工地、基础设施施工和多变项目条件的移动照明方案。",
    href: "/zh/applications/construction-lighting",
    relatedProducts: [{ label: "LF955", href: "/zh/products/lf955" }],
  },
  {
    title: "应急照明",
    description: "了解适用于应急响应和临时作业需求的快速部署移动照明解决方案。",
    href: "/zh/applications/emergency-lighting",
    relatedProducts: [
      { label: "LF955", href: "/zh/products/lf955" },
      { label: "LF971", href: "/zh/products/lf971" },
    ],
  },
  {
    title: "租赁照明",
    description: "探索适用于租赁车队和多变项目需求的耐用、易部署移动照明方案。",
    href: "/zh/applications/rental-lighting",
    relatedProducts: [
      { label: "LF955", href: "/zh/products/lf955" },
      { label: "LF971", href: "/zh/products/lf971" },
    ],
  },
  {
    title: "油气照明",
    description: "了解适用于偏远油气现场、临时作业区和夜间作业的移动照明解决方案。",
    href: "/zh/applications/oil-gas-lighting",
    relatedProducts: [{ label: "LF955", href: "/zh/products/lf955" }],
  },
];

const recommendedSolutions = [
  {
    title: "如何选择合适的照明灯塔",
    description: "根据项目环境、照明需求、运行时间和动力方式比较合适的移动照明方案。",
    href: "/zh/solutions/how-to-choose-the-right-light-tower",
    relatedApplications: [
      { label: "矿山照明", href: "/zh/applications/mining-lighting" },
      { label: "建筑照明", href: "/zh/applications/construction-lighting" },
      { label: "租赁照明", href: "/zh/applications/rental-lighting" },
    ],
  },
  {
    title: "极端环境配置",
    description: "了解粉尘、风力、温度、地形和天气暴露条件下的配置重点。",
    href: "/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
    relatedApplications: [
      { label: "矿山照明", href: "/zh/applications/mining-lighting" },
      { label: "油气照明", href: "/zh/applications/oil-gas-lighting" },
    ],
  },
  {
    title: "升降系统选型",
    description: "根据项目周期、移动频率、使用高度和预算比较合适的升降系统。",
    href: "/zh/solutions/how-to-choose-light-tower-mast-system",
    relatedApplications: [
      { label: "建筑照明", href: "/zh/applications/construction-lighting" },
      { label: "矿山照明", href: "/zh/applications/mining-lighting" },
    ],
  },
];

const recommendedProducts = [
  {
    title: "柴油移动照明灯塔",
    model: "LF955",
    description: "适用于建筑、矿山、租赁和应急场景的可靠移动照明解决方案。",
    href: "/zh/products/lf955",
  },
  {
    title: "太阳能移动照明灯塔",
    model: "LF971",
    description: "适用于偏远地区和长期部署项目的低维护太阳能照明解决方案。",
    href: "/zh/products/lf971",
  },
];

export default function ChineseResourcesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="flex border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:min-h-[460px] lg:items-center lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-5 text-sm font-bold tracking-[0.18em] text-amber-700">LFADJ 资源中心</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            移动照明灯塔资源中心
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            了解移动照明灯塔知识、选型指南、行业应用和技术资料。
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">资源分类</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resourceCategories.map((category) => (
              <article
                key={category.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{category.description}</p>
                <Link
                  href={category.href}
                  className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-center font-bold transition ${
                    category.href.endsWith("/knowledge-center")
                      ? "border-transparent bg-amber-500 text-slate-950 hover:bg-amber-400"
                      : "border-amber-500 bg-white text-amber-700 hover:bg-amber-50 hover:text-amber-800"
                  }`}
                >
                  {category.buttonLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">精选资源</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-50 shadow-sm lg:h-[240px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/resources/mining-mobile-light-tower-application-guide.webp"
                    alt="矿山移动照明灯塔应用指南"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">矿山移动照明灯塔应用指南</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  了解移动照明灯塔如何为矿山作业提供可靠的夜间照明、设备可视性和偏远区域照明支持。
                </p>
                <Link
                  href="/zh/applications/mining-lighting"
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  查看详情 →
                </Link>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-500">相关链接：</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    <Link href="/zh/applications/mining-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      矿山照明
                    </Link>
                    <Link href="/zh/products/lf955" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      LF955
                    </Link>
                    <Link href="/zh/solutions/how-to-choose-the-right-light-tower" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      如何选择合适的照明灯塔
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-50 shadow-sm lg:h-[240px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/resources/how-to-choose-right-light-tower.webp"
                    alt="如何选择合适的移动照明灯塔"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">如何选择合适的照明灯塔</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  选择合适的移动照明灯塔时，需要了解项目环境、照明要求、运行时间和动力方式。
                </p>
                <Link
                  href="/zh/solutions/how-to-choose-the-right-light-tower"
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  查看详情 →
                </Link>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-500">相关链接：</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    <Link href="/zh/applications/construction-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      建筑照明
                    </Link>
                    <Link href="/zh/products/lf955" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      LF955
                    </Link>
                    <Link href="/zh/resources/selection-guides" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      移动照明灯塔选型指南
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-50 shadow-sm lg:h-[240px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/resources/featured-light-tower-mining.webp"
                    alt="柴油与太阳能移动照明灯塔对比"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">柴油与太阳能移动照明灯塔对比</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  根据运行条件、维护要求和项目需求比较柴油与太阳能移动照明灯塔。
                </p>
                <Link
                  href="/zh/resources/knowledge-center"
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  查看详情 →
                </Link>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-500">相关链接：</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    <Link href="/zh/products/lf955" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      LF955 柴油移动照明灯塔
                    </Link>
                    <Link href="/zh/products/lf971" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      LF971 太阳能移动照明灯塔
                    </Link>
                    <Link href="/zh/resources/selection-guides" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                      选型指南
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">探索移动照明解决方案</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">推荐应用场景</h3>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {recommendedApplications.map((application) => (
                  <article key={application.href} className="flex min-h-[320px] h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-xl font-bold">{application.title}</h4>
                    <p className="mt-3 flex-1 leading-7 text-slate-600">{application.description}</p>
                    <Link href={application.href} className="mt-6 font-semibold text-amber-700 hover:text-amber-800">
                      查看应用 →
                    </Link>
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-slate-500">推荐产品：</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                        {application.relatedProducts.map((product) => (
                          <Link key={product.href} href={product.href} className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight">推荐解决方案</h3>
              <div className="mt-6 grid gap-5">
                {recommendedSolutions.map((solution) => (
                  <article key={solution.href} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-xl font-bold">{solution.title}</h4>
                    <p className="mt-3 flex-1 leading-7 text-slate-600">{solution.description}</p>
                    <Link href={solution.href} className="mt-6 font-semibold text-amber-700 hover:text-amber-800">
                      查看解决方案 →
                    </Link>
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-slate-500">相关应用：</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                        {solution.relatedApplications.map((application) => (
                          <Link key={application.href} href={application.href} className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                            {application.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">推荐产品</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            LFADJ 根据不同项目环境、运行时间和维护要求，提供柴油和太阳能移动照明解决方案。
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {recommendedProducts.map((solution) => (
              <article
                key={solution.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">{solution.model}</p>
                <h3 className="mt-3 text-xl font-bold">{solution.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{solution.description}</p>
                <Link
                  href={solution.href}
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  查看解决方案 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">需要定制移动照明方案？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            告诉我们您的项目环境、运行时间和照明需求，我们将帮助您选择合适的移动照明方案。
          </p>
          <Link
            href="/zh/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-400"
          >
            获取项目照明配置建议
          </Link>
        </div>
      </section>
    </main>
  );
}
