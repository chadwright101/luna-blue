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

import generalData from "@/data/robberg-beach-data.json";
import navigation from "@/data/navigation-data.json";
import PageFooterNavComponent from "./pages/page-footer-nav-component";
import { CssProps } from "@/components/property-pages/home-page/home-page";

const {
  general: {
    contact: { phone, phoneDisplay, email, subject },
    address: { areaCode, province, street, town },
    social: { facebook, instagram },
  },
} = generalData;

const {
  robbergBeach: { en: robbergBeachEn, de: robbergBeachDe },
  lagoonVilla: { en: lagoonVillaEn, de: lagoonVillaDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigation;

const Footer = ({ cssClasses }: CssProps) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;
  const homePagePath = currentRoute === "/";
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
              currentRoute === "/robberg-ridge/contact" ||
              currentRoute === "/lagoonVilla/contact" ||
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
              currentRoute === "/robberg-ridge/contact" ||
              currentRoute === "/lagoonVilla/contact",
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
                  href={`tel:${phone}`}
                  className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {phoneDisplay}
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
                  href={`mailto:${email}?subject=${subject}`}
                  className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {email}
                </Link>
              </li>
            )}
            {!homePagePath && (
              <li>
                <address>
                  {street}, {town}
                  <br />
                  {province}, {areaCode}
                </address>
              </li>
            )}
          </ul>
        </div>
        {!homePagePath && (
          <div>
            <h4
              className={classNames("", {
                "text-center tabletLarge:text-left":
                  currentRoute === "/robberg-ridge/contact" ||
                  currentRoute === "/lagoonVilla/contact",
              })}
            >
              Social
            </h4>
            <div className="flex gap-5 items-center mt-6 desktopSmall:gap-3">
              <Link
                href={facebook}
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
                href={instagram}
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
                currentRoute === "/robberg-ridge/contact" ||
                currentRoute === "/lagoonVilla/contact",
            }
          )}
          priority
        />
      </div>
      <p className="text-[16px] text-center py-4 mt-8 bg-darkBeige tabletLarge:mt-4 mb-6">
        © Copyright <Link href="/">Luna Blue</Link>
      </p>
    </footer>
  );
};

export default Footer;
