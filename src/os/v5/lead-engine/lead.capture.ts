export type Lead = {
  name?: string;
  email?: string;
  whatsapp?: string;
  productInterest: string;
  sourcePage: string;
  country?: string;
  timestamp: string;
};

export type LeadInput = Omit<Lead, "timestamp">;

export function captureLead(input: LeadInput): Lead {
  if (!input.email && !input.whatsapp) {
    throw new Error("Lead must include either email or whatsapp.");
  }

  return {
    ...input,
    timestamp: new Date().toISOString(),
  };
}

export function groupLeadsByProduct(leads: Lead[]): Record<string, Lead[]> {
  return leads.reduce<Record<string, Lead[]>>((groups, lead) => {
    const key = lead.productInterest || "unknown";
    groups[key] = [...(groups[key] ?? []), lead];
    return groups;
  }, {});
}
