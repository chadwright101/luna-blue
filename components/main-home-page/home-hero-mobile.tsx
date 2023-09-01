import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import HomePageMobileSlide from "./mobile/home-page-mobile-slide";
import Translated from "../utils/translated";

import robbergBeachData from "@/data/robberg-beach-data.json";
import { CssProps } from "../property-pages/home-page/home-page";

const {
  general: {
    contact: { email },
  },
  images: { aboutUsSlider },
} = robbergBeachData;

const HomeHeroMobile = ({ cssClasses }: CssProps) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { locale } = useRouter();
  return (
    <main
      className={`snap-y snap-proximity h-[88vh] -mx-8 overflow-scroll scrollbar-hide ${cssClasses}`}
    >
      <HomePageMobileSlide
        arrow
        title="Which view would you like to wake up to during your next holiday?"
      />
      {/* Robberg Beach */}
      <HomePageMobileSlide
        backgroundImage="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/robberg-beach/images/9U7A0672-HDR.jpg')]"
        title="Robberg Beach View Villa"
        paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      perspiciatis consectetur, tenetur aperiam adipisci accusantium
      dignissimos. Necessitatibus rem fugit minus recusandae? Deserunt impedit
      delectus minus."
        buttonUrl="/robberg-beach-view-villa"
      />

      {/* Lagoon Villa */}
      <HomePageMobileSlide
        backgroundImage="bg-[url('/Keurbooms-lagoon-Plettenberg-Bay-20191222_144127.jpg')]"
        whiteText
        title="Keurbooms Lagoon Villa"
        paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
    perspiciatis consectetur, tenetur aperiam adipisci accusantium
    dignissimos. Necessitatibus rem fugit minus recusandae? Deserunt impedit
    delectus minus."
        buttonUrl="/keurbooms-lagoon-villa"
        lagoonVilla
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
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          minima, veritatis eius illum non dolore tempore explicabo! Fugiat,
          suscipit veniam!
        </p>
        <ul className="list-disc ml-4 text-white">
          <li>Blah</li>
          <li>Blah Blah</li>
          <li>Blah Blah Blah</li>
        </ul>
      </HomePageMobileSlide>

      {/* slider */}

      <HomePageMobileSlide slider imageData={aboutUsSlider} />

      {/* Contact */}
      <div id="contact"></div>
      <HomePageMobileSlide
        title="Contact"
        titleGerman="Kontakt"
        textBoxBackgroundColor="bg-black/80"
        whiteText
      >
        <ul>
          {!showEmail && (
            <li onClick={() => setShowEmail(true)} className="mr-auto">
              <p className="italic p-3 -m-3 tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown desktopSmall:p-0 desktopSmall:m-0 text-white underline underline-offset-4">
                <Translated german="E-Mail Adresse anzeigen">
                  Show email address
                </Translated>
              </p>
            </li>
          )}
          {showEmail && (
            <li>
              <Link
                href={`mailto:${email}`}
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 text-white"
              >
                {email}
              </Link>
            </li>
          )}
        </ul>
        {!showMessage && (
          <Translated german="Füllen Sie bitte das folgende Formular aus. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen...">
            <p className="text-white italic">
              Please fill out the form below and we&#39;ll get back to you
              ASAP...
            </p>
          </Translated>
        )}
        <form
          action="https://formsubmit.co/40ca08923db7f7ef1ea324bce7ce9752"
          method="POST"
          className="flex flex-col gap-8"
        >
          <input type="text" name="_honey" className="hidden"></input>
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
