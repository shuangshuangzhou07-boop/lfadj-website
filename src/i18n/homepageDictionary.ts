export type HomeLanguage = "en" | "zh";

type HomeDictionary = {
  metadata: {
    title: string;
    description: string;
    canonical: string;
    openGraphTitle: string;
    openGraphDescription: string;
    openGraphUrl: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
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
    paragraphs: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  keywordCluster: {
    eyebrow: string;
    title: string;
    links: Array<{
      title: string;
      text: string;
      href: string;
      priority: string;
    }>;
  };
  trustSignals: {
    eyebrow: string;
    title: string;
    items: string[];
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
    primaryCta: string;
    secondaryCta: string;
    whatsappTitle: string;
    whatsappText: string;
    emailTitle: string;
    emailText: string;
  };
};

export const homepageDictionary: Record<HomeLanguage, HomeDictionary> = {
  en: {
    metadata: {
      title: "LFADJ Mobile Light Tower Manufacturer",
      description:
        "LFADJ is a professional manufacturer of mobile light towers for construction, mining, and emergency applications. OEM/ODM available.",
      canonical: "https://lfadj.com/en",
      openGraphTitle: "LFADJ Mobile Light Tower Manufacturer",
      openGraphDescription:
        "Industrial lighting solutions for global construction and mining projects.",
      openGraphUrl: "https://lfadj.com/en",
    },
    hero: {
      eyebrow: "LFADJ",
      title: "Professional Mobile Lighting Solutions",
      subtitle: "Mobile lighting tower manufacturer",
      description:
        "Lighting solutions for construction, mining, emergency and rental industries.",
      primaryCta: "View LF6130",
      secondaryCta: "Contact",
      imageAlt: "LF6130 mobile lighting tower",
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
      eyebrow: "Manufacturer Authority",
      title: "Industrial Mobile Light Tower Expertise",
      description:
        "LFADJ builds mobile light tower pages around product facts, application needs, OEM support and export-ready buyer communication.",
      paragraphs: [
        "LFADJ focuses on mobile light tower manufacturing for construction, mining, emergency response and rental fleet buyers.",
        "The homepage connects buyers to LF6130 product details, application pages, OEM support and supporting technical resources.",
      ],
      primaryCta: "View LF6130",
      secondaryCta: "SEO Strategy",
    },
    keywordCluster: {
      eyebrow: "Keyword Cluster",
      title: "Most Important Products and Ranking Pages",
      links: [
        {
          title: "LF6130 Mobile Light Tower",
          text: "Primary authority page for the LF6130 diesel hydraulic mobile lighting tower.",
          href: "/en/products/lf6130",
          priority: "Highest Weight",
        },
        {
          title: "Diesel Mobile Light Tower",
          text: "Category page for diesel-powered temporary jobsite lighting.",
          href: "/products/diesel-light-tower",
          priority: "Product Cluster",
        },
        {
          title: "Construction Site Lighting",
          text: "Application page for mobile light tower use on construction projects.",
          href: "/applications/construction-site-lighting",
          priority: "Application Cluster",
        },
      ],
    },
    trustSignals: {
      eyebrow: "Trust Signals",
      title: "Built for Industrial B2B Buyers",
      items: [
        "Factory direct communication",
        "OEM / ODM project support",
        "Export-oriented coordination",
        "Application-driven product planning",
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
      eyebrow: "Contact",
      title: "Get Professional Lighting Solution",
      description:
        "Contact LFADJ for product recommendations, specifications and quotation support.",
      primaryCta: "Contact Us",
      secondaryCta: "Products",
      whatsappTitle: "WhatsApp",
      whatsappText: "Send product model, quantity and target application.",
      emailTitle: "Email",
      emailText: "Request specifications, quotation details and OEM options.",
    },
  },
  zh: {
    metadata: {
      title: "LFADJ 移动照明灯塔制造商",
      description:
        "LFADJ 是专业移动照明灯塔制造商，服务建筑施工、矿山、应急和设备租赁行业，支持 OEM/ODM。",
      canonical: "https://lfadj.com/zh",
      openGraphTitle: "LFADJ 移动照明灯塔制造商",
      openGraphDescription:
        "面向全球建筑施工和矿山项目的工业移动照明解决方案。",
      openGraphUrl: "https://lfadj.com/zh",
    },
    hero: {
      eyebrow: "LFADJ",
      title: "专业移动照明解决方案",
      subtitle: "移动照明灯塔制造商",
      description:
        "为建筑施工、矿山作业、应急救援和设备租赁行业提供照明解决方案。",
      primaryCta: "查看 LF6130",
      secondaryCta: "联系我们",
      imageAlt: "LF6130 移动照明灯塔",
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
      eyebrow: "制造商实力",
      title: "工业移动照明灯塔专业能力",
      description:
        "LFADJ 围绕产品参数、应用场景、OEM 支持和出口型采购沟通建设移动照明灯塔内容体系。",
      paragraphs: [
        "LFADJ 专注于面向建筑施工、矿山、应急救援和租赁车队采购方的移动照明灯塔制造。",
        "首页将采购方连接到 LF6130 产品详情、应用场景、OEM 支持和相关技术资源。",
      ],
      primaryCta: "查看 LF6130",
      secondaryCta: "SEO 策略",
    },
    keywordCluster: {
      eyebrow: "关键词集群",
      title: "重点产品与排名页面",
      links: [
        {
          title: "LF6130 移动照明灯塔",
          text: "LF6130 柴油液压移动照明灯塔核心产品页面。",
          href: "/zh/products/lf6130",
          priority: "最高权重",
        },
        {
          title: "柴油移动照明灯塔",
          text: "面向临时工地照明的柴油动力产品分类页面。",
          href: "/products/diesel-light-tower",
          priority: "产品集群",
        },
        {
          title: "建筑工地照明",
          text: "移动照明灯塔在建筑施工项目中的应用页面。",
          href: "/applications/construction-site-lighting",
          priority: "应用集群",
        },
      ],
    },
    trustSignals: {
      eyebrow: "信任信号",
      title: "面向工业 B2B 采购方",
      items: [
        "工厂直接沟通",
        "OEM / ODM 项目支持",
        "出口项目协同",
        "按应用场景规划产品",
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
      eyebrow: "联系",
      title: "获取专业照明方案",
      description:
        "联系 LFADJ 获取产品推荐、规格参数和报价支持。",
      primaryCta: "联系我们",
      secondaryCta: "产品中心",
      whatsappTitle: "WhatsApp",
      whatsappText: "发送产品型号、数量和目标应用场景。",
      emailTitle: "电子邮件",
      emailText: "索取规格、报价信息和 OEM 选项。",
    },
  },
};
