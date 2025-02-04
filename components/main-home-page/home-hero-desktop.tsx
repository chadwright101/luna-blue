import { useState } from "react";

import HomeHeroTextBox from "./home-hero-text-box";
import HomePageDesktopAboutUs from "./desktop/home-page-desktop-about-us";
import HomePageDesktopContact from "./desktop/home-page-desktop-contact";

import classNames from "classnames";

import generalData from "@/data/general-data.json";

import { CssProps } from "../property-pages/home-page/home-page";
import Translated from "../utils/translated";

const {
  mainHomePage: {
    hero: { lagoonVilla, cliffside },
  },
} = generalData;

const HomeHeroDesktop = ({ cssClasses }: CssProps) => {
  const [showLagoonVilla, setShowLagoonVilla] = useState(false);
  const [showCliffside, setShowCliffside] = useState(false);
  return (
    <main className={`${cssClasses}`}>
      <div className="my-8">
        <h3 className="text-center text-[48px]">
          <Translated german="Mit welchem Ausblick möchten Sie am liebsten in Ihrem nächsten Urlaub erwachen?">
            Which view would you like to wake up to during your next holiday?
          </Translated>
        </h3>
      </div>
      <section
        className={classNames(
          "grid hero-grid-split ease-in-out duration-700 delay-200",
          {
            "hero-grid-lagoon-villa": showLagoonVilla,
            "hero-grid-cliffside": showCliffside,
          }
        )}
      >
        {/* Lagoon Villa */}
        <div
          className="overflow-hidden bg-black desktopSmall:h-[650px] desktop:h-[725px]"
          onMouseEnter={() => setShowLagoonVilla(true)}
          onMouseLeave={() => setShowLagoonVilla(false)}
        >
          <div
            className={classNames(
              "bg-[url('/assets/images/lagoon-villa/luna-blue-lagoon-view-villa-main-home-page-hero.webp')] bg-cover bg-center flex place-items-center justify-center duration-1000 delay-500 ease-in-out desktopSmall:h-full",
              {
                "scale-110": showLagoonVilla,
                "opacity-70": showCliffside,
              }
            )}
          >
            <HomeHeroTextBox
              whiteText
              title="Keurbooms Lagoon Villa"
              paragraph={lagoonVilla.en.description}
              paragraphGerman={lagoonVilla.de.description}
              buttonUrl="/keurbooms-lagoon-villa"
              cssClasses={classNames(
                "opacity-0 ease-in-out duration-700 delay-150",
                {
                  "opacity-100": showLagoonVilla,
                }
              )}
            />
          </div>
        </div>

        {/* Cliffside */}
        <div
          className="overflow-hidden bg-black desktopSmall:h-[650px] desktop:h-[725px]"
          onMouseEnter={() => setShowCliffside(true)}
          onMouseLeave={() => setShowCliffside(false)}
        >
          <div
            className={classNames(
              "w-full bg-[url('/assets/images/cliffside/cliffside-suites-main-home-page-hero.webp')] bg-cover bg-center flex place-items-center justify-center duration-1000 delay-500 ease-in-out desktopSmall:h-full",
              {
                "scale-110": showCliffside,
                "opacity-70": showLagoonVilla,
              }
            )}
          >
            <HomeHeroTextBox
              whiteText
              title="Cliffside Suites"
              paragraph={cliffside.en.description}
              paragraphGerman={cliffside.de.description}
              buttonUrl="/cliffside-suites"
              cssClasses={classNames(
                "opacity-0 ease-in-out duration-700 delay-150",
                {
                  "opacity-100": showCliffside,
                }
              )}
            />
          </div>
        </div>
      </section>
      <div id="about-us-desktop" className="-translate-y-24"></div>
      <HomePageDesktopAboutUs cssClasses="my-16" />
      <div id="contact-desktop" className="-translate-y-32"></div>
      <HomePageDesktopContact cssClasses="hidden desktopSmall:block mb-16" />
    </main>
  );
};

export default HomeHeroDesktop;
