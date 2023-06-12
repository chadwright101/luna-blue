import { useRouter } from "next/router";

import MobileMenuPageComponent from "./mobile-menu-page-component";

import navigationList from "@/data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

export const hillStreetUrls = [
  "/hill-street",
  "/hill-street/about-us",
  "/hill-street/our-rooms",
  "/hill-street/contact",
];

export const robbergRidgeUrls = [
  "/robberg-ridge",
  "/robberg-ridge/about-us",
  "/robberg-ridge/our-rooms",
  "/robberg-ridge/contact",
];

const {
  hillStreet: { en: hillStreetEn, de: hillStreetDe },
  robbergRidge: { en: robbergRidgeEn, de: robbergRidgeDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigationList;

const MobileMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (hillStreetUrls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={hillStreetEn}
        navListDe={hillStreetDe}
      />
    );
  } else if (robbergRidgeUrls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={robbergRidgeEn}
        navListDe={robbergRidgeDe}
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
