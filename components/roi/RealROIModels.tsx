type Locale = "en" | "zh";

type DecisionModel = {
  title: string;
  scenario: string;
  titleAccent?: string;
  conditions: Array<{ key: string; value: string }>;
  drivers: string[];
  decisionLine: string;
};

type Copy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  buyerPrompt: string;
  buyerButtons: string[];
  models: DecisionModel[];
  valueTitle: string;
  valueLines: string[];
  valueTotal: string;
  decisionTitle: string;
  decisionSubtitle: string;
  decisionButtons: string[];
  psychology: string;
  note: string;
};

type RealROIModelsProps = {
  locale?: Locale;
};

const copy: Record<Locale, Copy> = {
  en: {
    eyebrow: "Decision Engine",
    title: "Project Investment Decision Engine",
    subtitle: "This is not a lighting cost calculation. It is a project investment decision system.",
    buyerPrompt: "What type of buyer are you?",
    buyerButtons: ["Construction Contractor", "Mining / Oil / Heavy Industry", "Equipment Rental Company"],
    models: [
      {
        title: "Construction Project Acceleration Model",
        scenario: "Night work and deadline-driven job sites",
        conditions: [
          { key: "Productivity increase per night shift", value: "Higher output from stable illumination" },
          { key: "Delay cost reduction", value: "Less idle labor and equipment time" },
          { key: "Project completion speed gain", value: "Faster execution under controlled lighting" },
        ],
        drivers: [
          "Stable night work keeps crews productive",
          "Reduced delay cost improves margin protection",
          "Better lighting supports faster handoff and completion",
        ],
        decisionLine: "Most contractors recover investment in 60-90 days",
      },
      {
        title: "Critical Operation Risk Elimination Model",
        scenario: "Remote mining, oil field and heavy industry environments",
        titleAccent: "High Impact Scenario",
        conditions: [
          { key: "Downtime loss per hour", value: "Escalates quickly in remote operations" },
          { key: "Safety exposure cost", value: "Accidents carry immediate financial and operational risk" },
          { key: "Remote operation risk", value: "Maintenance delays multiply exposure" },
        ],
        drivers: [
          "Lighting failure becomes a risk event, not a simple equipment issue",
          "Stability protects production continuity",
          "Remote access difficulty raises failure cost sharply",
        ],
        decisionLine: "One lighting failure = $10,000-$100,000 potential loss",
      },
      {
        title: "Fleet Revenue Scaling Model",
        scenario: "Equipment rental fleet monetization",
        conditions: [
          { key: "Utilization rate", value: "Primary revenue KPI" },
          { key: "Monthly rental price", value: "Per unit income driver" },
          { key: "Fleet expansion effect", value: "Reliable units improve fleet scaling" },
        ],
        drivers: [
          "High utilization converts assets into revenue",
          "Lower failure rate improves customer retention",
          "Fleet uptime determines cash flow quality",
        ],
        decisionLine: "Top rental companies scale from 10 to 100+ units within 12 months",
      },
    ],
    valueTitle: "Total Project Value Creation",
    valueLines: ["+ Productivity Gain", "+ Downtime Loss Reduction", "+ Rental Revenue Increase"],
    valueTotal: "$85,000 - $450,000 / year",
    decisionTitle: "Can your current lighting system achieve this level of return?",
    decisionSubtitle: "If not, the purchase decision should be based on profit protection, not equipment price.",
    decisionButtons: ["Calculate My Project ROI", "Get Configuration Recommendation", "Talk to Engineer"],
    psychology: "Most buyers don't buy lighting towers. They buy uptime, speed, and project control.",
    note: "Based on real industrial deployment patterns, not theoretical estimation.",
  },
  zh: {
    eyebrow: "决策系统",
    title: "项目投资决策系统",
    subtitle: "这不是照明成本计算，而是项目投资决策系统。",
    buyerPrompt: "您属于哪类买家？",
    buyerButtons: ["建筑承包商", "矿山 / 油气 / 重工业", "设备租赁公司"],
    models: [
      {
        title: "建筑项目加速模型",
        scenario: "夜间施工与工期驱动型工地",
        conditions: [
          { key: "每晚生产率提升", value: "稳定照明带来更高输出" },
          { key: "工期延误成本减少", value: "减少人工与设备空转" },
          { key: "完工速度提升", value: "受控照明下执行更快" },
        ],
        drivers: [
          "稳定夜间作业保持团队高效",
          "降低延误成本，保护利润空间",
          "更好的照明支持更快交付",
        ],
        decisionLine: "多数承包商可在60-90天收回投资",
      },
      {
        title: "关键运行风险消除模型",
        scenario: "偏远矿山、油田与重工业环境",
        titleAccent: "高影响场景",
        conditions: [
          { key: "每小时停机损失", value: "在偏远工况下迅速放大" },
          { key: "安全暴露成本", value: "事故会带来直接财务与运营风险" },
          { key: "远程运行风险", value: "维护延迟会成倍放大损失" },
        ],
        drivers: [
          "照明故障不是设备问题，而是风险事件",
          "稳定性保护生产连续性",
          "偏远地区的到场难度显著抬高故障成本",
        ],
        decisionLine: "一次照明故障 = 10,000-100,000美元潜在损失",
      },
      {
        title: "车队收益放大模型",
        scenario: "设备租赁车队变现",
        conditions: [
          { key: "利用率", value: "核心收入指标" },
          { key: "月租金收入", value: "单台收入驱动" },
          { key: "车队扩张效应", value: "可靠设备推动规模复制" },
        ],
        drivers: [
          "高利用率把资产转成收入",
          "低故障率提升客户留存",
          "车队开机率决定现金流质量",
        ],
        decisionLine: "头部租赁公司可在12个月内从10台扩展到100台以上",
      },
    ],
    valueTitle: "项目总价值创造",
    valueLines: ["+ 生产率提升", "+ 停机损失减少", "+ 租赁收入增加"],
    valueTotal: "85,000 - 450,000 美元 / 年",
    decisionTitle: "您现有的照明系统能否实现这个回报水平？",
    decisionSubtitle: "如果不能，采购决策就应该基于利润保护，而不是设备价格。",
    decisionButtons: ["计算我的项目回报", "获取配置建议", "联系工程师"],
    psychology: "大多数买家购买的不是照明灯塔，而是开机率、速度和项目控制权。",
    note: "基于真实工业部署模式，而不是理论估算。",
  },
};

