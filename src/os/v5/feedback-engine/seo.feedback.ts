import type { Lead } from "../lead-engine/lead.capture";
import type { TrafficEvent } from "../traffic-engine/traffic.tracker";

export type SeoFeedback = {
  highTrafficLowConversionPages: string[];
  highConversionKeywords: string[];
  lowPerformingBlogContent: string[];
  suggestions: string[];
};

function countBy<T extends string>(items: T[]): Record<T, number> {
  return items.reduce<Record<T, number>>((counts, item) => {
    counts[item] = (counts[item] ?? 0) + 1;
    return counts;
  }, {} as Record<T, number>);
}

export function analyzeSeoFeedback(traffic: TrafficEvent[], leads: Lead[]): SeoFeedback {
  const pageTraffic = countBy(traffic.map((event) => event.page));
  const leadPages = countBy(leads.map((lead) => lead.sourcePage));
  const keywordLeads = countBy(
    leads
      .map((lead) => lead.productInterest)
      .filter((keyword): keyword is string => Boolean(keyword)),
  );

  const highTrafficLowConversionPages = Object.entries(pageTraffic)
    .filter(([page, visits]) => visits >= 10 && (leadPages[page] ?? 0) === 0)
    .map(([page]) => page);

  const lowPerformingBlogContent = highTrafficLowConversionPages.filter((page) =>
    page.startsWith("/blog"),
  );

  const highConversionKeywords = Object.entries(keywordLeads)
    .filter(([, count]) => count >= 2)
    .map(([keyword]) => keyword);

  return {
    highTrafficLowConversionPages,
    highConversionKeywords,
    lowPerformingBlogContent,
    suggestions: [
      "Add stronger inquiry CTAs to high traffic low conversion pages.",
      "Expand content around high conversion keywords.",
      "Refresh low performing blog content with product links and buyer decision sections.",
    ],
  };
}
