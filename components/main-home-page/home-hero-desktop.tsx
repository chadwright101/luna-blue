import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import HomeHeroTextBox from "./home-hero-text-box";
import HomePageDesktopAboutUs from "./desktop/home-page-desktop-about-us";
import HomePageDesktopContact from "./desktop/home-page-desktop-contact";

import classNames from "classnames";

import generalData from "@/data/general-data.json";

import { CssProps } from "../property-pages/home-page/home-page";
import Translated from "../utils/translated";

const {
  mainHomePage: {
    hero: { lagoonVilla, robbergBeach },
  },
} = generalData;

const HomeHeroDesktop = ({ cssClasses }: CssProps) => {
  const [showLagoonVilla, setShowLagoonVilla] = useState(false);
  const [showRobbergBeach, setshowRobbergBeach] = useState(false);
  const { locale } = useRouter();
  return (
    <main>
      <section
        className={classNames(
          `hero-grid-split ease-in-out duration-700 delay-200 ${cssClasses}`,
          {
            "hero-grid-lagoon-villa": showLagoonVilla,
            "hero-grid-robberg-beach": showRobbergBeach,
          }
        )}
      >
        <div
          className={classNames(
            "col-span-2 -mb-[780px] z-10 place-self-center transition ease-in-out duration-500 grid gap-2 place-items-center bg-beige/80 w-[425px] h-[425px] p-8 rounded-full",
            {
              "opacity-0 scale-[25%]": showLagoonVilla || showRobbergBeach,
            }
          )}
        >
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/luna-blue-logo.png"
            alt="Luna Blue logo"
            className="-translate-y-[2px]"
            width={75}
            height={100}
            priority
            sizes="(max-width: 1400px) 10vw, 10vw"
          />
          <h3
            className={`text-center transition ease-in-out duration-500 ${
              locale === "en" ? "text-[38px]" : "text-[34px] -translate-y-2"
            }`}
          >
            <Translated german="Mit welchem Ausblick möchten Sie am liebsten in Ihrem nächsten Urlaub erwachen?">
              Which view would you like to wake up to during your next holiday?
            </Translated>
          </h3>
        </div>

        {/* Lagoon Villa */}
        <div
          className="overflow-hidden bg-black tabletLarge:h-[775px]"
          onMouseEnter={() => setShowLagoonVilla(true)}
          onMouseLeave={() => setShowLagoonVilla(false)}
        >
          <div
            className={classNames(
              "h-[83vh] bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/lagoon-villa/luna-blue-lagoon-view-villa-main-home-page-hero.webp')] bg-cover bg-center flex place-items-center justify-center duration-1000 delay-500 ease-in-out desktopSmall:h-full",
              {
                "scale-110": showLagoonVilla,
                "opacity-70": showRobbergBeach,
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
                "opacity-0 transition ease-in-out duration-700 delay-150",
                {
                  "opacity-100": showLagoonVilla,
                }
              )}
            />
          </div>
        </div>

        {/* Robberg Beach */}
        <div
          className="overflow-hidden bg-black tabletLarge:h-[775px]"
          onMouseEnter={() => setshowRobbergBeach(true)}
          onMouseLeave={() => setshowRobbergBeach(false)}
        >
          <div
            className={classNames(
              "h-[83vh] w-full bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/luna-blue-robberg-beach-view-villa-main-home-page-hero.webp')] bg-cover bg-center flex place-items-center justify-center duration-1000 delay-500 ease-in-out desktopSmall:h-full",
              {
                "scale-110": showRobbergBeach,
                "opacity-70": showLagoonVilla,
              }
            )}
          >
            <HomeHeroTextBox
              title="Robberg Beach View Villa"
              paragraph={robbergBeach.en.description}
              paragraphGerman={robbergBeach.de.description}
              buttonUrl="/robberg-beach-view-villa"
              cssClasses={classNames(
                "opacity-0 transition ease-in-out duration-700 delay-150",
                {
                  "opacity-100": showRobbergBeach,
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