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
  selectionGuide: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      items: string[];
      linkLabel?: string;
      href?: string;
    }>;
    solutionsLabel: string;
    solutionsHref: string;
    ctaText: string;
    ctaLabel: string;
    ctaHref: string;
  };
  solutionsResources: {
    title: string;
    cards: Array<{
      title: string;
      items: string[];
      linkLabel: string;
      href: string;
    }>;
  };
  productShowcase: {
    title: string;
    items: Array<{
      title: string;
      models: string;
      description: string;
      image?: string;
      imageAlt: string;
      linkLabel: string;
      href: string;
    }>;
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
      title: "Mobile Light Tower Solutions for Construction, Mining and Emergency Projects",
      subtitle:
        "We provide diesel and solar mobile light towers with project-based configuration recommendations according to operating environment and lighting requirements.",
      description:
        "Diesel and solar mobile lighting solutions for construction, mining, oil & gas, rental, emergency and urban projects.",
      primaryCta: "Request a Quote",
      secondaryCta: "View Products",
      primaryHref: "/contact",
      secondaryHref: "/products",
      heroImageAlt: "Construction mobile light tower for project site lighting",
      trustItems: [
        "Project-Based Configuration",
        "Diesel & Solar Solutions",
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
    selectionGuide: {
      title: "How to Choose the Right Mobile Light Tower?",
      subtitle:
        "Different project conditions, operating hours and lighting requirements require different mobile lighting solutions. LFADJ provides suitable light tower configuration recommendations.",
      cards: [
        {
          title: "Application Type",
          items: ["Construction Projects", "Mining Operations", "Oil & Gas Projects", "Emergency Lighting"],
          linkLabel: "Explore Applications",
          href: "/applications",
        },
        {
          title: "Operating Environment",
          items: ["Remote or Off-grid Areas", "Hot and Desert Conditions", "Urban Construction Sites", "Harsh Outdoor Environments"],
        },
        {
          title: "Operating Requirements",
          items: ["Long Operating Hours", "Frequent Relocation", "Temporary Night Lighting", "External Power Requirements"],
        },
        {
          title: "Power System Selection",
          items: [
            "Diesel Solution: High power output for long-duration operation",
            "Solar Solution: Low maintenance solution for off-grid and quiet operation environments",
            "Project Configuration Solution: Select the right configuration based on lighting requirements, operating hours and project conditions",
          ],
        },
      ],
      solutionsLabel: "View Solutions",
      solutionsHref: "/solutions",
      ctaText: "Not sure which light tower fits your project?",
      ctaLabel: "Get Project Configuration",
      ctaHref: "/contact",
    },
    solutionsResources: {
      title: "Explore LFADJ Solutions & Resources",
      cards: [
        {
          title: "Lighting Solutions",
          items: [
            "How to Choose a Mobile Light Tower",
            "Diesel vs Solar Light Tower",
            "Light Tower Power Configuration Guide",
          ],
          linkLabel: "View Solutions",
          href: "/solutions",
        },
        {
          title: "Resources",
          items: ["Product Catalog", "Technical Documents", "FAQ", "Video Resources"],
          linkLabel: "Visit Resources",
          href: "/resources",
        },
        {
          title: "Project Configuration",
          items: ["Project Type", "Operating Environment", "Lighting Requirements", "Operating Hours"],
          linkLabel: "Request a Quote",
          href: "/contact",
        },
        {
          title: "About LFADJ",
          items: ["Mobile lighting industry experience, OEM/ODM project support, project configuration capability and quality management system."],
          linkLabel: "Learn More",
          href: "/about",
        },
      ],
    },
    productShowcase: {
      title: "Choose the Right Mobile Light Tower",
      items: [
        {
          title: "Diesel Mobile Light Tower",
          models: "LF955 / LF968",
          description: "Reliable lighting solutions for construction, mining and long-term outdoor projects.",
          image: "/images/products/lf955/hero/lf955-hero.jpg",
          imageAlt: "LF955 diesel mobile light tower on a white background",
          linkLabel: "View Configurations",
          href: "/products/lf955",
        },
        {
          title: "Solar Mobile Light Tower",
          models: "LF971",
          description: "Low-maintenance solar lighting solutions for remote and off-grid projects.",
          image: "/images/products/lf971/hero/lf971-hero.webp",
          imageAlt: "LF971 solar mobile light tower on a white background",
          linkLabel: "View Configurations",
          href: "/products/lf971",
        },
      ],
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
      title: "Get the Right Mobile Light Tower Configuration for Your Project",
      description:
        "Tell us your project location, operating environment, working hours and lighting requirements. We will recommend a suitable mobile light tower configuration.",
      hint: "Useful details: country or city, project type, daily operating hours, quantity, noise limits and surveillance requirements.",
      buttonLabel: "Request a Quote",
      href: "/contact",
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
      title: "建筑、矿山及应急项目的移动照明灯塔解决方案",
      subtitle:
        "提供柴油和太阳能移动照明灯塔，根据项目环境和照明需求提供配置方案。",
      description:
        "为建筑施工、矿山、石油天然气、设备租赁、应急和城市项目提供柴油及太阳能移动照明方案。",
      primaryCta: "获取项目报价",
      secondaryCta: "查看产品",
      primaryHref: "/contact",
      secondaryHref: "/products",
      heroImageAlt: "建筑施工现场使用的移动照明灯塔",
      trustItems: [
        "根据项目工况配置",
        "柴油与太阳能方案",
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
    selectionGuide: {
      title: "如何选择适合您的移动照明灯塔？",
      subtitle:
        "不同项目环境、运行时间和照明需求，需要不同的移动照明解决方案。LFADJ 根据项目条件提供合适的灯塔配置建议。",
      cards: [
        {
          title: "项目应用场景",
          items: ["建筑施工项目", "矿山连续作业", "油气及能源项目", "应急照明"],
          linkLabel: "查看应用场景",
          href: "/applications",
        },
        {
          title: "运行环境",
          items: ["无电或偏远区域", "高温及沙漠环境", "城市施工环境", "恶劣户外环境"],
        },
        {
          title: "使用需求",
          items: ["长时间连续运行", "高频移动部署", "夜间临时照明", "外接设备供电"],
        },
        {
          title: "动力方案选择",
          items: [
            "柴油方案：高功率，适合长期连续运行",
            "太阳能方案：低维护，适合无电区域和静音环境",
            "项目配置方案：根据照明需求、运行时间和环境条件选择合适配置",
          ],
        },
      ],
      solutionsLabel: "查看解决方案",
      solutionsHref: "/solutions",
      ctaText: "不确定哪种灯塔适合您的项目？",
      ctaLabel: "获取项目配置建议",
      ctaHref: "/contact",
    },
    solutionsResources: {
      title: "探索 LFADJ 解决方案与资源",
      cards: [
        {
          title: "移动照明解决方案",
          items: ["如何选择移动照明灯塔", "柴油与太阳能灯塔比较", "灯塔功率配置指南"],
          linkLabel: "查看解决方案",
          href: "/solutions",
        },
        {
          title: "技术资料与采购指南",
          items: ["产品目录", "技术资料", "常见问题", "视频资料"],
          linkLabel: "访问资源中心",
          href: "/resources",
        },
        {
          title: "获取项目配置建议",
          items: ["项目类型", "使用环境", "照明需求", "运行时间"],
          linkLabel: "获取项目报价",
          href: "/contact",
        },
        {
          title: "关于 LFADJ",
          items: ["移动照明行业经验、OEM/ODM项目支持、项目配置能力和质量管理体系。"],
          linkLabel: "了解 LFADJ",
          href: "/about",
        },
      ],
    },
    productShowcase: {
      title: "选择适合您的移动照明灯塔",
      items: [
        {
          title: "柴油移动照明灯塔",
          models: "LF955 / LF968",
          description: "适用于建筑施工、矿山作业和长期户外项目的可靠照明方案。",
          image: "/images/products/lf955/hero/lf955-hero.jpg",
          imageAlt: "白色背景上的 LF955 柴油移动照明灯塔",
          linkLabel: "查看配置方案",
          href: "/products/lf955",
        },
        {
          title: "太阳能移动照明灯塔",
          models: "LF971",
          description: "适用于偏远地区和无电项目的低维护太阳能照明方案。",
          image: "/images/products/lf971/hero/lf971-hero.webp",
          imageAlt: "白色背景上的LF971太阳能移动照明灯塔",
          linkLabel: "查看配置方案",
          href: "/products/lf971",
        },
      ],
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
      title: "获取适合您项目的移动照明配置方案",
      description:
        "请提供项目所在地、使用环境、运行时间和照明需求，我们将根据项目条件推荐合适的移动照明方案。",
      hint: "建议提供：国家或城市、项目类型、每天运行时间、数量及是否有噪音或监控要求。",
      buttonLabel: "获取项目报价",
      href: "/contact",
    },
  },
};
