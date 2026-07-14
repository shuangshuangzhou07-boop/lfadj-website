import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "移动照明灯塔行业应用 | 建筑、矿山、油气项目 | LFADJ", description: "了解 LFADJ 移动照明灯塔在建筑施工、矿山、油气、租赁和应急项目中的应用场景。" };

const applications = [
  {
    name: "建筑施工",
    title: "建筑施工照明",
    description:
      "夜间施工、道路建设和基础设施项目需要可灵活部署的移动照明设备，为不断变化的作业区域提供可靠照明。",
  },
  {
    name: "矿山",
    title: "矿山照明",
    description:
      "矿区、高粉尘和长时间运行环境对照明设备的部署能力与持续运行提出了更高要求。",
  },
  {
    name: "油气",
    title: "油气项目照明",
    description:
      "油气项目通常位于偏远地区，需要在连续作业期间为现场提供可靠的移动照明。",
  },
  {
    name: "设备租赁",
    title: "移动照明灯塔租赁",
    description:
      "租赁公司关注移动照明灯塔在多次部署中的可靠性、维护成本和使用周期。",
  },
  {
    name: "应急项目",
    title: "应急照明设备",
    description:
      "应急照明设备适用于灾害救援、临时供电环境以及需要快速部署移动照明的项目。",
  },
];

export default function ChineseApplicationsPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            移动照明灯塔在建筑、矿山和工业项目中的应用
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700 sm:text-xl">
            LFADJ 为建筑施工、矿山、油气、设备租赁和应急项目提供可靠的移动照明方案。
          </p>
          <Link href="/zh/products" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-blue-700 px-6 text-sm font-bold text-white hover:bg-blue-800">
            查看产品
          </Link>
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">行业应用</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
              <article key={application.name} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-bold tracking-[0.18em] text-blue-700">{application.name}</p>
                <h3 className="mt-4 text-2xl font-bold text-gray-950">{application.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-gray-600">{application.description}</p>
                <Link href="/zh/products" className="mt-7 self-start text-sm font-bold text-blue-700 underline-offset-4 hover:underline">
                  查看产品 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
