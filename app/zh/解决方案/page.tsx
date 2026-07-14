import type { Metadata } from "next";

export const metadata: Metadata = { title: "解决方案 | LFADJ", description: "移动照明灯塔解决方案，覆盖施工、矿山、应急和 OEM 项目。" };

export default function ChineseSolutionsPage() {
  return <main className="bg-white px-6 py-20"><section className="mx-auto max-w-[1200px]"><h1 className="text-4xl font-bold text-black">解决方案</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">根据不同应用场景选择移动照明灯塔产品、OEM 制造支持和项目咨询路径。</p><a href="/zh/contact" className="mt-10 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">联系我们</a></section></main>;
}
