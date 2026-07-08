export type TranslationMode = "en2zh" | "zh2en";

const dictionary = {
  "en2zh": {
    "Please send CIF price": "请发送CIF价格",
    quotation: "报价单",
    "lighting tower": "照明灯塔",
    "lead time": "交货时间",
    "payment terms": "付款条件",
    "We offer CIF": "我们提供CIF",
    "Solar Light Tower": "太阳能灯塔",
    "Diesel Light Tower": "柴油灯塔",
    "Please confirm": "请确认",
  },
  "zh2en": {
    请发送CIF价格: "Please send CIF price",
    报价单: "quotation",
    照明灯塔: "lighting tower",
    交货时间: "lead time",
    付款条件: "payment terms",
    我们提供CIF: "We offer CIF",
    太阳能灯塔: "Solar Light Tower",
    柴油灯塔: "Diesel Light Tower",
    请确认: "Please confirm",
  },
};

export function translateText(text: string, mode: TranslationMode) {
  const source = text.trim();
  if (!source) {
    return "";
  }

  const map = dictionary[mode];
  const normalized = source.replace(/\s+/g, " ");

  if (mode === "en2zh") {
    return Object.entries(map).reduce((acc, [key, value]) => acc.replaceAll(key, value), normalized);
  }

  return Object.entries(map).reduce((acc, [key, value]) => acc.replaceAll(key, value), normalized);
}