export default function RealROIModels({ locale = "en" }: RealROIModelsProps) {
  const t = copy[locale];

  return (
    <section className="bg-[#0B1220] px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">{t.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{t.subtitle}</p>
        </div>

        <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.04] p-6 text-center shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
          <div className="text-sm text-slate-400">{t.buyerPrompt}</div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {t.buyerButtons.map((button) => (
              <button
                key={button}
                type="button"
                className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:border-amber-400 hover:text-amber-300"
              >
                {button}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.models.map((model, index) => {
            const gradients = [
              "from-amber-500/20 via-slate-950 to-slate-950",
              "from-red-500/20 via-orange-950 to-slate-950",
              "from-emerald-500/20 via-slate-950 to-slate-950",
            ];

            return (
              <article
                key={model.title}
                className={`rounded-[24px] border border-white/10 bg-gradient-to-b ${gradients[index] ?? gradients[0]} p-6 shadow-[0_28px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl">{model.titleAccent ? "⚠️" : model.title === "" ? "" : "●"}</div>
                    <h3 className="mt-3 text-2xl font-semibold leading-8 text-white">{model.title}</h3>
                    {model.titleAccent ? (
                      <span className="mt-3 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                        {model.titleAccent}
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {locale === "zh" ? "典型场景" : "Typical Scenario"}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-100">{model.scenario}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {locale === "zh" ? "关键运行条件" : "Key Operating Conditions"}
                  </p>
                  <div className="mt-3 space-y-3">
                    {model.conditions.map((item) => (
                      <div key={item.key} className="flex items-start justify-between gap-4 text-sm leading-6 text-slate-200">
                        <span className="font-semibold text-slate-100">{item.key}</span>
                        <span className="text-right text-slate-300">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {locale === "zh" ? "回报驱动因素" : "ROI Drivers"}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {model.drivers.map((driver) => (
                      <li key={driver} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                        <span>{driver}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 border-t border-white/10 pt-4 text-sm font-semibold leading-6 text-amber-300">
                  {model.decisionLine}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[24px] bg-gradient-to-r from-yellow-500/10 to-black p-6 shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
          <div className="text-sm text-slate-400">{t.valueTitle}</div>
          <div className="mt-3 text-white text-sm leading-7">
            {t.valueLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <div className="mt-4 text-2xl font-bold text-yellow-400">{t.valueTotal}</div>
          <div className="mt-3 text-xs text-slate-400">{locale === "zh" ? "基于生产率 + 停机损失 + 租赁利用率" : "Based on productivity + downtime + rental utilization"}</div>
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-xl font-semibold text-white">{t.decisionTitle}</h3>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">{t.decisionSubtitle}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {t.decisionButtons.map((button, index) => (
              <a
                key={button}
                href={index === 0 ? "#inquiry" : index === 1 ? "/downloads/LF955-ROI-Report.pdf" : "/contact"}
                className={`inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-300 ${
                  index === 0
                    ? "bg-orange-500 text-slate-950 hover:bg-orange-400"
                    : "border border-white/15 bg-white/5 text-white hover:border-amber-400 hover:text-amber-300"
                }`}
              >
                {button}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-xl font-semibold text-white">
            {locale === "zh" ? "为什么工业买家选择 LF955" : "Why Industrial Buyers Choose LF955"}
          </h3>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {[
              locale === "zh" ? "成本不是关键指标" : "Cost is not the key metric",
              locale === "zh" ? "照明不是设备，而是生产力基础设施" : "Lighting is not equipment. It is productivity infrastructure.",
              locale === "zh" ? "最便宜的设备会在长期内损失更多" : "The cheapest unit loses long-term money.",
            ].map((line, index) => (
              <div key={line} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm leading-7 text-slate-200">{index === 0 ? "✔ " : index === 1 ? "→ " : "→ "}{line}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-400">{t.psychology}</div>
        <div className="mt-4 text-xs text-slate-500">{t.note}</div>
      </div>
    </section>
  );
}
