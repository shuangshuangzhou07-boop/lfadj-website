const siteUrl = "https://lfadj.com";

function seoMetadata({
  title,
  description,
  lang,
  path,
}: {
  title: string;
  description: string;
  lang: "en" | "zh";
  path: "" | "products" | "products/lf6130" | "about" | "contact";
}) {
  const localizedPath = path ? `/${path}` : "";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${lang}${localizedPath}`,
      languages: {
        en: `/en${localizedPath}`,
        zh: `/zh${localizedPath}`,
      },
    },
  };
}

export const translations = {
  en: {
    metadata: {
      root: seoMetadata({
        title: "LFADJ Professional Mobile Lighting Towers",
        description:
          "LFADJ manufactures mobile lighting towers for construction, mining, emergency response and equipment rental industries.",
        lang: "en",
        path: "",
      }),
      home: seoMetadata({
        title: "Professional Mobile Lighting Towers | LFADJ",
        description:
          "LFADJ manufactures professional mobile lighting towers for construction, mining, emergency and rental industries.",
        lang: "en",
        path: "",
      }),
      products: seoMetadata({
        title: "Mobile Lighting Products | LFADJ",
        description:
          "Explore LFADJ diesel, solar, hybrid, surveillance, portable and smart mobile lighting tower products.",
        lang: "en",
        path: "products",
      }),
      lf6130: seoMetadata({
        title: "LF6130 LED Hydraulic Mobile Lighting Tower | LFADJ",
        description:
          "LF6130 is a 9m hydraulic mast mobile lighting tower with 4x400W LED, Kubota Z482 engine, IP65 protection and 48h runtime.",
        lang: "en",
        path: "products/lf6130",
      }),
      about: seoMetadata({
        title: "About LFADJ | Mobile Lighting Tower Manufacturer",
        description:
          "Learn about LFADJ, a manufacturer focused on professional mobile lighting tower solutions for global B2B markets.",
        lang: "en",
        path: "about",
      }),
      contact: seoMetadata({
        title: "Contact LFADJ | Request Mobile Lighting Tower Quote",
        description:
          "Contact LFADJ for mobile lighting tower specifications, pricing, OEM / ODM support and project consultation.",
        lang: "en",
        path: "contact",
      }),
    },
    common: {
      brand: "LFADJ",
      languageSwitch: "EN / 中文",
      menu: "Menu",
      startChat: "Get Quote",
      products: "Products",
      contact: "Contact",
      viewDetails: "View Details",
      viewProducts: "View Products",
      requestQuote: "Request Quote",
      contactUs: "Contact Us",
      downloadDatasheet: "Download Datasheet",
      checkmark: "✓",
      arrow: "→",
    },
    nav: {
      products: "Products",
      applications: "Applications",
      solutions: "Solutions",
      oem: "OEM",
      manufacturing: "Manufacturing",
      about: "About Us",
      contact: "Contact Us",
    },
    home: {
      eyebrow: "LFADJ",
      heroTitle: "Professional Mobile Lighting Solutions",
      heroSubtitle: "Mobile lighting tower manufacturer",
      description:
        "Lighting Solutions for Construction, Mining, Emergency and Rental Industries.",
      productRangeTitle: "Our Product Range",
      imageAlt: "LF6130 mobile lighting tower",
      categories: [
        {
          title: "Diesel",
          description:
            "Reliable diesel mobile light towers for demanding jobsites.",
        },
        {
          title: "Solar",
          description:
            "Clean energy lighting towers for quiet temporary lighting.",
        },
        {
          title: "Hybrid",
          description: "Fuel-saving lighting systems for remote operations.",
        },
        {
          title: "Surveillance",
          description: "Lighting towers with site monitoring applications.",
        },
        {
          title: "Portable",
          description: "Compact lighting products for fast deployment.",
        },
        {
          title: "Smart",
          description: "Intelligent lighting systems for easier field control.",
        },
      ],
    },
    productsPage: {
      eyebrow: "PRODUCTS",
      heroTitle: "Mobile Lighting Products",
      heroLead: "Professional Lighting Solutions",
      heroMarkets: "for Construction · Mining · Emergency · Rental",
      description:
        "Explore LFADJ mobile light towers designed for construction, mining, emergency and rental industries.",
      browseProducts: "Browse Products",
      productRangeLabel: "Product Range",
      productRangeTitle: "Our Product Range",
      imageAlt: "LF6130 LED hydraulic mobile lighting tower",
      tabs: ["Diesel", "Solar", "Hybrid", "Surveillance", "Portable", "Smart"],
      trustNumbers: [
        { value: "15+", label: "Years Experience" },
        { value: "50+", label: "Export Countries" },
        { value: "1000+", label: "Projects Delivered" },
        { value: "OEM / ODM", label: "Available" },
      ],
      lf6130: {
        model: "LF6130",
        title: "LED Hydraulic Mobile Lighting Tower",
        highlights: [
          "4x400W LED",
          "Kubota Z482",
          "9m Hydraulic Mast",
          "IP65",
        ],
        trustLabels: ["OEM / ODM Available", "Made in China", "Manufacturer"],
      },
      categories: [
        {
          icon: "D",
          title: "Diesel Mobile Light Towers",
          description:
            "Reliable diesel-powered lighting towers for long runtime and demanding outdoor jobsites.",
          features: ["Hydraulic Mast", "Kubota Engine", "Trailer Mounted"],
          count: "6 Products",
        },
        {
          icon: "S",
          title: "Solar Mobile Light Towers",
          description:
            "Clean energy lighting solutions designed for quiet and sustainable temporary worksites.",
          features: ["Solar Powered", "Battery Backup", "Low Noise"],
          count: "4 Products",
        },
        {
          icon: "H",
          title: "Hybrid Mobile Light Towers",
          description:
            "Fuel-saving systems combining diesel power and renewable energy for remote operations.",
          features: ["Diesel + Solar", "Fuel Saving", "Remote Sites"],
          count: "3 Products",
        },
        {
          icon: "V",
          title: "Surveillance Light Towers",
          description:
            "Mobile lighting towers integrated with monitoring systems for safety and site security.",
          features: ["Lighting + CCTV", "Remote Monitoring", "Public Safety"],
          count: "3 Products",
        },
        {
          icon: "P",
          title: "Portable Light Towers",
          description:
            "Compact and flexible mobile lighting solutions for fast deployment and transport.",
          features: ["Compact Design", "Quick Setup", "Battery Powered"],
          count: "5 Products",
        },
        {
          icon: "M",
          title: "Smart Mobile Light Towers",
          description:
            "Intelligent light towers designed for easier operation, safer control and smart monitoring.",
          features: ["Remote Control", "Smart Monitoring", "Automatic Mast"],
          count: "4 Products",
        },
      ],
    },
    lf6130Page: {
      eyebrow: "LFADJ Diesel Mobile Light Tower",
      title: "LF6130 LED Hydraulic Mobile Lighting Tower",
      description:
        "9m hydraulic mast mobile lighting tower powered by Kubota engine, designed for construction, mining, emergency and rental applications.",
      imageAlt: "LF6130 LED hydraulic mobile lighting tower",
      overviewLabel: "Product Overview",
      overviewTitle: "Professional Mobile Lighting Solution",
      overviewText:
        "The LF6130 is a heavy-duty LED hydraulic mobile lighting tower designed for reliable illumination in demanding outdoor environments. It provides high brightness, stable performance and long runtime for construction sites, mining operations, emergency rescue, municipal projects and rental fleets.",
      technicalLabel: "Technical Data",
      technicalTitle: "Technical Specifications",
      featuresTitle: "Key Features",
      featureText:
        "Built for reliable field operation and demanding industrial lighting requirements.",
      applicationsTitle: "Applications",
      advantageLabel: "LFADJ Advantage",
      whyTitle: "Why Choose LF6130",
      ctaTitle: "Need LF6130 for your project?",
      ctaText:
        "Contact LFADJ to get specifications, pricing and lighting solution support.",
      highlights: [
        "4x400W LED",
        "Kubota Z482 Engine",
        "9m Hydraulic Mast",
        "IP65 Protection",
        "48h Runtime",
      ],
      specifications: [
        ["Model", "LF6130"],
        ["Product Type", "LED Hydraulic Mobile Lighting Tower"],
        ["Lighting Power", "4x400W LED"],
        ["Mast Type", "Hydraulic"],
        ["Mast Height", "9 m"],
        ["Mast Rotation", "360°"],
        ["Beam Angle", "0-90°"],
        ["Wind Resistance", "Force 8 / 75 km/h"],
        ["Engine", "Kubota Z482"],
        ["Fuel", "Diesel"],
        ["Rated Power", "6.4 kW"],
        ["Voltage", "220V"],
        ["Frequency", "50Hz / 60Hz"],
        ["Protection Level", "IP65"],
        ["Runtime", "48 hours"],
      ],
      features: [
        "High Brightness LED Lighting",
        "9m Hydraulic Mast",
        "Kubota Diesel Engine",
        "360° Lighting Coverage",
        "Outdoor Weather Protection",
        "Long Runtime Performance",
      ],
      applications: [
        "Construction Sites",
        "Mining Operations",
        "Emergency Rescue",
        "Municipal Projects",
        "Equipment Rental",
      ],
      reasons: [
        "Reliable industrial-grade design",
        "Fast deployment on job sites",
        "Lower maintenance cost",
        "Suitable for OEM / ODM customization",
      ],
    },
    about: {
      eyebrow: "ABOUT LFADJ",
      title: "Professional mobile lighting tower manufacturer",
      description:
        "LFADJ provides mobile lighting tower products and project support for construction, mining, emergency response, municipal projects and equipment rental companies.",
      strengths: [
        "Mobile lighting tower manufacturing",
        "Industrial B2B product development",
        "OEM / ODM customization support",
        "Export-oriented project service",
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Request mobile lighting solution support",
      description:
        "Contact LFADJ to get product specifications, pricing and support for construction, mining, emergency or rental projects.",
      methods: ["WhatsApp", "Email", "LinkedIn", "AI Assistant"],
    },
  },
  zh: {
    metadata: {
      root: seoMetadata({
        title: "LFADJ 专业移动照明灯塔制造商",
        description:
          "LFADJ 为建筑施工、矿山作业、应急救援和设备租赁行业提供移动照明灯塔解决方案。",
        lang: "zh",
        path: "",
      }),
      home: seoMetadata({
        title: "专业移动照明灯塔制造商 | LFADJ",
        description:
          "LFADJ 为建筑施工、矿山作业、应急救援和设备租赁行业提供专业移动照明灯塔。",
        lang: "zh",
        path: "",
      }),
      products: seoMetadata({
        title: "移动照明产品 | LFADJ",
        description:
          "浏览 LFADJ 柴油、太阳能、混合动力、监控、便携式和智能移动照明灯塔产品。",
        lang: "zh",
        path: "products",
      }),
      lf6130: seoMetadata({
        title: "LF6130 LED 液压移动照明灯塔 | LFADJ",
        description:
          "LF6130 是 9 米液压升降移动照明灯塔，配置 4x400W LED、Kubota Z482 发动机、IP65 防护和 48 小时运行时间。",
        lang: "zh",
        path: "products/lf6130",
      }),
      about: seoMetadata({
        title: "关于 LFADJ | 移动照明灯塔制造商",
        description:
          "了解 LFADJ，专注于为全球 B2B 市场提供专业移动照明灯塔产品和解决方案。",
        lang: "zh",
        path: "about",
      }),
      contact: seoMetadata({
        title: "联系 LFADJ | 获取移动照明灯塔报价",
        description:
          "联系 LFADJ 获取移动照明灯塔规格、价格、OEM / ODM 定制支持和项目咨询。",
        lang: "zh",
        path: "contact",
      }),
    },
    common: {
      brand: "LFADJ",
      languageSwitch: "EN / 中文",
      menu: "菜单",
      startChat: "开始咨询",
      products: "产品中心",
      contact: "联系我们",
      viewDetails: "查看详情",
      viewProducts: "查看产品",
      requestQuote: "获取报价",
      contactUs: "联系我们",
      downloadDatasheet: "下载资料",
      checkmark: "✓",
      arrow: "→",
    },
    nav: {
      products: "产品中心",
      applications: "应用场景",
      solutions: "解决方案",
      oem: "OEM定制",
      manufacturing: "生产制造",
      about: "关于我们",
      contact: "联系我们",
    },
    home: {
      eyebrow: "LFADJ",
      heroTitle: "专业移动照明解决方案",
      heroSubtitle: "移动照明灯塔制造商",
      description:
        "为建筑施工、矿山作业、应急救援和设备租赁行业提供照明解决方案。",
      productRangeTitle: "产品系列",
      imageAlt: "LF6130 移动照明灯塔",
      categories: [
        {
          title: "柴油照明灯塔",
          description: "适用于高强度户外工地的可靠柴油移动照明产品。",
        },
        {
          title: "太阳能照明灯塔",
          description: "适用于临时照明场景的清洁能源照明方案。",
        },
        {
          title: "混合动力照明灯塔",
          description: "面向远程作业的节能型移动照明系统。",
        },
        {
          title: "监控照明灯塔",
          description: "结合现场照明与安全监控的移动照明方案。",
        },
        {
          title: "便携式照明灯塔",
          description: "适合快速部署和灵活运输的紧凑照明产品。",
        },
        {
          title: "智能照明系统",
          description: "便于现场控制和管理的智能移动照明系统。",
        },
      ],
    },
    productsPage: {
      eyebrow: "PRODUCTS",
      heroTitle: "移动照明产品",
      heroLead: "专业照明解决方案",
      heroMarkets: "面向建筑施工 · 矿山作业 · 应急救援 · 设备租赁",
      description:
        "浏览 LFADJ 移动照明灯塔产品，适用于建筑施工、矿山作业、应急救援和设备租赁行业。",
      browseProducts: "浏览产品",
      productRangeLabel: "产品系列",
      productRangeTitle: "产品系列",
      imageAlt: "LF6130 LED 液压移动照明灯塔",
      tabs: ["柴油", "太阳能", "混合动力", "监控", "便携式", "智能"],
      trustNumbers: [
        { value: "15+", label: "年行业经验" },
        { value: "50+", label: "出口国家" },
        { value: "1000+", label: "项目交付" },
        { value: "OEM / ODM", label: "支持定制" },
      ],
      lf6130: {
        model: "LF6130",
        title: "LED 液压移动照明灯塔",
        highlights: ["4x400W LED", "Kubota Z482", "9m 液压升降杆", "IP65"],
        trustLabels: ["支持 OEM / ODM", "中国制造", "源头制造商"],
      },
      categories: [
        {
          icon: "D",
          title: "柴油移动照明灯塔",
          description: "适用于长时间运行和高强度户外工地的柴油动力照明灯塔。",
          features: ["液压升降杆", "Kubota 发动机", "拖车式结构"],
          count: "6 个产品",
        },
        {
          icon: "S",
          title: "太阳能移动照明灯塔",
          description: "面向安静、环保临时作业场景的清洁能源照明解决方案。",
          features: ["太阳能供电", "电池备份", "低噪音"],
          count: "4 个产品",
        },
        {
          icon: "H",
          title: "混合动力移动照明灯塔",
          description: "结合柴油与新能源的节能系统，适用于远程作业现场。",
          features: ["柴油 + 太阳能", "节省燃油", "远程场地"],
          count: "3 个产品",
        },
        {
          icon: "V",
          title: "监控照明灯塔",
          description: "集成监控系统的移动照明灯塔，适用于现场安全管理。",
          features: ["照明 + 监控", "远程监测", "公共安全"],
          count: "3 个产品",
        },
        {
          icon: "P",
          title: "便携式照明灯塔",
          description: "紧凑灵活的移动照明方案，便于快速部署和运输。",
          features: ["紧凑设计", "快速安装", "电池供电"],
          count: "5 个产品",
        },
        {
          icon: "M",
          title: "智能移动照明灯塔",
          description: "面向便捷操作、安全控制和智能监测的移动照明产品。",
          features: ["远程控制", "智能监控", "自动升降杆"],
          count: "4 个产品",
        },
      ],
    },
    lf6130Page: {
      eyebrow: "LFADJ 柴油移动照明灯塔",
      title: "LF6130 LED 液压移动照明灯塔",
      description:
        "9 米液压升降移动照明灯塔，搭载 Kubota 发动机，适用于建筑施工、矿山作业、应急救援和设备租赁场景。",
      imageAlt: "LF6130 LED 液压移动照明灯塔",
      overviewLabel: "产品概览",
      overviewTitle: "专业移动照明解决方案",
      overviewText:
        "LF6130 是一款重型 LED 液压移动照明灯塔，专为严苛户外环境中的可靠照明而设计。它可为建筑工地、矿山作业、应急救援、市政项目和租赁设备团队提供高亮度、稳定性能和长时间运行能力。",
      technicalLabel: "技术数据",
      technicalTitle: "技术规格",
      featuresTitle: "核心特点",
      featureText: "面向工业级现场照明需求设计，适合稳定、可靠的户外作业。",
      applicationsTitle: "应用场景",
      advantageLabel: "LFADJ 优势",
      whyTitle: "为什么选择 LF6130",
      ctaTitle: "您的项目需要 LF6130 吗？",
      ctaText: "联系 LFADJ 获取规格、价格和照明解决方案支持。",
      highlights: [
        "4x400W LED",
        "Kubota Z482 发动机",
        "9m 液压升降杆",
        "IP65 防护",
        "48h 运行时间",
      ],
      specifications: [
        ["型号", "LF6130"],
        ["产品类型", "LED 液压移动照明灯塔"],
        ["照明功率", "4x400W LED"],
        ["升降杆类型", "液压"],
        ["升降高度", "9 m"],
        ["旋转角度", "360°"],
        ["照射角度", "0-90°"],
        ["抗风等级", "8 级 / 75 km/h"],
        ["发动机", "Kubota Z482"],
        ["燃油", "柴油"],
        ["额定功率", "6.4 kW"],
        ["电压", "220V"],
        ["频率", "50Hz / 60Hz"],
        ["防护等级", "IP65"],
        ["运行时间", "48 小时"],
      ],
      features: [
        "高亮度 LED 照明",
        "9m 液压升降杆",
        "Kubota 柴油发动机",
        "360° 照明覆盖",
        "户外防护结构",
        "长时间运行性能",
      ],
      applications: ["建筑施工", "矿山作业", "应急救援", "市政工程", "设备租赁"],
      reasons: [
        "可靠的工业级设计",
        "适合工地快速部署",
        "维护成本更低",
        "支持 OEM / ODM 定制",
      ],
    },
    about: {
      eyebrow: "ABOUT LFADJ",
      title: "专业移动照明灯塔制造商",
      description:
        "LFADJ 为建筑施工、矿山作业、应急救援、市政工程和设备租赁企业提供移动照明灯塔产品与项目支持。",
      strengths: [
        "移动照明灯塔制造",
        "工业 B2B 产品开发",
        "OEM / ODM 定制支持",
        "出口项目服务",
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "获取移动照明解决方案支持",
      description:
        "联系 LFADJ 获取产品规格、价格以及建筑施工、矿山作业、应急救援或设备租赁项目支持。",
      methods: ["WhatsApp", "Email", "LinkedIn", "AI Assistant"],
    },
  },
} as const;
