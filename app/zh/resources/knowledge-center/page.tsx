import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔知识中心 | LFADJ",
  description: "了解移动照明灯塔基础知识、工作原理、选型方法、应用经验和技术参考。",
};

const featuredArticles = [
  {
    title: "什么是移动照明灯塔？",
    description: "了解移动照明灯塔的基本原理、组成结构和主要应用场景。",
    contentType: "技术指南",
    audience: "项目工程师",
    relatedProducts: [
      { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
      { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
    ],
    relatedTopic: "移动照明灯塔基础知识",
    href: "/zh/resources/what-is-mobile-light-tower",
  },
  {
    title: "柴油与太阳能移动照明灯塔对比",
    description: "根据运行条件、维护需求和项目特点，比较柴油与太阳能移动照明方案。",
    contentType: "选型指南",
    audience: "项目经理",
    relatedProducts: [
      { label: "LF955", href: "/zh/products/lf955" },
      { label: "LF971", href: "/zh/products/lf971" },
    ],
    relatedTopic: "动力系统选型",
  },
];

const engineeringInsights = [
  {
    title: "为什么不同环境需要不同的照明灯塔配置",
    description: "温度、粉尘、腐蚀暴露和运行条件都会影响部件与配置选择。",
  },
  {
    title: "如何为长期项目选择照明灯塔",
    description: "长期项目规划需要考虑多项实际运行因素。",
    considerations: ["运行时长", "供电需求", "维护条件"],
  },
  {
    title: "柴油与太阳能移动照明灯塔的选型考虑",
    description: "合适的动力方案取决于现场资源和部署要求。",
    considerations: ["燃料供应", "维护要求", "部署条件"],
  },
];

const articleCategories = [
  {
    title: "基础知识",
    description: "建立对移动照明灯塔设备构成和运行方式的实用认识。",
    articles: [
      { title: "什么是移动照明灯塔？", href: "/zh/resources/what-is-mobile-light-tower" },
      { title: "移动照明灯塔如何工作？" },
    ],
  },
  {
    title: "选型指南",
    description: "根据具体项目评估照明需求和设备选择。",
    articles: [{ title: "如何选择合适的照明灯塔" }, { title: "项目需要多大照明覆盖范围？" }],
  },
  {
    title: "行业应用",
    description: "了解严苛行业和作业现场的移动照明配置重点。",
    articles: [{ title: "矿山照明指南" }, { title: "建筑照明指南" }, { title: "油气照明指南" }],
  },
  {
    title: "技术知识",
    description: "了解移动照明灯塔所使用的照明技术和升降系统。",
    articles: [{ title: "LED 移动照明指南" }, { title: "升降系统指南" }],
  },
];

const frequentlyAskedQuestions = [
  {
    question: "移动照明灯塔用于哪些场景？",
    answer:
      "移动照明灯塔用于固定照明缺失或不便安装时的临时照明。常见场景包括建筑施工、矿山作业、基础设施维护、户外项目、应急响应以及其他临时作业区域。",
  },
  {
    question: "如何在柴油和太阳能移动照明灯塔之间选择？",
    answer:
      "选型需要综合考虑运行时间、照明输出需求、日照条件、燃料供应、维护资源、噪声要求和部署环境。柴油系统适用于燃料供应可靠的项目；太阳能系统则需要结合当地太阳能资源、电池容量和运行计划进行评估。",
  },
  {
    question: "哪些因素会影响移动照明灯塔选型？",
    answer:
      "主要因素包括照明区域、目标照度、运行时间、可用动力来源、现场通行条件、地形、预期天气、移动频率、升降系统要求以及项目期间可获得的维护支持。",
  },
  {
    question: "为什么不同环境需要不同的配置？",
    answer:
      "温度、风力、粉尘、湿度、腐蚀暴露、地形和动力供应条件都会影响升降系统稳定性、防护方式、部件选择、能源供应和维护计划。因此，具体配置应以经确认的现场条件和项目要求为依据。",
  },
  {
    question: "移动照明灯塔可以运行多长时间？",
    answer:
      "运行时间取决于油箱容量、负载要求、工作环境和设备配置。柴油移动照明灯塔通常适用于需要持续照明的长期项目。",
  },
  {
    question: "柴油移动照明灯塔和太阳能移动照明灯塔有什么区别？",
    answer:
      "柴油灯塔适合高强度和长时间运行项目，太阳能灯塔适合低维护、静音运行以及具备太阳能条件的应用环境。",
  },
];

export default function ChineseKnowledgeCenterPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="面包屑导航" className="mb-8 text-sm font-semibold text-slate-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/zh/resources" className="transition hover:text-amber-700">
                  资源中心
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li aria-current="page" className="text-slate-950">
                知识中心
              </li>
            </ol>
          </nav>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            移动照明灯塔知识中心
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            提供移动照明灯塔选型指南、应用知识和技术参考，帮助项目团队选择合适的照明解决方案。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/zh/resources/what-is-mobile-light-tower"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-500 px-5 py-2.5 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              了解基础知识
            </Link>
            <Link
              href="/zh/solutions/how-to-choose-the-right-light-tower"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 transition hover:bg-amber-50 hover:text-amber-800"
            >
              选择合适灯塔
            </Link>
            <Link
              href="/zh/applications"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 transition hover:bg-amber-50 hover:text-amber-800"
            >
              探索行业应用
            </Link>
            <Link
              href="/zh/solutions"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500 bg-white px-5 py-2.5 font-bold text-amber-700 transition hover:bg-amber-50 hover:text-amber-800"
            >
              查找解决方案
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">学习路径</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">了解移动照明灯塔</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                了解移动照明灯塔的基础知识、组成和工作原理。
              </p>
              <Link
                href="/zh/resources/what-is-mobile-light-tower"
                className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
              >
                什么是移动照明灯塔 →
              </Link>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">选择合适的照明灯塔</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                了解项目环境、柴油与太阳能方案以及配置考虑因素。
              </p>
              <Link
                href="/zh/resources/selection-guides"
                className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
              >
                选型指南 →
              </Link>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">按应用场景选择</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                探索不同行业的照明需求。
              </p>
              <Link
                href="/zh/resources/application-guides"
                className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
              >
                应用指南 →
              </Link>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold">查找照明解决方案</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                探索基于项目需求的移动照明建议。
              </p>
              <Link
                href="/zh/solutions"
                className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
              >
                解决方案 →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">工程洞察</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            了解影响移动照明灯塔选型和配置的实际工程因素。
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {engineeringInsights.map((insight) => (
              <article
                key={insight.title}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-bold">{insight.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{insight.description}</p>
                {insight.considerations ? (
                  <ul className="mt-5 space-y-2 text-slate-600">
                    {insight.considerations.map((consideration) => (
                      <li key={consideration} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden="true" />
                        <span>{consideration}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <span className="mt-5 inline-flex font-semibold text-slate-500">即将发布</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">精选知识</h2>
          <div className="mt-4">
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-2">
              <div className="relative min-h-[220px] bg-slate-100 lg:min-h-full">
                <Image
                  src="/images/hero/construction-mobile-light-tower.webp"
                  alt="移动照明灯塔在夜间为建筑工地提供照明"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-3xl font-bold tracking-tight">{featuredArticles[0].title}</h3>
                <dl className="mt-4 grid gap-4 border-y border-slate-200 py-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-bold tracking-wider text-slate-500">内容类型</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{featuredArticles[0].contentType}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-wider text-slate-500">适用读者</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{featuredArticles[0].audience}</dd>
                  </div>
                </dl>
                <p className="mt-4 leading-7 text-slate-600">{featuredArticles[0].description}</p>
                <div className="mt-4">
                  <p className="text-xs font-bold tracking-wider text-slate-500">关联产品</p>
                  <div className="mt-3 flex flex-col gap-2">
                    {featuredArticles[0].relatedProducts.map((product) => (
                      <Link key={product.href} href={product.href} className="font-semibold text-slate-900 transition hover:text-amber-700">
                        {product.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/zh/resources/what-is-mobile-light-tower"
                  className="mt-5 inline-flex font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  阅读更多 →
                </Link>
              </div>
            </article>

            <article className="mt-4 max-w-2xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold tracking-tight">{featuredArticles[1].title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{featuredArticles[1].description}</p>
              <span className="mt-4 inline-flex font-semibold text-slate-500">即将发布</span>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">文章分类</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {articleCategories.map((category) => (
              <article key={category.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-2xl font-bold">{category.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{category.description}</p>
                <ul className="mt-4 divide-y divide-slate-200">
                  {category.articles.map((article) => (
                    <li
                      key={article.title}
                      className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                      {article.href ? (
                        <Link href={article.href} className="font-semibold text-slate-900 transition hover:text-amber-700">
                          {article.title}
                        </Link>
                      ) : (
                        <span className="font-semibold text-slate-800">{article.title}</span>
                      )}
                      {!article.href && <span className="shrink-0 text-sm font-semibold text-slate-500">即将发布</span>}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">相关产品</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/zh/products/lf955"
                className="text-2xl font-bold tracking-tight text-slate-950 transition hover:text-amber-700"
              >
                LF955 柴油移动照明灯塔
              </Link>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                适用于需要可靠照明、高输出和灵活部署的长期项目。
              </p>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-500">相关应用：</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  <Link href="/zh/applications/mining-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                    矿山
                  </Link>
                  <Link href="/zh/applications/construction-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                    建筑
                  </Link>
                  <Link href="/zh/applications/rental-lighting" className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                    租赁
                  </Link>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/zh/products/lf971"
                className="text-2xl font-bold tracking-tight text-slate-950 transition hover:text-amber-700"
              >
                LF971 太阳能移动照明灯塔
              </Link>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                专为需要低维护、安静运行和太阳能照明的偏远项目设计。
              </p>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-500">相关应用：</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-slate-700">
                  <span>偏远项目</span>
                  <Link href="/zh/applications/emergency-lighting" className="underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
                    应急照明
                  </Link>
                  <span>长期部署</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">相关应用</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href="/zh/applications/mining-lighting" className="text-xl font-bold text-slate-950 transition hover:text-amber-700">
                矿山照明
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                为矿山现场、维护区域和偏远作业提供照明解决方案。
              </p>
            </article>
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href="/zh/applications/construction-lighting" className="text-xl font-bold text-slate-950 transition hover:text-amber-700">
                建筑照明
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                为建筑工地和基础设施项目提供临时照明解决方案。
              </p>
            </article>
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href="/zh/applications/rental-lighting" className="text-xl font-bold text-slate-950 transition hover:text-amber-700">
                租赁照明
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                为租赁车队和临时项目提供灵活的移动照明解决方案。
              </p>
            </article>
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href="/zh/applications/emergency-lighting" className="text-xl font-bold text-slate-950 transition hover:text-amber-700">
                应急照明
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                为应急响应和临时作业提供快速部署照明解决方案。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">相关解决方案</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/zh/solutions/how-to-choose-the-right-light-tower"
                className="text-xl font-bold text-slate-950 transition hover:text-amber-700"
              >
                如何选择合适的照明灯塔
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                了解项目条件、照明需求和配置因素，选择合适的移动照明解决方案。
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments"
                className="text-xl font-bold text-slate-950 transition hover:text-amber-700"
              >
                严苛环境配置
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                了解温度、粉尘、腐蚀和运行条件如何影响移动照明灯塔配置。
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link
                href="/zh/solutions/how-to-choose-light-tower-mast-system"
                className="text-xl font-bold text-slate-950 transition hover:text-amber-700"
              >
                升降系统
              </Link>
              <p className="mt-3 leading-7 text-slate-600">
                了解不同项目的升降系统和部署要求。
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/zh/resources" className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
              资源中心
            </Link>
            <Link href="/zh/resources/application-guides" className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700">
              应用指南
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">常见问题</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {frequentlyAskedQuestions.map((item) => (
              <article key={item.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold leading-7">{item.question}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>

          <section aria-labelledby="engineering-approach-heading" className="mt-8 border-t border-slate-200 pt-8">
            <h2 id="engineering-approach-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
              LFADJ 工程选型方法
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              LFADJ 根据项目条件、环境要求和部署需求，帮助客户选择合适的移动照明方案。
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold leading-6">项目条件</h3>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold leading-6">环境要求</h3>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold leading-6">配置选择</h3>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold leading-6">应用支持</h3>
              </article>
            </div>
          </section>

          <div className="mt-6 rounded-xl bg-slate-950 px-6 py-8 text-center text-white shadow-sm sm:px-10">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">需要选择合适的移动照明方案？</p>
            <Link
              href="/zh/contact"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              获取项目照明配置建议
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
