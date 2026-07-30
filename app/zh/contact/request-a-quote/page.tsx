import type { Metadata } from "next";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";

export const metadata: Metadata = {
  title: "获取项目照明配置建议 | LFADJ",
  description: "提交移动照明项目需求，获取柴油、太阳能或监控拖车配置建议。",
  alternates: {
    canonical: "https://lfadj.com/zh/contact/request-a-quote",
    languages: {
      en: "/en/contact/request-a-quote",
      "zh-CN": "/zh/contact/request-a-quote",
    },
  },
};

export default function ChineseProjectInquiryPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-white text-slate-950">
      <section className="px-6 pb-12 pt-16 sm:pb-16 sm:pt-20">
        <div className="mx-auto max-w-[960px]">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-700">项目询价</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            获取项目照明配置建议
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            请告诉我们项目用途、应用场景和运行条件。我们将审核相关信息，协助您比较柴油、太阳能或监控拖车配置。
          </p>
        </div>
      </section>

      <ProjectInquiryForm language="zh" />
    </main>
  );
}
