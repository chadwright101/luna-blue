import { useRouter } from "next/router";
import { lunaBlue1Urls, lunaBlue2Urls } from "../mobile/mobile-menu";
import DesktopMenuPageComponent from "./desktop-menu-page-component";

import navigationList from "@/data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const {
  lunaBlue1: { en: lunaBlue1En, de: lunaBlue1De },
  lunaBlue2: { en: lunaBlue2En, de: lunaBlue2De },
  homePage: { en: homePageEn, de: homePageDe },
} = navigationList;

const DesktopMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (lunaBlue2Urls.includes(currentRoute)) {
    return (
      <DesktopMenuPageComponent
        cssClasses={cssClasses}
        navListEn={lunaBlue2En}
        navListDe={lunaBlue2De}
      />
    );
  } else if (lunaBlue1Urls.includes(currentRoute)) {
    return (
      <DesktopMenuPageComponent
        cssClasses={cssClasses}
        navListEn={lunaBlue1En}
        navListDe={lunaBlue1De}
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
