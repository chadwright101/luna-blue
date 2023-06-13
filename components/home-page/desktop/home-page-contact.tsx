import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import Translated from "@/components/utils/translated";

import generalData from "@/data/general-data.json";

interface Props {
  cssClasses?: string;
}

const {
  contact: { phone, phoneDisplay, email },
  address: { areaCode, province, street, town },
} = generalData;

const HomePageContact = ({ cssClasses }: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const { locale } = useRouter();
  return (
    <div className={`${cssClasses}`}>
      <h2 className="mb-6 desktopSmall:mb-8">
        <Translated german="Kontakt">Contact Us</Translated>
      </h2>
      <div className="grid gap-10 mb-10">
        <ul className="flex flex-col gap-6 desktopSmall:gap-4">
          <li
            className={`mr-auto grid ${
              locale === "en" ? "grid-cols-[80px_1fr]" : "grid-cols-[90px_1fr]"
            }`}
          >
            <p className="font-500">
              <Translated german="Telefon">Phone</Translated>:
            </p>
            {!showPhone && (
              <p
                className="italic p-3 -m-3 text-blueLink tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown tabletLarge:p-0 tabletLarge:m-0"
                onClick={() => setShowPhone(true)}
              >
                <Translated german="Rufnummer anzeigen">
                  Show phone number
                </Translated>
              </p>
            )}
            {showPhone && (
              <Link
                href={`tel:${phone}`}
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
              >
                {phoneDisplay}
              </Link>
            )}
          </li>

          <li
            className={`mr-auto grid ${
              locale === "en" ? "grid-cols-[80px_1fr]" : "grid-cols-[90px_1fr]"
            }`}
          >
            <p className="font-500">
              <Translated german="E-Mail">Email</Translated>:
            </p>
            {!showEmail && (
              <p
                className="italic p-3 -m-3 text-blueLink tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown desktopSmall:p-0 desktopSmall:m-0"
                onClick={() => setShowEmail(true)}
              >
                <Translated german="E-Mail Adresse anzeigen">
                  Show email address
                </Translated>
              </p>
            )}
            {showEmail && (
              <Link
                href={`mailto:${email}`}
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
              >
                {email}
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div>
        <p
          className={`mb-8 mt-3 italic desktopSmall:mt-0 desktopSmall:mb-4 ${
            locale === "en" ? "" : "text-left phone:text-justify"
          }`}
        >
          <Translated german="Füllen Sie bitte das folgende Formular aus. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen...">
            Please fill out the form below and we&#39;ll get back to you ASAP...
          </Translated>
        </p>
        <form
          action="https://formsubmit.co/40ca08923db7f7ef1ea324bce7ce9752"
          method="POST"
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="font-500">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={locale === "en" ? "Full name" : "Vollständiger Name"}
              className="pl-2 py-1.5 bg-darkBeige"
            />
          </div>
          <input type="text" name="_honey" className="hidden"></input>
          {showMessage && (
            <>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="font-500">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  placeholder={locale === "en" ? "Email Address" : "E-Mail"}
                  className="pl-2 py-1.5 bg-darkBeige"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="font-500">
                  <Translated german="Nachricht">Message</Translated>:
                </label>
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
            className="bg-brown w-full text-white px-4 py-3 font-500 mt-8 tabletLarge:w-28 tabletLarge:py-2"
          >
            <Translated german="Nächste">Next</Translated>
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePageContact;
