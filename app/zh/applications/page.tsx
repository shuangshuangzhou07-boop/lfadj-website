import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔应用场景 | 建筑、矿山与工业项目 | LFADJ",
  description: "了解移动照明灯塔在建筑施工、矿山、油气、设备租赁与应急响应项目中的应用，并根据真实现场条件查看对应指南。",
  alternates: {
    canonical: "https://lfadj.com/zh/applications",
    languages: {
      en: "https://lfadj.com/en/applications",
      "zh-CN": "https://lfadj.com/zh/applications",
      "x-default": "https://lfadj.com/en/applications",
    },
  },
  openGraph: {
    title: "移动照明灯塔应用场景 | 建筑、矿山与工业项目 | LFADJ",
    description: "了解建筑、矿山、油气、设备租赁与应急项目的移动照明灯塔应用场景和现场考虑因素。",
    url: "https://lfadj.com/zh/applications",
    type: "website",
  },
};

const siteConditions = [
  ["每日运行时间", "班次安排与连续运行时长"],
  ["现场供电与燃油条件", "项目现场可用的能源条件"],
  ["粉尘、高温与天气", "作业区域的环境暴露情况"],
  ["照明范围与可见度要求", "需要覆盖的作业区域与观察需求"],
];

const applicationLinks = [
  ["建筑施工", "/zh/applications/construction-lighting"],
  ["矿山作业", "/zh/applications/mining-lighting"],
  ["油气项目", "/zh/applications/oil-gas-lighting"],
  ["设备租赁", "/zh/applications/rental-lighting"],
  ["应急响应", "/zh/applications/emergency-lighting"],
];

const applications = [
  {
    name: "建筑",
    title: "建筑施工照明",
    description: "服务建筑、道路与基础设施项目中不断变化的夜间作业区域，适应人员和设备频繁转场的现场节奏。",
    requirements: ["频繁转场", "灵活覆盖", "夜班作业可见度"],
    href: "/zh/applications/construction-lighting",
    linkLabel: "查看建筑施工照明指南",
  },
  {
    name: "矿山",
    title: "矿山照明",
    description: "面向长时间连续作业的矿区，在粉尘和复杂地面条件下为不同工作区域提供照明。",
    requirements: ["长时间运行", "粉尘与不平整地面", "可靠的大范围照明"],
    href: "/zh/applications/mining-lighting",
    linkLabel: "查看矿山照明指南",
  },
  {
    name: "油气",
    title: "油气项目照明",
    description: "为偏远作业区与维护任务提供临时照明，并结合天气暴露和项目现场的特定作业要求进行评估。",
    requirements: ["偏远现场运行", "高温、粉尘与天气暴露", "项目特定的安全要求"],
    href: "/zh/applications/oil-gas-lighting",
    linkLabel: "查看油气项目照明指南",
  },
  {
    name: "设备租赁",
    title: "设备租赁照明",
    description: "面向不断变化的客户现场，支持设备反复调度、便捷交接，并高效回归租赁车队继续周转。",
    requirements: ["快速部署", "便于操作与运输", "维护与利用率管理"],
    href: "/zh/applications/rental-lighting",
    linkLabel: "查看设备租赁照明指南",
    layout: "xl:col-span-3",
  },
  {
    name: "应急响应",
    title: "应急响应照明",
    description: "在常规照明或电网供电中断时，为响应人员和必要作业区域快速恢复临时可见度。",
    requirements: ["快速响应", "独立临时照明", "停电期间可靠部署"],
    href: "/zh/applications/emergency-lighting",
    linkLabel: "查看应急照明指南",
    layout: "md:col-span-2 xl:col-span-3",
  },
];

const projectMatches = [
  {
    condition: "运行时间较长或需要可靠持续供能",
    assessment: "可重点评估柴油移动照明灯塔",
  },
  {
    condition: "无电网接入或燃油补给困难",
    assessment: "可评估太阳能移动照明灯塔",
  },
  {
    condition: "需要在不同作业区域之间频繁转场",
    assessment: "应重点评估运输、部署时间和灯杆操作",
  },
  {
    condition: "粉尘、高温、大风或偏远地区",
    assessment: "应确认环境防护与项目专用配置",
  },
];

const projectInformation = [
  "应用场景",
  "预计数量",
  "每日运行时间",
  "温度与现场环境",
  "燃油、电网或太阳能条件",
  "交货目的地与时间要求",
];

