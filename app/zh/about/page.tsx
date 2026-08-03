import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于 LFADJ｜移动照明企业信息",
  description: "了解 LFADJ 如何围绕移动照明项目提供项目配置、质量管理、管理体系支持与交付前协调。",
  alternates: {
    canonical: "https://lfadj.com/zh/about",
    languages: { en: "/en/about", "zh-CN": "/zh/about" },
  },
  openGraph: {
    title: "关于 LFADJ｜移动照明企业信息",
    description: "了解 LFADJ 的移动照明定位、项目配置、质量管理与面向设备买家的交付前协调方式。",
    url: "https://lfadj.com/zh/about",
    type: "website",
  },
};

const capabilityItems = [
  { title: "专注移动照明", body: "产品沟通始终围绕移动照明应用和实际运行条件展开。" },
  { title: "买家需求审核", body: "在推荐配置方向前，先检查项目资料和关键使用要求。" },
  { title: "制造与质量协调", body: "协调双方确认的产品规格、生产要求与质量检查节点。" },
  { title: "OEM、ODM 与出口支持", body: "根据项目需要协调品牌、配置细节、资料和交付准备。" },
];

export default function ChineseAboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-hidden bg-white">
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:min-h-[480px] lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] lg:gap-14">
            <div className="min-w-0">
              <p className="text-sm font-bold tracking-[0.2em] text-blue-700">关于 LFADJ</p>
              <h1 className="mt-5 max-w-[660px] text-[38px] font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-[42px] lg:text-[56px]">围绕真实项目条件，帮助买家判断移动照明方案</h1>
              <p className="mt-6 max-w-[650px] text-lg leading-8 text-slate-600">LFADJ 根据应用场景、运行时间、现场环境、部署要求和项目重点，帮助设备买家判断移动照明方向，并协调产品配置、制造要求、质量检查、OEM/ODM 细节及出口资料。</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/zh/contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">沟通您的项目</Link>
                <Link href="/zh/about/manufacturing" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 transition hover:border-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">了解质量管理方式</Link>
              </div>
            </div>
            <aside className="min-w-0 border border-slate-300 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="buyer-clarity-heading-zh">
              <p className="text-xs font-bold tracking-[0.2em] text-blue-700">项目判断框架</p>
              <h2 id="buyer-clarity-heading-zh" className="mt-3 text-2xl font-bold tracking-tight text-slate-950">我们帮助买家明确什么</h2>
              <ol className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
                {["应用场景与照明范围", "运行时间与动力选择", "现场环境与部署方式", "产品配置与交付要求"].map((item, index) => (
                  <li key={item} className="flex items-center gap-5 py-4">
                    <span className="text-sm font-bold tabular-nums text-blue-700">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-semibold leading-6 text-slate-800">{item}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-700">我们的工作方式</p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-slate-950 lg:text-[40px]">从买家需求到可交付的产品配置</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">我们的工作是将项目信息转化为更清晰的设备判断，并在交付前协调真正影响使用结果的关键细节。</p>
          </div>

          <ol className="mt-10 grid border-b border-slate-300 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "了解项目", body: "明确应用场景、照明范围、运行时间、气候、运输、现场通行及部署限制。" },
              { title: "判断方向", body: "根据实际运行重点，比较柴油、太阳能、轻便式设备、升降系统及选配需求。" },
              { title: "协调配置", body: "确认关键参数、OEM/ODM 细节、质量检查节点、项目资料及制造协同要求。" },
              { title: "准备交付", body: "复核双方确认的配置，并整理项目交接所需的产品和出口资料。" },
            ].map((step, index) => (
              <li key={step.title} className="relative border-t border-slate-300 py-6 md:px-6 lg:first:pl-0 lg:last:pr-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold tracking-[0.14em] text-blue-700">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-slate-300" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-7 text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.body}</p>
                {index < 3 && <span className="absolute right-0 top-[18px] hidden translate-x-1/2 bg-slate-50 px-1 text-sm text-blue-700 lg:block" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>

          <Link href="/zh/solutions" className="mt-7 inline-flex rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
            查看移动照明解决方案 →
          </Link>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-14">
            <div className="min-w-0">
              <p className="text-sm font-bold tracking-[0.2em] text-blue-300">为什么买家与 LFADJ 合作</p>
              <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px]">让设备到达现场之前的协调更清晰</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">移动照明项目不能只看型号。我们关注需求是否明确、配置是否一致、质量节点是否得到跟进，以及买家在交付前需要获得的信息。</p>
              <div className="mt-8 border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold">管理体系</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">我们的管理方式以 ISO 9001、ISO 14001 和 ISO 45001 管理体系为基础。</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["ISO 9001", "ISO 14001", "ISO 45001"].map((certification) => (
                    <span key={certification} className="rounded-full border border-slate-600 bg-slate-900 px-3 py-1.5 text-sm font-bold text-blue-200">{certification}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {capabilityItems.map((item, index) => (
              <article key={item.title} className="min-w-0 border border-slate-700 bg-slate-900/70 p-6 sm:p-7">
                <p className="text-sm font-bold text-blue-300">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-bold leading-7">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 pt-8 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">正在规划移动照明项目？</h2>
              <p className="mt-4 leading-7 text-slate-300">告诉我们应用场景、预计数量、运行条件和期望交付时间，我们将帮助您整理下一步配置沟通。</p>
            </div>
            <div className="mt-7 flex shrink-0 flex-col items-start gap-4 sm:flex-row sm:items-center lg:mt-0 lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
              <Link href="/zh/contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">获取项目配置建议</Link>
              <Link href="/zh/about/manufacturing" className="inline-flex rounded-sm font-bold text-blue-200 underline decoration-blue-400 underline-offset-4 transition hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950">查看制造与质量管理 →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
