import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

type Language = "en" | "zh";

function isLanguage(value: string): value is Language {
  return value === "en" || value === "zh";
}

const content = {
  en: {
    home: "Home",
    resources: "Resources",
    eyebrow: "Light Tower Selection Guide",
    title: "How to Choose Lumens and Beam Angle for a Mobile Light Tower",
    introduction:
      "Use lumens, working-plane illuminance and beam distribution together to compare mobile light tower configurations without relying on a single headline specification.",
    basicsTitle: "1. Understand Lumens, Lux and Beam Angle",
    basicsIntro:
      "These terms describe different parts of lighting performance. They should be reviewed together with the project layout and operating conditions.",
    basics: [
      { title: "Lumens", description: "Total light output from a source. It does not show how that light is distributed across a work area." },
      { title: "Lux", description: "Illuminance reaching a working surface. The result depends on distance, placement, aiming and surrounding conditions." },
      { title: "Beam Angle", description: "The way light spreads from a fixture. Beam shape influences concentration, reach and area coverage." },
    ],
    beamTitle: "2. How Beam Angle Changes the Lighting Result",
    beamIntro:
      "Beam selection should follow the shape of the work area and the required distribution of light, not an unsupported distance claim.",
    beams: [
      { title: "Narrower Beam", description: "Concentrates more light toward a defined direction and may suit a distant or focused target when the complete lighting layout supports it." },
      { title: "Medium Beam", description: "Balances directional reach and surrounding coverage for work areas that need a controlled central zone." },
      { title: "Wider Beam", description: "Spreads light across a broader nearby area, with final performance depending on fixture output, mast position and site geometry." },
      { title: "Adjustable Multi-Head Distribution", description: "Allows individual fixtures to face different zones, helping adapt coverage to irregular work areas and multiple activity points." },
    ],
    relationshipTitle: "3. How Mast Height, Fixture Tilt and Distance Work Together",
    relationshipIntro:
      "Raising the mast can increase the potential coverage area, but it also increases the distance between the light source and the working surface. Tilting the fixtures can move light toward a target area, but excessive tilt may reduce nearby coverage or increase glare.",
    factors: [
      { title: "Mast Height", points: ["Changes the potential coverage area and the distance to the working surface.", "Greater height does not mean every position becomes brighter.", "Evaluate height together with project area and target working-plane illuminance."] },
      { title: "Fixture Tilt", points: ["Controls where the main light lands.", "Changes the distribution between near and far zones.", "Avoid aiming directly at people, vehicles or operating equipment."] },
      { title: "Lighting Distance", points: ["Actual working-plane illuminance changes as distance increases.", "Distant targets usually depend more heavily on optical distribution.", "Total lumens alone cannot determine a valid site distance."] },
      { title: "Number and Direction of Fixtures", points: ["Multiple fixtures can be aimed at separate areas.", "This improves flexibility on irregular worksites.", "Incorrect aiming can create duplicated light or dark zones."] },
    ],
    logicTitle: "Worksite Selection Logic",
    steps: [
      "Define the working area",
      "Identify the target working-plane illuminance",
      "Confirm mast position and available height",
      "Decide whether distance or area coverage is more important",
      "Adjust fixture quantity, beam distribution and direction",
      "Verify the final configuration through a lighting plan or field test",
    ],
    tipTitle: "Professional Note",
    tip:
      "A lighting recommendation should record the test or calculation conditions, including mast height, fixture angle, measurement distance, working-plane height and surrounding environment.",
    applicationsTitle: "4. Choose Lighting Performance Around the Project",
    applications: [
      { title: "Construction", description: "Review changing work zones, vehicle movement, structures and temporary obstacles before deciding fixture direction.", href: "/en/applications/construction-lighting" },
      { title: "Mining", description: "Consider large equipment, uneven terrain, dust and multiple operating levels when planning placement and glare control.", href: "/en/applications/mining-lighting" },
      { title: "Rental", description: "Prioritize adjustable configurations that can be documented and reset for different customer sites.", href: "/en/applications/rental-lighting" },
      { title: "Emergency", description: "Plan for changing access routes, temporary work zones and safe visibility around responders and vehicles.", href: "/en/applications/emergency-lighting" },
    ],
    informationTitle: "5. Information Needed for a Lighting Recommendation",
    informationItems: [
      "Application and working-area dimensions",
      "Site plan or target lighting positions",
      "Required working-plane illuminance or applicable standard",
      "Planned light tower position",
      "Expected operating hours per night",
      "Available power or fuel conditions",
      "Noise restrictions",
      "Temperature, altitude, dust, wind and other environmental conditions",
      "Need for multi-directional lighting",
      "Need to power external equipment",
    ],
    faqTitle: "6. Frequently Asked Questions",
    faqs: [
      { question: "Is a higher lumen rating always better for a light tower?", answer: "Not necessarily. Useful lighting also depends on working-plane illuminance, beam distribution, mast height, distance, fixture angle and lighting uniformity." },
      { question: "What is the difference between lumens and lux?", answer: "Lumens describe the total light output from a source. Lux describes the actual illuminance reaching a specific working surface." },
      { question: "Should I choose a narrow or wide beam?", answer: "It depends on distance, coverage and uniformity requirements. A more concentrated beam may suit a distant priority area, while a wider beam may suit a larger nearby work area. The final choice should follow the site conditions." },
      { question: "Does a higher mast always increase the lighting area?", answer: "Raising the mast may increase potential coverage, but it also increases the distance between the light source and the working surface. Mast height should not be evaluated on its own." },
      { question: "What information is needed for a lighting recommendation?", answer: "Provide the work area, target illuminance, planned light tower position, operating hours, environmental and energy conditions, noise restrictions and priority lighting zones." },
    ],
    relatedTitle: "Continue Your Selection",
    related: [
      { label: "Light Tower Selection Guides", href: "/en/resources/selection-guides" },
      { label: "LF951 Portable Light Tower", href: "/en/products/lf951" },
      { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
    ],
    ctaTitle: "7. Need a Project-Specific Lighting Recommendation?",
    ctaText: "Share your working area, operating conditions and lighting priorities. LFADJ can help organize the configuration requirements before a final model or lighting plan is confirmed.",
    ctaLabel: "Request a Lighting Recommendation",
    ctaSecondaryLabel: "Explore Mobile Light Towers",
  },
  zh: {
    home: "首页",
    resources: "资源中心",
    eyebrow: "移动照明灯塔选型指南",
    title: "移动照明灯塔的流明与投射角度怎么选？",
    introduction: "选择移动照明灯塔时，应结合总光通量、工作面照度和配光方式判断，不能只比较单一参数。",
    basicsTitle: "1. 先理解流明、照度和光束角",
    basicsIntro: "这些概念描述照明效果的不同环节，需要结合项目布局和现场条件一起评估。",
    basics: [
      { title: "流明", description: "表示光源输出的总光量，但不能说明这些光线如何分布在作业区域。" },
      { title: "照度", description: "表示到达工作面的光量，结果会受到距离、位置、瞄准方向和周围环境影响。" },
      { title: "光束角", description: "表示灯具光线的扩散方式，配光形状会影响光线集中程度、远近分配和区域覆盖。" },
    ],
    beamTitle: "2. 光束角如何改变照明效果",
    beamIntro: "配光选择应服从作业区域形状和光线分配需求，而不是依赖没有测试条件的照射距离表述。",
    beams: [
      { title: "相对较窄光束", description: "将更多光线集中到特定方向；只有在完整照明布局支持时，才适合较远或较集中的目标区域。" },
      { title: "中等光束", description: "在方向性和周围覆盖之间取得平衡，适用于需要控制中心照明区域的现场。" },
      { title: "相对较宽光束", description: "把光线分布到更宽的近端区域，最终效果仍取决于灯具输出、灯杆位置和现场结构。" },
      { title: "多灯头组合配光", description: "不同灯头可分别朝向多个区域，便于适应不规则现场和多个作业点。" },
    ],
    relationshipTitle: "3. 灯杆高度、灯具俯仰角与照射距离如何共同影响照明",
    relationshipIntro: "升高灯杆可以扩大潜在覆盖范围，但也会增加光源与工作面之间的距离。调整灯具俯仰角可以把光线投向目标区域，但角度过大也可能削弱近处照明或增加眩光。",
    factors: [
      { title: "灯杆高度", points: ["影响潜在覆盖范围和光源到工作面的距离。", "更高不代表所有位置都会更亮。", "需要结合项目面积和目标工作面照度判断。"] },
      { title: "灯具俯仰角", points: ["控制主要光线的落点。", "影响近端和远端的光线分配。", "需要避免直接照向人员、车辆或操作设备。"] },
      { title: "照射距离", points: ["距离增加时，工作面的实际照度会发生变化。", "远距离目标通常更依赖配光设计。", "不能用总流明直接推算现场距离。"] },
      { title: "灯头数量与方向", points: ["多灯头可以分别照向不同区域。", "能够改善不规则现场的覆盖灵活性。", "错误调节可能造成重复照明或暗区。"] },
    ],
    logicTitle: "现场选型逻辑",
    steps: ["明确需要照明的作业区域", "确认工作面的目标照度要求", "确认灯塔放置位置和可用升起高度", "判断项目更重视距离还是覆盖范围", "调整灯头数量、配光方式和照射方向", "通过照明方案或现场测试验证最终配置"],
    tipTitle: "专业提示",
    tip: "一份可靠的照明建议应记录测试或计算条件，包括灯杆高度、灯具角度、测量距离、工作面高度和周围环境。",
    applicationsTitle: "4. 根据项目条件选择照明性能",
    applications: [
      { title: "施工", description: "确定灯具方向前，应考虑不断变化的作业区域、车辆移动、建筑结构和临时障碍物。", href: "/zh/applications/construction-lighting" },
      { title: "矿山", description: "规划灯塔位置和眩光控制时，应考虑大型设备、不平整地面、粉尘和不同作业高度。", href: "/zh/applications/mining-lighting" },
      { title: "租赁", description: "优先考虑能够记录并重新调整的配置，便于设备适应不同客户现场。", href: "/zh/applications/rental-lighting" },
      { title: "应急", description: "应围绕变化中的通行路线、临时作业区、人员和车辆规划安全可见性。", href: "/zh/applications/emergency-lighting" },
    ],
    informationTitle: "5. 获得照明配置建议前需要提供的信息",
    informationItems: [
      "应用场景和作业区域尺寸",
      "现场平面图或重点照明位置",
      "工作面的目标照度或适用照明标准",
      "灯塔预计摆放位置",
      "每晚预计运行时间",
      "现场电源或燃油条件",
      "噪声限制",
      "温度、海拔、粉尘、风沙等环境条件",
      "是否需要多方向照明",
      "是否需要为外接设备供电",
    ],
    faqTitle: "6. 常见问题",
    faqs: [
      { question: "流明越高，移动照明灯塔就一定越好吗？", answer: "不一定。还需要结合工作面照度、光束分布、灯杆高度、距离、灯具角度和照明均匀度判断。" },
      { question: "流明和照度有什么区别？", answer: "流明代表光源输出的总光量；照度表示实际落到特定工作面上的光量，常用单位为 Lux。" },
      { question: "应该选择窄光束还是宽光束？", answer: "取决于距离、覆盖范围和均匀度要求。较远的重点区域一般偏向更集中的配光，大面积近距离作业一般偏向更宽的配光，但最终需要结合现场条件。" },
      { question: "灯杆越高，照明面积就一定越大吗？", answer: "不一定。升高灯杆可能扩大潜在覆盖范围，但同时也会增加光源与工作面之间的距离，不能只看灯杆高度。" },
      { question: "获得照明配置建议需要提供哪些信息？", answer: "需要提供作业面积、目标照度、灯塔位置、运行时间、环境条件、能源条件、噪声限制和重点照明区域。" },
    ],
    relatedTitle: "继续完成选型",
    related: [
      { label: "移动照明灯塔选型指南", href: "/zh/resources/selection-guides" },
      { label: "LF951 手推式移动照明灯塔", href: "/zh/products/lf951" },
      { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
    ],
    ctaTitle: "7. 需要针对项目的照明配置建议？",
    ctaText: "请提供作业区域、运行条件和照明重点。LFADJ可以在最终确认型号或照明方案之前，协助梳理配置需求。",
    ctaLabel: "获取照明配置建议",
    ctaSecondaryLabel: "查看移动照明灯塔",
  },
} as const;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Language = isLanguage(params.lang) ? params.lang : "en";
  const zh = lang === "zh";
  const title = zh ? "移动照明灯塔的流明与投射角度怎么选 | LFADJ" : "How to Choose Lumens and Beam Angle for a Mobile Light Tower | LFADJ";
  const description = zh
    ? "了解如何结合流明、工作面照度、光束角、灯杆高度、灯具方向和现场距离选择移动照明灯塔。"
    : "Learn how lumens, working-plane illuminance, beam angle, mast height, fixture direction and site distance work together when choosing a mobile light tower.";
  const url = `https://lfadj.com/${lang}/resources/how-to-choose-light-tower-lumens-beam-angle`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/resources/how-to-choose-light-tower-lumens-beam-angle",
        "zh-CN": "https://lfadj.com/zh/resources/how-to-choose-light-tower-lumens-beam-angle",
        "x-default": "https://lfadj.com/en/resources/how-to-choose-light-tower-lumens-beam-angle",
      },
    },
    openGraph: { title, description, url, type: "article", siteName: "LFADJ", locale: zh ? "zh_CN" : "en_US" },
  };
}

