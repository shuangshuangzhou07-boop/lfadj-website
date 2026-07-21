import LF971Page, { generateMetadata as generateLF971Metadata } from "../../../[lang]/products/lf971/page";

export function generateMetadata() {
  return generateLF971Metadata({ params: { lang: "en" } });
}

export default function Page() {
  return <LF971Page params={{ lang: "en" }} />;
}
