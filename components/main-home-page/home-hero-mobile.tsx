import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import HomePageMobileSlide from "./mobile/home-page-mobile-slide";
import Translated from "../utils/translated";

import generalData from "@/data/general-data.json";
import lagoonVillaData from "@/data/lagoon-villa-data.json";
import cliffsideData from "@/data/cliffside-data.json";

import { CssProps } from "../property-pages/home-page/home-page";

const {
  mainHomePage: {
    hero: { lagoonVilla, cliffside },
    gallery,
    aboutUs: {
      en: { paragraphs: enParagraphs },
      de: { paragraphs: deParagraphs },
    },
  },
} = generalData;

const HomeHeroMobile = ({ cssClasses }: CssProps) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { locale } = useRouter();
  const router = useRouter();
  const [formSumitting, setFormSubmitting] = useState(false);
  const [formSubmited, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitting(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const property = formData.get("property");
    const message = formData.get("message");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-email-code": process.env.NEXT_PUBLIC_API_EMAIL_SECRET_CODE || "",
      },
      body: JSON.stringify({ name, email, message, property }),
    });

    if (response.ok) {
      setShowMessage(false);
      formData.delete("name");
      formData.delete("email");
      formData.delete("message");
      setFormSubmitting(false);
      setFormSubmitted(true);
      router.push("/#contact-desktop");
    } else {
      console.error("Error sending email", response);
      setFormError("Error sending submitting form, please try again.");
      setFormSubmitting(false);
    }
  };

  const fetchPhone = async () => {
    try {
      const response = await fetch("/api/contact-details");
      const data = await response.json();
      setShowPhone(data.phone);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  return (
    <main className={`-mx-8 ${cssClasses}`}>
      <HomePageMobileSlide
        arrow
        title="Which view would you like to wake up to during your next holiday?"
        titleGerman="Mit welchem Ausblick möchten Sie am liebsten in Ihrem nächsten Urlaub erwachen?"
      />
      {/* Lagoon Villa */}
      <HomePageMobileSlide
        backgroundImage="bg-[url('/assets/images/lagoon-villa/luna-blue-lagoon-view-villa-main-home-page-hero.webp')]"
        cssClasses="mb-4"
        title={lagoonVillaData.general.propertyName}
        paragraph={lagoonVilla.en.description}
        paragraphGerman={lagoonVilla.de.description}
        buttonUrl="/keurbooms-lagoon-villa"
      />

      {/* Robberg Beach */}
      {/* <HomePageMobileSlide
        backgroundImage="bg-[url('/assets/images/robberg-beach/images/9U7A0652-HDR.jpg')]"
        cssClasses="mb-4"
        whiteText
        title={robbergBeachData.general.propertyName}
        paragraph={robbergBeach.en.description}
        paragraphGerman={robbergBeach.de.description}
        buttonUrl="/robberg-beach-view-villa"
      /> */}

      {/* Cliffside */}
      <HomePageMobileSlide
        backgroundImage="bg-[url('/assets/images/cliffside/images/9U7A4196-HDR-2.jpg')]"
        cssClasses="mb-4"
        title={cliffsideData.general.propertyName}
        paragraph={cliffside.en.description}
        paragraphGerman={cliffside.de.description}
        buttonUrl="/cliffside-suites"
      />

      {/* About us */}
      <div id="about-us"></div>
      <HomePageMobileSlide
        title="About us"
        titleGerman="Über uns"
        textBoxBackgroundColor="bg-brown"
        whiteText
        cssClasses="desktopSmall:hidden"
        height="h-[750px]"
      >
        {locale === "en"
          ? enParagraphs.map((paragraph, index) => (
              <p key={index} className="text-center text-white">
                {paragraph}
              </p>
            ))
          : deParagraphs.map((paragraph, index) => (
              <p key={index} className="text-center text-white">
                {paragraph}
              </p>
            ))}
      </HomePageMobileSlide>

      {/* slider */}

      <HomePageMobileSlide slider imageData={gallery} />

      {/* Contact */}
      <div id="contact"></div>
      <HomePageMobileSlide
        title="Contact"
        titleGerman="Kontakt"
        textBoxBackgroundColor="bg-black/75"
        whiteText
      >
        <ul>
          {!showPhone && (
            <li onClick={fetchPhone} className="mr-auto">
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
                href={`tel:${showPhone}`}
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 text-white"
              >
                {showPhone}
              </Link>
            </li>
          )}
        </ul>
        {!formSubmited ? (
          <>
            {!showMessage && (
              <p className="text-white italic">
                <Translated german="Füllen Sie bitte das folgende Formular aus. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen...">
                  Please fill out the form below and we&#39;ll get back to you
                  ASAP...
                </Translated>
              </p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <input type="text" name="_honey" className="hidden"></input>
              <input
                type="text"
                name="property"
                id="property"
                defaultValue="General enquiry from home page"
                className="hidden"
              />
              <label htmlFor="name" className="flex flex-col gap-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={
                    locale === "en" ? "Full name" : "Vollständiger Name"
                  }
                  className="pl-2 py-1.5 bg-darkBeige"
                />
              </label>
              <label htmlFor="email" className="flex flex-col gap-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={locale === "en" ? "Email Address" : "E-Mail"}
                  className="pl-2 py-1.5 bg-darkBeige"
                />
              </label>
              {showMessage && (
                <>
                  <label htmlFor="message" className="flex flex-col gap-3">
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
                  </label>
                  {!formSumitting ? (
                    <>
                      <button
                        className="bg-brown w-full text-white px-4 py-3 font-500 tabletLarge:w-28 tabletLarge:py-2"
                        type="submit"
                      >
                        <Translated german="Einreichen">Submit</Translated>
                      </button>
                      {formError && (
                        <p className="text-errorRed italic -mt-4">
                          {formError}
                        </p>
                      )}
                    </>
                  ) : (
                    <button
                      className="bg-brown w-full text-white px-4 py-3 font-500 tabletLarge:w-28 tabletLarge:py-2 flex justify-center items-center disabled:opacity-75"
                      disabled={formSumitting}
                    >
                      <div className="animate-spin w-[27px] h-[27px] rounded-full border-t-2 border-b-2 border-r-2 border-purple-500"></div>
                    </button>
                  )}
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
          </>
        ) : (
          <p className="bg-brown p-2 text-white text-25px text-left mb-8 mt-3 italic desktopSmall:mt-0 desktopSmall:mb-4">
            <Translated german="Danke für deine Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden...">
              Thanks for your message. We will get back to you ASAP...
            </Translated>
          </p>
        )}
      </HomePageMobileSlide>
    </main>
  );
};

export default HomeHeroMobile;
