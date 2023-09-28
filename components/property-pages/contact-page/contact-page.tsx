import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import Translated from "../../utils/translated";
import ImageContainer from "../../utils/image-container";

import generalData from "@/data/general-data.json";

import { DataProps } from "../home-page/home-page";

interface Props extends DataProps {
  verticalImage: string;
  horizontalImage: string;
}

const {
  contact: { email, phone, phoneDisplay },
} = generalData;

const ContactPage = ({
  data: {
    general: {
      propertyName,
      address: { street, town, province, areaCode },
      contact: { subject },
    },
  },
  verticalImage,
  horizontalImage,
}: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const { locale } = useRouter();
  return (
    <>
      <h1 className="mb-6 tabletLarge:text-center desktopSmall:mb-8">
        <Translated german="Kontakt">Contact Us</Translated>
      </h1>
      <div className="grid desktopSmall:grid-cols-2 desktopSmall:grid-rows-[175px_150px_300px] w-full gap-10">
        <ImageContainer
          src={verticalImage}
          alt={propertyName}
          width={1100}
          height={750}
          cssClasses="object-cover h-[300px] phone:h-[350px] tablet:h-[400px] tabletLarge:h-[450px] desktopSmall:h-full desktopSmall:row-span-3"
          smallest={75}
          phone={70}
          tablet={60}
          tabletLarge={55}
          desktopSmall={25}
          desktop={20}
          eager
        />
        <hr className="my-4 desktopSmall:hidden text-black" />
        <div className="grid gap-10 desktopSmall:col-start-1 desktopSmall:row-start-1">
          <ul className="flex flex-col gap-6 desktopSmall:gap-4">
            <li
              className={`mr-auto grid ${
                locale === "en"
                  ? "grid-cols-[80px_1fr]"
                  : "grid-cols-[90px_1fr]"
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
                locale === "en"
                  ? "grid-cols-[80px_1fr]"
                  : "grid-cols-[90px_1fr]"
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
                  href={`mailto:${email}?subject=${subject}`}
                  className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {email}
                </Link>
              )}
            </li>

            <li
              className={`grid ${
                locale === "en"
                  ? "grid-cols-[80px_1fr]"
                  : "grid-cols-[90px_1fr]"
              } desktopSmall:col-span-2`}
            >
              <p className="font-500">
                <Translated german="Anschrift">Address</Translated>:
              </p>
              <address className="text-left">
                {street}, {town}, {province}, {areaCode}
              </address>
            </li>
          </ul>
          <div>
            <p
              className={`mb-8 mt-3 italic desktopSmall:mt-0 desktopSmall:mb-4 ${
                locale === "en" ? "" : "text-left phone:text-justify"
              }`}
            >
              <Translated german="Füllen Sie bitte das folgende Formular aus. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen...">
                Please fill out the form below and we&#39;ll get back to you
                ASAP...
              </Translated>
            </p>
            <form
              action="https://formsubmit.co/40ca08923db7f7ef1ea324bce7ce9752"
              method="POST"
              className="flex flex-col gap-10"
            >
              <input
                type="text"
                name="subject"
                defaultValue={`Website Contact Form - ${propertyName}`}
                className="hidden"
              />
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="font-500">
                  Name:
                </label>
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
        {!showMessage && (
          <ImageContainer
            src={horizontalImage}
            width={1400}
            height={740}
            cssClasses="object-cover mt-4 col-span-full h-[250px] phone:h-[275px] tablet:h-[400px] tabletLarge:h-[550px] desktopSmall:col-span-1 desktopSmall:h-[300px] desktopSmall:row-start-3 desktopSmall:mt-0"
            smallest={75}
            phone={70}
            tablet={60}
            tabletLarge={55}
            desktopSmall={25}
            desktop={20}
          />
        )}
      </div>
    </>
  );
};

export default ContactPage;
