import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import PageFooterNavComponent from "./pages/page-footer-nav-component";
import Translated from "../../utils/translated";

import navigation from "@/data/navigation-data.json";

import { CssProps } from "@/components/property-pages/home-page/home-page";
import {
  robbergBeachUrls,
  lagoonVillaUrls,
  cliffSideUrls,
  forestCabinsUrls,
} from "../header/mobile/mobile-menu";

const {
  robbergBeach: { en: robbergBeachEn, de: robbergBeachDe },
  lagoonVilla: { en: lagoonVillaEn, de: lagoonVillaDe },
  cliffSide: { en: cliffSideEn, de: cliffSideDe },
  forestCabins: { en: forestCabinsEn, de: forestCabinsDe },
  homePage: { en: homePageEn, de: homePageDe },
} = navigation;

const currentYear = new Date().getFullYear();

const Footer = ({ cssClasses }: CssProps) => {
  const defaultEmail = (
    <Translated german="E-Mail Adresse anzeigen">Show email address</Translated>
  );
  const defaultPhone = (
    <Translated german="Rufnummer anzeigen">Show phone number</Translated>
  );
  const [showEmail, setShowEmail] = useState(defaultEmail);
  const [showPhone, setShowPhone] = useState(defaultPhone);

  const router = useRouter();
  const currentRoute = router.pathname;

  const fetchPhone = async () => {
    try {
      const response = await fetch("/api/contact-details");
      const data = await response.json();
      setShowPhone(data.phone);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  const fetchEmail = async () => {
    try {
      const response = await fetch("/api/contact-details");
      const data = await response.json();
      setShowEmail(data.email);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  return (
    <footer className={`${cssClasses}`}>
      <hr className="mb-4 tabletLarge:mb-10 text-black" />
      <div className="grid place-items-center gap-4 tabletLarge:gap-24 tabletLarge:place-items-start tabletLarge:flex desktopSmall:grid desktopSmall:gap-0 desktopSmall:grid-cols-4">
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
          ) : cliffSideUrls.includes(currentRoute) ? (
            <PageFooterNavComponent
              navListEn={cliffSideEn}
              navListDe={cliffSideDe}
            />
          ) : forestCabinsUrls.includes(currentRoute) ? (
            <PageFooterNavComponent
              navListEn={forestCabinsEn}
              navListDe={forestCabinsDe}
            />
          ) : (
            <PageFooterNavComponent
              navListEn={homePageEn}
              navListDe={homePageDe}
            />
          )}
        </div>
        <div className="hidden tabletLarge:block">
          <h4>
            <Translated german="Kontakt">Contact</Translated>
          </h4>
          <ul className="grid gap-2 mt-6 grid-rows-[40px_40px_1fr] desktopSmall:gap-0">
            {showPhone !== defaultPhone ? (
              <li onClick={fetchPhone} className="mr-auto">
                <p className="italic p-3 -m-3 text-blueLink tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown desktopSmall:p-0 desktopSmall:m-0">
                  {showPhone}
                </p>
              </li>
            ) : (
              <li>
                <Link
                  prefetch={false}
                  href={`tel:${showPhone}`}
                  className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {showPhone}
                </Link>
              </li>
            )}
            {showEmail !== defaultEmail ? (
              <li onClick={fetchEmail} className="mr-auto">
                <p className="italic p-3 -m-3 text-blueLink tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown desktopSmall:p-0 desktopSmall:m-0">
                  {showEmail}
                </p>
              </li>
            ) : (
              <li>
                <Link
                  prefetch={false}
                  href={`mailto:${showEmail}`}
                  className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {showEmail}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4 className="hidden tabletLarge:block">Social</h4>
          <div className="flex gap-5 items-center mt-6 desktopSmall:gap-3">
            <Link
              prefetch={false}
              href="https://www.facebook.com/lunarbluevillas"
              className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 desktopSmall:hover:scale-125 desktopSmall:hover:opacity-[85%] transition-all duration-500"
              target="_blank"
            >
              <Image
                src="/assets/images/facebook-logo.png"
                alt="Facebook logo"
                width={35}
                height={35}
                className="desktopSmall:w-[30px] h-auto"
              />
            </Link>
            <Link
              prefetch={false}
              href="https://www.instagram.com/lunablueguesthouse/"
              className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 desktopSmall:hover:scale-125 desktopSmall:hover:opacity-[85%] transition-all duration-500"
              target="_blank"
            >
              <Image
                src="/assets/images/instagram-logo.png"
                alt="Instagram logo"
                width={35}
                height={35}
                className="desktopSmall:w-[30px] h-auto"
              />
            </Link>
          </div>
        </div>
        <div className="desktopSmall:ml-auto">
          <Image
            src="/assets/images/luna-blue-logo.png"
            alt="Luna Blue logo"
            width={150}
            height={193}
            className="w-16 h-auto mx-auto mb-4 tabletLarge:mx-0 tabletLarge:ml-0 desktopSmall:ml-auto"
            priority
          />
          <p className="text-[16px] flex flex-col items-center tabletLarge:items-start desktopSmall:items-end desktopSmall:text-right desktopSmall:mt-2 tabletLarge:text-[15px]">
            <Translated german="Entwickelt von:">Developed by:</Translated>
            <a
              href="https://www.thewrightdesigns.co.za"
              target="_blank"
              className="-m-4 p-4 tabletLarge:m-0 tabletLarge:p-0 text-blue text-[16px] text-blueLink tablet:hover:underline underline-offset-4 tabletLarge:text-[15px]"
            >
              The Wright Designs
            </a>
          </p>
        </div>
      </div>
      <p className="text-[16px] text-center py-4 mt-8 bg-darkBeige tabletLarge:mt-4 mb-6">
        © Copyright{" "}
        <Link prefetch={false} href="/">
          Luna Blue {currentYear}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
