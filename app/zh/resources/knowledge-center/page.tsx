import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔知识中心 | LFADJ",
  description: "了解移动照明灯塔基础知识、工作原理、选型方法、应用经验和技术参考。",
};

const learningPaths = [
  { title: "了解移动照明灯塔", description: "了解基础知识、主要组成和工作原理。", label: "浏览知识文章", href: "/zh/resources/what-is-mobile-light-tower" },
  { title: "选择合适的照明灯塔", description: "比较项目条件、动力方式和配置重点。", label: "查看选型指南", href: "/zh/resources/selection-guides" },
  { title: "按应用场景选择", description: "了解不同行业和作业现场的照明重点。", label: "查看应用指南", href: "/zh/resources/application-guides" },
  { title: "查找照明解决方案", description: "根据项目需求继续了解移动照明解决方案。", label: "浏览解决方案", href: "/zh/solutions" },
];

const articleCategories = [
  { title: "基础知识", items: [{ title: "什么是移动照明灯塔？", href: "/zh/resources/what-is-mobile-light-tower" }, { title: "移动照明灯塔如何工作？" }] },
  { title: "选型指南", items: [{ title: "如何选择合适的照明灯塔", href: "/zh/resources/selection-guides" }, { title: "项目需要多大的照明覆盖范围？" }] },
  { title: "行业应用", items: [{ title: "矿山照明指南", href: "/zh/applications/mining-lighting" }, { title: "建筑照明指南", href: "/zh/applications/construction-lighting" }, { title: "油气行业照明指南", href: "/zh/applications/oil-gas-lighting" }] },
  { title: "技术知识", items: [{ title: "LED 移动照明指南" }, { title: "升降系统指南", href: "/zh/solutions/how-to-choose-light-tower-mast-system" }] },
];

const engineeringInsights = [
  { title: "环境条件", description: "温度、粉尘、腐蚀暴露和现场条件会影响配置选择。" },
  { title: "项目周期", description: "运行时间、可用动力和维护条件会影响长期项目规划。" },
  { title: "动力选型", description: "应综合评估燃料供应、太阳能资源、部署环境和维护要求。" },
];

const products = [
  { title: "LF955 柴油移动照明灯塔", description: "适用于需要可靠燃油动力运行的项目。", href: "/zh/products/lf955" },
  { title: "LF971 太阳能移动照明灯塔", description: "适用于现场条件能够支持太阳能充电的项目。", href: "/zh/products/lf971" },
];

const applications = [
  { label: "矿山照明", href: "/zh/applications/mining-lighting" },
  { label: "建筑照明", href: "/zh/applications/construction-lighting" },
  { label: "租赁照明", href: "/zh/applications/rental-lighting" },
  { label: "应急照明", href: "/zh/applications/emergency-lighting" },
];

const frequentlyAskedQuestions = [
  { question: "移动照明灯塔用于哪些场景？", answer: "移动照明灯塔用于固定照明缺失或不便安装时的临时照明，包括建筑、矿山、维护和应急作业区域。" },
  { question: "如何在柴油和太阳能移动照明灯塔之间选择？", answer: "应比较运行时间、照明需求、日照、燃料供应、维护资源、噪声要求和部署条件。" },
  { question: "哪些因素会影响移动照明灯塔选型？", answer: "主要因素包括作业区域、目标照度、运行时间、动力来源、地形、天气、移动频率、升降系统和维护支持。" },
  { question: "为什么不同环境需要不同的配置？", answer: "温度、风力、粉尘、湿度、腐蚀暴露、地形和动力条件都会影响稳定性、防护、部件和维护选择。" },
  { question: "移动照明灯塔可以运行多长时间？", answer: "运行时间取决于燃油或能源容量、负载要求、工作环境和设备配置。" },
  { question: "LFADJ 如何根据项目需求推荐合适的移动照明灯塔配置？", answer: "LFADJ 可结合项目条件、运行环境、照明需求、动力要求和部署条件进行评估，协助推荐合适的移动照明灯塔配置。" },
];

const sectionClass = "px-6 py-10 sm:px-8 lg:py-12";
const headingClass = "text-3xl font-bold tracking-tight sm:text-4xl";
const cardClass = "rounded-xl border border-slate-200 bg-white p-5 shadow-sm";

export default function ChineseKnowledgeCenterPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="面包屑导航" className="mb-8 text-sm font-semibold text-slate-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/zh/resources" className="transition hover:text-amber-700">资源中心</Link></li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li aria-current="page" className="text-slate-950">知识中心</li>
            </ol>
          </nav>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">移动照明灯塔知识中心</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">提供移动照明灯塔选型指南、应用知识和技术参考，帮助项目团队选择合适的照明解决方案。</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/zh/resources/what-is-mobile-light-tower" className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-500 px-5 py-2.5 font-bold text-slate-950 hover:bg-amber-400">了解基础知识</Link>
            <Link href="/zh/resources/selection-guides" className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 hover:bg-amber-50">选择合适灯塔</Link>
            <Link href="/zh/applications" className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 hover:bg-amber-50">探索行业应用</Link>
            <Link href="/zh/solutions" className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 hover:bg-amber-50">查找解决方案</Link>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} border-b border-slate-200`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>学习路径</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learningPaths.map((path) => <article key={path.title} className={`${cardClass} flex h-full flex-col`}><h3 className="text-xl font-bold">{path.title}</h3><p className="mt-3 flex-1 leading-7 text-slate-600">{path.description}</p><Link href={path.href} className="mt-5 font-semibold text-amber-700 hover:text-amber-800">{path.label} →</Link></article>)}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>工程洞察</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {engineeringInsights.map((insight) => <article key={insight.title} className={cardClass}><h3 className="text-lg font-bold">{insight.title}</h3><p className="mt-2 leading-7 text-slate-600">{insight.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-50`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>精选知识</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className={cardClass}>
              <span className="text-sm font-bold tracking-wider text-amber-700">技术指南</span>
              <h3 className="mt-3 text-2xl font-bold">什么是移动照明灯塔？</h3>
              <p className="mt-3 leading-7 text-slate-600">了解移动照明灯塔的工作原理、主要组成和常见应用场景。</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {products.map((product) => <Link key={product.href} href={product.href} className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">{product.title}</Link>)}
              </div>
              <Link href="/zh/resources/what-is-mobile-light-tower" className="mt-5 inline-flex font-semibold text-amber-700 hover:text-amber-800">阅读更多 →</Link>
            </article>
            <article className={cardClass}>
              <span className="text-sm font-bold tracking-wider text-slate-500">即将发布</span>
              <h3 className="mt-3 text-2xl font-bold">柴油与太阳能移动照明灯塔</h3>
              <p className="mt-3 leading-7 text-slate-600">规划中的指南将根据运行和维护要求比较不同动力方式。</p>
            </article>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>文章分类</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {articleCategories.map((category) => (
              <article key={category.title} className={cardClass}>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <ul className="mt-4 space-y-3">
                  {category.items.map((item) => <li key={item.title} className="text-sm leading-6">{item.href ? <Link href={item.href} className="font-semibold text-slate-700 hover:text-amber-700">{item.title} →</Link> : <span className="text-slate-500">{item.title} · 即将发布</span>}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} border-y border-slate-200 bg-slate-50`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>常见问题</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">了解移动照明灯塔选型、配置和项目需求相关问题，帮助您选择适合的照明解决方案。</p>
          <div className="mt-4 grid gap-x-6 gap-y-4 md:grid-cols-2">
            {frequentlyAskedQuestions.map((item) => <details key={item.question} className="border-b border-slate-200 pb-4"><summary className="cursor-pointer font-semibold text-slate-700">{item.question}</summary><p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} border-y border-slate-200 bg-slate-50`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>LFADJ 工程选型方法</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">LFADJ 根据项目条件、环境要求和部署需求，帮助客户选择合适的移动照明方案。</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["项目条件", "环境要求", "配置选择", "应用支持"].map((item) => <article key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"><h3 className="font-bold leading-6">{item}</h3></article>)}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className={headingClass}>相关资源</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className={cardClass}>
              <h3 className="text-xl font-bold">产品</h3>
              <div className="mt-4 flex flex-col gap-3">
                {products.map((product) => (
                  <Link key={product.href} href={product.href} className="font-semibold text-slate-700 hover:text-amber-700">
                    {product.title}
                  </Link>
                ))}
              </div>
            </article>
            <article className={cardClass}>
              <h3 className="text-xl font-bold"><Link href="/zh/applications" className="hover:text-amber-700">应用</Link></h3>
              <div className="mt-4 flex flex-col gap-3">
                {applications.map((application) => (
                  <Link key={application.href} href={application.href} className="font-semibold text-slate-700 hover:text-amber-700">
                    {application.label}
                  </Link>
                ))}
              </div>
            </article>
            <article className={cardClass}>
              <h3 className="text-xl font-bold"><Link href="/zh/solutions" className="hover:text-amber-700">解决方案</Link></h3>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/zh/solutions/how-to-choose-the-right-light-tower" className="font-semibold text-slate-700 hover:text-amber-700">如何选择合适的照明灯塔</Link>
                <Link href="/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" className="font-semibold text-slate-700 hover:text-amber-700">严苛环境配置</Link>
                <Link href="/zh/solutions/how-to-choose-light-tower-mast-system" className="font-semibold text-slate-700 hover:text-amber-700">升降系统</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-10 text-center text-white sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold">需要选择适合项目的移动照明方案？</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-300">
            提交您的项目环境、运行条件和照明需求，LFADJ 将协助评估适合的移动照明配置。
          </p>
          <Link href="/zh/contact" className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 hover:bg-amber-400">获取项目照明配置建议</Link>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link href="/zh/resources" className="text-slate-300 underline underline-offset-4 hover:text-white">资源中心</Link>
            <Link href="/zh/resources/application-guides" className="text-slate-300 underline underline-offset-4 hover:text-white">应用指南</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
