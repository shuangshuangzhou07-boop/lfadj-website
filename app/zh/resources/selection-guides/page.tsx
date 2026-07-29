import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔选型指南 | LFADJ",
  description: "了解如何根据项目环境、照明需求、动力方式、运行时间和产品配置选择合适的移动照明灯塔。",
};

const selectionSteps = [
  "了解项目环境",
  "确定照明需求",
  "选择动力方案",
  "确定配置",
  "获取项目建议",
];

const engineeringApproach = [
  {
    title: "项目需求",
    description: "评估应用类型、工作时长和部署要求。",
  },
  {
    title: "运行环境",
    description: "考虑温度、粉尘、腐蚀和现场条件。",
  },
  {
    title: "配置选择",
    description: "匹配动力来源、照明输出和设备配置。",
  },
  {
    title: "行业经验",
    description: "为矿山、建筑、租赁和应急照明项目提供支持。",
  },
];

const featuredSelectionGuides = [
  {
    title: "如何选择合适的移动照明灯塔",
    status: "已发布",
    description: "了解项目条件、照明需求和运行环境如何影响移动照明灯塔选型。",
    relatedSolution: "如何选择合适的移动照明灯塔",
    relatedProducts: [
      { label: "LF955", href: "/zh/products/lf955" },
      { label: "LF971", href: "/zh/products/lf971" },
    ],
  },
  {
    title: "柴油与太阳能移动照明灯塔",
    status: "即将发布",
    description: "根据运行时间、维护需求和项目条件，对比柴油与太阳能移动照明方案。",
  },
  {
    title: "严苛环境照明灯塔选型",
    status: "即将发布",
    description: "了解高温、粉尘和复杂环境如何影响移动照明设备配置。",
  },
];

const products = [
  {
    title: "LF955 柴油移动照明灯塔",
    description: "适用于需要可靠运行的矿山、建筑、租赁和长时间照明项目。",
    bestFor: ["矿山", "建筑", "租赁"],
    href: "/zh/products/lf955",
  },
  {
    title: "LF971 太阳能移动照明灯塔",
    description: "适用于需要低维护、安静运行和太阳能照明的偏远项目。",
    bestFor: ["偏远项目", "应急照明", "低维护应用"],
    href: "/zh/products/lf971",
  },
];

export default function ChineseSelectionGuidesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="面包屑" className="mb-6">
            <ol className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <li>
                <Link href="/zh/resources" className="transition hover:text-amber-700">
                  资源中心
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-slate-700">
                选型指南
              </li>
            </ol>
          </nav>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            移动照明灯塔选型指南
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            根据项目条件、运行需求和应用场景，帮助您选择合适的移动照明解决方案。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/zh/resources/application-guides"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              按应用场景选择
            </Link>
            <div className="flex min-h-12 flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-md border border-slate-300 bg-white px-5 py-3 font-bold text-slate-950">
              <span>柴油与太阳能对比：</span>
              <Link href="/zh/products/lf955" className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
                LF955
              </Link>
              <Link href="/zh/products/lf971" className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
                LF971
              </Link>
            </div>
            <Link
              href="/zh/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              获取项目建议
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">移动照明灯塔选型流程</h2>
          <div className="mt-10 max-w-3xl">
            {selectionSteps.map((step, index) => (
              <div key={step}>
                <article className="flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="shrink-0 rounded-md bg-amber-500 px-3 py-2 text-sm font-bold tracking-[0.08em] text-slate-950">
                    第 {index + 1} 步
                  </span>
                  <h3 className="text-xl font-bold">{step}</h3>
                </article>
                {index < selectionSteps.length - 1 ? (
                  <div className="py-2 text-center text-2xl font-bold leading-none text-amber-700" aria-hidden="true">
                    ↓
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">LFADJ 工程选型方法</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            LFADJ 根据项目需求、运行环境和行业经验，为客户推荐合适的移动照明解决方案。
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringApproach.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">精选选型指南</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredSelectionGuides.map((guide) => (
              <article
                key={guide.title}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{guide.title}</h3>
                  <span
                    className={
                      guide.status === "已发布"
                        ? "shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800"
                        : "shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600"
                    }
                  >
                    {guide.status}
                  </span>
                </div>
                {guide.description ? (
                  <p className="mt-4 leading-7 text-slate-600">{guide.description}</p>
                ) : (
                  <p className="mt-4 font-semibold text-slate-500">即将发布</p>
                )}
                {guide.relatedSolution ? (
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-sm font-bold text-slate-500">关联解决方案</p>
                    <p className="mt-2 font-semibold text-slate-900">{guide.relatedSolution}</p>
                    <p className="mt-4 text-sm font-bold text-slate-500">关联产品</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                      {guide.relatedProducts?.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="font-semibold text-amber-700 transition hover:text-amber-800"
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">推荐移动照明灯塔</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{product.description}</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-bold tracking-wider text-slate-500">适用场景</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.bestFor.map((item) => (
                      <span key={item} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  查看产品 →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-slate-950 px-6 py-12 text-center text-white shadow-sm sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">需要为您的项目选择合适的移动照明方案？</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              根据您的应用场景、运行环境和照明需求，获取 LFADJ 项目照明配置建议。
            </p>
            <Link
              href="/zh/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-400"
            >
              获取项目照明建议
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
