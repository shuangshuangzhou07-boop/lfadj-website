import type { Metadata } from "next";
import type { PlaceholderCopy } from "@/components/RoutePlaceholder";

export type FrameworkLocale = "en" | "zh";
export type FrameworkSection = "products" | "solutions" | "manufacturing" | "resources" | "contact";

export type SolutionPageData = PlaceholderCopy & {
  hero?: {
    subtitle: string;
    steps?: string[];
    imageSrc?: string;
    imageAlt?: string;
    imageAspect?: "default" | "video";
    layout?: "default" | "image-emphasis";
    cta?: { label: string; href: string };
  };
  selectionFactors: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  mastOptions: {
    title: string;
    introduction: string;
    items: Array<{
      title: string;
      positioning?: string;
      description: string;
      suitableFor?: {
        label: string;
        items: string[];
      };
      relatedProduct?: { label: string; href: string };
    }>;
    configurationTable?: {
      projectConditionsLabel: string;
      configurationRecommendationLabel: string;
      recommendedSolutionLabel: string;
      rows: Array<{
        projectConditions: string;
        configurationRecommendation: string;
        recommendedSolution: string;
      }>;
    };
    powerSystemsTable?: {
      projectRequirementLabel: string;
      recommendedSolutionLabel: string;
      rows: Array<{
        projectRequirement: string;
        recommendedSolution: { label: string; href: string };
        description: string;
      }>;
    };
  };
  detailSections?: Array<{
    title: string;
    description?: string;
    muted?: boolean;
    items?: Array<{ title: string; description: string }>;
  }>;
  configurationExamples?: {
    title: string;
    projectTypeLabel: string;
    recommendationLabel: string;
    reasonLabel: string;
    rows: Array<{ projectType: string; recommendation: string; reason: string }>;
  };
  relatedProducts: {
    title: string;
    description: string;
    items: Array<{ label: string; href: string }>;
    groups?: Array<{
      title: string;
      items: Array<{ label: string; href: string }>;
    }>;
    supportingLinks?: Array<{ label: string; href: string }>;
  };
  relatedLinksStyle?: "cards" | "text";
  ctaPlacement?: "standalone" | "related" | "hero";
  ctaDensity?: "default" | "compact";
  cta: {
    title: string;
    description: string;
    label: string;
    href: string;
  };
};

type SolutionContent = Omit<SolutionPageData, keyof PlaceholderCopy>;

type FrameworkEntry = {
  en: string;
  zh: string;
  description?: Record<FrameworkLocale, string>;
  metadata?: Partial<Record<FrameworkLocale, { title: string; description: string }>>;
  solutionContent?: Record<FrameworkLocale, SolutionContent>;
};

