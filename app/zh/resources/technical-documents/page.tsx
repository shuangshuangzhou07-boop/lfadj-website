import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔技术资料中心 | LFADJ",
  description: "提供移动照明灯塔产品参数、配置指南及工业照明项目技术资料支持。",
};

const technicalCategories = [
  {
    title: "产品规格参数",
    description: "查看移动照明灯塔产品参数、结构配置及技术信息。",
    href: "/zh/products",
    linkLabel: "查看产品",
  },
  {
    title: "配置指南",
    description: "根据项目环境选择合适的照明配置方案。",
    href: "/zh/solutions/how-to-choose-the-right-light-tower",
    linkLabel: "探索解决方案",
  },
  {
    title: "应用需求参考",
    description: "了解建筑、矿山、租赁、油气及应急场景照明需求。",
    href: "/zh/applications",
    linkLabel: "查看应用",
  },
  {
    title: "项目支持资料",
    description: "用于项目评估、技术沟通和采购决策支持。",
  },
];

const relatedProducts = [
  {
    title: "LF955 柴油移动照明灯塔",
    description: "适用于连续运行和复杂环境的柴油移动照明解决方案。",
    href: "/zh/products/lf955",
  },
  {
    title: "LF971 太阳能移动照明灯塔",
    description: "适用于偏远区域和长期部署的低维护太阳能照明方案。",
    href: "/zh/products/lf971",
  },
];

export default function ChineseTechnicalDocumentsPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-5 text-sm font-bold tracking-[0.18em] text-amber-700">LFADJ 技术资料</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            移动照明灯塔技术资料中心
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            提供移动照明灯塔产品参数、配置参考及项目技术资料支持。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/zh/products"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              查看产品
            </Link>
            <Link
              href="/zh/resources"
              className="inline-flex min-h-12 items-center font-semibold text-amber-700 transition hover:text-amber-800"
            >
              ← 返回资源中心
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">技术资料分类</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {technicalCategories.map((category) => (
              <article
                key={category.title}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{category.description}</p>
                {category.href ? (
                  <Link
                    href={category.href}
                    className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                  >
                    {category.linkLabel} →
                  </Link>
                ) : (
                  <span className="mt-6 font-semibold text-slate-500">即将发布</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">相关产品与解决方案</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {relatedProducts.map((product) => (
              <article
                key={product.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{product.description}</p>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  查看产品 →
                </Link>
              </article>
            ))}
          </div>
          <article className="mt-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold tracking-[0.14em] text-amber-700">选型解决方案</p>
            <h3 className="mt-3 text-xl font-bold">如何选择合适的照明灯塔</h3>
            <Link
              href="/zh/solutions/how-to-choose-the-right-light-tower"
              className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
            >
              查看解决方案 →
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">需要项目技术支持？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            根据您的项目需求，我们提供合适的移动照明配置建议。
          </p>
          <Link
            href="/zh/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            获取项目照明配置建议
          </Link>
        </div>
      </section>
    </main>
  );
}
