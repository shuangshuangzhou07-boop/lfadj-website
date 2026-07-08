import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import {
  ApplicationEngineeringSection,
  FinalConversionCTA,
  HeroSection,
  IndustryComparisonSection,
  ManufacturingProofSection,
  ProblemEngineeringSection,
  ProductConfigurationSection,
  ProjectCostLossSection,
  ProjectRoiEngineeringSection,
} from "@/components/lf955/Lf955LandingSections";
import { SiteNav } from "../../../site-nav";

type Lang = "en" | "zh";

function isLang(value: string): value is Lang {
  return value === "en" || value === "zh";
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";
  const title = zh
    ? "LF955移动照明灯塔｜7.5米液压柴油灯塔｜施工/矿山/租赁照明"
    : "LF955 Mobile Light Tower | 7.5m Hydraulic Diesel Light Tower for Construction & Mining";
  const description = zh
    ? "LF955移动照明灯塔适用于施工、矿山、租赁与工业项目，适合高粉尘、高温和离网环境，帮助提升夜间作业效率与回报。"
    : "LF955 mobile light tower for construction, mining, rental and industrial projects. Built for harsh environments, faster deployment and stronger payback.";
  const url = zh ? "https://lfadj.com/zh/products/lf955" : "https://lfadj.com/en/products/lf955";
  const image = "https://lfadj.com/images/products/lf955/applications/road-construction.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/products/lf955",
        zh: "https://lfadj.com/zh/products/lf955",
        "x-default": "https://lfadj.com/en/products/lf955",
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: image, alt: zh ? "LF955 移动照明灯塔用于夜间施工现场照明" : "LF955 mobile light tower for night construction site lighting" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function LF955Page({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) {
    redirect("/en/products/lf955");
  }

  const lang = params.lang;
  const zh = lang === "zh";

  const hero = zh
    ? {
        title: "7.5米液压柴油移动照明灯塔",
        subtitle: "适用于施工、矿山、租赁和应急项目的工业级移动照明解决方案，支持 OEM 定制、FOB/CIF 报价和出口项目配置。",
        summary: "LF955 配置 Kubota 柴油发动机、120L 大油箱、4×400W LED 灯组和液压升降灯杆，适合高温、粉尘和离网工况。",
        primary: "获取报价",
        secondary: "下载技术参数",
        tertiary: "WhatsApp 联系工程师",
      }
    : {
        title: "LF955 Mobile Light Tower for High-Risk Construction Sites",
        subtitle: "99.9% uptime reliability. Extreme environment ready for 45C+, dust and mining sites. Built for rental and industrial projects.",
        summary: "Built for contractors, rental companies, and industrial operators who cannot afford downtime.",
        primary: "Get Quote in 2 Hours",
        secondary: "WhatsApp Engineer",
        tertiary: "Download Technical Sheet",
      };

  const heroV7 = zh
    ? {
        eyebrow: "移动照明工程解决方案",
        title: "为您的项目环境，定制真正合适的移动照明解决方案",
        productName: undefined,
        subtitle: "不同项目，有不同施工环境。\n不同工况，需要不同照明方案。",
        summary: "LFADJ 根据施工环境、工作时间和供电需求，推荐更适合的移动照明配置方案，帮助减少停机、降低维护并提升连续施工能力。",
        primary: "获取项目配置建议",
        secondary: "下载产品资料",
        valueBadges: ["复杂工况", "减少停机", "降低维护"],
        trustedLabel: "工程支持",
        trustLogos: ["施工现场", "矿山项目", "油气工程"],
      }
    : {
        eyebrow: "Mobile Lighting Engineering Solution",
        title: "Built Around Your Project Environment",
        productName: "LF955 Mobile Light Tower Configuration Support",
        subtitle: "Every country, project and operating condition is different. We recommend the right mobile lighting configuration based on your site environment, climate, working hours and power requirements — helping reduce downtime, lower maintenance costs and improve project continuity.",
        summary: "Built for mobile light tower selection, construction site lighting, mining light tower projects, diesel light tower fleets, temporary lighting solution planning and harsh environment lighting.",
        primary: "Request Engineering Recommendation",
        secondary: "View LF955 Configuration",
        valueBadges: ["Harsh Environment", "Reduce Downtime", "Lower Maintenance"],
        trustedLabel: "Engineering Support",
        trustLogos: ["Construction Sites", "Mining Projects", "Oil & Gas"],
      };

  const roiCards = [
    {
      icon: "01",
      title: zh ? "每日节省成本" : "Daily Cost Saved",
      metricValue: "$2,100/day",
      metricLabel: zh ? "避免的典型夜班延误损失" : "typical night delay exposure avoided",
      comparisonLabel: zh ? "停机损失对比" : "Downtime Loss Comparison",
      comparisonValue: zh ? "一个夜班停工造成的损失，往往高于一周照明运行成本。" : "One stopped night shift can cost more than a week of lighting operation.",
      lines: zh
        ? [
            "保护摊铺、吊装、道路施工和设备进场窗口",
            "减少人工等待、起重机待命和租赁设备浪费",
            "在工期不能调整时，仍保持高风险作业可视化",
          ]
        : [
            "Protect paving, lifting, roadwork and equipment staging windows",
            "Reduce idle labor, crane standby and rented equipment waste",
            "Keep high-risk work visible when the schedule cannot move",
          ],
      results: zh
        ? ["LF955通常可在30-90天内回本，适用于典型施工项目。"]
        : ["LF955 pays back within 30-90 days in typical construction projects."],
    },
  ];

  const costLossSection = zh
    ? {
        title: "为什么项目会增加成本？",
        subtitle: "很多项目的照明成本，并不是来自设备采购价，而是来自停机、维护、配置错误和恶劣工况带来的持续损耗。",
        closingText: "如果这些问题没有在配置阶段解决，后续往往会变成更高的维护成本和停机风险。",
        transitionText: "真正合适的移动照明方案，应该从项目环境开始设计，而不是从产品参数开始选择。",
        ctaLabel: "了解我们的配置流程",
        cards: [
          {
            title: "设备停机",
            items: ["工程停工", "工人等待", "机械闲置", "项目进度延误"],
          },
          {
            title: "维护频繁",
            items: ["空气滤芯堵塞", "散热器积灰", "维修次数增加", "人工维护成本上升"],
          },
          {
            title: "配置选择错误",
            items: ["机组功率不足", "发动机长期高负载", "油耗增加", "设备寿命缩短"],
          },
          {
            title: "恶劣工况影响",
            items: ["高温", "风沙", "盐雾", "高海拔", "连续夜间施工"],
          },
        ],
      }
    : {
        title: "Why Projects Lose Money",
        subtitle: "Many lighting costs do not come from the purchase price, but from downtime, frequent maintenance, wrong configuration and harsh operating environments.",
        closingText: "If these issues are not solved during configuration, they often become higher maintenance costs and greater downtime risks later.",
        transitionText: "The right mobile lighting solution should start from your project environment, not just from product specifications.",
        ctaLabel: "See Our Configuration Process",
        cards: [
          {
            title: "Equipment Downtime",
            items: ["Work stoppage", "Workers waiting", "Idle machinery", "Project delay"],
          },
          {
            title: "Frequent Maintenance",
            items: ["Clogged air filters", "Dust on radiator", "More service visits", "Higher labor cost"],
          },
          {
            title: "Wrong Configuration",
            items: [
              "Insufficient generator capacity",
              "Long-term high engine load",
              "Higher fuel consumption",
              "Shorter service life",
            ],
          },
          {
            title: "Harsh Environment",
            items: ["High temperature", "Heavy dust", "Salt mist", "High altitude", "Continuous night operation"],
          },
        ],
      };

  const riskCards = zh
    ? [
        {
          title: "设备故障风险",
          problem: "低端灯塔常常按采购价选型，但在真实项目工况下容易失效。",
          impact: "商业影响：上门维修、替换运输和紧急租赁成本会吃掉原本的节省。",
          solution: "LF955面向重视持续稳定运行的买家，目标是在现场熄灯前保持可预测运行。",
        },
        {
          title: "夜间施工安全风险",
          problem: "光束控制不足会在设备、物料流转和人员交叉点形成盲区。",
          impact: "商业影响：一次事故就可能停工、引发索赔并损害承包商信誉。",
          solution: "大面积 LED 输出有助于提升夜间作业区的可视性和决策速度。",
        },
        {
          title: "燃油效率风险",
          problem: "发动机和照明负载不匹配时，油耗和输出都会变得不稳定。",
          impact: "商业影响：租赁毛利下降，项目成本更难预测。",
          solution: "发动机、灯组和灯杆会按运行时长与现场负载进行匹配。",
        },
        {
          title: "高温粉尘停机风险",
          problem: "45°C+ 高温、矿区粉尘和偏远油田会快速暴露散热和过滤问题。",
          impact: "商业影响：非计划停机会中断高价值班次。",
          solution: "针对严苛环境的配置可帮助维持持续稳定运行。",
        },
      ]
    : [
        {
          title: "Equipment Failure Risk",
          problem: "Low-grade towers are often selected by purchase price, then fail under real project duty cycles.",
          impact: "Business Impact: service calls, replacement transport and emergency rental costs can erase the original saving.",
          solution: "LF955 is configured for uptime-focused buyers who need predictable operation before the site goes dark.",
        },
        {
          title: "Night Work Safety Risk",
          problem: "Poor beam control creates blind spots around equipment, material movement and crew crossings.",
          impact: "Business Impact: one incident can stop work, trigger claims and damage contractor credibility.",
          solution: "Wide-area LED output helps protect decision speed and visibility across active night zones.",
        },
        {
          title: "Fuel Instability Risk",
          problem: "Unmatched engine and lighting loads create unstable output and unnecessary fuel burn.",
          impact: "Business Impact: rental margin drops and project operating cost becomes harder to forecast.",
          solution: "Engine, lamp and mast choices are matched to runtime and site load requirements.",
        },
        {
          title: "Dust & Heat Shutdown Risk",
          problem: "45C+ heat, dust-heavy mining roads and remote oilfield sites expose weak cooling and filtration quickly.",
          impact: "Business Impact: unplanned shutdowns interrupt high-value shifts where every hour matters.",
          solution: "Harsh-site configuration support helps protect uptime in dust and heat.",
        },
      ];

  const scenarioCards = zh
    ? [
        {
          title: "施工夜间作业",
          problem: "桥梁、道路和市政工程通常配置4-12台。",
          impact: "夜间浇筑和封路场景通常每天运行8-14小时。",
          solution: "投资回报提升：夜间延误成本最高可降低35%。",
          image: "/images/products/lf955/applications/night-construction.jpg",
        },
        {
          title: "矿山与油田",
          problem: "运输道路、料堆和服务区通常配置5-20台。",
          impact: "在高粉尘离网环境中，常常每天运行10-16小时。",
          solution: "投资回报提升：非计划停机风险最高可降低70%。",
          image: "/images/products/lf955/applications/heavy-construction.jpg",
        },
        {
          title: "租赁车队",
          problem: "按客户类型、灯杆高度和功率配置5-20台。",
          impact: "施工、市政和活动租赁常常每天运行8-16小时。",
          solution: "投资回报提升：租赁收入最高可提升25%。",
          image: "/images/products/lf955/applications/rental-project.png",
        },
        {
          title: "应急救援",
          problem: "用于临时抢修、救援和市政应急的5-15台配置。",
          impact: "时间敏感型恢复作业常常每天运行10-24小时。",
          solution: "投资回报提升：部署更快，响应延误成本更低。",
          image: "/images/products/lf955/applications/lifting-operation.jpg",
        },
      ]
    : [
        {
          title: "Construction Night Work",
          problem: "4-12 units around bridges, roads and utility projects.",
          impact: "8-14 hours/day with night pours and lane closures.",
          solution: "ROI lift: reduce night delay cost by up to 35%.",
          image: "/images/products/lf955/applications/night-construction.jpg",
        },
        {
          title: "Mining & Oilfield",
          problem: "5-20 units for haul roads, stockpiles and service yards.",
          impact: "10-16 hours/day in dust-heavy off-grid conditions.",
          solution: "ROI lift: reduce unplanned downtime exposure by up to 70%.",
          image: "/images/products/lf955/applications/heavy-construction.jpg",
        },
        {
          title: "Rental Company Fleet",
          problem: "5-20 units configured by customer segment and mast height.",
          impact: "8-16 hours/day across construction, municipal and event demand.",
          solution: "ROI lift: increase revenue utilization by up to 25%.",
          image: "/images/products/lf955/applications/rental-project.png",
        },
        {
          title: "Emergency & Disaster Response",
          problem: "5-15 units for temporary repair, rescue and utility response zones.",
          impact: "10-24 hours/day during time-critical recovery work.",
          solution: "ROI lift: improve deployment speed and reduce response delay cost.",
          image: "/images/products/lf955/applications/lifting-operation.jpg",
        },
      ];

  const manufacturingSteps = zh
    ? [
        { step: "焊接", title: "结构焊接控制", description: "稳定的机架质量有助于保护持续稳定运行、运输可靠性和租赁资产价值。", image: "/images/products/lf955/manufacturing/04-welding.jpg" },
        { step: "装配", title: "生产线装配", description: "发动机、灯杆、拖车和照明系统被装配成一个可直接交付的项目整机。", image: "/images/products/lf955/manufacturing/07-assembly.jpg" },
        { step: "测试", title: "最终运行测试", description: "照明、动力和展开检查可在出货前降低调试风险。", image: "/images/products/lf955/manufacturing/08-testing.jpg" },
        { step: "包装", title: "出口包装", description: "出口级包装可降低海外工业项目的运输损伤风险。", image: "/images/products/lf955/manufacturing/09-packaging.jpg" },
      ]
    : [
        { step: "Welding", title: "Structural Welding Control", description: "Frame consistency helps protect uptime, transport reliability and rental fleet value.", image: "/images/products/lf955/manufacturing/04-welding.jpg" },
        { step: "Assembly", title: "Production Line Assembly", description: "Engine, mast, trailer and lighting systems are assembled as one project-ready package.", image: "/images/products/lf955/manufacturing/07-assembly.jpg" },
        { step: "Testing", title: "Final Runtime Testing", description: "Lighting, power and deployment checks reduce commissioning risk before shipment.", image: "/images/products/lf955/manufacturing/08-testing.jpg" },
        { step: "Packaging", title: "Export Packaging", description: "Export-ready packing reduces delivery damage risk for overseas industrial projects.", image: "/images/products/lf955/manufacturing/09-packaging.jpg" },
      ];

  const configGroups = zh
    ? [
        { title: "发动机", options: "Kubota / Yanmar / Perkins", recommendation: "推荐用于重载矿山、租赁车队和需要持续稳定运行的偏远工业项目。" },
        { title: "灯杆高度", options: "6m / 7.5m / 9m", recommendation: "推荐用于施工现场、运输道路和更大作业区，覆盖距离直接影响效率。" },
        { title: "照明功率", options: "300W-1000W LED / Metal Halide", recommendation: "推荐给需要平衡油耗、亮度和现场安全的买家。" },
        { title: "升降系统", options: "Manual / Hydraulic / Electric", recommendation: "推荐给需要更快展开和更少人工接触点的租赁车队与承包商。" },
      ]
    : [
        { title: "Engine", options: "Kubota / Yanmar / Perkins", recommendation: "Recommended for heavy-duty mining operations, rental fleets and remote industrial projects that need predictable uptime." },
        { title: "Mast Height", options: "6m / 7.5m / 9m", recommendation: "Recommended for construction sites, haul roads and wider work zones where coverage distance affects productivity." },
        { title: "Lighting Power", options: "300W-1000W LED / Metal Halide", recommendation: "Recommended for buyers balancing fuel cost, light output and site safety requirements." },
        { title: "Lift System", options: "Manual / Hydraulic / Electric", recommendation: "Recommended for rental fleets and contractors that need faster setup with fewer crew touchpoints." },
      ];

  const comparisonRows = zh
    ? [
        ["运行稳定性", "标准产品在长工时和恶劣环境下运行波动更大。", "高稳定性，按项目工况匹配发动机与配置。", "降低停机暴露"],
        ["防尘能力", "标准产品在高粉尘现场往往需要更多维护。", "工业级防尘，适用于严苛现场。", "降低服务中断风险"],
        ["燃油效率", "基础燃油效率，长工时下优化有限。", "按项目配置优化燃油效率和运行时长。", "降低每晚运行成本"],
        ["维护成本", "平均维护成本，更多保养频率。", "工厂测试与配置规划降低维护成本。", "降低生命周期服务支出"],
      ]
    : [
        ["Runtime Stability", "Standard towers often deliver unstable runtime under long shifts and harsh sites.", "High runtime stability with 99.9% uptime reliability target and project-matched configuration.", "Lower shutdown exposure"],
        ["Dust Resistance", "Standard towers often need extra service attention in dust-heavy sites.", "Industrial grade dust resistance with harsh-site configuration support.", "Lower service interruption risk"],
        ["Fuel Efficiency", "Basic fuel efficiency with limited optimization for long shifts.", "Optimized fuel efficiency for long shifts through project-matched engine and LED power.", "Lower operating cost per night shift"],
        ["Maintenance Cost", "Average maintenance cost with more frequent service attention.", "Low maintenance cost through factory-tested assembly and runtime checks.", "Lower lifetime service spend"],
      ];

  const failureCostCards = [
    { title: zh ? "每日停工损失" : "$2,100 / Day Loss", description: zh ? "施工延误 + 人工 + 机械闲置 + 安全风险" : "Construction delay + labor + equipment idle time + safety exposure" },
    { title: zh ? "安全事故风险" : "Safety Risk", description: zh ? "光照不足导致事故、返工、赔偿风险" : "Poor lighting increases incident, rework and compensation exposure" },
    { title: zh ? "项目延期链条" : "Project Delay Chain", description: zh ? "一个照明问题 → 整个施工链延误" : "One lighting issue can delay the entire construction chain" },
  ];

  const cases = [
    {
      title: zh ? "沙特阿拉伯施工现场" : "Saudi Arabia Construction Site",
      body: zh ? "8台 LF955，用于夜间道路施工与桥梁工程" : "8 LF955 units for night roadworks and bridge projects",
      roi: zh ? "投资回报：减少 35% 夜间延误" : "ROI: reduce 35% night delay",
    },
    {
      title: zh ? "澳大利亚租赁公司" : "Australia Rental Company",
      body: zh ? "替换旧柴油灯塔，提高出租率" : "Replace old diesel towers and increase rental utilization",
      roi: zh ? "投资回报：租赁收入 +22%" : "ROI: rental revenue +22%",
    },
    {
      title: zh ? "南非矿山项目" : "South Africa Mining",
      body: zh ? "高粉尘 + 高负载环境连续运行" : "Continuous operation in dust-heavy, high-load conditions",
      roi: zh ? "故障率降低 60%" : "Failure rate reduced by 60%",
    },
  ];

  const faqItems = zh
    ? [
        { q: "MOQ是多少？", a: "LF955 支持小批量试单，常规建议从 1 台样机或小批量订单开始，具体根据配置和目的港确认。" },
        { q: "交货期多久？", a: "标准配置通常约 25-45 天，具体取决于发动机、灯具、液压系统和订单数量。" },
        { q: "LF955 是否支持 OEM 定制？", a: "支持。可以根据客户需求定制颜色、品牌标识、灯具功率、灯杆高度、发动机品牌和包装方式。" },
        { q: "可以出口到中东、澳大利亚和非洲吗？", a: "可以。LF955 适用于高温、粉尘、矿山、施工和租赁等场景，可根据不同国家项目要求调整配置。" },
        { q: "是否提供技术资料和参数表？", a: "提供。客户可下载 LF955 参数表、产品手册、维护指南和 OEM 配置资料。" },
        { q: "质保多久？", a: "常规质保期根据订单和配置确认，核心部件可提供备件支持和维护建议。" },
        { q: "可以选择哪些发动机？", a: "可根据项目需求选择 Kubota、Yanmar、Perkins 或其他同等级发动机方案。" },
        { q: "适合哪些使用场景？", a: "适用于道路施工、建筑工地、矿山、油气项目、租赁公司、应急抢修和夜间作业。" },
        { q: "是否支持 FOB / CIF 报价？", a: "支持。可以根据客户目的港提供 FOB 或 CIF 报价方案。" },
        { q: "如何获取报价？", a: "提交项目国家、数量、使用场景和配置需求后，LFADJ 工程师会整理方案并尽快回复。" },
      ]
    : [
        { q: "What is the MOQ?", a: "Standard MOQ is 1 unit, with project trial orders supported." },
        { q: "What is the lead time?", a: "15-30 days depending on configuration and destination country." },
        { q: "Do you support OEM?", a: "OEM branding and project customization are supported." },
        { q: "Is LF955 suitable for hot and dusty environments?", a: "LF955 is optimized for 45C+ heat and dust-heavy environments." },
      ];

  const technicalDocuments = [
    {
      title: "LF955 技术参数表",
      description: "包含尺寸、功率、灯杆高度、油箱容量、重量和核心配置。",
      button: "下载参数表",
      href: "#lead-form",
    },
    {
      title: "LF955 产品手册",
      description: "适合采购和工程团队了解产品结构、应用场景和配置选择。",
      button: "下载产品手册",
      href: "#lead-form",
    },
    {
      title: "维护与备件指南",
      description: "帮助租赁公司和项目团队提前规划易损件、维护周期和现场服务。",
      button: "下载维护指南",
      href: "#lead-form",
    },
    {
      title: "OEM 定制配置表",
      description: "用于确认颜色、LOGO、灯具功率、发动机品牌、包装和运输需求。",
      button: "获取OEM配置表",
      href: "#lead-form",
    },
  ];

  const trustPoints = [
    "ISO9001 质量管理体系",
    "ISO14001 环境管理体系",
    "ISO45001 职业健康安全管理体系",
    "支持 OEM / ODM 定制",
    "支持 FOB / CIF 出口报价",
    "适用于高温、粉尘、矿山和施工现场",
    "提供技术参数、维护建议和备件支持",
    "24小时内响应项目询盘",
  ];

  return (
    <>
      <SiteNav
        items={
          zh
            ? [
                { label: "解决方案", href: "/zh/解决方案" },
                { label: "应用行业", href: "/zh/应用场景" },
                { label: "产品中心", href: "/zh/products" },
                { label: "工程案例", href: "/zh/案例" },
                { label: "技术资料", href: "/zh/resources" },
                { label: "博客", href: "/zh/blog" },
                { label: "关于我们", href: "/zh/about" },
                { label: "联系我们", href: "/zh/联系我们" },
              ]
            : undefined
        }
        quoteLabel={zh ? "获取报价" : "Get a Quote"}
        quoteHref={zh ? "/zh/联系我们" : "/contact"}
      />
      <main className="bg-white text-slate-950">
        <HeroSection
          eyebrow={heroV7.eyebrow}
          title={heroV7.title}
          productName={heroV7.productName}
          subtitle={heroV7.subtitle}
          summary={heroV7.summary}
          primaryCta={heroV7.primary}
          primaryHref="#lead-form"
          secondaryCta={heroV7.secondary}
          secondaryHref="#configuration"
          valueBadges={heroV7.valueBadges}
          trustedLabel={heroV7.trustedLabel}
          trustLogos={heroV7.trustLogos}
          imageSrc="/images/products/lf955/applications/road-construction.jpg"
          imageAlt={zh ? "LF955 移动照明灯塔用于夜间施工现场照明" : "LF955 mobile light tower for night construction site lighting"}
        />

        <ProjectCostLossSection
          title={costLossSection.title}
          subtitle={costLossSection.subtitle}
          cards={costLossSection.cards}
          closingText={costLossSection.closingText}
          transitionText={costLossSection.transitionText}
          ctaLabel={costLossSection.ctaLabel}
          ctaHref="#engineering-process"
        />

        <ProjectRoiEngineeringSection
          eyebrow={zh ? "投资回报优先" : "ROI First"}
          title={zh ? "先看回本，再决定是否采购" : "Know the Payback Before You Buy the Tower"}
          subtitle={zh ? "LF955通常可在30-90天内回本，因为它能减少延误成本、保护租赁收入并提升夜班效率。" : "LF955 pays back within 30-90 days in typical construction projects by reducing delay cost, protecting rental revenue and improving night-shift productivity."}
          comparisonHeader={zh ? "把节省、停机损失、租赁收益和效率放在同一层做决策" : "Daily savings, downtime loss comparison, rental yield and worksite efficiency in one decision layer"}
          cards={roiCards}
          primaryCta={hero.primary}
          secondaryCta={zh ? undefined : hero.tertiary}
          primaryHref="#final-cta"
          secondaryHref="/downloads/LF955-Diesel-Light-Tower-Datasheet.pdf"
          resultLabel={zh ? "结果" : "Result"}
        />

        <section className="bg-[#0B1220] px-6 py-20 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-3xl font-bold">{zh ? "停机成本" : "Cost of Failure"}</h2>
            <p className="mb-10 text-gray-300">
              {zh
                ? "夜间施工照明失败带来的损失，远高于设备本身成本。LF955 设计目标：避免每一次停机事故。"
                : "Night construction lighting failure causes losses far beyond the equipment cost. LF955 is designed to avoid every downtime incident."}
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {failureCostCards.map((item) => (
                <div key={item.title} className="rounded-xl bg-[#111A2E] p-6">
                  <h3 className="text-xl font-semibold text-yellow-400">{item.title}</h3>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProblemEngineeringSection
          eyebrow={zh ? "风险降低" : "Risk Reduction"}
          title={zh ? "先处理会把照明变成业务损失的风险" : "Reduce the Four Risks That Turn Lighting Into a Business Loss"}
          subtitle={zh ? "" : "This page is a decision system for buyers who need to prevent downtime, unsafe night work and uncontrolled operating cost."}
          cards={riskCards}
          labels={zh ? { problem: "问题", impact: "影响", solution: "LF955解决方案" } : undefined}
          ctaLabel={zh ? null : "WhatsApp Engineer"}
          ctaHref="https://wa.me/"
        />

        <ApplicationEngineeringSection
          eyebrow={zh ? "行业场景" : "Industry Scenarios"}
          title={zh ? "对应真实采购场景" : "Matched to the Four Buying Situations That Create Real Demand"}
          subtitle={zh ? "每个场景都给出数量、运行时长和投资回报方向，方便采购按项目价值评估LF955。" : "Each scenario shows expected unit count, operating hours and ROI direction so procurement can evaluate LF955 by project value."}
          cards={scenarioCards}
          labels={{ problem: zh ? "使用数量" : "Use Quantity", impact: zh ? "运行时长" : "Operating Hours", solution: zh ? "投资回报提升" : "ROI Improvement" }}
          ctaLabel={zh ? null : "Get Quote in 2 Hours"}
          ctaHref="#final-cta"
        />

        <section className="bg-white px-6 py-24 text-slate-950 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{zh ? "南非市场" : "South Africa Market"}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{zh ? "专为南非矿山与工程项目打造" : "Designed for South Africa Mining & Construction Projects"}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{zh ? "适用于粉尘、长工时和复杂地形场景，真正影响采购决策的是持续稳定运行与维护成本。" : "Built for sites where dust, long shifts and rough ground make uptime and maintenance cost the real buying criteria."}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {(zh ? ["矿山夜间作业照明", "工程基础设施施工照明", "道路维护与高速公路照明", "停电应急照明"] : ["Mining sites night operations", "Construction infrastructure projects", "Road maintenance & highway lighting", "Emergency power outage lighting"]).map((item) => (
                <article key={item} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 text-black sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-3xl font-bold">{zh ? "真实项目案例" : "Real Project Cases"}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {cases.map((item) => (
                <article key={item.title} className="rounded-xl border border-slate-200 p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm">{item.body}</p>
                  <p className="mt-2 text-sm text-gray-500">{item.roi}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        <ManufacturingProofSection
          eyebrow={zh ? "信任与工厂证明" : "Trust & Factory Proof"}
          title={zh ? "工厂直供，生产过程可见可控" : "Factory-Direct Manufacturer With Visible Production Control"}
          subtitle={zh ? "从钢材切割到最终测试，整条生产链都由工厂直接控制。" : "Factory-direct manufacturer with full production control from steel cutting to final testing."}
          proofPoints={
            zh
              ? ["制造能力：切割、焊接、装配、测试和出口包装", "出口经验：中东 / 非洲 / 澳大利亚工业项目", "ISO认证：采购阶段可供买家核验"]
              : [
                  "Manufacturing capability: steel cutting, welding, assembly, testing and export packing",
                  "Export experience: Middle East / Africa / Australia industrial projects",
                  "ISO certifications: available for buyer verification during procurement",
                ]
          }
          steps={manufacturingSteps}
          ctaLabel={zh ? null : "Request Factory Proof"}
          ctaHref="#final-cta"
        />

        <ProductConfigurationSection
          eyebrow={zh ? "产品配置" : "Product Configuration"}
          title={zh ? "选择方案，不只是看参数" : "Choose a Project System, Not a Static Spec Sheet"}
          subtitle={zh ? "LF955围绕高风险工地、租赁车队、长工时和夜间作业来配置。" : "LF955 is configured around where the tower earns money: harsh sites, rental fleets, long shifts and high-risk night work."}
          groups={configGroups}
          ctaLabel={zh ? null : "Request Custom Configuration"}
          ctaHref="#final-cta"
          optionLabel={zh ? "选择" : "Select"}
        />

        <IndustryComparisonSection
          eyebrow={zh ? "对比模块" : "Comparison Block"}
          title={zh ? "LF955 对比标准照明灯塔" : "LF955 vs Standard Light Tower"}
          subtitle={zh ? "用这个对比表对齐工程、采购和商业决策方对持续稳定运行与投资回报的判断。" : "Use this comparison to align engineering, procurement and commercial decision makers around uptime and ROI."}
          columns={zh ? ["特性", "标准照明灯塔", "LF955", "商业结果"] : ["Feature", "Standard Light Tower", "LF955", "Business Result"]}
          rows={comparisonRows as string[][]}
        />
        <section className="bg-[#0B1220] px-6 py-20 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-3xl font-bold">{zh ? "常见问题" : "Frequently Asked Questions"}</h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {zh ? (
          <section className="bg-white px-6 py-20 text-slate-950 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold">技术资料下载中心</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  获取 LF955 参数表、产品手册、维护指南和 OEM 配置资料，方便采购、工程和租赁团队快速评估。
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {technicalDocuments.map((doc) => (
                  <article key={doc.title} className="flex min-h-[260px] flex-col rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">{doc.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{doc.description}</p>
                    <Link href={doc.href} className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950">
                      {doc.button}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-gray-50 px-6 py-20 text-black sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">{zh ? "下载资料中心" : "Download Technical Resources"}</h2>
              <p className="mt-4 text-gray-600">
                {zh ? "获取 LF955 资料、工程沟通和报价支持。" : "Get the complete LF955 datasheet, configuration sheet and project proposal support."}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/pdf-catalog-generator" className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-black/90">
                {zh ? "下载PDF资料" : "Download Datasheet PDF"}
              </Link>
              <Link href="https://wa.me/" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                {zh ? "WhatsApp联系工程师" : "WhatsApp Engineer"}
              </Link>
              <Link href="#lead-form" className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-white">
                {zh ? "获取报价" : "Request Full Proposal"}
              </Link>
            </div>
          </div>
        </section>

        {zh ? (
          <section className="bg-[#0B1220] px-6 py-20 text-white sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">为什么全球客户选择 LFADJ</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  我们不只提供设备，更提供适合不同国家项目环境的移动照明解决方案。
                </p>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {trustPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-5 text-sm font-semibold leading-7 text-slate-100">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <FinalConversionCTA
          title={zh ? "获取完整项目方案" : "Get Full Project Solution"}
          subtitle={zh ? "发送国家、项目类型和工况，我们会推荐最适合保护持续稳定运行、回本周期和现场效率的 LF955 配置。" : "Send your country, project type and working conditions. We will recommend the LF955 configuration that best protects uptime, payback and site productivity."}
          primaryCta={zh ? "提交需求" : "Get Full Project Solution"}
          secondaryCta={zh ? undefined : "Request Custom Configuration"}
          tertiaryCta={zh ? undefined : "Talk to Engineer (WhatsApp)"}
          href="#lead-form"
          secondaryHref="#lead-form"
          tertiaryHref="https://wa.me/"
          trustTitle={zh ? undefined : "Urgency & Proof"}
          trustBullets={
            zh
              ? undefined
              : ["Typical payback: 30-90 days", "Factory proof available before order", "Configuration support for Middle East, Africa and Australia projects"]
          }
          urgencyLine={zh ? undefined : "High-risk sites should not wait for lighting failure before choosing the right system."}
          showActionButtons={!zh}
          formLabels={zh ? { name: "姓名", country: "国家", projectType: "项目类型", message: "需求说明" } : undefined}
          formOptions={zh ? ["施工现场", "矿山", "租赁公司", "应急照明"] : undefined}
          submitLabel={zh ? "提交需求" : "Request Custom Configuration"}
        />
      </main>
    </>
  );
}
