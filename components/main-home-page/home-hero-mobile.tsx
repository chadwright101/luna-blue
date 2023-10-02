import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import HomePageMobileSlide from "./mobile/home-page-mobile-slide";
import Translated from "../utils/translated";

import generalData from "@/data/general-data.json";
import robbergBeachData from "@/data/robberg-beach-data.json";
import lagoonVillaData from "@/data/lagoon-villa-data.json";

import { CssProps } from "../property-pages/home-page/home-page";

const {
  contact: { phone, phoneDisplay },
  mainHomePage: {
    hero: { lagoonVilla, robbergBeach },
    gallery,
    aboutUs: { mobileParagraph },
  },
} = generalData;

const HomeHeroMobile = ({ cssClasses }: CssProps) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { locale } = useRouter();
  return (
    <main
      className={`snap-y snap-proximity h-[88vh] -mx-8 overflow-scroll scrollbar-hide ${cssClasses}`}
    >
      <HomePageMobileSlide
        arrow
        title="Which view would you like to wake up to during your next holiday?"
        titleGerman="** to be translated"
      />

      {/* Lagoon Villa */}
      <HomePageMobileSlide
        backgroundImage="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/lagoon-villa/images/DJI_0662.jpg')]"
        whiteText
        title={lagoonVillaData.general.propertyName}
        paragraph={lagoonVilla.en.description}
        paragraphGerman={lagoonVilla.de.description}
        buttonUrl="/keurbooms-lagoon-villa"
      />

      {/* Robberg Beach */}
      <HomePageMobileSlide
        backgroundImage="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/images/9U7A0672-HDR.jpg')]"
        title={robbergBeachData.general.propertyName}
        paragraph={robbergBeach.en.description}
        paragraphGerman={robbergBeach.de.description}
        buttonUrl="/robberg-beach-view-villa"
      />

      {/* About us */}
      <div id="about-us"></div>
      <HomePageMobileSlide
        title="About us"
        titleGerman="Über uns"
        textBoxBackgroundColor="bg-brown"
        whiteText
        cssClasses="desktopSmall:hidden"
      >
        <p className="text-center text-white">{mobileParagraph}</p>
      </HomePageMobileSlide>

      {/* slider */}

      <HomePageMobileSlide slider imageData={gallery} />

      {/* Contact */}
      <div id="contact"></div>
      <HomePageMobileSlide
        title="Contact"
        titleGerman="Kontakt"
        textBoxBackgroundColor="bg-black/80"
        whiteText
      >
        <ul>
          {!showPhone && (
            <li onClick={() => setShowPhone(true)} className="mr-auto">
              <p className="italic p-3 -m-3 tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown desktopSmall:p-0 desktopSmall:m-0 text-white underline underline-offset-4">
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
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 text-white"
              >
                {phoneDisplay}
              </Link>
            </li>
          )}
        </ul>
        {!showMessage && (
          <p className="text-white italic">
            <Translated german="Füllen Sie bitte das folgende Formular aus. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen...">
              Please fill out the form below and we&#39;ll get back to you
              ASAP...
            </Translated>
          </p>
        )}
        <form
          action="https://formsubmit.co/40ca08923db7f7ef1ea324bce7ce9752"
          method="POST"
          className="flex flex-col gap-8"
        >
          <input type="text" name="_honey" className="hidden"></input>
          <input
            type="text"
            name="subject"
            defaultValue={`Home page enquiry`}
            className="hidden"
          />
          <div className="flex flex-col gap-3">
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder={locale === "en" ? "Email Address" : "E-Mail"}
              className="pl-2 py-1.5 bg-darkBeige"
            />
          </div>
          {showMessage && (
            <>
              <div className="flex flex-col gap-3">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder={
                    locale === "en"
                      ? "Type your message here"
                      : "Geben Sie hier Ihre Nachricht ein"
                  }
                  className="pl-2 py-1.5 bg-darkBeige"
                  rows={3}
                />
              </div>
              <button
                className="bg-brown w-full text-white px-4 py-3 font-500 tabletLarge:w-28 tabletLarge:py-2"
                type="submit"
              >
                <Translated german="Einreichen">Submit</Translated>
              </button>
            </>
          )}
        </form>
        {!showMessage && (
          <button
            onClick={() => setShowMessage(true)}
            className="bg-brown w-full text-white px-4 py-3 font-500 mt-2 tabletLarge:w-28 tabletLarge:py-2"
          >
            <Translated german="Nächste">Next</Translated>
          </button>
        )}
        .
      </HomePageMobileSlide>
    </main>
  );
};

export default HomeHeroMobile;
