import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔资源中心 | LFADJ",
  description: "探索移动照明灯塔知识、选型指南、行业应用和技术资料。",
};

const resourceCategories = [
  {
    title: "知识中心",
    description: "了解移动照明灯塔的系统组成、运行方式和设备使用知识。",
    href: "/zh/resources/knowledge-center",
    linkLabel: "进入知识中心",
  },
  {
    title: "选型指南",
    description: "根据项目条件梳理影响设备方向与配置判断的关键因素。",
    href: "/zh/resources/selection-guides",
    linkLabel: "查看选型指南",
  },
  {
    title: "应用指南",
    description: "了解不同作业现场和使用场景需要关注的照明问题。",
    href: "/zh/resources/application-guides",
    linkLabel: "查看应用指南",
  },
  {
    title: "技术资料",
    description: "查找可用于规格核对和项目准备的现有技术信息。",
    href: "/zh/resources/technical-documents",
    linkLabel: "浏览技术资料",
  },
];

const supportingResources = [
  {
    type: "采购指南",
    title: "移动照明灯塔总拥有成本",
    description: "了解设备采购价格之外还需要纳入判断的成本因素。",
    href: "/zh/resources/light-tower-total-cost-of-ownership",
  },
  {
    type: "照明指南",
    title: "移动照明灯塔的流明与投射角度怎么选？",
    description: "了解光通量、配光、安装位置和现场结构如何共同影响照明结果。",
    href: "/zh/resources/how-to-choose-light-tower-lumens-beam-angle",
  },
  {
    type: "指南合集",
    title: "移动照明灯塔选型指南",
    description: "根据项目需求逐步缩小适合的设备和配置方向。",
    href: "/zh/resources/selection-guides",
  },
  {
    type: "指南合集",
    title: "移动照明灯塔应用指南",
    description: "按真实运行环境和应用场景查找相关照明参考。",
    href: "/zh/resources/application-guides",
  },
];

const relatedLinks = [
  { label: "应用场景", href: "/zh/applications" },
  { label: "解决方案", href: "/zh/solutions" },
  { label: "LF955", href: "/zh/products/lf955" },
  { label: "LF971", href: "/zh/products/lf971" },
  { label: "联系我们", href: "/zh/contact" },
];

const textLinkClass =
  "inline-flex font-semibold text-brand-blue-700 underline decoration-brand-blue-200 underline-offset-4 transition hover:text-brand-blue-600 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2";

export default function ChineseResourcesPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-surface-white text-text-primary">
      <section className="border-b border-border-soft bg-surface-soft px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold tracking-[0.2em] text-brand-blue-700">资源中心</p>
          <h1 className="mt-4 max-w-4xl text-[36px] font-bold leading-tight tracking-tight sm:text-[44px] lg:text-[52px]">
            移动照明灯塔资源中心
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            查找移动照明灯塔知识、实用选型参考、应用指南和项目准备所需的技术资料。
          </p>

          <div className="mt-10 border-t border-border-soft pt-9 sm:mt-12 sm:pt-10">
            <h2 className="text-[28px] font-bold leading-tight tracking-tight sm:text-[32px]">浏览资源分类</h2>
            <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-4">
              {resourceCategories.map((category, index) => (
                <article key={category.href} className="group flex min-w-0 flex-col bg-surface-white p-6 lg:p-7">
                  <p className="text-xs font-bold tracking-[0.16em] text-brand-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-bold leading-snug">{category.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-text-secondary">{category.description}</p>
                  <Link href={category.href} className={`${textLinkClass} mt-5`}>
                    {category.linkLabel} <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold tracking-[0.2em] text-brand-blue-700">精选阅读</p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight sm:text-[38px]">精选资源</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)]">
            <article className="flex min-w-0 flex-col rounded-2xl bg-brand-navy-950 p-7 text-white sm:p-9 lg:p-10">
              <p className="text-xs font-bold tracking-[0.18em] text-brand-blue-100">知识中心</p>
              <h3 className="mt-5 max-w-xl text-[28px] font-bold leading-tight tracking-tight sm:text-[34px]">
                什么是移动照明灯塔？
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                从设备组成、动力方式、运行原理和常见应用开始，了解买家在比较不同配置前需要梳理的项目信息。
              </p>
              <Link
                href="/zh/resources/what-is-mobile-light-tower"
                className="mt-8 inline-flex w-fit font-semibold text-white underline decoration-brand-blue-300 underline-offset-4 transition hover:text-brand-blue-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-950"
              >
                阅读指南 <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </article>

            <div className="divide-y divide-border-soft rounded-2xl border border-border-soft bg-surface-soft px-6 sm:px-7">
              {supportingResources.map((resource) => (
                <article key={resource.href} className="py-6 first:pt-7 last:pb-7">
                  <p className="text-xs font-bold tracking-[0.14em] text-brand-blue-700">{resource.type}</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{resource.description}</p>
                  <Link href={resource.href} className={`${textLinkClass} mt-3 text-sm`}>
                    查看资源 <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-soft bg-surface-soft px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-brand-blue-700">项目参考</p>
              <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight sm:text-[38px]">技术资料</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
                查看当前可用于规格核对、设备沟通和项目准备的技术信息。
              </p>
            </div>
            <Link
              href="/zh/resources/technical-documents"
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-lg border border-brand-blue-600 bg-surface-white px-6 py-3 text-sm font-bold text-brand-blue-700 transition hover:bg-brand-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2"
            >
              查看技术资料
            </Link>
          </div>

          <nav aria-label="相关资源" className="mt-10 border-t border-border-soft pt-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="font-semibold text-text-secondary">相关入口：</span>
              {relatedLinks.map((link, index) => (
                <span key={link.href} className="inline-flex items-center gap-x-3">
                  {index > 0 && <span aria-hidden="true" className="text-slate-400">·</span>}
                  <Link href={link.href} className={textLinkClass}>{link.label}</Link>
                </span>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </main>
  );
}