export default function ChineseApplicationsPage() {
  return (
    <main className="w-full bg-white">
      <section aria-labelledby="applications-hero-title" className="w-full border-b border-slate-200 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[560px] max-w-[1280px] flex-col justify-center py-10 sm:py-12 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)] lg:gap-12 xl:gap-14">
            <div className="min-w-0">
              <p className="text-sm font-bold tracking-[0.16em] text-blue-700">行业应用总入口</p>
              <h1 id="applications-hero-title" className="mt-4 max-w-[730px] text-4xl font-bold leading-[1.12] tracking-[-0.015em] text-slate-950 sm:text-5xl lg:text-[3rem] xl:text-[3.25rem]">
                移动照明灯塔在建筑、矿山与工业项目中的应用
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                了解建筑施工、矿山作业、油气项目、设备租赁与应急响应中的移动照明需求，并结合项目运行环境进行初步的照明配置判断。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href="/zh/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-center text-sm font-bold leading-5 text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
                  获取项目照明配置建议
                </Link>
                <Link href="#application-guides" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold leading-5 text-slate-900 transition-colors hover:border-blue-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
                  查看应用场景指南
                </Link>
              </div>
            </div>

            <aside aria-labelledby="site-conditions-title" className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:min-h-[370px]">
              <p className="text-sm font-bold tracking-[0.16em] text-blue-700">项目评估要点</p>
              <h2 id="site-conditions-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-[1.7rem]">项目现场条件</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">现场条件会影响能源方案、灯杆部署、照明输出及运行配置。</p>
              <dl className="mt-6 grid flex-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {siteConditions.map(([term, detail]) => (
                  <div key={term} className="min-w-0 bg-slate-50 p-4 sm:p-[1.125rem]">
                    <dt className="text-base font-bold leading-6 text-slate-950">{term}</dt>
                    <dd className="mt-1.5 text-sm leading-5 text-slate-600">{detail}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <nav aria-label="应用场景指南" className="mt-10 border-t border-slate-200 pt-5">
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm font-semibold text-slate-700 sm:grid-cols-3 lg:grid-cols-5">
              {applicationLinks.map(([label, href]) => (
                <li key={href} className="min-w-0">
                  <Link href={href} className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 py-2 break-words transition-colors hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section id="application-guides" className="w-full scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">按项目应用选择移动照明方案</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-600 sm:text-lg">
            不同项目在运行时间、照明范围、现场环境、部署频率以及能源补给方面存在不同要求。进入对应行业指南，了解主要照明需求与配置考虑因素。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {applications.map((application) => (
              <article key={application.name} className={`flex h-full min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-7 xl:col-span-2 ${application.layout ?? ""}`}>
                <p className="text-sm font-bold tracking-[0.18em] text-blue-700">{application.name}</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950">{application.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{application.description}</p>
                <ul className="mt-6 flex-1 space-y-3.5 text-base leading-7 text-slate-700">
                  {application.requirements.map((requirement) => (
                    <li key={requirement} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
                <Link href={application.href} className="mt-8 inline-flex min-h-11 items-center self-start rounded-sm py-2 text-base font-bold text-blue-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4">
                  {application.linkLabel} <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="project-conditions-title" className="w-full border-t border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,56fr)_minmax(390px,44fr)] xl:gap-12">
            <div className="min-w-0">
              <h2 id="project-conditions-title" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                根据项目运行条件匹配照明系统
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                即使应用行业相同，运行时间、能源条件、现场环境或部署方式不同，也可能需要不同的移动照明配置。可先根据以下要点进行初步判断，再进入详细方案页面。
              </p>

              <dl className="mt-9 divide-y divide-slate-200 border-y border-slate-200">
                {projectMatches.map(({ condition, assessment }, index) => (
                  <div key={condition} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1.08fr)_2rem_minmax(0,0.92fr)] sm:items-center sm:gap-4">
                    <dt className="flex min-w-0 gap-3 font-semibold leading-6 text-slate-950">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{index + 1}</span>
                      <span>{condition}</span>
                    </dt>
                    <span aria-hidden="true" className="hidden items-center justify-center text-xl font-bold text-blue-700 sm:flex">→</span>
                    <dd className="ml-11 min-w-0 border-l-2 border-blue-200 pl-3 font-semibold leading-6 text-blue-800 sm:ml-0 sm:border-0 sm:pl-0">{assessment}</dd>
                  </div>
                ))}
              </dl>

              <nav aria-label="相关照明解决方案" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
                <Link href="/zh/solutions/how-to-choose-the-right-light-tower" className="rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
                  如何选择合适的移动照明灯塔 →
                </Link>
                <Link href="/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" className="rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
                  极端环境照明 →
                </Link>
              </nav>
            </div>

            <aside aria-labelledby="project-information-title" className="min-w-0 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-7 xl:p-8">
              <h3 id="project-information-title" className="text-2xl font-bold tracking-tight text-slate-950">准备项目资料</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">提供以下信息有助于我们在建议配置前了解您的实际运行条件。</p>
              <ul className="mt-6 space-y-3">
                {projectInformation.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-slate-800">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/zh/contact" className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-blue-700 px-4 py-3 text-center text-sm font-bold leading-5 text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 xl:text-base">
                获取项目照明配置建议
              </Link>
              <Link href="/zh/products" className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-blue-300 bg-white px-4 py-2 text-center text-sm font-bold text-blue-800 transition-colors hover:border-blue-600 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
                对比移动照明灯塔产品 →
              </Link>
            </aside>
          </div>

          <nav aria-label="相关信息" className="mt-10 border-t border-slate-200 pt-5">
            <div className="flex flex-col gap-3 text-base sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
              <p className="font-bold tracking-[0.14em] text-slate-500">相关信息</p>
              <Link href="/zh/solutions/how-to-choose-the-right-light-tower" className="rounded-sm font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 hover:decoration-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">移动照明灯塔选型指南</Link>
              <Link href="/zh/products" className="rounded-sm font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 hover:decoration-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">移动照明灯塔产品</Link>
              <Link href="/zh/resources" className="rounded-sm font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 hover:decoration-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">资源中心</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  );
}
