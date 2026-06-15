export type TrafficSource = "seo" | "direct" | "referral" | "social" | "unknown";

export type TrafficEvent = {
  page: string;
  eventType: "page_visit" | "product_page_view" | "blog_engagement";
  keywordSource?: string;
  source: TrafficSource;
  timestamp: string;
};

export type TrafficSummary = {
  pageVisits: number;
  productPageViews: number;
  blogEngagements: number;
  keywordSources: Record<string, number>;
};

export function createTrafficEvent(
  page: string,
  eventType: TrafficEvent["eventType"],
  source: TrafficSource = "unknown",
  keywordSource?: string,
): TrafficEvent {
  return {
    page,
    eventType,
    source,
    keywordSource,
    timestamp: new Date().toISOString(),
  };
}

export function summarizeTraffic(events: TrafficEvent[]): TrafficSummary {
  return events.reduce<TrafficSummary>(
    (summary, event) => {
      if (event.eventType === "page_visit") summary.pageVisits += 1;
      if (event.eventType === "product_page_view") summary.productPageViews += 1;
      if (event.eventType === "blog_engagement") summary.blogEngagements += 1;

      if (event.keywordSource) {
        summary.keywordSources[event.keywordSource] =
          (summary.keywordSources[event.keywordSource] ?? 0) + 1;
      }

      return summary;
    },
    {
      pageVisits: 0,
      productPageViews: 0,
      blogEngagements: 0,
      keywordSources: {},
    },
  );
}
