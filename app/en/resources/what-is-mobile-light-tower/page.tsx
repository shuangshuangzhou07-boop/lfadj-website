import WhatIsMobileLightTowerPage, {
  generateMetadata as generateWhatIsMobileLightTowerMetadata,
} from "../../../[lang]/resources/what-is-mobile-light-tower/page";

export function generateMetadata() {
  return generateWhatIsMobileLightTowerMetadata({ params: { lang: "en" } });
}

export default function Page() {
  return <WhatIsMobileLightTowerPage params={{ lang: "en" }} />;
}
