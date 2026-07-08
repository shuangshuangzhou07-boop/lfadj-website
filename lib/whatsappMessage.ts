export type WhatsAppMessageData = {
  product: string;
  country: string;
  standardPrice: string | number;
};

export type WhatsAppSalesStage = "w1" | "w2" | "w3" | "w4";

export type WhatsAppFollowUpStage = "f1" | "f2" | "f3" | "f4";

export function generateWhatsAppMessage(data: WhatsAppMessageData) {
  return `
Hi,

Here is your quotation:

Product: ${data.product}
Country: ${data.country}

Recommended: Standard Version
CIF Price: ${data.standardPrice}

Delivery: 20-25 days

LFADJ Sales Team
`;
}

export function generateLF955WhatsAppSalesMessage(stage: WhatsAppSalesStage, isChinese = false) {
  const messages: Record<WhatsAppSalesStage, { en: string; zh: string }> = {
    w1: {
      en: "Hello, thank you for contacting LF955 mobile light tower.\nI am your project consultant.\n\nTo provide an accurate quote, please confirm:\n1. Application scenario (mining / construction / rental / emergency)\n2. Quantity required\n3. Project country (is it South Africa?)",
      zh: "您好，感谢您咨询LF955移动照明灯塔。\n我是您的项目顾问。\n\n为给您准确报价，请确认：\n1. 使用场景（矿山/工地/租赁/应急）\n2. 数量需求\n3. 项目国家（是否南非）",
    },
    w2: {
      en: "LF955 pricing for South Africa mining / construction projects depends on configuration:\n\n- Engine (Kubota / Yanmar)\n- Lighting power (300W-500W)\n- Purchase quantity\n\nMost first-time buyers test 2-5 units on site.\nI can recommend the best configuration for your project.",
      zh: "LF955在南非矿山/施工项目中的价格取决于配置：\n\n- 发动机（Kubota / Yanmar）\n- 灯光功率（300W-500W）\n- 采购数量\n\n通常客户首次采购2-5台用于现场测试。\n我可以帮您推荐最适合的配置方案。",
    },
    w3: {
      en: "LF955 regular price range:\nUSD 3,800 - 6,200 / unit (depending on configuration)\n\nIf you confirm quantity today,\nwe can prioritize production and logistics.",
      zh: "LF955常规价格区间：\nUSD 3,800 - 6,200 / 台（根据配置）\n\n如果今天确认数量，\n可优先安排生产与物流。",
    },
    w4: {
      en: "This week's factory schedule is closing soon.\n\nSouth Africa customers can get:\n- Priority production slot\n- Optimized bulk shipping\n- Faster delivery cycle\n\nIf confirmed within 24 hours, I can help reserve capacity.",
      zh: "本周工厂排期即将关闭。\n\n南非客户可享受：\n- 优先生产排期\n- 批量运输优化\n- 更快交货周期\n\n如24小时内确认，我可以帮您锁定资源。",
    },
  };

  return messages[stage][isChinese ? "zh" : "en"];
}

export function generateLF955WhatsAppFollowUpMessage(stage: WhatsAppFollowUpStage, isChinese = false) {
  const messages: Record<WhatsAppFollowUpStage, { en: string; zh: string }> = {
    f1: { en: "Day 1: Is the LF955 project still moving forward?", zh: "第1天：请问LF955项目是否还在推进？" },
    f2: { en: "Day 3: We just completed a similar mining lighting project that you can reference.", zh: "第3天：我们刚完成类似矿山照明项目，可参考。" },
    f3: { en: "Day 5: This week's production schedule is closing soon. I can help reserve your slot.", zh: "第5天：本周生产排期即将关闭，可帮您锁定。" },
    f4: { en: "Day 7: Is the project continuing or being paused? I will update my record.", zh: "第7天：该项目是继续还是暂缓？我这边做记录。" },
  };

  return messages[stage][isChinese ? "zh" : "en"];
}
