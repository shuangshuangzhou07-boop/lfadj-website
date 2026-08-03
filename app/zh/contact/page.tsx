import type { Metadata } from "next";
import Link from "next/link";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";

export const metadata: Metadata = {
  title: "联系 LFADJ | 沟通移动照明项目需求",
  description: "联系 LFADJ，提交移动照明灯塔的应用场景、运行条件、配置需求和项目采购计划。",
  alternates: {
    canonical: "https://lfadj.com/zh/contact",
    languages: { en: "/en/contact", "zh-CN": "/zh/contact" },
  },
  openGraph: {
    title: "联系 LFADJ | 沟通移动照明项目需求",
    description: "提交移动照明灯塔的应用场景、运行条件、配置需求和项目采购计划。",
    url: "https://lfadj.com/zh/contact",
    type: "website",
  },
};

const preparationItems = [
  { title: "应用场景", body: "移动照明设备将在什么环境下使用，以及主要用途。", href: "/zh/applications" },
  { title: "数量与交期", body: "预计采购数量和项目计划时间。", href: "/zh/products" },
  { title: "运行条件", body: "运行时间、气候、现场通行和特殊要求。", href: "/zh/solutions" },
];

const processSteps = [
  {
    title: "需求审核",
    body: "我们会审核应用场景、采购数量、运行条件和项目时间要求。",
  },
  {
    title: "配置沟通",
    body: "如有需要，我们会进一步确认照明输出、动力方式、升降系统或选配设备。",
  },
  {
    title: "项目建议",
    body: "我们会整理适合项目的配置方向，供后续商务沟通使用。",
  },
];

export default function ChineseContactPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-700">联系 LFADJ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[56px]">
            沟通您的移动照明项目
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            请提供应用场景、运行条件和采购需求。我们将根据项目信息进行分析，并协助确认合适的移动照明配置。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:items-start lg:gap-12">
          <aside className="min-w-0 lg:sticky lg:top-28" aria-labelledby="prepare-heading-zh">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-700">项目资料</p>
            <h2 id="prepare-heading-zh" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950">
              填写前请准备
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              请先提供目前已经掌握的信息，选填的运行条件可以根据实际情况补充。
            </p>
            <ol className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              {preparationItems.map((item, index) => (
                <li key={item.title} className="py-5">
                  <div className="flex gap-4">
                    <span className="shrink-0 text-sm font-bold tabular-nums text-blue-700">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <h3 className="font-bold leading-6 text-slate-950">
                        <Link href={item.href} className="transition hover:text-blue-700 hover:underline hover:underline-offset-4">{item.title}</Link>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </aside>

          <div className="min-w-0">
            <ProjectInquiryForm language="zh" embedded />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-700">提交后流程</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            提交后我们如何处理
          </h2>
          <ol className="mt-10 grid border-y border-slate-200 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step.title} className="min-w-0 border-b border-slate-200 py-6 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <p className="text-sm font-bold tabular-nums text-blue-700">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
