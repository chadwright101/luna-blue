import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import classNames from "classnames";
import Translated from "../../utils/translated";
import {
  robbergBeachUrls,
  lagoonVillaUrls,
} from "../header/mobile/mobile-menu";

import navigation from "@/data/navigation-data.json";
import PageFooterNavComponent from "./pages/page-footer-nav-component";
import { CssProps } from "@/components/property-pages/home-page/home-page";

const {
  robbergBeach: { en: robbergBeachEn, de: robbergBeachDe },
  lagoonVilla: { en: lagoonVillaEn, de: lagoonVillaDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigation;

const currentYear = new Date().getFullYear();

const Footer = ({ cssClasses }: CssProps) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;
  const homePagePath = currentRoute === "/";
  const robbergBeachPath =
    currentRoute === "/robberg-beach-view-villa" ||
    currentRoute === "/robberg-beach-view-villa/contact" ||
    currentRoute === "/robberg-beach-view-villa/our-rooms" ||
    currentRoute === "/robberg-beach-view-villa/about-us";
  const lagoonVillaPath =
    currentRoute === "/keurbooms-lagoon-villa" ||
    currentRoute === "/keurbooms-lagoon-villa/contact" ||
    currentRoute === "/keurbooms-lagoon-villa/our-rooms" ||
    currentRoute === "/keurbooms-lagoon-villa/about-us";
  const cliffsidePath =
    currentRoute === "/cliff-side-suites" ||
    currentRoute === "/cliff-side-suites/contact" ||
    currentRoute === "/cliff-side-suites/our-rooms" ||
    currentRoute === "/cliff-side-suites/about-us";
  const forestCabinsPath =
    currentRoute === "/forest-view-cabins" ||
    currentRoute === "/forest-view-cabins/contact" ||
    currentRoute === "/forest-view-cabins/our-rooms" ||
    currentRoute === "/forest-view-cabins/about-us";
  const { locale } = useRouter();

  return (
    <footer
      className={`${cssClasses} ${homePagePath && "hidden desktopSmall:block"}`}
    >
      <hr className="mb-10 text-black" />
      <div
        className={classNames(
          "flex flex-wrap gap-10 tabletLarge:grid grid-cols-[250px_300px_250px_1fr] desktopSmall:grid-cols-[250px_300px_250px_1fr]",
          {
            "justify-center tabletLarge:grid grid-cols-[250px_250px_1fr] desktopSmall:grid-cols-[250px_300px__1fr]":
              robbergBeachPath ||
              lagoonVillaPath ||
              cliffsidePath ||
              forestCabinsPath ||
              homePagePath,
          }
        )}
      >
        <div className="hidden tabletLarge:block">
          <h4>Navigation</h4>
          {robbergBeachUrls.includes(currentRoute) ? (
            <PageFooterNavComponent
              navListEn={robbergBeachEn}
              navListDe={robbergBeachDe}
            />
          ) : lagoonVillaUrls.includes(currentRoute) ? (
            <PageFooterNavComponent
              navListEn={lagoonVillaEn}
              navListDe={lagoonVillaDe}
            />
          ) : (
            <PageFooterNavComponent
              navListEn={homePageEn}
              navListDe={homePageDe}
            />
          )}
        </div>
        <div
          className={classNames("", {
            hidden:
              robbergBeachPath ||
              lagoonVillaPath ||
              cliffsidePath ||
              forestCabinsPath,
          })}
        >
          {locale === "en" ? <h4>Contact</h4> : <h4>Kontakt</h4>}
          <ul className="flex flex-col gap-6 desktopSmall:gap-4 mt-6 tabletLarge:grid grid-rows-[40px_40px_1fr] tabletLarge:h-[200px] tabletLarge:gap-0">
            {!showPhone && (
              <li onClick={() => setShowPhone(true)} className="mr-auto">
                <p className="italic p-3 -m-3 text-blueLink tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown desktopSmall:p-0 desktopSmall:m-0">
                  <Translated german="Rufnummer anzeigen">
                    Show phone number
                  </Translated>
                </p>
              </li>
            )}
            {showPhone && (
              <li>
                <Link
                  href="tel:+27664882828"
                  className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
                >
                  +27 66 488 2828
                </Link>
              </li>
            )}
            {!showEmail && (
              <li onClick={() => setShowEmail(true)} className="mr-auto">
                <p className="italic p-3 -m-3 text-blueLink tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown desktopSmall:p-0 desktopSmall:m-0">
                  <Translated german="E-Mail Adresse anzeigen">
                    Show email address
                  </Translated>
                </p>
              </li>
            )}
            {showEmail && (
              <li>
                <Link
                  href="mailto:enquiries@lunarblue.co.za"
                  className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
                >
                  enquiries@lunarblue.co.za
                </Link>
              </li>
            )}
          </ul>
        </div>
        {!homePagePath && (
          <div>
            <h4
              className={classNames("", {
                "text-center tabletLarge:text-left":
                  robbergBeachPath ||
                  lagoonVillaPath ||
                  cliffsidePath ||
                  forestCabinsPath,
              })}
            >
              Social
            </h4>
            <div className="flex gap-5 items-center mt-6 desktopSmall:gap-3">
              <Link
                href="https://www.facebook.com/lunarbluevillas"
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 desktopSmall:hover:scale-125 desktopSmall:hover:opacity-[85%] transition-all duration-500"
                target="_blank"
              >
                <Image
                  src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/facebook-logo.png"
                  alt="Facebook logo"
                  width={35}
                  height={35}
                  className="desktopSmall:w-[30px] h-auto"
                />
              </Link>
              <Link
                href="https://www.instagram.com/lunablueguesthouse/"
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 desktopSmall:hover:scale-125 desktopSmall:hover:opacity-[85%] transition-all duration-500"
                target="_blank"
              >
                <Image
                  src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/instagram-logo.png"
                  alt="Instagram logo"
                  width={35}
                  height={35}
                  className="desktopSmall:w-[30px] h-auto"
                />
              </Link>
            </div>
          </div>
        )}
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/luna-blue-logo.png"
          alt="Luna Blue logo"
          width={150}
          height={193}
          className={classNames(
            "hidden w-16 h-auto desktopSmall:block ml-auto",
            {
              " justify-self-end":
                robbergBeachPath ||
                lagoonVillaPath ||
                cliffsidePath ||
                forestCabinsPath,
            }
          )}
          priority
        />
      </div>
      <p className="text-[16px] text-center py-4 mt-8 bg-darkBeige tabletLarge:mt-4 mb-6">
        © Copyright <Link href="/">Luna Blue {currentYear}</Link>
      </p>
    </footer>
  );
};

export default Footer;
