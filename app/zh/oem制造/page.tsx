import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OEM 制造 | LFADJ 移动照明灯塔",
  description: "LFADJ 支持移动照明灯塔 OEM/ODM 制造、品牌定制、配置沟通和出口项目支持。",
};

export default function ChineseOemPage() {
  return (
    <main className="bg-white px-6 py-20">
      <section className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold tracking-tight text-black">移动照明灯塔 OEM 制造</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">LFADJ 为海外客户提供移动照明灯塔 OEM/ODM 支持，包括产品配置、品牌沟通、资料文件和出口项目协作。</p>
        <a href="/zh/contact" className="mt-10 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">联系我们</a>
      </section>
    </main>
  );
}
