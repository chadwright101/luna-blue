import { useRouter } from "next/router";
import { hillStreetUrls, robbergRidgeUrls } from "../mobile/mobile-menu";
import DesktopMenuPageComponent from "./desktop-menu-page-component";

import navigationList from "@/data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const {
  hillStreet: { en: hillStreetEn, de: hillStreetDe },
  robbergRidge: { en: robbergRidgeEn, de: robbergRidgeDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigationList;

const DesktopMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (hillStreetUrls.includes(currentRoute)) {
    return (
      <DesktopMenuPageComponent
        cssClasses={cssClasses}
        navListEn={hillStreetEn}
        navListDe={hillStreetDe}
      />
    );
  } else if (robbergRidgeUrls.includes(currentRoute)) {
    return (
      <DesktopMenuPageComponent
        cssClasses={cssClasses}
        navListEn={robbergRidgeEn}
        navListDe={robbergRidgeDe}
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
