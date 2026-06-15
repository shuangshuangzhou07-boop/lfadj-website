export function generateFaq(keyword: string) {
  return [
    {
      question: `What is ${keyword} used for?`,
      answer: `${keyword} is used for temporary industrial illumination in construction, mining, emergency and rental applications.`,
    },
    {
      question: `How do buyers choose ${keyword}?`,
      answer: "Buyers should compare runtime, mast height, LED efficiency, generator system, IP protection and supplier support.",
    },
  ];
}
