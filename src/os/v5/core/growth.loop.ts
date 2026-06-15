import { analyzeSeoFeedback } from "../feedback-engine/seo.feedback";
import type { Lead } from "../lead-engine/lead.capture";
import { summarizeTraffic, type TrafficEvent } from "../traffic-engine/traffic.tracker";

export type GrowthLoopResult = {
  traffic: ReturnType<typeof summarizeTraffic>;
  leads: {
    total: number;
    conversionRate: number;
  };
  feedback: ReturnType<typeof analyzeSeoFeedback>;
  nextActions: string[];
};

export function runGrowthLoop(trafficEvents: TrafficEvent[], leads: Lead[]): GrowthLoopResult {
  const traffic = summarizeTraffic(trafficEvents);
  const totalTraffic = trafficEvents.length;
  const conversionRate = totalTraffic === 0 ? 0 : leads.length / totalTraffic;
  const feedback = analyzeSeoFeedback(trafficEvents, leads);

  return {
    traffic,
    leads: {
      total: leads.length,
      conversionRate,
    },
    feedback,
    nextActions: [
      ...feedback.suggestions,
      "Feed winning keywords back into SEO V4 keyword and content engines.",
    ],
  };
}
