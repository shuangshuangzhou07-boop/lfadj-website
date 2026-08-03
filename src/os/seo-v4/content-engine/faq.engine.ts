export type FaqItem = {
  question: string;
  answerIntent: "short" | "trust-building";
  targetKeyword: string;
  internalLinks: string[];
};

export function generateFaqItems(): FaqItem[] {
  return [
    {
      question: "What is mobile lighting tower used for?",
      answerIntent: "short",
      targetKeyword: "mobile lighting tower",
      internalLinks: ["/products", "/products/lf6130"],
    },
    {
      question: "How long does diesel tower run?",
      answerIntent: "short",
      targetKeyword: "diesel light tower runtime",
      internalLinks: ["/products/lf6130", "/en/contact"],
    },
    {
      question: "What is OEM lighting tower manufacturer?",
      answerIntent: "trust-building",
      targetKeyword: "OEM lighting tower manufacturer",
      internalLinks: ["/oem", "/products/lf6130", "/en/contact"],
    },
  ];
}
