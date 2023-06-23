import { useRouter } from "next/router";

import MobileMenuPageComponent from "./mobile-menu-page-component";

import navigationList from "@/data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

export const lunaBlue2Urls = [
  "/luna-blue-2",
  "/luna-blue-2/about-us",
  "/luna-blue-2/our-rooms",
  "/luna-blue-2/contact",
];

export const lunaBlue1Urls = [
  "/luna-blue-1",
  "/luna-blue-1/about-us",
  "/luna-blue-1/our-rooms",
  "/luna-blue-1/contact",
];

const {
  lunaBlue1: { en: lunaBlue1En, de: lunaBlue1De },
  lunaBlue2: { en: lunaBlue2En, de: lunaBlue2De },
  homePage: { en: homePageEn, de: homePageDe },
} = navigationList;

const MobileMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (lunaBlue2Urls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={lunaBlue2En}
        navListDe={lunaBlue2De}
      />
    );
  } else if (lunaBlue1Urls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={lunaBlue1En}
        navListDe={lunaBlue1De}
      />
    );
  } else {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={homePageEn}
        navListDe={homePageDe}
      />
    );
  }
};

export default MobileMenu;
