import { useRouter } from "next/router";

import MobileMenuPageComponent from "./mobile-menu-page-component";

import navigationList from "@/data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

export const lagoonVillaUrls = [
  "/keurbooms-lagoon-villa",
  "/keurbooms-lagoon-villa/about-us",
  "/keurbooms-lagoon-villa/our-rooms",
  "/keurbooms-lagoon-villa/contact",
];

export const robbergBeachUrls = [
  "/robberg-beach-view-villa",
  "/robberg-beach-view-villa/about-us",
  "/robberg-beach-view-villa/our-rooms",
  "/robberg-beach-view-villa/contact",
];

export const cliffSideUrls = [
  "/cliffside-cabins",
  "/cliffside-cabins/about-us",
  "/cliffside-cabins/our-cabins",
  "/cliffside-cabins/contact",
];

const {
  robbergBeach: { en: robbergBeachEn, de: robbergBeachDe },
  lagoonVilla: { en: lagoonVillaEn, de: lagoonVillaDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigationList;

const MobileMenu = ({ cssClasses }: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  if (lagoonVillaUrls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={lagoonVillaEn}
        navListDe={lagoonVillaDe}
      />
    );
  } else if (robbergBeachUrls.includes(currentRoute)) {
    return (
      <MobileMenuPageComponent
        cssClasses={cssClasses}
        navListEn={robbergBeachEn}
        navListDe={robbergBeachDe}
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
