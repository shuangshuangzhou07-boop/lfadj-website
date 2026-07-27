import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Language = "en" | "zh";

const content = {
  en: {
    title: "What Is a Mobile Light Tower?",
    heroTitle: "What Is a Mobile Light Tower?",
    subtitle:
      "A mobile light tower is a portable lighting solution that combines LED lighting, mast systems, and power sources to provide reliable illumination for construction, mining, oil & gas, rental, and emergency projects.",
    cta: "Request Your Project Lighting Recommendation",
    imageAlt:
      "Mobile light tower providing illumination at a construction site at night",
    definitionTitle: "What Is a Mobile Light Tower?",
    definition:
      "A mobile light tower is a self-contained lighting system mounted on a mobile chassis. It combines the equipment required to generate, elevate, control, and position light in one transportable unit.",
    componentsIntro: "A Typical Mobile Light Tower Includes:",
    components: [
      "LED lighting fixtures",
      "Mast system",
      "Power system",
      "Control system",
      "Mobile chassis",
    ],
    distinction:
      "Unlike a fixed lighting system, a mobile light tower can be transported between work areas and deployed quickly wherever temporary illumination is required.",
    operationTitle: "How Does a Mobile Light Tower Work?",
    operationIntroduction:
      "A mobile light tower combines several systems to provide temporary lighting in different environments.",
    operationItems: [
      {
        title: "LED Lighting Head",
        description:
          "Provides high-efficiency illumination for construction, mining, oil & gas and emergency applications.",
      },
      {
        title: "Mast System",
        description:
          "Raises the lighting fixtures to the required height for wider coverage.",
      },
      {
        title: "Power System",
        description:
          "Provides energy through diesel generators, solar systems, batteries, or external power sources.",
      },
      {
        title: "Control System",
        description:
          "Manages lighting operation, power supply and system monitoring.",
      },
      {
        title: "Mobile Chassis",
        description:
          "Allows transportation and deployment between different project locations.",
      },
    ],
    applicationsTitle: "Where Are Mobile Light Towers Used?",
    applications: [
      {
        title: "Construction Lighting",
        englishTitle: "Construction Lighting",
        description:
          "Support nighttime construction, road building and infrastructure projects requiring reliable temporary illumination.",
        slug: "construction-lighting",
      },
      {
        title: "Mining Lighting",
        englishTitle: "Mining Lighting",
        description:
          "Provide dependable lighting for mining areas, equipment operation zones and remote working environments.",
        slug: "mining-lighting",
      },
      {
        title: "Oil & Gas Lighting",
        englishTitle: "Oil & Gas Lighting",
        description:
          "Support remote oil and gas projects requiring continuous lighting performance and reliable deployment.",
        slug: "oil-gas-lighting",
      },
      {
        title: "Rental Lighting",
        englishTitle: "Rental Lighting",
        description:
          "Support rental fleets serving different customer projects with mobile lighting that can be deployed across changing work sites.",
        slug: "rental-lighting",
      },
      {
        title: "Emergency Lighting",
        englishTitle: "Emergency Lighting",
        description:
          "Provide rapid-deployment lighting solutions for emergency response and temporary operations.",
        slug: "emergency-lighting",
      },
    ],
    typesTitle: "Main Types of Mobile Light Towers",
    relatedProductLabel: "Related Product",
    towerTypes: [
      {
        number: "01",
        title: "Diesel Mobile Light Towers",
        description:
          "Suitable for long operating periods, high-output lighting requirements, and remote projects.",
        product: {
          label: "LF955 Diesel Mobile Light Tower",
          slug: "lf955",
        },
      },
      {
        number: "02",
        title: "Solar Mobile Light Towers",
        description:
          "Suitable for low-maintenance operation, quiet working environments, and deployment in remote areas.",
        product: {
          label: "LF971 Solar Mobile Light Tower",
          slug: "lf971",
        },
      },
      {
        number: "03",
        title: "Hybrid Mobile Light Towers\nCustomized Solutions",
        description:
          "Configured for specific project requirements, combining different power options when additional flexibility is required.",
        product: null,
      },
    ],
    selectionTitle: "How to Choose the Right Mobile Light Tower?",
    selectionFactors: [
      {
        number: "01",
        title: "Lighting Requirements",
        description:
          "Define the required lighting coverage, illumination level, and work area before evaluating a lighting system.",
      },
      {
        number: "02",
        title: "Operating Hours",
        description:
          "Consider the expected daily operating time and whether the project requires continuous or intermittent lighting.",
      },
      {
        number: "03",
        title: "Working Environment",
        description:
          "Review site conditions such as dust, wind, temperature, terrain, and how often the equipment must be relocated.",
      },
      {
        number: "04",
        title: "Power System",
        description:
          "Evaluate available power, deployment conditions, noise limits, and maintenance requirements for the project.",
      },
    ],
    relatedSolutionsLabel: "Related Selection Guides",
    relatedSolutions: [
      {
        label: "How to Choose the Right Light Tower",
        slug: "how-to-choose-the-right-light-tower",
      },
      {
        label: "How to Choose the Right Light Tower Power System",
        slug: "how-to-choose-right-light-tower-power-system",
      },
      {
        label:
          "How to Choose the Right Light Tower for Harsh Environments",
        slug: "how-to-choose-the-right-light-tower-for-harsh-environments",
      },
    ],
    considerationsTitle:
      "Project Considerations When Selecting a Mobile Light Tower",
    considerationsIntroduction:
      "Selecting a suitable mobile light tower depends on actual project conditions.",
    considerationsLead:
      "Common factors considered when selecting a mobile light tower include:",
    considerations: [
      {
        title: "Required Lighting Area",
        description:
          "Determine the coverage area and illumination requirements based on the project layout.",
      },
      {
        title: "Operating Hours",
        description:
          "Evaluate daily operating time and whether continuous lighting is required.",
      },
      {
        title: "Available Power Source",
        description:
          "Consider diesel, solar, battery storage, or external power availability.",
      },
      {
        title: "Environmental Conditions",
        description:
          "Review factors such as dust, wind, temperature, terrain, and weather exposure.",
      },
      {
        title: "Transportation Requirements",
        description:
          "Consider how often the lighting equipment needs to be moved between locations.",
      },
    ],
    transitionTitle: "Why Choose a Mobile Light Tower?",
    transitionDescription:
      "Mobile light towers provide flexible lighting solutions for temporary, remote and changing work environments compared with fixed lighting systems.",
    comparisonTitle: "Mobile Light Tower vs Fixed Lighting",
    comparisonHeaders: {
      factor: "Comparison",
      mobile: "Mobile Light Tower",
      fixed: "Fixed Lighting System",
    },
    comparisonRows: [
      {
        factor: "Deployment",
        mobile:
          "Transported to the required work area and positioned for temporary lighting.",
        fixed: "Remains in a permanent, predetermined location.",
      },
      {
        factor: "Installation",
        mobile:
          "Set up on site with an integrated mast, lighting, and power system.",
        fixed:
          "Requires permanent mounting, electrical connections, and site infrastructure.",
      },
      {
        factor: "Flexibility",
        mobile:
          "Can be relocated as work areas and project requirements change.",
        fixed: "Has limited flexibility after installation.",
      },
      {
        factor: "Application",
        mobile:
          "Used for temporary, changing, remote, or emergency work areas.",
        fixed: "Used for permanent locations requiring long-term illumination.",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What is the difference between a mobile light tower and a flood light?",
        answer:
          "A mobile light tower is a complete portable lighting system with a mast, power source and mobile chassis, while a flood light normally requires separate installation and power supply.",
        links: [
          {
            label: "How to Choose the Right Light Tower",
            href: "/solutions/how-to-choose-the-right-light-tower",
          },
        ],
      },
      {
        question: "How long can a diesel light tower run?",
        answer:
          "The operating time depends on fuel tank capacity, engine type, lighting load and operating conditions.",
        links: [
          {
            label: "LF955 Diesel Mobile Light Tower",
            href: "/products/lf955",
          },
        ],
      },
      {
        question: "Are solar light towers suitable for mining?",
        answer:
          "Solar light towers can be suitable for mining projects where low maintenance operation and sufficient solar conditions are available.",
        links: [
          {
            label: "LF971 Solar Mobile Light Tower",
            href: "/products/lf971",
          },
          {
            label: "Mining Lighting Applications",
            href: "/applications/mining-lighting",
          },
        ],
      },
      {
        question:
          "What factors should be considered when choosing a mobile light tower?",
        answer:
          "Important factors include lighting area, operating hours, power source, environmental conditions and transportation requirements.",
        links: [],
      },
    ],
    faqLinksLabel: "Learn more:",
    faqLinksSeparator: ", ",
    faqLinksTerminator: ".",
    relatedTitle: "Related LFADJ Mobile Lighting Solutions",
    relatedIntroduction:
      "LFADJ provides project-based mobile lighting solutions for construction, mining, oil & gas, rental and emergency applications.",
    relatedLead: "Explore related products, applications and solutions:",
    relatedGroups: [
      {
        title: "Products",
        links: [
          {
            label: "LF955 Diesel Mobile Light Tower",
            href: "/products/lf955",
          },
          {
            label: "LF971 Solar Mobile Light Tower",
            href: "/products/lf971",
          },
        ],
      },
      {
        title: "Applications",
        links: [
          {
            label: "Construction Lighting",
            href: "/applications/construction-lighting",
          },
          {
            label: "Mining Lighting",
            href: "/applications/mining-lighting",
          },
          {
            label: "Oil & Gas Lighting",
            href: "/applications/oil-gas-lighting",
          },
        ],
      },
      {
        title: "Solutions",
        links: [
          {
            label: "How to Choose the Right Light Tower",
            href: "/solutions/how-to-choose-the-right-light-tower",
          },
          {
            label: "Harsh Environment Configuration",
            href: "/solutions/harsh-environment-configuration",
          },
          {
            label: "Light Tower Power System Selection",
            href: "/solutions/light-tower-power-system",
          },
        ],
      },
    ],
    finalCtaTitle: "Need Help Choosing the Right Mobile Light Tower?",
    finalCtaDescription:
      "Tell us your project type, operating environment and lighting requirements. We will provide suitable mobile lighting advice.",
    finalCtaButton: "Get Mobile Lighting Advice",
  },
  zh: {
    title: "什么是移动照明灯塔？",
    heroTitle: "什么是移动照明灯塔？",
    subtitle:
      "移动照明灯塔是一种快速部署的临时照明设备，通过LED灯具、升降系统和动力系统，为建筑、矿山、油气、租赁及应急项目提供可靠照明。",
    cta: "获取项目照明配置建议",
    imageAlt: "夜间施工现场提供照明的移动照明灯塔",
    definitionTitle: "什么是移动照明灯塔？",
    definition:
      "移动照明灯塔是一种安装在移动底盘上的独立照明系统，将照明、升降、供能和控制功能集成在一个可运输的设备单元中。",
    componentsIntro: "典型移动照明灯塔组成：",
    components: [
      "LED 灯具",
      "升降杆系统",
      "动力系统",
      "控制系统",
      "移动底座",
    ],
    distinction:
      "与固定照明系统不同，移动照明灯塔可以在不同作业区域之间快速运输，并根据临时照明需求灵活部署。",
    operationTitle: "移动照明灯塔如何工作？",
    operationIntroduction:
      "移动照明灯塔通过多个系统组合，为不同项目环境提供临时照明。",
    operationItems: [
      {
        title: "LED灯具",
        description: "提供高效率照明输出。",
      },
      {
        title: "升降杆系统",
        description: "提升灯具高度，实现更大范围照明。",
      },
      {
        title: "动力系统",
        description:
          "通过柴油发电机、太阳能、电池或外部电源提供能源。",
      },
      {
        title: "控制系统",
        description: "管理灯光运行、电源供应和设备状态。",
      },
      {
        title: "移动底盘",
        description: "支持设备运输和快速部署。",
      },
    ],
    applicationsTitle: "移动照明灯塔应用在哪里？",
    applications: [
      {
        title: "建筑照明",
        englishTitle: "Construction Lighting",
        description:
          "用于夜间施工、道路建设和基础设施项目，提供可靠的临时照明。",
        slug: "construction-lighting",
      },
      {
        title: "矿山照明",
        englishTitle: "Mining Lighting",
        description:
          "适用于矿区、设备作业区域以及偏远工作环境，需要持续可靠照明的场景。",
        slug: "mining-lighting",
      },
      {
        title: "油气照明",
        englishTitle: "Oil & Gas Lighting",
        description:
          "适用于偏远油气项目，为连续运行区域提供稳定可靠的移动照明。",
        slug: "oil-gas-lighting",
      },
      {
        title: "租赁照明",
        englishTitle: "Rental Lighting",
        description:
          "适用于服务不同客户项目的租赁设备，可在不同作业现场灵活部署移动照明。",
        slug: "rental-lighting",
      },
      {
        title: "应急照明",
        englishTitle: "Emergency Lighting",
        description:
          "用于灾害响应、临时供电环境以及需要快速部署照明的项目。",
        slug: "emergency-lighting",
      },
    ],
    typesTitle: "移动照明灯塔有哪些类型？",
    relatedProductLabel: "关联产品",
    towerTypes: [
      {
        number: "01",
        title: "柴油移动照明灯塔",
        description:
          "适合长时间运行、高亮度需求和远程项目。",
        product: {
          label: "LF955 Diesel Mobile Light Tower",
          slug: "lf955",
        },
      },
      {
        number: "02",
        title: "太阳能移动照明灯塔",
        description:
          "适合低维护、静音运行和偏远区域部署。",
        product: {
          label: "LF971 Solar Mobile Light Tower",
          slug: "lf971",
        },
      },
      {
        number: "03",
        title: "混合动力移动照明灯塔\n定制解决方案",
        description:
          "根据特殊项目需求结合不同能源配置，适用于需要降低燃油消耗或增加能源灵活性的项目。",
        product: null,
      },
    ],
    selectionTitle: "如何选择合适的移动照明灯塔？",
    selectionFactors: [
      {
        number: "01",
        title: "照明需求",
        description:
          "在评估照明系统前，应明确所需的照明覆盖范围、照度水平和作业区域。",
      },
      {
        number: "02",
        title: "运行时间",
        description:
          "根据项目每日预计运行时长，以及连续照明或间歇照明需求进行评估。",
      },
      {
        number: "03",
        title: "使用环境",
        description:
          "评估粉尘、风力、温度、地形条件，以及设备需要转移的频率。",
      },
      {
        number: "04",
        title: "动力方式",
        description:
          "结合现场可用能源、部署条件、噪声限制和维护要求评估动力系统。",
      },
    ],
    relatedSolutionsLabel: "相关选择指南",
    relatedSolutions: [
      {
        label: "如何选择合适的移动照明灯塔",
        slug: "how-to-choose-the-right-light-tower",
      },
      {
        label: "如何选择合适的移动照明灯塔动力系统",
        slug: "how-to-choose-right-light-tower-power-system",
      },
      {
        label: "如何为恶劣环境选择合适的移动照明灯塔",
        slug: "how-to-choose-the-right-light-tower-for-harsh-environments",
      },
    ],
    considerationsTitle: "项目选型时需要考虑的因素",
    considerationsIntroduction:
      "选择合适的移动照明灯塔需要结合实际项目条件。",
    considerationsLead: "选择移动照明灯塔时，通常需要考虑以下因素：",
    considerations: [
      {
        title: "照明覆盖范围",
        description:
          "根据项目布局确定所需照明面积和照度要求。",
      },
      {
        title: "运行时间",
        description:
          "评估每天运行时间以及是否需要连续照明。",
      },
      {
        title: "供电方式",
        description:
          "根据现场条件选择柴油、太阳能、电池储能或外部电源。",
      },
      {
        title: "环境条件",
        description:
          "考虑灰尘、风力、温度、地形以及天气影响。",
      },
      {
        title: "运输需求",
        description:
          "根据设备移动频率选择适合的移动照明方案。",
      },
    ],
    transitionTitle: "为什么选择移动照明灯塔？",
    transitionDescription:
      "相比固定照明系统，移动照明灯塔适用于临时、偏远和不断变化的工作环境，可快速部署并灵活调整照明位置。",
    comparisonTitle: "移动照明灯塔与固定照明系统的区别",
    comparisonHeaders: {
      factor: "对比项目",
      mobile: "移动照明灯塔",
      fixed: "固定照明系统",
    },
    comparisonRows: [
      {
        factor: "部署方式",
        mobile: "可运输至所需作业区域，并根据临时照明需求进行布置。",
        fixed: "长期设置在预先确定的固定位置。",
      },
      {
        factor: "安装要求",
        mobile: "通过集成的升降、照明和动力系统在现场完成部署。",
        fixed: "通常需要固定安装、电气连接和现场基础设施。",
      },
      {
        factor: "灵活性",
        mobile: "可随作业区域和项目需求变化进行转移。",
        fixed: "安装完成后可调整范围有限。",
      },
      {
        factor: "适用场景",
        mobile: "适用于临时、变化、偏远或应急作业区域。",
        fixed: "适用于需要长期照明的永久性场所。",
      },
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        question: "移动照明灯塔和普通泛光灯有什么区别？",
        answer:
          "移动照明灯塔集成灯具、升降系统、动力系统和移动底盘，而普通泛光灯通常需要单独安装和供电。",
        links: [
          {
            label: "如何选择合适的移动照明灯塔",
            href: "/solutions/how-to-choose-the-right-light-tower",
          },
        ],
      },
      {
        question: "柴油移动照明灯塔可以运行多久？",
        answer:
          "运行时间取决于油箱容量、发动机类型、照明负载和实际运行条件。",
        links: [
          {
            label: "LF955柴油移动照明灯塔",
            href: "/products/lf955",
          },
        ],
      },
      {
        question: "太阳能移动照明灯塔适合矿山项目吗？",
        answer:
          "如果项目具备良好的太阳能条件，并且需要低维护运行，太阳能灯塔可以适用于部分矿山项目。",
        links: [
          {
            label: "LF971太阳能移动照明灯塔",
            href: "/products/lf971",
          },
          {
            label: "矿山照明应用",
            href: "/applications/mining-lighting",
          },
        ],
      },
      {
        question: "选择移动照明灯塔需要考虑哪些因素？",
        answer:
          "主要考虑照明面积、运行时间、供电方式、环境条件以及运输需求。",
        links: [],
      },
    ],
    faqLinksLabel: "了解更多：",
    faqLinksSeparator: "、",
    faqLinksTerminator: "。",
    relatedTitle: "相关 LFADJ 移动照明解决方案",
    relatedIntroduction:
      "LFADJ 根据建筑、矿山、油气、租赁及应急项目需求，提供项目化移动照明解决方案。",
    relatedLead: "浏览相关产品、应用和解决方案：",
    relatedGroups: [
      {
        title: "产品",
        links: [
          {
            label: "LF955柴油移动照明灯塔",
            href: "/products/lf955",
          },
          {
            label: "LF971太阳能移动照明灯塔",
            href: "/products/lf971",
          },
        ],
      },
      {
        title: "应用",
        links: [
          {
            label: "建筑照明应用",
            href: "/applications/construction-lighting",
          },
          {
            label: "矿山照明应用",
            href: "/applications/mining-lighting",
          },
          {
            label: "油气照明应用",
            href: "/applications/oil-gas-lighting",
          },
        ],
      },
      {
        title: "解决方案",
        links: [
          {
            label: "如何选择合适的移动照明灯塔",
            href: "/solutions/how-to-choose-the-right-light-tower",
          },
          {
            label: "恶劣环境移动照明配置",
            href: "/solutions/harsh-environment-configuration",
          },
          {
            label: "移动照明灯塔动力系统选择",
            href: "/solutions/light-tower-power-system",
          },
        ],
      },
    ],
    finalCtaTitle: "需要选择合适的移动照明灯塔？",
    finalCtaDescription:
      "告诉我们您的项目类型、运行环境和照明需求，我们将提供适合的移动照明建议。",
    finalCtaButton: "获取移动照明建议",
  },
} satisfies Record<
  Language,
  {
    title: string;
    heroTitle: string;
    subtitle: string;
    cta: string;
    imageAlt: string;
    definitionTitle: string;
    definition: string;
    componentsIntro: string;
    components: string[];
    distinction: string;
    operationTitle: string;
    operationIntroduction: string;
    operationItems: Array<{ title: string; description: string }>;
    applicationsTitle: string;
    applications: Array<{
      title: string;
      englishTitle: string;
      description: string;
      slug: string;
    }>;
    typesTitle: string;
    relatedProductLabel: string;
    towerTypes: Array<{
      number: string;
      title: string;
      description: string;
      product: { label: string; slug: string } | null;
    }>;
    selectionTitle: string;
    selectionFactors: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    relatedSolutionsLabel: string;
    relatedSolutions: Array<{ label: string; slug: string }>;
    considerationsTitle: string;
    considerationsIntroduction: string;
    considerationsLead: string;
    considerations: Array<{ title: string; description: string }>;
    transitionTitle: string;
    transitionDescription: string;
    comparisonTitle: string;
    comparisonHeaders: {
      factor: string;
      mobile: string;
      fixed: string;
    };
    comparisonRows: Array<{
      factor: string;
      mobile: string;
      fixed: string;
    }>;
    faqTitle: string;
    faqs: Array<{
      question: string;
      answer: string;
      links: Array<{ label: string; href: string }>;
    }>;
    faqLinksLabel: string;
    faqLinksSeparator: string;
    faqLinksTerminator: string;
    relatedTitle: string;
    relatedIntroduction: string;
    relatedLead: string;
    relatedGroups: Array<{
      title: string;
      links: Array<{ label: string; href: string }>;
    }>;
    finalCtaTitle: string;
    finalCtaDescription: string;
    finalCtaButton: string;
  }
