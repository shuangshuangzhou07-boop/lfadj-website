import LF951Page, { generateMetadata as generateLF951Metadata } from "../../../[lang]/products/lf951/page";

export function generateMetadata() {
  return generateLF951Metadata({ params: { lang: "zh" } });
}

export default function Page() {
  return <LF951Page params={{ lang: "zh" }} />;
}
