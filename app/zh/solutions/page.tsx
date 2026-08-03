import type { Metadata } from "next";
import Link from "next/link";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";

const matchedProducts = [
  { model: "LF955", type: "柴油移动照明灯塔", conditions: ["长时间连续运行", "较高照明需求", "可靠的发动机供电"], href: "/zh/products/lf955" },
  { model: "LF971", type: "太阳能移动照明灯塔", conditions: ["偏远或离网现场", "降低日常燃油依赖", "可选监控与辅助设备"], href: "/zh/products/lf971" },
] as const;

const solutionGuides = [
  {
    number: "01",
    category: "推荐选型起点",
    title: "如何为项目选择合适的移动照明灯塔",
    description: "从这里开始，根据应用场景、照明需求和日常运行条件比较适合项目的移动照明灯塔类型。",
    href: "/zh/solutions/how-to-choose-the-right-light-tower",
    criteria: ["应用场景", "照明需求", "运行条件"],
  },
  {
    number: "02",
    category: "升降系统",
    title: "如何选择合适的移动照明灯塔升降系统",
    description: "结合部署高度、架设频率和操作方式，判断项目需要采用哪类灯杆升降系统。",
    href: "/zh/solutions/how-to-choose-light-tower-mast-system",
  },
  {
    number: "03",
    category: "动力系统",
    title: "如何选择合适的移动照明灯塔动力系统",
    description: "根据现场能源条件、运行时间和补给便利性，选择能够支持计划照明任务的动力方向。",
    href: "/zh/solutions/how-to-choose-right-light-tower-power-system",
  },
  {
    number: "04",
    category: "恶劣环境",
    title: "如何选择适合恶劣环境的移动照明灯塔",
    description: "针对高温、沙尘、腐蚀和长时间运行等风险，判断严苛现场需要关注的配置条件。",
    href: "/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
  },
  {
    number: "05",
    category: "临时现场照明",
    title: "如何规划项目临时施工照明",
    description: "按照照明分区、作业区域和工作时段规划临时照明，使现场覆盖更安全、更便于实施。",
    href: "/zh/solutions/temporary-site-lighting",
  },
] as const;

export const metadata: Metadata = { title: "移动照明解决方案与选型指南 | LFADJ", description: "浏览 LFADJ 移动照明解决方案，了解如何根据项目需求、动力系统、灯杆配置和恶劣环境选择合适的移动照明灯塔。", alternates: { canonical: "https://lfadj.com/zh/solutions", languages: { en: "/en/solutions", "zh-CN": "/zh/solutions" } } };
export default function Page() {
  return (
    <>
      <div className="[&>main>div]:max-w-[1200px] [&>main]:py-20 lg:[&>main]:py-24">
        <RoutePlaceholder copy={{ title: "移动照明解决方案", description: "无论是建筑施工、矿山、设备租赁还是应急项目，LFADJ 都将根据照明需求、动力系统、灯杆配置和工作环境，帮助您选择适合的移动照明解决方案与项目配置。", parentLabel: "首页", parentHref: "/zh", homeLabel: "首页", homeHref: "/zh", backLabel: "返回首页", breadcrumbLabel: "解决方案", hideParentBreadcrumb: true, hideBackLink: true }} />
      </div>
      <section id="solution-guides" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              根据您的项目选择合适的解决方案
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              您可以按照灯塔类型、升降系统、动力条件、运行环境和临时现场规划选择对应指南。
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
            {solutionGuides.map((guide, index) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={`group flex min-w-0 flex-col rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 sm:p-7 ${
                  index === 0
                    ? "border-blue-200 bg-blue-50/80 md:col-span-2 lg:grid lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.85fr)] lg:gap-10 lg:p-8"
                    : "border-slate-200 bg-white hover:border-slate-400"
                }`}
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-center gap-3 text-sm font-bold tracking-[0.14em] text-blue-700">
                    <span>{guide.number}</span>
                    <span className="h-px w-8 bg-blue-300" aria-hidden="true" />
                    <span>{guide.category}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-8 text-slate-950 sm:text-2xl">
                    {guide.title}
                  </h3>
                  <p className="mt-3 max-w-3xl flex-1 text-base leading-7 text-slate-600">{guide.description}</p>
                  <span className="mt-8 inline-flex min-h-11 items-center font-bold text-blue-700 group-hover:text-blue-800">
                    查看方案 <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </div>

                {"criteria" in guide ? (
                  <ul className="mt-7 grid content-center gap-3 border-t border-blue-200 pt-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
                    {guide.criteria.map((criterion) => (
                      <li key={criterion} className="rounded-lg border border-blue-200 bg-white/80 px-4 py-3 text-base font-semibold leading-6 text-slate-800">
                        {criterion}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">将解决方案匹配到合适的产品</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">最终配置仍需结合应用场景、运行时间、动力条件、现场环境和照明覆盖需求进行确认。</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
            {matchedProducts.map((product) => (
              <Link key={product.model} href={product.href} aria-label={`查看 ${product.model} ${product.type}`} className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 sm:p-8">
                <p className="text-sm font-bold tracking-[0.16em] text-blue-700">{product.model}</p>
                <h3 className="mt-3 text-xl font-bold leading-8 text-slate-950 sm:text-2xl">{product.type}</h3>
                <ul className="mt-6 flex-1 space-y-3.5 text-base leading-7 text-slate-600">
                  {product.conditions.map((condition) => (
                    <li key={condition} className="flex gap-3"><span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" /><span>{condition}</span></li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex min-h-11 items-center font-bold text-blue-700 group-hover:text-blue-800">查看产品<span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-8 rounded-2xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:items-center lg:gap-12 lg:px-12">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">不确定哪种移动照明方案适合您的项目？</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">提交应用场景、工作区域、照明需求、运行时间和现场环境，LFADJ 将为您的项目提供适合的产品与配置建议。</p>
            </div>
            <div className="min-w-0">
              <Link href="/zh/contact" className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-blue-600 px-7 py-3.5 text-center text-base font-bold leading-6 text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50">获取项目配置建议</Link>
              <p className="mt-4 text-base leading-6 text-slate-300">只需提供基本项目条件，无需提前准备完整规格。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
