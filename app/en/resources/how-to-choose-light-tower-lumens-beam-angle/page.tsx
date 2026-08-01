import GuidePage, { generateMetadata as generateGuideMetadata } from "../../../[lang]/resources/how-to-choose-light-tower-lumens-beam-angle/page";

export function generateMetadata() {
  return generateGuideMetadata({ params: { lang: "en" } });
}

export default function Page() {
  return <GuidePage params={{ lang: "en" }} />;
}
