import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "如何选择合适的移动照明灯塔升降系统 | LFADJ",
  description:
    "根据项目周期、移动频率、使用高度和预算，选择适合工程项目需求的移动照明灯塔升降方案。",
};

export default function LightTowerMastSystemSolutionPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            如何选择适合项目需求的移动照明灯塔升降系统
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            根据项目周期、移动频率、使用高度和预算，为不同工程项目选择合适的升降系统方案。
          </p>
          <Link
            href="/zh/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700"
          >
            获取项目配置建议
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">选择升降系统需要考虑的四个因素</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">项目周期</h3>
              <p className="mt-3 leading-7 text-slate-600">
                短期项目关注快速部署，长期项目关注稳定运行。
              </p>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">移动频率</h3>
              <p className="mt-3 leading-7 text-slate-600">
                频繁移动项目需要更方便的升降操作。
              </p>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">使用高度</h3>
              <p className="mt-3 leading-7 text-slate-600">
                不同项目根据照明范围选择不同升降高度。
              </p>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">预算</h3>
              <p className="mt-3 leading-7 text-slate-600">
                根据项目要求选择合适配置。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">移动照明灯塔升降系统选择</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            不同项目应根据实际需求选择不同的升降系统方案。
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">手动升降</h3>
              <p className="mt-3 font-semibold text-amber-700">经济型方案</p>
              <p className="mt-3 leading-7 text-slate-600">适合预算敏感项目。</p>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">电动升降</h3>
              <p className="mt-3 font-semibold text-amber-700">租赁和频繁移动项目</p>
              <p className="mt-3 leading-7 text-slate-600">减少人工操作，提高现场部署效率。</p>
              <Link href="/zh/products/lf955" className="mt-5 inline-flex font-semibold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4">
                LF955柴油移动照明灯塔
              </Link>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">液压升降</h3>
              <p className="mt-3 font-semibold text-amber-700">长期工程和高高度需求项目</p>
              <p className="mt-3 leading-7 text-slate-600">适合需要更高稳定性和大型项目。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">典型项目配置建议</h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[560px] border-collapse bg-white text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">项目类型</th>
                  <th scope="col" className="px-6 py-4 font-semibold">推荐配置</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><th scope="row" className="px-6 py-4 font-semibold">设备租赁</th><td className="px-6 py-4 text-slate-600">7.5米电动升降</td></tr>
                <tr><th scope="row" className="px-6 py-4 font-semibold">建筑施工</th><td className="px-6 py-4 text-slate-600">7.5米电动升降</td></tr>
                <tr><th scope="row" className="px-6 py-4 font-semibold">长期基础设施项目</th><td className="px-6 py-4 text-slate-600">9米液压升降</td></tr>
                <tr><th scope="row" className="px-6 py-4 font-semibold">特殊项目</th><td className="px-6 py-4 text-slate-600">定制配置</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">相关产品</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Link href="/zh/products/lf955" className="rounded-xl border border-slate-200 bg-white p-6 text-xl font-bold text-slate-950 shadow-sm transition-shadow hover:shadow-md">
              LF955柴油移动照明灯塔
            </Link>
            <Link href="/zh/products/lf971" className="rounded-xl border border-slate-200 bg-white p-6 text-xl font-bold text-slate-950 shadow-sm transition-shadow hover:shadow-md">
              LF971太阳能移动照明灯塔
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">需要选择合适的照明配置？</h2>
          <Link href="/zh/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-amber-400">
            提交项目需求
          </Link>
        </div>
      </section>
    </main>
  );
}
