export type HomeLanguage = "en" | "zh";

type HomeDictionary = {
  metadata: {
    title: string;
    description: string;
    canonical: string;
    openGraphTitle: string;
    openGraphDescription: string;
    openGraphUrl: string;
    socialImageAlt: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    heroImageAlt: string;
    trustItems: string[];
  };
  links: {
    products: string;
    contact: string;
    lf6130: string;
  };
  lf6130: {
    title: string;
    description: string;
    image: string;
  };
  authority: {
    eyebrow: string;
    title: string;
    description: string;
    selectionLinkLabel: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  keywordCluster: {
    eyebrow: string;
    title: string;
    description: string;
    evaluationHeading: string;
    evaluationItems: Array<{
      title: string;
      description: string;
    }>;
    solutionsHeading: string;
    solutions: Array<{
      title: string;
      description: string;
      tags: string[];
      linkLabel: string;
      href: string;
    }>;
    industryHeading: string;
    industryLinks: Array<{
      label: string;
      href: string;
    }>;
    confirmation: string;
    ctaLabel: string;
    ctaHref: string;
  };
  productShowcase: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      linkLabel: string;
      href: string;
    }>;
  };
  trustSignals: {
    eyebrow: string;
    title: string;
    description: string;
    processHeading: string;
    process: string[];
    videoTitle: string;
    videoDescription: string;
    videoFallback: string;
    qualityHeading: string;
    qualityItems: Array<{
      title: string;
      description: string;
    }>;
    statement: string;
    ctaLabel: string;
    ctaHref: string;
  };
  productCategories: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  applications: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  seoCluster: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      text: string;
      href: string;
    }>;
  };
  manufacturing: {
    title: string;
    items: string[];
  };
  resources: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    hint: string;
    buttonLabel: string;
    href: string;
  };
};

