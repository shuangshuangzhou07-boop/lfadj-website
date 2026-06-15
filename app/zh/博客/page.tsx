import type { Metadata } from "next";

export const metadata: Metadata = { title: "博客 | LFADJ", description: "移动照明灯塔知识、选型指南和工业照明应用文章。" };

export default function ChineseBlogPage() {
  return <main className="bg-white px-6 py-20"><section className="mx-auto max-w-[1200px]"><h1 className="text-4xl font-bold text-black">博客</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">阅读移动照明灯塔、柴油照明灯塔、LED 照明和施工照明选型相关内容。</p><a href="/zh/products/lf6130" className="mt-10 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">查看 LF6130</a></section></main>;
}