import WhatIsMobileLightTowerPage, {
  generateMetadata as generateWhatIsMobileLightTowerMetadata,
} from "../../../[lang]/resources/what-is-mobile-light-tower/page";

export function generateMetadata() {
  return generateWhatIsMobileLightTowerMetadata({ params: { lang: "zh" } });
}

export default function Page() {
  return <WhatIsMobileLightTowerPage params={{ lang: "zh" }} />;
}