export const homepageDictionary: Record<HomeLanguage, HomeDictionary> = {
  en: {
    metadata: {
      title: "Mobile Light Tower Manufacturer | Diesel, Solar & Battery | LFADJ",
      description:
        "LFADJ manufactures diesel, solar, battery and hybrid mobile light towers for construction, mining, oil & gas, rental and emergency projects, with project-based configuration and OEM/ODM support.",
      canonical: "https://lfadj.com/en",
      openGraphTitle: "Mobile Light Tower Manufacturer | Diesel, Solar & Battery | LFADJ",
      openGraphDescription:
        "LFADJ manufactures diesel, solar, battery and hybrid mobile light towers for construction, mining, oil & gas, rental and emergency projects, with project-based configuration and OEM/ODM support.",
      openGraphUrl: "https://lfadj.com/en",
      socialImageAlt: "Mobile light tower illuminating a nighttime construction project",
    },
    hero: {
      eyebrow: "MOBILE LIGHT TOWER MANUFACTURER",
      title: "Mobile Light Tower Manufacturer\nfor Construction, Mining and Industrial Projects",
      subtitle:
        "Whether you are purchasing for a new project or replacing equipment with frequent failures and high maintenance requirements, LFADJ evaluates the real operating conditions and helps you identify a more reliable mobile lighting solution.",
      description:
        "Diesel, solar, battery and hybrid mobile lighting solutions for construction, mining, oil & gas, rental, emergency and urban projects.",
      primaryCta: "Discuss My Project",
      secondaryCta: "Explore Light Towers",
      primaryHref: "/en/contact/request-a-quote",
      secondaryHref: "/en/products",
      heroImageAlt: "Mobile light tower providing reliable lighting at a nighttime construction project",
      trustItems: [
        "Project-Based Configuration",
        "Diesel, Solar & Battery Solutions",
        "OEM / ODM Manufacturing",
      ],
    },
    links: {
      products: "/en/products",
      contact: "/en/contact",
      lf6130: "/en/products/lf6130",
    },
    lf6130: {
      title: "LF6130 Mobile Light Tower",
      description:
        "Diesel hydraulic mobile lighting tower for construction and mining jobsites.",
      image: "/images/products/lf6130/main.jpg",
    },
    authority: {
      eyebrow: "COMMON PROCUREMENT RISKS",
      title: "Why Do Some Mobile Light Towers Create Problems After Purchase?",
      description:
        "Selecting a mobile light tower without evaluating project conditions can increase operating cost, maintenance requirements and downtime risk.",
      selectionLinkLabel: "See How We Select the Right Solution",
      items: [
        {
          title: "Wrong Power Selection",
          description:
            "Choosing the wrong diesel, solar or hybrid power solution can increase operating costs and reduce project efficiency.",
        },
        {
          title: "Wrong Configuration for Project Conditions",
          description:
            "Ignoring project conditions such as high temperature, dust, salt air or high altitude can affect long-term equipment reliability.",
        },
        {
          title: "Low Initial Price, Higher Long-Term Cost",
          description:
            "A lower initial price may lead to higher maintenance costs, downtime risks and long-term expenses.",
        },
        {
          title: "Lack of Project Support",
          description:
            "Without proper project analysis and configuration support, equipment may not deliver the expected performance.",
        },
      ],
    },
    keywordCluster: {
      eyebrow: "PROJECT-BASED SELECTION",
      title: "How LFADJ Selects the Right Mobile Lighting Solution",
      description:
        "We evaluate the project before recommending the product. The final solution is based on site conditions, lighting demand, operating reliability and long-term cost.",
      evaluationHeading: "What We Evaluate",
      evaluationItems: [
        {
          title: "Project Location",
          description: "Country, city, worksite location, local maintenance support and available energy supply.",
        },
        {
          title: "Climate & Environment",
          description: "Temperature, dust, rainy seasons, effective sunlight, salt spray, humidity and altitude.",
        },
        {
          title: "Lighting Demand",
          description: "Required coverage area, brightness, lamp power, mast height and lighting direction.",
        },
        {
          title: "Operating Hours",
          description: "Daily working hours, consecutive operating days and whether lighting interruptions are acceptable.",
        },
        {
          title: "Noise & Emission Limits",
          description: "Whether the site is near residential areas, urban worksites, schools, hospitals or other noise-sensitive locations.",
        },
        {
          title: "Deployment & Monitoring",
          description: "Long-term deployment, unattended operation, frequent relocation and any camera surveillance requirements.",
        },
      ],
      solutionsHeading: "Solutions We May Recommend",
      solutions: [
        {
          title: "Diesel Mobile Light Tower",
          description: "For high-output, wide-area and continuous lighting without dependence on sunlight or weather.",
          tags: ["Weather-independent", "High-output lighting", "Wide-area coverage", "Remote and critical projects"],
          linkLabel: "Explore Diesel Light Towers",
          href: "/en/products/diesel-light-towers",
        },
        {
          title: "Solar Mobile Light Tower",
          description: "For low-noise, zero on-site emission projects where solar conditions support reliable charging.",
          tags: ["Low-noise operation", "Zero on-site emissions", "Urban and residential sites", "Sunny long-term projects"],
          linkLabel: "Explore Solar Light Towers",
          href: "/en/products/solar-light-towers",
        },
        {
          title: "Battery Energy Storage Light Tower",
          description: "For quiet, long-term projects with regular charging and no dependence on daily solar generation.",
          tags: ["Quiet operation", "No daily solar dependence", "Long-term deployment", "Charging required"],
          linkLabel: "Explore Battery & Hybrid Solutions",
          href: "/en/products/hybrid-energy-solutions",
        },
        {
          title: "Hybrid Light Tower with Backup Generator",
          description: "For projects with extended rainy or cloudy periods that need solar efficiency and backup reliability.",
          tags: ["Small generator backup", "Rainy and cloudy periods", "Reduced fuel use", "Continuous lighting reliability"],
          linkLabel: "Explore Hybrid Light Tower Solutions",
          href: "/en/products/hybrid-energy-solutions",
        },
        {
          title: "Mobile Surveillance Configuration",
          description: "Mobile surveillance is an optional function that can be added to solar, diesel or battery platforms according to the project.",
          tags: ["Long-term urban monitoring", "Remote site monitoring", "Multiple power platforms", "Low additional power demand"],
          linkLabel: "Explore Mobile Surveillance Solutions",
          href: "/en/products/solar-surveillance-trailers",
        },
      ],
      industryHeading: "Explore Lighting Solutions by Industry",
      industryLinks: [
        { label: "Construction Lighting", href: "/en/solutions/construction-lighting" },
        { label: "Mining Lighting", href: "/en/solutions/mining-lighting" },
        { label: "Oil & Gas Lighting", href: "/en/solutions/oil-gas-lighting" },
        { label: "Rental Fleet Solutions", href: "/en/solutions/rental-fleet-solutions" },
        { label: "Emergency Lighting", href: "/en/solutions/emergency-lighting" },
      ],
      confirmation: "The final configuration is confirmed with the customer before production.",
      ctaLabel: "View All Mobile Lighting Products",
      ctaHref: "/en/products",
    },
    productShowcase: {
      title: "Mobile Lighting Solutions",
      items: [
        {
          title: "Diesel Mobile Light Tower",
          description: "Dependable mobile lighting for demanding worksites and long operating schedules.",
          image: "/images/products/lf955/hero/lf955-hero.jpg",
          imageAlt: "LF955 diesel mobile light tower on a white background",
          linkLabel: "View Product",
          href: "/en/products/lf955",
        },
        {
          title: "Solar Light Tower",
          description: "Low-noise mobile lighting for suitable sunny and long-term project deployments.",
          image: "/images/products/lf6130.png",
          imageAlt: "Yellow LFADJ mobile light tower on a white background",
          linkLabel: "View Product",
          href: "/en/products/lf971",
        },
        {
          title: "Hybrid Light Tower",
          description: "Flexible power options for projects that need extended runtime and backup reliability.",
          image: "/images/products/lf6130.png",
          imageAlt: "Yellow LFADJ mobile light tower on a white background",
          linkLabel: "View Products",
          href: "/en/products/hybrid-energy-solutions",
        },
        {
          title: "Solar Monitoring Trailer",
          description: "Mobile site lighting and surveillance options for remote and unattended projects.",
          image: "/images/products/lf6130.png",
          imageAlt: "Yellow LFADJ mobile light tower on a white background",
          linkLabel: "View Products",
          href: "/en/products/solar-surveillance-trailers",
        },
      ],
    },
    trustSignals: {
      eyebrow: "MANUFACTURING & QUALITY",
      title: "From Project Configuration to Reliable Manufacturing",
      description:
        "As a mobile light tower manufacturer and OEM supplier, LFADJ turns each confirmed custom configuration into controlled manufacturing and quality management processes.",
      processHeading: "Mobile Light Tower Production Process",
      process: [
        "Cutting",
        "Bending",
        "Welding",
        "Grinding",
        "Powder Coating",
        "Wiring",
        "Assembly",
        "Testing",
        "Delivery",
      ],
      videoTitle: "Production, Assembly & Pre-Shipment Testing",
      videoDescription: "The video shows mast operation, assembly and testing. Final specifications follow the confirmed customer configuration.",
      videoFallback: "Your browser does not support video playback.",
      qualityHeading: "Supplier Trust Capabilities",
      qualityItems: [
        {
          title: "OEM / ODM Capability",
          description: "Support customized lighting solutions based on different project requirements.",
        },
        {
          title: "Quality Management System",
          description: "Manufacturing processes follow ISO 9001, ISO 14001 and ISO 45001 management systems.",
        },
        {
          title: "Project-Based Configuration",
          description: "Analyze working conditions and recommend suitable lighting configurations for each project.",
        },
        {
          title: "Factory Manufacturing Capability",
          description: "Integrated manufacturing process including fabrication, assembly and quality inspection.",
        },
      ],
      statement: "Each unit is assembled, function-tested and inspected according to the confirmed project configuration before shipment.",
      ctaLabel: "View Manufacturing Capabilities",
      ctaHref: "/en/manufacturing",
    },
    productCategories: {
      title: "Mobile Light Tower Product Categories",
      items: [
        {
          title: "Diesel Mobile Light Towers",
          description:
            "Reliable diesel-powered lighting towers for long runtime and demanding outdoor jobsites.",
        },
        {
          title: "LED Mobile Light Towers",
          description:
            "Efficient LED tower lighting for high brightness and lower maintenance planning.",
        },
        {
          title: "Portable Mobile Light Towers",
          description:
            "Compact trailer-mounted lighting towers for rental fleets and fast deployment.",
        },
      ],
    },
    applications: {
      eyebrow: "Applications",
      title: "Mobile Lighting Applications",
      items: [
        {
          title: "Construction",
          description:
            "Temporary lighting for roadwork, concrete work and general jobsite operations.",
        },
        {
          title: "Mining",
          description:
            "Outdoor lighting support for mine access roads, extraction areas and maintenance zones.",
        },
        {
          title: "Emergency",
          description:
            "Rapid-deployment lighting for rescue, recovery and municipal emergency response.",
        },
        {
          title: "Rental",
          description:
            "Fleet-ready mobile light tower options for rental companies and contractors.",
        },
      ],
    },
    seoCluster: {
      eyebrow: "SEO Cluster",
      title: "Related Buyer Pathways",
      items: [
        {
          title: "Portable Light Tower Buying Guide",
          text: "Guidance for selecting temporary lighting equipment by application and runtime.",
          href: "/blog/portable-light-tower-buying-guide",
        },
        {
          title: "Mining Site Lighting Solution Guide",
          text: "Planning notes for durable lighting in remote mining environments.",
          href: "/blog/mining-site-lighting-solution-guide",
        },
        {
          title: "Light Tower Rental vs Buying",
          text: "Comparison content for contractors evaluating ownership and rental models.",
          href: "/blog/light-tower-rental-vs-buying",
        },
      ],
    },
    manufacturing: {
      title: "Manufacturing and OEM Support",
      items: [
        "Hydraulic mast configuration",
        "Diesel generator integration",
        "Lighting and control layout",
        "Branding and export support",
      ],
    },
    resources: {
      title: "Mobile Light Tower Resources",
      items: [
        {
          question: "How should buyers evaluate a mobile light tower?",
          answer:
            "Start with runtime, mast height, lamp output, jobsite environment, transport needs and service access.",
        },
        {
          question: "Can LFADJ support OEM projects?",
          answer:
            "LFADJ can discuss OEM / ODM requirements, target market needs and product configuration planning.",
        },
      ],
    },
    cta: {
      eyebrow: "START YOUR PROJECT",
      title: "Tell Us About Your Mobile Lighting Project",
      description:
        "Share the project location, operating environment, daily working hours and lighting requirements. We will review the information and discuss a suitable power system and product configuration with you.",
      hint: "Useful details: country or city, project type, daily operating hours, quantity, noise limits and surveillance requirements.",
      buttonLabel: "Discuss My Project",
      href: "/en/contact/request-a-quote",
    },
  },
  zh: {
    metadata: {
      title: "移动照明灯塔制造商｜柴油、太阳能与储能方案｜LFADJ",
      description:
        "LFADJ 为建筑施工、矿山、石油天然气、设备租赁和应急项目提供柴油、太阳能、储能及混合动力移动照明灯塔，并支持项目选型与 OEM/ODM 定制。",
      canonical: "https://lfadj.com/zh",
      openGraphTitle: "移动照明灯塔制造商｜柴油、太阳能与储能方案｜LFADJ",
      openGraphDescription:
        "LFADJ 为建筑施工、矿山、石油天然气、设备租赁和应急项目提供柴油、太阳能、储能及混合动力移动照明灯塔，并支持项目选型与 OEM/ODM 定制。",
      openGraphUrl: "https://lfadj.com/zh",
      socialImageAlt: "移动照明灯塔为夜间工程项目提供照明",
    },
    hero: {
      eyebrow: "移动照明灯塔制造商",
      title: "移动照明灯塔制造商\n为建筑、矿山和工业项目提供可靠照明方案",
      subtitle:
        "无论是新项目采购，还是现有设备故障频繁、维修需求较多，LFADJ 都会结合真实使用工况，为您匹配更可靠的移动照明方案。",
      description:
        "为建筑施工、矿山、石油天然气、设备租赁、应急和城市项目提供柴油、太阳能、储能及混合动力移动照明方案。",
      primaryCta: "沟通我的项目",
      secondaryCta: "查看移动照明产品",
      primaryHref: "/zh/contact/request-a-quote",
      secondaryHref: "/zh/products",
      heroImageAlt: "移动照明灯塔在夜间工程现场提供可靠照明",
      trustItems: [
        "根据项目工况配置",
        "柴油、太阳能与储能方案",
        "支持 OEM / ODM 制造",
      ],
    },
    links: {
      products: "/zh/products",
      contact: "/zh/contact",
      lf6130: "/zh/products/lf6130",
    },
    lf6130: {
      title: "LF6130 移动照明灯塔",
      description:
        "适用于建筑和矿山工地的柴油液压移动照明灯塔。",
      image: "/images/products/lf6130/main.jpg",
    },
    authority: {
      eyebrow: "常见采购风险",
      title: "为什么有些移动照明灯塔买回去后问题不断？",
      description:
        "移动照明灯塔选型不当，可能让设备与项目需求和使用环境不匹配，并增加停机风险与维护成本。",
      selectionLinkLabel: "了解我们如何选择合适方案",
      items: [
        {
          title: "动力方案选择错误",
          description:
            "柴油、太阳能或混合动力选择不匹配，可能导致运行成本增加或无法满足项目需求。",
        },
        {
          title: "项目环境不匹配",
          description:
            "没有充分考虑高温、风沙、盐雾或高海拔环境，可能影响设备长期可靠运行。",
        },
        {
          title: "低采购价格带来的长期成本",
          description:
            "初始采购成本较低，但维修、停机和维护可能增加长期投入。",
        },
        {
          title: "缺少专业项目支持",
          description:
            "没有根据项目需求选择合适配置，可能导致设备无法发挥最佳性能。",
        },
      ],
    },
    keywordCluster: {
      eyebrow: "基于项目的选型",
      title: "LFADJ 如何为项目选择合适的移动照明方案？",
      description:
        "我们不是先推荐产品，而是先了解项目所在地、环境和真实使用需求，再综合确定动力方式、照明配置和防护方案。",
      evaluationHeading: "我们评估的项目条件",
      evaluationItems: [
        {
          title: "项目所在地",
          description: "国家、城市、施工位置以及当地维护和能源补给条件。",
        },
        {
          title: "气候与环境",
          description: "温度、风沙、雨季、有效日照、盐雾、湿度和海拔。",
        },
        {
          title: "照明需求",
          description: "需要照明的面积、亮度、灯具功率、灯杆高度和照射方向。",
        },
        {
          title: "使用时间",
          description: "每天工作时间、连续运行天数以及是否允许照明中断。",
        },
        {
          title: "噪音与排放限制",
          description: "是否位于居民区、城市工地、学校、医院或其他噪音敏感区域。",
        },
        {
          title: "部署与监控",
          description: "是否长期部署、无人值守、频繁移动或需要摄像监控功能。",
        },
      ],
      solutionsHeading: "可能推荐的解决方案",
      solutions: [
        {
          title: "柴油移动照明灯塔",
          description: "适合高功率、大范围、连续运行，并且不能受天气影响的矿山、油气、野外施工和应急项目。",
          tags: ["全天候运行", "高功率照明", "大范围覆盖", "野外与关键项目"],
          linkLabel: "查看柴油移动照明灯塔",
          href: "/zh/products/diesel-light-towers",
        },
        {
          title: "太阳能移动照明灯塔",
          description: "适合居民区、城市工地及日照条件较好的长期部署项目，运行无噪音、无现场碳排放。",
          tags: ["无噪音", "零现场排放", "城市与居民区", "日照充足的长期项目"],
          linkLabel: "查看太阳能移动照明灯塔",
          href: "/zh/products/solar-light-towers",
        },
        {
          title: "储能移动照明灯塔",
          description: "适合具备稳定充电条件、要求安静运行，并且不希望依赖当天日照的长期项目。",
          tags: ["安静运行", "不依赖当天日照", "长期部署", "需要充电条件"],
          linkLabel: "查看储能与混合动力方案",
          href: "/zh/products/hybrid-energy-solutions",
        },
        {
          title: "太阳能 + 备用发电机混合动力灯塔",
          description: "适合雨季或连续阴雨天气较长，同时希望降低燃油使用并保留备用供电能力的项目。",
          tags: ["小型机组补充", "雨季与阴雨天气", "降低燃油使用", "提高连续照明可靠性"],
          linkLabel: "查看混合动力照明方案",
          href: "/zh/products/hybrid-energy-solutions",
        },
        {
          title: "移动监控功能配置",
          description: "移动监控是可选功能。城市长期监控通常适合太阳能平台；野外项目可在柴油或储能灯塔上增加摄像系统。",
          tags: ["城市长期监控", "野外项目监控", "可搭配不同动力平台", "附加功率需求较小"],
          linkLabel: "查看移动监控方案",
          href: "/zh/products/solar-surveillance-trailers",
        },
      ],
      industryHeading: "查看不同行业的照明解决方案",
      industryLinks: [
        { label: "建筑施工照明", href: "/zh/solutions/construction-lighting" },
        { label: "矿山照明", href: "/zh/solutions/mining-lighting" },
        { label: "石油与天然气照明", href: "/zh/solutions/oil-gas-lighting" },
        { label: "租赁设备解决方案", href: "/zh/solutions/rental-fleet-solutions" },
        { label: "应急照明", href: "/zh/solutions/emergency-lighting" },
      ],
      confirmation: "最终配置将在生产前与客户确认。",
      ctaLabel: "查看全部移动照明产品",
      ctaHref: "/zh/products",
    },
    productShowcase: {
      title: "移动照明产品方案",
      items: [
        {
          title: "柴油移动照明灯塔",
          description: "为高强度作业现场和长时间运行项目提供可靠移动照明。",
          image: "/images/products/lf955/hero/lf955-hero.jpg",
          imageAlt: "白色背景上的 LF955 柴油移动照明灯塔",
          linkLabel: "查看产品",
          href: "/zh/products/lf955",
        },
        {
          title: "太阳能移动照明灯塔",
          description: "适用于日照条件良好且需要低噪音长期部署的项目。",
          image: "/images/products/lf6130.png",
          imageAlt: "白色背景上的黄色 LFADJ 移动照明灯塔",
          linkLabel: "查看产品",
          href: "/zh/products/lf971",
        },
        {
          title: "混合动力移动照明灯塔",
          description: "为需要延长运行时间和备用供电的项目提供灵活动力选择。",
          image: "/images/products/lf6130.png",
          imageAlt: "白色背景上的黄色 LFADJ 移动照明灯塔",
          linkLabel: "查看产品",
          href: "/zh/products/hybrid-energy-solutions",
        },
        {
          title: "太阳能监控拖车",
          description: "为偏远和无人值守项目提供移动现场照明与监控选择。",
          image: "/images/products/lf6130.png",
          imageAlt: "白色背景上的黄色 LFADJ 移动照明灯塔",
          linkLabel: "查看产品",
          href: "/zh/products/solar-surveillance-trailers",
        },
      ],
    },
    trustSignals: {
      eyebrow: "制造与质量",
      title: "从项目配置到可靠制造",
      description:
        "作为移动照明灯塔制造商和 OEM 定制供应商，LFADJ 将确认后的项目配置转化为规范的制造与质量管理流程。",
      processHeading: "移动照明灯塔生产流程",
      process: [
        "切割",
        "折弯",
        "焊接",
        "打磨",
        "喷塑",
        "接线",
        "装配",
        "检测",
        "出货",
      ],
      videoTitle: "生产、装配与出货前检测视频",
      videoDescription: "视频展示灯塔升降、装配及检测过程，具体配置以客户确认方案为准。",
      videoFallback: "您的浏览器不支持视频播放。",
      qualityHeading: "供应商信任能力",
      qualityItems: [
        {
          title: "OEM / ODM 定制能力",
          description: "根据不同项目需求提供定制化移动照明方案。",
        },
        {
          title: "质量管理体系",
          description: "生产过程符合 ISO 9001、ISO 14001 和 ISO 45001 管理体系要求。",
        },
        {
          title: "项目化配置能力",
          description: "根据项目使用环境分析需求，匹配合适的移动照明配置。",
        },
        {
          title: "工厂制造能力",
          description: "具备结构制造、装配和质量检测的一体化生产能力。",
        },
      ],
      statement: "每台设备均按照客户确认的项目配置完成装配、功能检查和出货前检测。",
      ctaLabel: "查看制造能力",
      ctaHref: "/zh/manufacturing",
    },
    productCategories: {
      title: "移动照明灯塔产品分类",
      items: [
        {
          title: "柴油移动照明灯塔",
          description:
            "适合长时间运行和高强度户外工地的柴油动力照明灯塔。",
        },
        {
          title: "LED 移动照明灯塔",
          description:
            "面向高亮度和低维护需求的高效 LED 塔式照明方案。",
        },
        {
          title: "便携式移动照明灯塔",
          description:
            "适合租赁车队和快速部署的紧凑拖车式照明灯塔。",
        },
      ],
    },
    applications: {
      eyebrow: "应用场景",
      title: "移动照明应用",
      items: [
        {
          title: "建筑施工",
          description:
            "适用于道路施工、混凝土作业和常规工地运行的临时照明。",
        },
        {
          title: "矿山作业",
          description:
            "支持矿区道路、开采区域和维护区域的户外照明。",
        },
        {
          title: "应急救援",
          description:
            "用于救援、恢复和市政应急响应的快速部署照明。",
        },
        {
          title: "设备租赁",
          description:
            "面向租赁公司和承包商的车队型移动照明灯塔选择。",
        },
      ],
    },
    seoCluster: {
      eyebrow: "SEO 集群",
      title: "相关采购路径",
      items: [
        {
          title: "便携式照明灯塔采购指南",
          text: "按应用场景和运行时间选择临时照明设备的指南。",
          href: "/zh/blog/portable-light-tower-buying-guide",
        },
        {
          title: "矿山现场照明解决方案指南",
          text: "面向远程矿山环境的耐用照明规划建议。",
          href: "/zh/blog/mining-site-lighting-solution-guide",
        },
        {
          title: "照明灯塔租赁与购买对比",
          text: "帮助承包商评估自购和租赁模式的对比内容。",
          href: "/zh/blog/light-tower-rental-vs-buying",
        },
      ],
    },
    manufacturing: {
      title: "制造与 OEM 支持",
      items: [
        "液压升降桅杆配置",
        "柴油发电机集成",
        "灯具与控制系统布局",
        "品牌和出口支持",
      ],
    },
    resources: {
      title: "移动照明灯塔资源",
      items: [
        {
          question: "采购方应如何评估移动照明灯塔？",
          answer:
            "建议从运行时间、桅杆高度、灯具输出、工地环境、运输需求和维护便利性开始评估。",
        },
        {
          question: "LFADJ 是否支持 OEM 项目？",
          answer:
            "LFADJ 可沟通 OEM / ODM 需求、目标市场要求和产品配置规划。",
        },
      ],
    },
    cta: {
      eyebrow: "开始项目咨询",
      title: "告诉我们您的移动照明项目需求",
      description:
        "请提供项目所在地、使用环境、每天工作时间和照明需求，我们将根据这些信息与您沟通合适的动力方式和产品配置。",
      hint: "建议提供：国家或城市、项目类型、每天运行时间、数量及是否有噪音或监控要求。",
      buttonLabel: "提交项目需求",
      href: "/zh/contact/request-a-quote",
    },
  },
};
