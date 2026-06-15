export type WhiteScreenCheck = {
  isWhiteScreen: boolean;
  reason?: string;
};

export function detectWhiteScreen(html: string): WhiteScreenCheck {
  const bodyText = html.replace(/<[^>]+>/g, "").trim();

  if (bodyText.length === 0) {
    return { isWhiteScreen: true, reason: "Rendered HTML contains no visible text." };
  }

  return { isWhiteScreen: false };
}
