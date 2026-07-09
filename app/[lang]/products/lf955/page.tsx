import type { Metadata } from "next";
import { redirect } from "next/navigation";

import {
  HeroSection,
  LF955ConfigurationManufacturingSection,
  LF955ProjectInquirySection,
  ProjectCostLossSection,
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

  const heroV7 = zh
    ? {
        eyebrow: "移动照明工程解决方案",
        title: "LF955 7.5米液压柴油移动照明灯塔",
        headlineSupport: "围绕您的真实项目环境打造",
        productName: undefined,
        subtitle: "我们不是只卖标准灯塔，而是根据您的真实项目使用环境，定制适合的柴油移动照明灯塔方案。",
        summary: undefined,
        primary: "获取我的项目方案",
        secondary: undefined,
        valueBadges: ["高光效 LED 照明", "7–9米升降灯杆", "国际品牌动力", "项目定制配置"],
        trustedLabel: "工程支持",
        trustLogos: ["施工现场", "矿山项目", "油气工程"],
      }
    : {
        eyebrow: "Mobile Lighting Engineering Solution",
        title: "LF955 7.5m Hydraulic Diesel Mobile Light Tower",
        headlineSupport: "Built Around Your Real Project Environment",
        productName: undefined,
        subtitle: "We recommend the right diesel mobile light tower solution based on your real project environment — not just a standard product.",
        summary: undefined,
        primary: "Get My Project Solution",
        secondary: undefined,
        valueBadges: ["High-efficiency LED lighting", "7–9m lifting mast", "International brand engine", "Project-based configuration"],
        trustedLabel: "Engineering Support",
        trustLogos: ["Construction Sites", "Mining Projects", "Oil & Gas"],
      };

  const costLossSection = zh
    ? {
        title: "为什么标准灯塔在真实项目中容易出问题？",
        subtitle: "很多故障不是因为客户使用不当，而是因为配置没有匹配真实工作环境。",
        emphasisText: "不同项目环境，需要不同的移动照明灯塔配置。",
        cards: [
          {
            title: "高温环境",
            problem: "发动机过热、零部件寿命缩短、运行不稳定。",
            solution: "加强散热设计，并根据负载重新匹配发动机功率，让移动照明方案在高温工况下保持稳定。",
          },
          {
            title: "沙漠与风沙环境",
            problem: "滤芯堵塞、通风变差、维护频率增加。",
            solution: "增加防尘保护、优化进气结构，并提供过滤配置。",
          },
          {
            title: "沿海与腐蚀环境",
            problem: "车架腐蚀、螺栓生锈、电气系统故障。",
            solution: "加厚镀锌、防腐喷塑，并加强电气密封。",
          },
          {
            title: "高海拔环境",
            problem: "动力下降、启动困难、照明性能不足。",
            solution: "根据海拔和负载重新匹配发动机与发电机，形成适合现场的移动照明灯塔配置。",
          },
        ],
      }
    : {
        title: "Why Standard Light Towers Fail in Real Projects",
        subtitle: "Most failures come from the wrong configuration for the working environment.",
        emphasisText: "Different project environments need different light tower configurations.",
        cards: [
          {
            title: "High Temperature",
            problem: "Engine overheating, shorter component life, unstable performance.",
            solution: "Improved cooling design and engine-load matching support a more reliable mobile lighting solution in high temperatures.",
          },
          {
            title: "Desert & Dust",
            problem: "Blocked filters, poor ventilation, frequent maintenance.",
            solution: "Dust protection, better air intake, and filtration options.",
          },
          {
            title: "Coastal & Corrosive Areas",
            problem: "Frame corrosion, rusty bolts, electrical failure.",
            solution: "Thicker galvanizing, anti-corrosion coating, and sealed electrical parts.",
          },
          {
            title: "High Altitude",
            problem: "Power drop, difficult starting, insufficient lighting performance.",
            solution: "Engine and generator matching based on altitude and load creates the right light tower configuration for the site.",
          },
        ],
      };

  const coreConfiguration = zh
    ? [
        { label: "灯杆高度", value: "7.5米液压升降灯杆" },
        { label: "照明系统", value: "4 盏 LED 投光灯" },
        { label: "动力系统", value: "国际品牌柴油发动机" },
        { label: "发电系统", value: "匹配式发电机输出" },
        { label: "拖车结构", value: "可移动拖挂式底盘" },
        { label: "应用场景", value: "施工、矿山、租赁、应急照明" },
      ]
    : [
        { label: "Mast height", value: "7.5m hydraulic lifting mast" },
        { label: "Lighting", value: "4 × LED floodlights" },
        { label: "Engine", value: "International brand diesel engine" },
        { label: "Generator", value: "Matched generator output" },
        { label: "Trailer", value: "Towable mobile trailer" },
        { label: "Application", value: "Construction, mining, rental, emergency lighting" },
      ];

  const manufacturingProcess = (zh
    ? [
        ["切割", "/images/products/lf955/manufacturing/02-laser-cutting.png"],
        ["折弯", "/images/products/lf955/manufacturing/03-bending.jpg"],
        ["焊接", "/images/products/lf955/manufacturing/04-welding.jpg"],
        ["打磨", "/images/products/lf955/manufacturing/05-打磨处理.jpg"],
        ["喷塑", "/images/products/lf955/manufacturing/06-anti-corrosion-coating.jpg"],
        ["接线", "/images/products/lf955/manufacturing/07-assembly.jpg"],
        ["检测", "/images/products/lf955/manufacturing/08-testing.jpg"],
        ["出货", "/images/products/lf955/manufacturing/10-shipping.jpg"],
      ]
    : [
        ["Cutting", "/images/products/lf955/manufacturing/02-laser-cutting.png"],
        ["Bending", "/images/products/lf955/manufacturing/03-bending.jpg"],
        ["Welding", "/images/products/lf955/manufacturing/04-welding.jpg"],
        ["Grinding", "/images/products/lf955/manufacturing/05-打磨处理.jpg"],
        ["Powder coating", "/images/products/lf955/manufacturing/06-anti-corrosion-coating.jpg"],
        ["Wiring", "/images/products/lf955/manufacturing/07-assembly.jpg"],
        ["Testing", "/images/products/lf955/manufacturing/08-testing.jpg"],
        ["Delivery", "/images/products/lf955/manufacturing/10-shipping.jpg"],
      ]
  ).map(([title, image]) => ({
    title,
    image,
    imageAlt: zh ? `LF955 移动照明灯塔${title}生产工艺` : `LF955 mobile light tower ${title.toLowerCase()} process`,
  }));

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
          solution: "大面积发光二极管照明有助于提升夜间作业区的可视性和决策速度。",
        },
        {
          title: "燃油效率风险",
          problem: "发动机和照明负载不匹配时，油耗和输出都会变得不稳定。",
          impact: "商业影响：租赁毛利下降，项目成本更难预测。",
          solution: "发动机、灯组和灯杆会按运行时长与现场负载进行匹配。",
        },
        {
          title: "高温粉尘停机风险",
          problem: "超过45摄氏度的高温、矿区粉尘和偏远油田会快速暴露散热和过滤问题。",
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
        { title: "发动机", options: "久保田 / 洋马 / 珀金斯", recommendation: "推荐用于重载矿山、租赁车队和需要持续稳定运行的偏远工业项目。" },
        { title: "灯杆高度", options: "6米 / 7.5米 / 9米", recommendation: "推荐用于施工现场、运输道路和更大作业区，覆盖距离直接影响效率。" },
        { title: "照明功率", options: "300瓦至1000瓦发光二极管灯 / 金属卤化物灯", recommendation: "推荐给需要平衡油耗、亮度和现场安全的买家。" },
        { title: "升降系统", options: "手动 / 液压 / 电动", recommendation: "推荐给需要更快展开和更少人工接触点的租赁车队与承包商。" },
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
        { q: "起订量是多少？", a: "标准起订量为 1 台，并支持项目试单。" },
        { q: "交货期多久？", a: "根据配置和目的国家不同，交货期为 15 至 30 天。" },
        { q: "是否支持代工生产？", a: "支持品牌代工和项目定制。" },
        { q: "LF955 是否适合高温和多尘环境？", a: "LF955 针对超过 45 摄氏度的高温和重度粉尘环境进行了优化。" },
      ]
    : [
        { q: "What is the MOQ?", a: "Standard MOQ is 1 unit, with project trial orders supported." },
        { q: "What is the lead time?", a: "15-30 days depending on configuration and destination country." },
        { q: "Do you support OEM?", a: "OEM branding and project customization are supported." },
        { q: "Is LF955 suitable for hot and dusty environments?", a: "LF955 is optimized for 45C+ heat and dust-heavy environments." },
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
        mobileMenuLabel={zh ? "菜单" : undefined}
      />
      <main className="bg-white text-slate-950">
        <HeroSection
          eyebrow={heroV7.eyebrow}
          title={heroV7.title}
          headlineSupport={heroV7.headlineSupport}
          productName={heroV7.productName}
          subtitle={heroV7.subtitle}
          summary={heroV7.summary}
          primaryCta={heroV7.primary}
          primaryHref="#project-environment-inquiry"
          secondaryCta={heroV7.secondary}
          secondaryHref="#configuration"
          valueBadges={heroV7.valueBadges}
          trustedLabel={heroV7.trustedLabel}
          trustLogos={heroV7.trustLogos}
          imageSrc="/images/products/lf955/applications/road-construction.jpg"
          imageAlt={zh ? "LF955 移动照明灯塔用于夜间施工现场照明" : "LF955 hydraulic diesel mobile light tower working at construction site"}
          featuredMedia={false}
        />

        <ProjectCostLossSection
          title={costLossSection.title}
          subtitle={costLossSection.subtitle}
          cards={costLossSection.cards}
          problemLabel={zh ? "问题" : "Problem"}
          solutionLabel={zh ? "LFADJ 方案" : "LFADJ Solution"}
          emphasisText={costLossSection.emphasisText}
        />

        <LF955ConfigurationManufacturingSection
          title={zh ? "LF955 配置、视频与生产工艺" : "LF955 Configuration, Video & Manufacturing Process"}
          subtitle={
            zh
              ? "一款通过完整生产流程制造的 7.5米液压柴油移动照明灯塔，由具备完整生产能力的移动照明灯塔厂家制造。"
              : "A 7.5m hydraulic diesel mobile light tower built through a complete in-house production process by an experienced light tower manufacturer."
          }
          configurationTitle={zh ? "核心配置" : "Core Configuration"}
          configuration={coreConfiguration}
          videoTitle={zh ? "产品视频" : "Product Video"}
          videoLabel={zh ? "LF955 液压升降与照明测试视频" : "LF955 hydraulic mast lifting and lighting test"}
          videoSrc="/videos/products/lf955/factory-testing.mp4"
          processTitle={zh ? "生产工艺流程" : "Manufacturing Process"}
          processSteps={manufacturingProcess}
        />

        <LF955ProjectInquirySection
          title={zh ? "告诉我们您的项目使用环境" : "Tell Us About Your Project Environment"}
          subtitle={
            zh
              ? "请提供国家、工况和照明需求，我们将为您推荐合适的 LF955 配置方案和移动照明方案。"
              : "Share your country, working conditions, and lighting requirements. We will recommend a suitable LF955 configuration and mobile lighting solution."
          }
          fieldLabels={
            zh
              ? {
                  name: "姓名",
                  contact: "邮箱 / WhatsApp",
                  country: "国家",
                  industry: "行业 / 应用场景",
                  environment: "工作环境",
                  quantity: "需求数量",
                  message: "留言",
                }
              : {
                  name: "Name",
                  contact: "Email / WhatsApp",
                  country: "Country",
                  industry: "Industry / Application",
                  environment: "Working environment",
                  quantity: "Required quantity",
                  message: "Message",
                }
          }
          environmentOptions={
            zh
              ? ["高温环境", "沙漠 / 风沙环境", "沿海 / 腐蚀环境", "高海拔环境", "普通施工现场", "其他"]
              : ["High temperature", "Desert / dusty area", "Coastal / corrosive area", "High altitude", "General construction site", "Other"]
          }
          submitLabel={zh ? "提交我的项目需求" : "Submit My Project Requirement"}
          contactTitle={zh ? "需要更快回复？" : "Need a faster response?"}
          contactText={
            zh
              ? "请发送您的项目地点、工作时长、需求数量和现场环境。"
              : "Send us your project location, working hours, quantity, and environment conditions."
          }
          contactItems={zh ? ["WhatsApp", "电子邮箱", "工厂 / 代工支持"] : ["WhatsApp", "Email", "Factory / OEM support"]}
          trustText={zh ? "24小时内提供免费项目配置建议。" : "Free project recommendation within 24 hours."}
        />

      </main>
    </>
  );
}