const titles: Record<FrameworkSection, Record<string, FrameworkEntry>> = {
  products: {
    "diesel-light-towers": { en: "Diesel Light Towers", zh: "柴油移动照明灯塔" },
    "solar-light-towers": { en: "Solar Light Towers", zh: "太阳能移动照明灯塔" },
    "solar-surveillance-trailers": { en: "Solar Surveillance Trailers", zh: "太阳能监控拖车" },
    "hybrid-energy-solutions": { en: "Hybrid & Energy Solutions", zh: "混合动力与储能方案" },
    lf968: { en: "LF968 Manual Diesel Light Tower", zh: "LF968 手动柴油移动照明灯塔" },
    lf981: { en: "LF981 Solar Camera Trailer", zh: "LF981 太阳能监控拖车" },
  },
  solutions: {
    "construction-lighting": { en: "Construction Lighting", zh: "建筑施工照明" },
    "mining-lighting": { en: "Mining Lighting", zh: "矿山照明" },
    "oil-gas-lighting": { en: "Oil & Gas Lighting", zh: "石油与天然气照明" },
    "rental-fleet-solutions": { en: "Rental Fleet Solutions", zh: "租赁设备解决方案" },
    "emergency-lighting": { en: "Emergency Lighting", zh: "应急照明" },
    "temporary-site-lighting": {
      en: "How to Plan Temporary Site Lighting",
      zh: "如何规划项目临时施工照明",
      description: {
        en: "A framework for planning temporary site lighting.",
        zh: "项目临时施工照明规划框架。",
      },
      solutionContent: {
        en: {
          hero: {
            subtitle: "Learn how to plan temporary site lighting with mobile light towers based on your project layout, working areas, operating hours and site conditions.",
            imageSrc: "/images/solutions/temporary-site-lighting/hero-temporary-site-lighting.webp",
            imageAlt: "Mobile light tower illuminating a temporary construction site at night",
            imageAspect: "video",
            layout: "image-emphasis",
            cta: {
              label: "Get Project Recommendation",
              href: "/en/contact",
            },
          },
          selectionFactors: {
            title: "What Should You Consider When Planning Temporary Site Lighting?",
            items: [
              {
                title: "Site Layout",
                description: "Identify the areas that require temporary lighting.",
              },
              {
                title: "Working Areas",
                description: "Determine where people, vehicles and equipment operate at night.",
              },
              {
                title: "Operating Hours",
                description: "Estimate the required lighting duration for each working shift.",
              },
              {
                title: "Site Conditions",
                description: "Consider terrain, obstacles and environmental conditions that may affect lighting performance.",
              },
            ],
          },
          mastOptions: {
            title: "LFADJ Recommended Temporary Site Lighting Solutions",
            introduction: "",
            items: [
              {
                title: "Small Work Area",
                positioning: "Single Mobile Light Tower",
                description: "Suitable for compact work areas.",
                suitableFor: {
                  label: "Suitable For",
                  items: ["Maintenance", "Temporary Work", "Parking Areas", "Emergency Repairs"],
                },
              },
              {
                title: "Medium Construction Site",
                positioning: "Multiple Mobile Light Towers",
                description: "Provide wider and more uniform lighting coverage.",
                suitableFor: {
                  label: "Suitable For",
                  items: ["Construction Sites", "Road Projects", "Rental Applications", "Industrial Areas"],
                },
              },
              {
                title: "Large Mining or Infrastructure Projects",
                positioning: "Customized Temporary Site Lighting Plan",
                description: "Lighting layout is recommended based on project drawings and working areas.",
                suitableFor: {
                  label: "Suitable For",
                  items: ["Mining", "Oil & Gas", "Infrastructure", "Large Industrial Projects"],
                },
              },
            ],
          },
          relatedProducts: {
            title: "Related Products + CTA",
            description: "",
            items: [],
            groups: [
              {
                title: "Related Products",
                items: [
                  { label: "LF955", href: "/en/products/lf955" },
                  { label: "LF971", href: "/en/products/lf971" },
                ],
              },
              {
                title: "Related Applications",
                items: [
                  { label: "Construction Lighting", href: "/en/solutions/construction-lighting" },
                  { label: "Mining Lighting", href: "/en/solutions/mining-lighting" },
                  { label: "Oil & Gas Lighting", href: "/en/solutions/oil-gas-lighting" },
                ],
              },
              {
                title: "Related Solutions",
                items: [
                  { label: "How to Choose the Right Light Tower", href: "/en/solutions/how-to-choose-the-right-light-tower" },
                  { label: "How to Choose the Right Mast System", href: "/en/solutions/how-to-choose-light-tower-mast-system" },
                  { label: "How to Choose the Right Power System", href: "/en/solutions/how-to-choose-right-light-tower-power-system" },
                  { label: "How to Choose the Right Light Tower for Harsh Environments", href: "/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" },
                ],
              },
            ],
          },
          relatedLinksStyle: "text",
          ctaPlacement: "related",
          cta: {
            title: "Need Help Planning Temporary Site Lighting?",
            description: "Tell us about your project requirements and we'll recommend a suitable temporary lighting solution.",
            label: "Get Project Recommendation",
            href: "/en/contact",
          },
        },
        zh: {
          hero: {
            subtitle: "了解如何根据项目布局、作业区域、工作时间和现场环境，利用移动照明灯塔规划高效、安全的临时施工照明方案。",
            imageSrc: "/images/solutions/temporary-site-lighting/hero-temporary-site-lighting.webp",
            imageAlt: "移动照明灯塔为夜间临时施工现场提供照明",
            imageAspect: "video",
            layout: "image-emphasis",
            cta: {
              label: "获取项目方案",
              href: "/zh/contact",
            },
          },
          selectionFactors: {
            title: "规划项目临时施工照明需要考虑哪些因素？",
            items: [
              {
                title: "项目布局",
                description: "识别需要临时照明的区域。",
              },
              {
                title: "作业区域",
                description: "确定夜间人员、车辆和设备的作业位置。",
              },
              {
                title: "工作时间",
                description: "评估每个工作班次所需的照明时长。",
              },
              {
                title: "现场环境",
                description: "考虑可能影响照明效果的地形、障碍物和环境条件。",
              },
            ],
          },
          mastOptions: {
            title: "LFADJ 推荐的临时施工照明方案",
            introduction: "",
            items: [
              {
                title: "小型作业区域",
                positioning: "单台移动照明灯塔",
                description: "适用于紧凑型作业区域。",
                suitableFor: {
                  label: "适用于",
                  items: ["维护作业", "临时作业", "停车区域", "紧急维修"],
                },
              },
              {
                title: "中型施工现场",
                positioning: "多台移动照明灯塔",
                description: "提供更广、更均匀的照明覆盖。",
                suitableFor: {
                  label: "适用于",
                  items: ["施工现场", "道路项目", "租赁应用", "工业区域"],
                },
              },
              {
                title: "大型矿山或基础设施项目",
                positioning: "定制临时施工照明方案",
                description: "建议根据项目图纸和作业区域规划照明布局。",
                suitableFor: {
                  label: "适用于",
                  items: ["矿山", "油气", "基础设施", "大型工业项目"],
                },
              },
            ],
          },
          relatedProducts: {
            title: "相关产品与项目建议",
            description: "",
            items: [],
            groups: [
              {
                title: "相关产品",
                items: [
                  { label: "LF955", href: "/zh/products/lf955" },
                  { label: "LF971", href: "/zh/products/lf971" },
                ],
              },
              {
                title: "相关应用",
                items: [
                  { label: "建筑施工照明", href: "/zh/solutions/construction-lighting" },
                  { label: "矿山照明", href: "/zh/solutions/mining-lighting" },
                  { label: "油气照明", href: "/zh/solutions/oil-gas-lighting" },
                ],
              },
              {
                title: "相关解决方案",
                items: [
                  { label: "如何选择合适的移动照明灯塔", href: "/zh/solutions/how-to-choose-the-right-light-tower" },
                  { label: "如何选择合适的灯杆系统", href: "/zh/solutions/how-to-choose-light-tower-mast-system" },
                  { label: "如何选择合适的动力系统", href: "/zh/solutions/how-to-choose-right-light-tower-power-system" },
                  { label: "如何选择适合恶劣环境的移动照明灯塔", href: "/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" },
                ],
              },
            ],
          },
          relatedLinksStyle: "text",
          ctaPlacement: "related",
          cta: {
            title: "需要帮助规划项目临时施工照明？",
            description: "告诉我们您的项目需求，我们将推荐适合的临时施工照明方案。",
            label: "获取项目方案",
            href: "/zh/contact",
          },
        },
      },
    },
    "how-to-choose-the-right-light-tower": {
      en: "How to Choose the Right Light Tower for Your Project",
      zh: "如何选择适合您项目的移动照明灯塔",
      description: {
        en: "Use this light tower selection guide to evaluate project application, working environment, lighting requirements and power conditions before choosing a mobile light tower solution.",
        zh: "本照明灯塔选型指南从项目应用、工作环境、照明需求和供电条件出发，帮助项目评估合适的移动照明解决方案。",
      },
      metadata: {
        en: {
          title: "How to Choose the Right Light Tower for Your Project | LFADJ",
          description: "Choose a mobile lighting solution based on project requirements, site conditions and lighting needs. LFADJ helps you select diesel or solar mobile light towers.",
        },
        zh: {
          title: "如何选择适合项目需求的移动照明灯塔 | LFADJ",
          description: "根据项目环境、照明需求和供电条件，LFADJ帮助您选择合适的移动照明灯塔方案，包括柴油移动照明灯塔和太阳能移动照明灯塔。",
        },
      },
      solutionContent: {
        en: {
          hero: {
            subtitle: "Based on the project environment, lighting requirements, operating hours and power conditions, LFADJ helps you select a suitable mobile lighting solution.",
            steps: ["Project Conditions", "Requirement Analysis", "Recommended Configuration"],
            imageSrc: "/images/solutions/how-to-choose-light-tower/hero-mining-project-light-tower.webp",
            imageAlt: "Mobile light tower providing lighting for mining operations at night",
          },
          selectionFactors: {
            title: "Tell Us About Your Project Conditions",
            items: [
              { title: "Project Application", description: "Where will your light tower be used? Mining / Construction / Oil & Gas / Rental / Emergency. Different project types influence the selection of a mobile lighting solution." },
              { title: "Working Environment", description: "What is your site environment? Remote Area / Desert Environment / High Temperature / High Altitude / Dust Environment. Environmental conditions influence equipment reliability and configuration requirements." },
              { title: "Lighting Requirements", description: "What are your lighting requirements? Lighting Area / Required Brightness / Operating Hours / Continuous Operation Requirement. Lighting coverage and operating duration determine the solution configuration." },
              { title: "Power Availability", description: "What power is available onsite? Grid Power Available / Temporary Power Supply / No Grid Power. Power availability influences the choice of power-system solution." },
            ],
          },
          mastOptions: {
            title: "LFADJ Recommended Mobile Lighting Solutions",
            introduction: "Based on project conditions, operating requirements and power availability, LFADJ recommends suitable mobile lighting solutions for different applications.",
            items: [
              {
                title: "Diesel Mobile Lighting Solution",
                positioning: "Project Conditions: Long continuous operation / No stable grid power supply / Large-area lighting requirements / Need for rapid deployment",
                description: "Suitable for: Construction / Mining / Oil & Gas / Rental Projects.",
                relatedProduct: { label: "Recommended Product: LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
              },
              {
                title: "Solar Mobile Lighting Solution",
                positioning: "Project Conditions: Low maintenance requirements / Quiet operation requirements / Reduced fuel supply needs / Available solar conditions",
                description: "Suitable for: Remote Areas / Long-term Deployment / Nighttime Construction Projects.",
                relatedProduct: { label: "Recommended Product: LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
              },
            ],
          },
          relatedProducts: {
            title: "Related Products & Solutions",
            description: "Navigate to related products, project applications and supporting solution guidance.",
            items: [
              { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
              { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
              { label: "Mining Lighting", href: "/applications/mining-lighting" },
              { label: "Construction Lighting", href: "/applications/construction-lighting" },
              { label: "Rental Lighting", href: "/applications/rental-lighting" },
              { label: "Light Tower Mast System", href: "/en/solutions/how-to-choose-light-tower-mast-system" },
            ],
            groups: [
              {
                title: "Related Products",
                items: [
                  { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
                  { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
                ],
              },
              {
                title: "Related Applications",
                items: [
                  { label: "Mining Lighting", href: "/applications/mining-lighting" },
                  { label: "Construction Lighting", href: "/applications/construction-lighting" },
                  { label: "Rental Lighting", href: "/applications/rental-lighting" },
                  { label: "Emergency Lighting", href: "/applications/emergency-lighting" },
                ],
              },
              {
                title: "Related Solutions",
                items: [
                  { label: "Light Tower Mast System Selection", href: "/en/solutions/how-to-choose-light-tower-mast-system" },
                  { label: "Power System Selection Guide", href: "/en/solutions/how-to-choose-right-light-tower-power-system" },
                ],
              },
            ],
          },
          relatedLinksStyle: "text",
          cta: {
            title: "Request Your Project Lighting Recommendation",
            description: "Share your project type, country, working environment, operating hours, lighting requirements and power availability. LFADJ will analyze these project conditions and recommend a suitable mobile lighting solution.",
            label: "Submit Project Details",
            href: "/en/contact",
          },
        },
        zh: {
          hero: {
            subtitle: "根据项目环境、照明需求、运行时间和供电条件，LFADJ帮助您选择合适的移动照明方案。",
            steps: ["项目条件确认", "需求分析", "配置推荐"],
            imageSrc: "/images/solutions/how-to-choose-light-tower/hero-mining-project-light-tower.webp",
            imageAlt: "矿山夜间作业中使用移动照明灯塔提供现场照明",
          },
          selectionFactors: {
            title: "告诉我们您的项目条件",
            items: [
              { title: "项目应用", description: "您的灯塔将用于哪里？采矿 / 建筑施工 / 石油与天然气 / 租赁 / 应急。不同项目类型会影响移动照明方案选择。" },
              { title: "工作环境", description: "您的现场环境是什么？偏远地区 / 沙漠环境 / 高温 / 高海拔 / 多尘环境。环境条件会影响设备可靠性和配置要求。" },
              { title: "照明要求", description: "您的照明需求是什么？照明面积 / 所需亮度 / 运行时长 / 连续运行要求。照明范围和运行时间决定方案配置。" },
              { title: "供电条件", description: "现场有哪些供电条件？可用市电 / 临时供电 / 无市电。供电条件影响动力系统方案选择。" },
            ],
          },
          mastOptions: {
            title: "LFADJ 推荐移动照明方案",
            introduction: "根据项目环境、运行要求和供电条件，LFADJ 为不同应用场景推荐合适的移动照明方案。",
            items: [
              {
                title: "柴油移动照明方案",
                positioning: "项目条件：长时间连续运行 / 无稳定市电供应 / 大范围照明需求 / 需要快速部署",
                description: "适用于：建筑施工 / 矿山 / 油气 / 租赁项目。",
                relatedProduct: { label: "推荐产品：LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
              },
              {
                title: "太阳能移动照明方案",
                positioning: "项目条件：低维护需求 / 静音运行要求 / 减少燃油补给 / 具备太阳能条件",
                description: "适用于：偏远区域 / 长期部署 / 夜间施工项目。",
                relatedProduct: { label: "推荐产品：LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
              },
            ],
          },
          relatedProducts: {
            title: "相关产品与解决方案",
            description: "浏览相关产品、项目应用和配套解决方案指南。",
            items: [
              { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
              { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
              { label: "矿山照明", href: "/applications/mining-lighting" },
              { label: "建筑施工照明", href: "/applications/construction-lighting" },
              { label: "租赁照明", href: "/applications/rental-lighting" },
              { label: "移动照明灯塔升降系统", href: "/zh/solutions/how-to-choose-light-tower-mast-system" },
            ],
            groups: [
              {
                title: "相关产品",
                items: [
                  { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
                  { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
                ],
              },
              {
                title: "相关应用",
                items: [
                  { label: "矿山照明", href: "/applications/mining-lighting" },
                  { label: "建筑施工照明", href: "/applications/construction-lighting" },
                  { label: "租赁照明", href: "/applications/rental-lighting" },
                  { label: "应急照明", href: "/applications/emergency-lighting" },
                ],
              },
              {
                title: "相关解决方案",
                items: [
                  { label: "移动照明灯塔升降系统选型", href: "/zh/solutions/how-to-choose-light-tower-mast-system" },
                  { label: "动力系统选型指南", href: "/zh/solutions/how-to-choose-right-light-tower-power-system" },
                ],
              },
            ],
          },
          relatedLinksStyle: "text",
          cta: {
            title: "获取项目照明配置建议",
            description: "请提供项目类型、国家、工作环境、运行时长、照明需求和供电条件。LFADJ 将分析这些项目条件，并提供合适的移动照明方案建议。",
            label: "提交项目资料",
            href: "/zh/contact",
          },
        },
      },
    },
    "how-to-choose-the-right-light-tower-for-harsh-environments": {
      en: "How to Choose the Right Light Tower for Harsh Environments",
      zh: "如何选择适合恶劣环境的移动照明灯塔",
      description: {
        en: "Why does your mobile light tower need a configuration tailored to its operating environment?",
        zh: "为什么你的移动照明灯塔需要根据环境进行特殊配置？",
      },
      solutionContent: {
        en: {
          selectionFactors: {
            title: "Why Environment Matters",
            items: [
              {
                title: "High Temperature",
                description: "High-temperature conditions influence operating stability, equipment reliability and maintenance planning.",
              },
              {
                title: "Dust & Sand",
                description: "Dust and windblown sand increase exposure around working components and influence protection and maintenance requirements.",
              },
              {
                title: "Corrosive Environments",
                description: "Corrosive environments influence material protection, inspection needs and expected service life.",
              },
              {
                title: "Long-term Continuous Operation",
                description: "Long-term operation increases the importance of reliability, planned maintenance and lifecycle operating costs.",
              },
            ],
          },
          mastOptions: {
            title: "LFADJ Recommended Configuration",
            introduction: "Based on the project environment, operating hours and site conditions, LFADJ provides suitable mobile lighting configuration recommendations for different applications.",
            items: [],
            configurationTable: {
              projectConditionsLabel: "Project Conditions",
              configurationRecommendationLabel: "Configuration Recommendation",
              recommendedSolutionLabel: "Recommended Solution",
              rows: [
                {
                  projectConditions: "Harsh environments, including hot climates, dusty conditions and desert environments",
                  configurationRecommendation: "Strengthen cooling design, dust filtration and corrosion-resistant structures to reduce failure risks caused by environmental conditions and improve long-term operating reliability.",
                  recommendedSolution: "Customized Diesel Mobile Light Tower Solution",
                },
                {
                  projectConditions: "Projects requiring long-term continuous operation",
                  configurationRecommendation: "Select a reliable power system based on operating hours, and optimize fuel-tank capacity and maintenance intervals to reduce long-term operating costs.",
                  recommendedSolution: "LF955 Diesel Mobile Light Tower",
                },
                {
                  projectConditions: "Projects without stable power or with low maintenance requirements",
                  configurationRecommendation: "Use a solar power system to reduce fuel replenishment and routine maintenance.",
                  recommendedSolution: "LF971 Solar Mobile Light Tower",
                },
              ],
            },
          },
          relatedProducts: {
            title: "Related Products & Solutions",
            description: "Continue to related product categories, applications and selection guidance.",
            items: [
              { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
              { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
            ],
            groups: [
              {
                title: "Related Products",
                items: [
                  { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
                  { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
                ],
              },
              {
                title: "Related Applications",
                items: [
                  { label: "Mining Lighting", href: "/applications/mining-lighting" },
                  { label: "Construction Lighting", href: "/applications/construction-lighting" },
                  { label: "Oil & Gas Lighting", href: "/en/applications" },
                  { label: "Rental Lighting", href: "/applications/rental-lighting" },
                ],
              },
              {
                title: "Related Solutions",
                items: [
                  { label: "How to Choose the Right Light Tower for Your Project", href: "/en/solutions/how-to-choose-the-right-light-tower" },
                  { label: "How to Choose a Mobile Light Tower Mast System", href: "/en/solutions/how-to-choose-light-tower-mast-system" },
                  { label: "How to Choose the Right Light Tower Power System", href: "/en/solutions/how-to-choose-right-light-tower-power-system" },
                ],
              },
            ],
          },
          relatedLinksStyle: "text",
          cta: {
            title: "Request a Project Lighting Recommendation",
            description: "",
            label: "Request a Recommendation",
            href: "/en/contact",
          },
        },
        zh: {
          selectionFactors: {
            title: "为什么环境决定灯塔配置？",
            items: [
              {
                title: "高温环境",
                description: "高温条件会影响运行稳定性、设备可靠性和维护规划。",
              },
              {
                title: "风沙粉尘",
                description: "粉尘和风沙会增加工作部件周围的环境暴露，并影响防护与维护要求。",
              },
              {
                title: "腐蚀环境",
                description: "腐蚀性环境会影响材料防护、检查需求和预期使用寿命。",
              },
              {
                title: "长期连续运行",
                description: "长期运行更需要关注可靠性、计划维护和全生命周期运行成本。",
              },
            ],
          },
          mastOptions: {
            title: "LFADJ 推荐配置",
            introduction: "根据项目环境、运行时间和现场条件，LFADJ 为不同使用场景提供合适的移动照明配置建议。",
            items: [],
            configurationTable: {
              projectConditionsLabel: "项目条件",
              configurationRecommendationLabel: "配置建议",
              recommendedSolutionLabel: "推荐方案",
              rows: [
                {
                  projectConditions: "高温、风沙等恶劣环境",
                  configurationRecommendation: "加强散热设计、防尘过滤、防腐结构，降低环境因素导致的故障风险，提高长期运行可靠性。",
                  recommendedSolution: "定制柴油移动照明灯塔方案",
                },
                {
                  projectConditions: "长期连续运行项目",
                  configurationRecommendation: "根据运行时间选择可靠动力系统，优化油箱容量和维护周期，降低长期使用成本。",
                  recommendedSolution: "LF955 柴油移动照明灯塔",
                },
                {
                  projectConditions: "无稳定电源或低维护需求项目",
                  configurationRecommendation: "采用太阳能供电系统，减少燃油补给和日常维护。",
                  recommendedSolution: "LF971 太阳能移动照明灯塔",
                },
              ],
            },
          },
          relatedProducts: {
            title: "相关产品与解决方案",
            description: "继续浏览相关产品分类、应用场景和选型指南。",
            items: [
              { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
              { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
            ],
            groups: [
              {
                title: "相关产品",
                items: [
                  { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
                  { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
                ],
              },
              {
                title: "相关应用",
                items: [
                  { label: "矿山照明", href: "/applications/mining-lighting" },
                  { label: "建筑施工照明", href: "/applications/construction-lighting" },
                  { label: "油气照明", href: "/zh/applications" },
                  { label: "租赁照明", href: "/applications/rental-lighting" },
                ],
              },
              {
                title: "相关解决方案",
                items: [
                  { label: "如何选择适合您的项目的移动照明灯塔", href: "/zh/solutions/how-to-choose-the-right-light-tower" },
                  { label: "如何选择移动照明灯塔升降系统", href: "/zh/solutions/how-to-choose-light-tower-mast-system" },
                  { label: "如何选择合适的移动照明灯塔动力系统", href: "/zh/solutions/how-to-choose-right-light-tower-power-system" },
                ],
              },
            ],
          },
          relatedLinksStyle: "text",
          cta: {
            title: "获取项目照明配置建议",
            description: "",
            label: "获取配置建议",
            href: "/zh/contact",
          },
        },
      },
    },
    "how-to-choose-right-light-tower-power-system": {
      en: "How to Choose the Right Light Tower Power System",
      zh: "如何选择合适的移动照明灯塔动力系统",
      description: {
        en: "Different projects require different light tower power system configurations. Choosing the right diesel or solar power solution helps deliver reliable night lighting, lower operating costs and stable project performance.\n\nLFADJ helps you select the most suitable light tower power system based on your actual project requirements.",
        zh: "不同项目需要不同的移动照明灯塔动力系统配置。选择合适的柴油或太阳能动力方案，有助于获得可靠的夜间照明、更合理的运行成本以及更稳定的项目运行。\n\nLFADJ 根据实际项目需求，为您推荐合适的移动照明灯塔动力系统配置。",
      },
      metadata: {
        en: {
          title: "How to Choose a Light Tower Power System | LFADJ",
          description: "Learn how to choose a light tower power system based on lighting load, auxiliary equipment, site conditions and operating hours, including 5KVA, 7KVA and solar options.",
        },
        zh: {
          title: "如何选择移动照明灯塔动力系统 | LFADJ",
          description: "根据照明负载、外接设备、使用环境和运行时间，了解如何选择 5KVA、7KVA 柴油灯塔或太阳能移动照明方案。",
        },
      },
      solutionContent: {
        en: {
          selectionFactors: {
            title: "What Factors Should You Consider When Choosing a Light Tower Power System?",
            items: [
              { title: "Lighting Requirements", description: "Confirm the number of lights, wattage per light, total lighting load and required coverage area. Standard lighting-only projects usually do not require excessive spare power capacity." },
              { title: "Auxiliary Equipment", description: "Confirm whether the light tower also needs to power tools, cameras, communication devices, sensors or other auxiliary equipment." },
              { title: "Working Environment", description: "High temperatures, desert conditions, altitude, dust and corrosion may affect engine output, cooling performance and long-term reliability." },
              { title: "Operating Hours", description: "Long operating hours require consideration of fuel capacity, fuel consumption, maintenance intervals, noise and long-term operating cost." },
            ],
          },
          mastOptions: {
            title: "LFADJ Recommended Power Systems",
            introduction: "",
            items: [],
            powerSystemsTable: {
              projectRequirementLabel: "Project Requirement",
              recommendedSolutionLabel: "Recommended Solution",
              rows: [
                {
                  projectRequirement: "Standard Lighting Projects",
                  recommendedSolution: { label: "LF955 5KVA Diesel Mobile Light Tower", href: "/en/products/lf955" },
                  description: "Suitable for night construction, mining or rental projects where the primary load is the lighting system and long operating hours are required.",
                },
                {
                  projectRequirement: "Lighting Plus Auxiliary Equipment",
                  recommendedSolution: { label: "LF955 7KVA Diesel Mobile Light Tower Configuration", href: "/en/products/lf955" },
                  description: "Suitable when the light tower must also power tools, surveillance, communication or other auxiliary equipment. Final generator capacity should be confirmed from the total connected load.",
                },
                {
                  projectRequirement: "Low Maintenance and Quiet Operation",
                  recommendedSolution: { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
                  description: "Suitable for projects that prioritize low noise, reduced daily refueling and lower maintenance frequency, subject to local solar conditions and required autonomy.",
                },
              ],
            },
          },
          relatedProducts: {
            title: "Related Products, Applications and Solutions",
            description: "",
            items: [
              { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
              { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
            ],
            groups: [
              {
                title: "Related Products",
                items: [
                  { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
                  { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
                ],
              },
              {
                title: "Related Applications",
                items: [
                  { label: "Construction Lighting", href: "/applications/construction-lighting" },
                  { label: "Mining Lighting", href: "/applications/mining-lighting" },
                  { label: "Rental Lighting", href: "/applications/rental-lighting" },
                ],
              },
              {
                title: "Related Solutions",
                items: [
                  { label: "How to Choose the Right Light Tower for Your Project", href: "/en/solutions/how-to-choose-the-right-light-tower" },
                  { label: "How to Choose the Right Light Tower Mast System", href: "/en/solutions/how-to-choose-light-tower-mast-system" },
                  { label: "How to Choose the Right Light Tower for Harsh Environments", href: "/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" },
                ],
              },
            ],
          },
          relatedLinksStyle: "text",
          ctaPlacement: "related",
          ctaDensity: "compact",
          cta: {
            title: "Get a Power System Recommendation for Your Project",
            description: "Tell us your lighting load, auxiliary equipment, site conditions and operating hours. We will help confirm a suitable power system and project configuration.",
            label: "Get a Project Recommendation",
            href: "/en/contact",
          },
        },
        zh: {
          selectionFactors: {
            title: "选择动力系统需要考虑哪些因素？",
            items: [
              { title: "照明需求", description: "确认灯具数量、单灯功率、总照明负载和所需覆盖范围。标准纯照明项目通常不需要额外预留大量输出功率。" },
              { title: "外接设备", description: "确认是否需要同时为电动工具、摄像头、通信设备、传感器或其他辅助设备供电。" },
              { title: "使用环境", description: "高温、沙漠、高海拔、粉尘和腐蚀环境可能影响发动机输出、冷却能力和长期运行可靠性。" },
              { title: "运行时间", description: "长时间连续运行需要综合考虑燃油容量、油耗、维护周期、噪音和长期运行成本。" },
            ],
          },
          mastOptions: {
            title: "LFADJ 推荐动力系统",
            introduction: "",
            items: [],
            powerSystemsTable: {
              projectRequirementLabel: "项目需求",
              recommendedSolutionLabel: "推荐方案",
              rows: [
                {
                  projectRequirement: "标准照明项目",
                  recommendedSolution: { label: "LF955 5KVA 柴油移动照明灯塔", href: "/zh/products/lf955" },
                  description: "适用于以照明负载为主、需要长时间连续运行的夜间施工、矿山或租赁项目。",
                },
                {
                  projectRequirement: "照明 + 外接设备",
                  recommendedSolution: { label: "LF955 7KVA 柴油移动照明灯塔配置", href: "/zh/products/lf955" },
                  description: "适用于除照明外，还需要为工具、监控、通信或其他辅助设备供电的项目。最终容量应根据总负载确认。",
                },
                {
                  projectRequirement: "低维护、静音运行",
                  recommendedSolution: { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
                  description: "适用于重视低噪音、减少日常燃油补给和降低维护频率的项目，并需要根据当地太阳能条件与续航需求确认配置。",
                },
              ],
            },
          },
          relatedProducts: {
            title: "相关产品、应用与解决方案",
            description: "",
            items: [
              { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
              { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
            ],
            groups: [
              {
                title: "相关产品",
                items: [
                  { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
                  { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
                ],
              },
              {
                title: "相关应用",
                items: [
                  { label: "建筑施工照明", href: "/applications/construction-lighting" },
                  { label: "矿山照明", href: "/applications/mining-lighting" },
                  { label: "租赁照明", href: "/applications/rental-lighting" },
                ],
              },
              {
                title: "相关解决方案",
                items: [
                  { label: "如何为项目选择合适的移动照明灯塔", href: "/zh/solutions/how-to-choose-the-right-light-tower" },
                  { label: "如何选择合适的移动照明灯塔升降系统", href: "/zh/solutions/how-to-choose-light-tower-mast-system" },
                  { label: "如何选择适合恶劣环境的移动照明灯塔", href: "/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" },
                ],
              },
            ],
          },
          relatedLinksStyle: "text",
          ctaPlacement: "related",
          ctaDensity: "compact",
          cta: {
            title: "获取项目动力系统配置建议",
            description: "告诉我们您的照明负载、外接设备、工作环境和运行时间，我们将协助确认适合的动力系统与项目配置。",
            label: "获取项目配置建议",
            href: "/zh/contact",
          },
        },
      },
    },
    "light-tower-mast-system": {
      en: "How to Choose the Right Mast System for a Mobile Light Tower",
      zh: "如何选择适合项目需求的移动照明灯塔升降系统",
      description: {
        en: "Choose the right mobile light tower mast system based on project duration, mobility frequency, working height and budget.",
        zh: "根据项目周期、移动频率、使用高度和预算，选择合适的移动照明灯塔升降系统方案。",
      },
      solutionContent: {
        en: {
          selectionFactors: {
            title: "Four Factors to Consider",
            items: [
              { title: "Project Duration", description: "Short-term projects prioritize fast deployment, while long-term projects prioritize stable operation." },
              { title: "Mobility Frequency", description: "Projects that move frequently require more convenient mast operation." },
              { title: "Working Height", description: "Different projects require different mast heights based on the required lighting coverage." },
              { title: "Budget", description: "Select a suitable configuration based on project requirements and budget." },
            ],
          },
          mastOptions: {
            title: "Mast System Options",
            introduction: "Different projects require different mast system options.",
            items: [
              { title: "Manual Mast", positioning: "Economical Option", description: "Suitable for budget-sensitive projects and basic lighting requirements." },
              {
                title: "Electric Mast",
                positioning: "Rental Projects and Frequently Relocated Projects",
                description: "Reduces manual effort and improves onsite deployment efficiency.",
                relatedProduct: { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
              },
              { title: "Hydraulic Mast", positioning: "Long-Term Projects and Greater Height Requirements", description: "Suitable for projects that require greater stability and long-term operation." },
            ],
          },
          configurationExamples: {
            title: "Recommended Configuration Examples",
            projectTypeLabel: "Project Type",
            recommendationLabel: "Recommended Configuration",
            reasonLabel: "Recommendation Reason",
            rows: [
              { projectType: "Equipment Rental", recommendation: "7.5m Electric Mast", reason: "Frequently relocated projects require more convenient operation to improve deployment efficiency." },
              { projectType: "Construction", recommendation: "7.5m Electric Mast", reason: "Suitable for routine construction projects and reduces manual onsite operation." },
              { projectType: "Long-Term Infrastructure Projects", recommendation: "9m Hydraulic Mast", reason: "Suitable for long-term operation and greater height requirements." },
              { projectType: "Special Projects", recommendation: "Customized Configuration", reason: "The configuration is matched to the project environment and lighting requirements." },
            ],
          },
          relatedProducts: {
            title: "Related Mobile Light Tower Products",
            description: "Choose different mobile lighting solutions based on project requirements, including diesel and solar mobile light towers.",
            items: [
              { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
              { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
            ],
          },
          cta: {
            title: "Need Help Choosing the Right Configuration?",
            description: "Tell us your project environment, operating requirements and lighting needs. LFADJ will recommend a suitable mobile lighting configuration.",
            label: "Get Project Recommendation",
            href: "/en/contact",
          },
        },
        zh: {
          selectionFactors: {
            title: "选择升降系统需要考虑的四个因素",
            items: [
              { title: "项目周期", description: "短期项目关注快速部署，长期项目关注稳定运行。" },
              { title: "移动频率", description: "频繁移动项目需要更方便的升降操作。" },
              { title: "使用高度", description: "不同项目根据照明范围选择不同升降高度。" },
              { title: "预算", description: "根据项目要求选择合适配置。" },
            ],
          },
          mastOptions: {
            title: "移动照明灯塔升降系统选择",
            introduction: "不同项目应根据实际需求选择不同的升降系统方案。",
            items: [
              { title: "手动升降", positioning: "经济型方案", description: "适合预算敏感项目和基础照明需求。" },
              {
                title: "电动升降",
                positioning: "租赁项目和频繁移动项目",
                description: "减少人工操作，提高现场部署效率。",
                relatedProduct: { label: "LF955柴油移动照明灯塔", href: "/zh/products/lf955" },
              },
              { title: "液压升降", positioning: "长期工程项目和更高高度需求", description: "适合需要更高稳定性和长期运行的项目。" },
            ],
          },
          configurationExamples: {
            title: "典型项目配置建议",
            projectTypeLabel: "项目类型",
            recommendationLabel: "推荐配置",
            reasonLabel: "推荐原因",
            rows: [
              { projectType: "设备租赁", recommendation: "7.5m 电动升降", reason: "频繁移动项目需要更方便的操作方式，提高部署效率。" },
              { projectType: "建筑施工", recommendation: "7.5m 电动升降", reason: "适合常规施工项目，减少现场人工操作。" },
              { projectType: "长期基础设施项目", recommendation: "9m 液压升降", reason: "适合长期运行项目和更高高度需求。" },
              { projectType: "特殊项目", recommendation: "定制配置", reason: "根据项目环境和照明需求进行方案匹配。" },
            ],
          },
          relatedProducts: {
            title: "相关移动照明灯塔产品",
            description: "根据不同项目需求，选择柴油、太阳能等不同移动照明方案。",
            items: [
              { label: "LF955柴油移动照明灯塔", href: "/zh/products/lf955" },
              { label: "LF971太阳能移动照明灯塔", href: "/zh/products/lf971" },
            ],
          },
          cta: {
            title: "需要选择合适的照明配置？",
            description: "告诉我们您的项目环境、使用时间和照明需求，我们将推荐合适的移动照明配置。",
            label: "获取项目配置建议",
            href: "/zh/contact",
          },
        },
      },
    },
  },
  manufacturing: {
    "about-lfadj": { en: "About LFADJ", zh: "关于 LFADJ" },
    factory: { en: "Factory", zh: "工厂介绍" },
    "production-process": { en: "Production Process", zh: "生产流程" },
    "quality-control": { en: "Quality Control", zh: "质量控制" },
    customization: { en: "Customization", zh: "定制能力" },
  },
  resources: {
    "download-center": { en: "Download Center", zh: "下载中心" },
    "technical-articles": { en: "Technical Articles", zh: "技术文章" },
    faq: { en: "FAQ", zh: "常见问题" },
    "case-studies": { en: "Case Studies", zh: "项目案例" },
  },
  contact: {
    "request-a-quote": { en: "Request a Quote", zh: "获取报价" },
  },
};

const sectionTitles: Record<FrameworkSection, { en: string; zh: string }> = {
  products: { en: "Products", zh: "产品中心" },
  solutions: { en: "Solutions", zh: "解决方案" },
  manufacturing: { en: "Manufacturing", zh: "制造能力" },
  resources: { en: "Resources", zh: "资源中心" },
  contact: { en: "Contact", zh: "联系我们" },
};

export function getFrameworkSlugs(section: FrameworkSection) {
  return Object.keys(titles[section]);
}

export function getPlaceholderCopy(locale: FrameworkLocale, section: FrameworkSection, slug: string): PlaceholderCopy | null {
  const entry = titles[section][slug];
  if (!entry) return null;
  const zh = locale === "zh";
  return {
    title: entry[locale],
    description:
      entry.description?.[locale] ??
      (zh
        ? `本页面是 ${entry.zh} 的基础结构，后续将补充经过确认的产品或项目资料。`
        : `This is the foundation page for ${entry.en}. Verified product or project information will be added in a later content phase.`),
    parentLabel: sectionTitles[section][locale],
    parentHref: `/${locale}/${section}`,
    homeLabel: zh ? "首页" : "Home",
    homeHref: `/${locale}`,
    backLabel: zh ? `返回${sectionTitles[section].zh}` : `Back to ${sectionTitles[section].en}`,
  };
}

export function getPlaceholderMetadata(locale: FrameworkLocale, section: FrameworkSection, slug: string): Metadata {
  const copy = getPlaceholderCopy(locale, section, slug);
  if (!copy) return {};
  const metadata = titles[section][slug]?.metadata?.[locale];
  return {
    title: metadata?.title ?? `${copy.title} | LFADJ`,
    description: metadata?.description ?? copy.description,
    alternates: {
      canonical: `https://lfadj.com/${locale}/${section}/${slug}`,
      languages: {
        en: `https://lfadj.com/en/${section}/${slug}`,
        "zh-CN": `https://lfadj.com/zh/${section}/${slug}`,
        "x-default": `https://lfadj.com/en/${section}/${slug}`,
      },
    },
  };
}

export function getSolutionPageData(locale: FrameworkLocale, slug: string): SolutionPageData | null {
  const copy = getPlaceholderCopy(locale, "solutions", slug);
  const content = titles.solutions[slug]?.solutionContent?.[locale];
  if (!copy || !content) return null;
  return { ...copy, ...content };
}
