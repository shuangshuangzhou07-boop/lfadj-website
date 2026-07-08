import { getMobileLightTowerProduct, getShippingProfile } from "./catalog";
import type { QuoteBreakdown, QuoteInput } from "./types";

export function calculateQuote(input: QuoteInput) {
  const quantity = Math.max(1, Math.floor(input.quantity || 1));
  const product = getMobileLightTowerProduct(input.productSlug);

  if (!product) {
    throw new Error(`Product ${input.productSlug} is not available for quotation.`);
  }

  const profile = getShippingProfile(input.shippingRegion);
  const subtotalUsd = product.basePriceUsd * quantity;
  const exportHandlingUsd = Math.max(220, quantity * 18);
  const packagingUsd = Math.max(180, quantity * 12);
  const loadingUsd = Math.max(150, quantity * 8);
  const freightUsd = Math.max(1800, subtotalUsd * profile.freightRatePercent);
  const insuranceUsd = Math.max(140, subtotalUsd * profile.insuranceRatePercent);

  const breakdown: QuoteBreakdown = {
    unitPriceUsd: product.basePriceUsd,
    subtotalUsd,
    exportHandlingUsd,
    packagingUsd,
    loadingUsd,
    freightUsd,
    insuranceUsd,
    exwUsd: subtotalUsd,
    fobUsd: subtotalUsd + exportHandlingUsd + packagingUsd + loadingUsd,
    cifUsd: subtotalUsd + exportHandlingUsd + packagingUsd + loadingUsd + freightUsd + insuranceUsd,
  };

  return {
    product,
    breakdown,
    destinationPort: input.destinationPort || "To be confirmed",
    shippingRegion: input.shippingRegion,
  };
}