>;

function isLanguage(lang: string): lang is Language {
  return lang === "en" || lang === "zh";
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  if (!isLanguage(params.lang)) {
    return {};
  }

  const copy = content[params.lang];
  const canonical = `https://lfadj.com/${params.lang}/resources/what-is-mobile-light-tower`;

  return {
    title: `${copy.title} | LFADJ`,
    description: copy.subtitle,
    alternates: {
      canonical,
      languages: {
        en: "https://lfadj.com/en/resources/what-is-mobile-light-tower",
        "zh-CN": "https://lfadj.com/zh/resources/what-is-mobile-light-tower",
      },
    },
    openGraph: {
      title: `${copy.title} | LFADJ`,
      description: copy.subtitle,
      url: canonical,
      type: "article",
      images: [
        {
          url: "https://lfadj.com/images/hero/construction-mobile-light-tower.webp",
          width: 1536,
          height: 1024,
          alt: copy.imageAlt,
        },
      ],
    },
  };
}

export default function WhatIsMobileLightTowerPage({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLanguage(params.lang)) {
    notFound();
  }

  const copy = content[params.lang];

  return (
    <main className="bg-slate-950">
      <section className="relative isolate overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.2),transparent_38%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#111827_100%)]"
        />

        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {copy.subtitle}
            </p>
            <Link
              href={`/${params.lang}/contact`}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              {copy.cta}
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/hero/construction-mobile-light-tower.webp"
                alt={copy.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {copy.definitionTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              {copy.definition}
            </p>
            <p className="mt-6 border-l-4 border-blue-600 pl-5 text-lg font-medium leading-8 text-slate-900">
              {copy.distinction}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              {copy.componentsIntro}
            </p>
            <ul className="mt-5 border-y border-slate-200">
              {copy.components.map((component) => (
                <li
                  key={component}
                  className="flex items-center gap-3 border-b border-slate-200 py-3.5 text-base font-medium text-slate-800 last:border-b-0"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                  />
                  {component}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {copy.operationTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {copy.operationIntroduction}
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {copy.operationItems.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-3 py-6 md:grid-cols-[80px_minmax(220px,0.75fr)_minmax(0,1.25fr)] md:items-start md:gap-6"
              >
                <p className="text-sm font-bold tracking-[0.16em] text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {copy.applicationsTitle}
          </h2>

          <nav
            aria-label={copy.applicationsTitle}
            className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-6"
          >
            {copy.applications.map((application, index) => (
              <Link
                key={application.slug}
                href={`/${params.lang}/applications/${application.slug}`}
                className={`group relative flex min-h-60 flex-col items-start bg-slate-900 px-6 py-6 text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-400 lg:col-span-2 ${
                  index === 3 ? "lg:col-start-2" : ""
                }`}
              >
                <span className="pr-8 text-xl font-bold">
                  {application.title}
                </span>
                {params.lang === "en" ? (
                  <span className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-blue-400">
                    {application.englishTitle}
                  </span>
                ) : null}
                <span className="mt-5 text-sm font-normal leading-6 text-slate-300">
                  {application.description}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 text-blue-400 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {copy.typesTitle}
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.towerTypes.map((towerType) => (
              <article
                key={towerType.number}
                className="flex min-h-72 flex-col border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-bold tracking-[0.16em] text-blue-700">
                  {towerType.number}
                </p>
                <h3 className="mt-5 whitespace-pre-line text-2xl font-bold text-slate-950">
                  {towerType.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                  {towerType.description}
                </p>

                {towerType.product ? (
                  <div className="mt-7 border-t border-slate-200 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      {copy.relatedProductLabel}
                    </p>
                    <Link
                      href={`/${params.lang}/products/${towerType.product.slug}`}
                      className="mt-2 inline-flex font-bold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      {towerType.product.label} →
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {copy.selectionTitle}
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {copy.selectionFactors.map((factor) => (
              <article key={factor.number} className="bg-slate-900 p-7">
                <p className="text-sm font-bold tracking-[0.16em] text-blue-400">
                  {factor.number}
                </p>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {factor.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  {factor.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              {copy.relatedSolutionsLabel}
            </p>
            <nav
              aria-label={copy.relatedSolutionsLabel}
              className="mt-5 flex flex-col items-start gap-4"
            >
              {copy.relatedSolutions.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/${params.lang}/solutions/${solution.slug}`}
                  className="font-bold text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  {solution.label} →
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {copy.considerationsTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {copy.considerationsIntroduction}
            </p>
            <p className="mt-3 text-base font-bold text-slate-950">
              {copy.considerationsLead}
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-5">
            {copy.considerations.map((consideration) => (
              <article
                key={consideration.title}
                className="bg-white p-6"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {consideration.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {consideration.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {copy.transitionTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {copy.transitionDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {copy.comparisonTitle}
          </h2>

          <div className="mt-10 overflow-x-auto border border-slate-200">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th scope="col" className="w-1/5 px-6 py-4 text-sm font-bold">
                    {copy.comparisonHeaders.factor}
                  </th>
                  <th scope="col" className="w-2/5 px-6 py-4 text-sm font-bold">
                    {copy.comparisonHeaders.mobile}
                  </th>
                  <th scope="col" className="w-2/5 px-6 py-4 text-sm font-bold">
                    {copy.comparisonHeaders.fixed}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.comparisonRows.map((row) => (
                  <tr
                    key={row.factor}
                    className="border-t border-slate-200 even:bg-slate-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-5 align-top text-base font-bold text-slate-950"
                    >
                      {row.factor}
                    </th>
                    <td className="px-6 py-5 align-top text-base leading-7 text-slate-700">
                      {row.mobile}
                    </td>
                    <td className="px-6 py-5 align-top text-base leading-7 text-slate-700">
                      {row.fixed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {copy.faqTitle}
            </h2>
            <div className="mt-8 max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
              {copy.faqs.map((faq) => (
                <article key={faq.question} className="py-6">
                  <h3 className="text-lg font-bold text-slate-950">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    {faq.answer}
                    {faq.links.length > 0 ? (
                      <>
                        {" "}
                        {copy.faqLinksLabel}{" "}
                        {faq.links.map((link, index) => (
                          <span key={link.href}>
                            <Link
                              href={`/${params.lang}${link.href}`}
                              className="font-bold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                              {link.label}
                            </Link>
                            {index < faq.links.length - 1
                              ? copy.faqLinksSeparator
                              : copy.faqLinksTerminator}
                          </span>
                        ))}
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {copy.relatedTitle}
            </h2>
            <div className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              <p>{copy.relatedIntroduction}</p>
              <p className="mt-3 font-medium text-slate-900">
                {copy.relatedLead}
              </p>
            </div>

            <nav
              aria-label={copy.relatedTitle}
              className="mt-8 grid gap-6 md:grid-cols-3"
            >
              {copy.relatedGroups.map((group) => (
                <div
                  key={group.title}
                  className="border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={`/${params.lang}${link.href}`}
                          className="font-bold leading-6 text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-16">
          <div>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {copy.finalCtaTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {copy.finalCtaDescription}
            </p>
          </div>

          <div className="lg:flex lg:justify-end">
            <Link
              href={`/${params.lang}/contact`}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              {copy.finalCtaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