export default function LumensBeamAngleGuidePage({ params }: { params: { lang: string } }) {
  if (!isLanguage(params.lang)) redirect("/en/resources/how-to-choose-light-tower-lumens-beam-angle");
  const lang = params.lang;
  const copy = content[lang];
  const zh = lang === "zh";
  const url = `https://lfadj.com/${lang}/resources/how-to-choose-light-tower-lumens-beam-angle`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.home, item: `https://lfadj.com/${lang}` },
      { "@type": "ListItem", position: 2, name: copy.resources, item: `https://lfadj.com/${lang}/resources` },
      { "@type": "ListItem", position: 3, name: copy.title, item: url },
    ],
  };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: copy.title, description: copy.introduction, url, inLanguage: zh ? "zh-CN" : "en" };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: copy.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return (
    <>
      {[breadcrumbSchema, articleSchema, faqSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
      <main className="overflow-x-clip bg-white text-slate-950">
        <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <nav aria-label={zh ? "面包屑导航" : "Breadcrumb"} className="text-sm text-slate-300">
              <Link href={`/${lang}`} className="hover:text-white">{copy.home}</Link><span aria-hidden="true" className="mx-2">/</span><Link href={`/${lang}/resources`} className="hover:text-white">{copy.resources}</Link>
            </nav>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-amber-400">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{copy.introduction}</p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">{copy.basicsTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{copy.basicsIntro}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.basics.map((item, index) => <article key={item.title} className="min-w-0 border-t-2 border-amber-500 bg-slate-50 p-6"><span className="text-sm font-bold text-amber-700">0{index + 1}</span><h3 className="mt-4 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">{copy.beamTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{copy.beamIntro}</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {copy.beams.map((item) => <article key={item.title} className="min-w-0 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><div aria-hidden="true" className="flex h-14 items-center"><span className="h-2 w-2 rounded-full bg-amber-500"/><span className="ml-2 h-px flex-1 bg-gradient-to-r from-amber-500 to-slate-200"/></div><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="max-w-5xl text-3xl font-bold tracking-tight sm:text-4xl">{copy.relationshipTitle}</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{copy.relationshipIntro}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {copy.factors.map((factor, index) => <article key={factor.title} className="min-w-0 rounded-lg border border-slate-200 p-6 sm:p-7"><div className="flex items-center gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</span><h3 className="text-xl font-bold">{factor.title}</h3></div><ul className="mt-5 space-y-3 text-slate-600">{factor.points.map((point) => <li key={point} className="flex gap-3 leading-7"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"/><span>{point}</span></li>)}</ul></article>)}
            </div>
            <div className="mt-14">
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.logicTitle}</p>
              <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{copy.steps.map((step, index) => <li key={step} className="min-w-0 rounded-lg bg-slate-50 p-5"><span className="text-sm font-bold text-amber-700">{String(index + 1).padStart(2, "0")}</span><p className="mt-3 font-semibold leading-7">{step}</p></li>)}</ol>
            </div>
            <aside className="mt-10 border-l-4 border-amber-500 bg-amber-50 p-6 sm:p-8"><p className="text-xl font-bold">{copy.tipTitle}</p><p className="mt-3 max-w-4xl leading-7 text-slate-700">{copy.tip}</p></aside>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">{copy.applicationsTitle}</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{copy.applications.map((item) => <article key={item.href} className="min-w-0 rounded-lg border border-slate-700 bg-slate-900 p-6"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-300">{item.description}</p><Link href={item.href} className="mt-5 inline-flex font-semibold text-amber-400 hover:text-amber-300">{zh ? "查看应用" : "View application"} →</Link></article>)}</div>
            <section aria-labelledby="lighting-recommendation-information" className="mt-14 rounded-xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
              <h2 id="lighting-recommendation-information" className="text-2xl font-bold tracking-tight sm:text-3xl">{copy.informationTitle}</h2>
              <ul className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {copy.informationItems.map((item) => <li key={item} className="flex min-w-0 gap-3 leading-7 text-slate-300"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"/><span>{item}</span></li>)}
              </ul>
            </section>
            <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
              <div><h2 className="text-3xl font-bold tracking-tight">{copy.faqTitle}</h2><div className="mt-6 divide-y divide-slate-700 border-y border-slate-700">{copy.faqs.map((faq) => <article key={faq.question} className="py-6"><p className="text-lg font-bold">{faq.question}</p><p className="mt-3 leading-7 text-slate-300">{faq.answer}</p></article>)}</div></div>
              <aside aria-label={copy.relatedTitle}><p className="text-2xl font-bold">{copy.relatedTitle}</p><ul className="mt-5 space-y-3">{copy.related.map((item) => <li key={item.href}><Link href={item.href} className="font-semibold text-amber-400 underline decoration-slate-600 underline-offset-4 hover:text-amber-300">{item.label}</Link></li>)}</ul></aside>
            </div>
            <div className="mt-14 flex flex-col gap-6 rounded-xl bg-white p-6 text-slate-950 sm:p-8 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-3xl"><h2 className="text-2xl font-bold sm:text-3xl">{copy.ctaTitle}</h2><p className="mt-3 leading-7 text-slate-600">{copy.ctaText}</p></div><div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"><Link href={`/${lang}/contact/request-a-quote`} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-amber-500 px-6 text-center font-semibold hover:bg-amber-400">{copy.ctaLabel}</Link><Link href={`/${lang}/products`} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-center font-semibold hover:border-slate-500 hover:bg-slate-100">{copy.ctaSecondaryLabel}</Link></div></div>
          </div>
        </section>
      </main>
    </>
  );
}
