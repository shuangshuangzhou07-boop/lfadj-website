import LF955Page, { generateMetadata as generateLF955Metadata } from "../../../[lang]/products/lf955/page";

export function generateMetadata() {
  return generateLF955Metadata({ params: { lang: "zh" } });
}

export default function Page() {
  return <LF955Page params={{ lang: "zh" }} />;
}
