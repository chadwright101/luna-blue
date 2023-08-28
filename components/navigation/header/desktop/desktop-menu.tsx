import { useRouter } from "next/router";
import { robbergBeachUrls, lagoonVillaUrls } from "../mobile/mobile-menu";
import DesktopMenuPageComponent from "./desktop-menu-page-component";

import navigationList from "@/data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const {
  robbergBeach: { en: robbergBeachEn, de: robbergBeachDe },
  lagoonVilla: { en: lagoonVillaEn, de: lagoonVillaDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigationList;

const DesktopMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (lagoonVillaUrls.includes(currentRoute)) {
    return (
      <DesktopMenuPageComponent
        cssClasses={cssClasses}
        navListEn={lagoonVillaEn}
        navListDe={lagoonVillaDe}
      />
    );
  } else if (robbergBeachUrls.includes(currentRoute)) {
    return (
      <DesktopMenuPageComponent
        cssClasses={cssClasses}
        navListEn={robbergBeachEn}
        navListDe={robbergBeachDe}
      />
    );
  } else {
    return (
      <DesktopMenuPageComponent
        cssClasses={cssClasses}
        navListEn={homePageEn}
        navListDe={homePageDe}
      />
    );
  }
};

export default DesktopMenu;
