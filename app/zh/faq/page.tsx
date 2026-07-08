import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题 | LFADJ",
  description: "关于移动照明灯塔、柴油灯塔、太阳能灯塔、定制与出口交付的常见问题。",
  alternates: { canonical: "https://lfadj.com/zh/faq", languages: { en: "/en/faq", zh: "/zh/faq" } },
};

const sections = [
  {
    title: "产品选择 FAQ",
    items: [
      ["柴油灯塔和太阳能灯塔怎么选择？", "柴油灯塔适合长时间、高功率和偏远项目；太阳能灯塔适合低噪音、低维护和环保场景。"],
      ["移动照明灯塔适合哪些项目？", "适用于施工、矿山、道路、市政、租赁、应急抢修和工业检修项目。"],
      ["如何选择灯杆高度？", "根据照明面积、作业高度和现场遮挡选择，常见配置为 7.5m 或 9m。"],
      ["LED 灯具功率越大越好吗？", "不一定。应结合照明面积、运行时间、油耗和眩光控制综合选择。"],
      ["租赁项目适合什么配置？", "租赁项目通常优先选择易维护、耐用、通用电压和便于运输的配置。"],
      ["应急抢修项目适合什么配置？", "应急项目建议选择快速部署、长续航、稳定发动机和高亮度 LED 配置。"],
    ],
  },
  {
    title: "定制配置 FAQ",
    items: [
      ["是否支持 OEM / ODM？", "支持，可根据品牌、市场和项目需求定制配置。"],
      ["是否可以定制 Logo 和颜色？", "可以，支持机身颜色、Logo 和基础品牌标识定制。"],
      ["是否可以选择 Kubota、Yanmar、Perkins 发动机？", "可以，发动机品牌可根据订单数量、市场要求和供货情况确认。"],
      ["是否支持 50Hz / 60Hz？", "支持，可根据目标国家电力标准配置。"],
      ["是否支持 110V / 220V？", "支持，电压方案可按项目和出口市场要求调整。"],
      ["是否可以根据国家标准调整配置？", "可以，我们会根据目标市场标准、插头、拖车和文件要求提供建议。"],
    ],
  },
  {
    title: "出口交付 FAQ",
    items: [
      ["一台 40HQ 可以装多少台灯塔？", "装柜数量取决于机型、包装方式和最终配置，报价前可单独确认。"],
      ["是否支持出口包装？", "支持，可根据海运、陆运和整柜运输要求进行包装固定。"],
      ["是否可以提供英文资料？", "可以，支持英文规格书、产品图片和基础出口文件。"],
      ["交货周期一般多久？", "交货周期取决于配置、数量和排产情况，标准配置通常更快。"],
      ["是否支持 FOB 港口？", "支持 FOB，也可根据目的港需求沟通 CIF 方案。"],
      ["报价前需要客户提供哪些信息？", "建议提供国家、应用场景、数量、频率电压、使用环境和定制需求。"],
    ],
  },
  {
    title: "使用环境 FAQ",
    items: [
      ["高温沙漠环境需要注意什么？", "需要关注散热、空气过滤、线束耐温和油箱续航。"],
      ["风沙环境需要什么配置？", "建议加强空气过滤、电控箱防尘和散热器清洁便利性。"],
      ["海边和高腐蚀环境如何处理？", "建议采用防腐涂层、镀锌底盘和防腐电气接插件。"],
      ["低温环境如何保证启动？", "可考虑低温电瓶、预热系统和适合低温的油液。"],
      ["高海拔环境对发动机有什么影响？", "高海拔可能影响发动机输出，需要进行功率匹配和配置确认。"],
      ["如何根据项目环境选择灯塔配置？", "提供国家、海拔、温度、粉尘、湿度和工作时长后，我们可推荐配置。"],
    ],
  },
];

export default function ZhFAQPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">FAQ</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">常见问题</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            关于移动照明灯塔、柴油灯塔、太阳能灯塔、定制与出口交付的常见问题
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.title}</h2>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {section.items.map(([q, a]) => (
                  <article key={q} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">{q}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{a}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
