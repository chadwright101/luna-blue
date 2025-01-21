import { useRouter } from "next/router";
import { lagoonVillaUrls, cliffSideUrls } from "../mobile/mobile-menu";
import DesktopMenuPageComponent from "./desktop-menu-page-component";

import navigationList from "@/data/navigation-data.json";
import { CssProps } from "@/components/property-pages/home-page/home-page";

const {
  lagoonVilla: { en: lagoonVillaEn, de: lagoonVillaDe },
  cliffSide: { en: cliffSideEn, de: cliffSideDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigationList;

const DesktopMenu = ({ cssClasses }: CssProps) => {
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
  } else if (cliffSideUrls.includes(currentRoute)) {
    return (
      <DesktopMenuPageComponent
        cssClasses={cssClasses}
        navListEn={cliffSideEn}
        navListDe={cliffSideDe}
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
