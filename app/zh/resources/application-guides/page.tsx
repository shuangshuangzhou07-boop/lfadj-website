import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔行业应用指南 | LFADJ",
  description: "了解建筑、矿山、租赁、油气和应急场景下的移动照明解决方案。",
};

const industrySolutions = [
  {
    title: "建筑施工照明",
    description: "为建筑工地、道路施工和夜间作业提供可靠照明，支持现场安全与施工效率。",
    href: "/zh/applications/construction-lighting",
  },
  {
    title: "矿山照明",
    description: "满足偏远矿区、设备维护及复杂夜间作业对可靠移动照明的需求。",
    href: "/zh/applications/mining-lighting",
  },
  {
    title: "油气照明",
    description: "针对偏远作业区、设备维护及多变的油气项目环境规划移动照明。",
    href: "/zh/applications/oil-gas-lighting",
  },
  {
    title: "租赁照明",
    description: "兼顾移动性、耐用性、设备利用率及运行效率，满足灯塔租赁业务需求。",
    href: "/zh/applications/rental-lighting",
  },
  {
    title: "应急照明",
    description: "为应急响应、恢复工作及关键现场作业快速部署临时照明。",
    href: "/zh/applications/emergency-lighting",
  },
];

const recommendedProducts = [
  {
    title: "LF955 柴油移动照明灯塔",
    href: "/zh/products/lf955",
  },
  {
    title: "LF971 太阳能移动照明灯塔",
    href: "/zh/products/lf971",
  },
];

export default function ChineseApplicationGuidesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Link href="/zh/resources" className="inline-flex font-semibold text-amber-700 hover:text-amber-800">
            ← 返回资源中心
          </Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            移动照明灯塔行业应用指南
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            了解建筑、矿山、租赁、油气及应急场景下的移动照明解决方案。
          </p>
          <Link
            href="/zh/applications"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            查看行业应用
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">根据行业需求选择合适的照明方案</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((industry) => (
              <article
                key={industry.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{industry.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{industry.description}</p>
                <Link
                  href={industry.href}
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  查看解决方案 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">相关照明解决方案</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold tracking-[0.16em] text-slate-500">解决方案指南</h3>
              <Link
                href="/zh/solutions/how-to-choose-the-right-light-tower"
                className="mt-4 inline-flex text-xl font-bold text-slate-950 transition hover:text-amber-700"
              >
                如何选择合适的照明灯塔 →
              </Link>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-[0.16em] text-slate-500">推荐产品</h3>
              <ul className="mt-4 space-y-4">
                {recommendedProducts.map((product) => (
                  <li key={product.href}>
                    <Link
                      href={product.href}
                      className="inline-flex text-xl font-bold text-slate-950 transition hover:text-amber-700"
                    >
                      {product.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">需要项目照明配置建议？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            根据您的项目环境和照明需求，我们提供合适的移动照明配置方案。
          </p>
          <Link
            href="/zh/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-amber-400"
          >
            获取项目照明配置建议
          </Link>
        </div>
      </section>
    </main>
  );
}
