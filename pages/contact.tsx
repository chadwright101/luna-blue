import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import generalData from "../data/general-data.json";
import ContactMap from "@/components/contact-page/map";

const {
  contact: { phone, phoneDisplay, email },
  address: { areaCode, province, street, town },
} = generalData;

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <>
      <h1 className="mb-6 tabletLarge:text-center desktopSmall:mb-8">
        Contact Us
      </h1>
      <div className="grid desktopSmall:grid-cols-2 desktopSmall:grid-rows-[175px_150px_300px] w-full gap-10">
        <Image
          src="/DSC01683.jpg"
          alt=""
          width={1100}
          height={750}
          className="object-cover h-[300px] phone:h-[350px] tablet:h-[400px] tabletLarge:h-[450px] desktopSmall:h-full desktopSmall:row-span-3"
        />
        <hr className="my-4 desktopSmall:hidden text-black" />
        <div className="grid gap-10 desktopSmall:col-start-1 desktopSmall:row-start-1">
          <ul className="flex flex-col gap-6 desktopSmall:gap-4">
            <li className="mr-auto grid grid-cols-[80px_1fr]">
              <p className="font-500">Phone:</p>
              {!showPhone && (
                <p
                  className="italic p-3 -m-3 text-blueLink tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown tabletLarge:p-0 tabletLarge:m-0"
                  onClick={() => setShowPhone(true)}
                >
                  Show phone number
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

            <li className="mr-auto grid grid-cols-[80px_1fr]">
              <p className="font-500">Email:</p>
              {!showEmail && (
                <p
                  className="italic p-3 -m-3 text-blueLink tabletLarge:hover:cursor-pointer tabletLarge:hover:text-brown desktopSmall:p-0 desktopSmall:m-0"
                  onClick={() => setShowEmail(true)}
                >
                  Show email address
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

            <li className="grid grid-cols-[80px_1fr] desktopSmall:col-span-2">
              <p className="font-500">Address:</p>
              <address className="text-left">
                {street}, {town}, {province}, {areaCode}
              </address>
            </li>
          </ul>
          <div>
            <p className="mb-8 mt-3 italic desktopSmall:mt-0 desktopSmall:mb-4">
              Please fill out the form below and we&#39;ll get back to you
              ASAP...
            </p>
            <form
              action="https://formsubmit.co/enquiries@lunarblue.co.za"
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
                  placeholder="Full name"
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
                      placeholder="Email address"
                      className="pl-2 py-1.5 bg-darkBeige"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="font-500">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Type your message here"
                      className="pl-2 py-1.5 bg-darkBeige"
                      rows={3}
                    />
                  </div>
                </>
              )}
              {showMessage && (
                <button
                  onClick={() => setShowMessage(false)}
                  className="bg-brown w-full text-white px-4 py-3 font-500 tabletLarge:w-28 tabletLarge:py-2"
                >
                  Submit
                </button>
              )}
            </form>
            {!showMessage && (
              <button
                onClick={() => setShowMessage(true)}
                className="bg-brown w-full text-white px-4 py-3 font-500 mt-8 tabletLarge:w-28 tabletLarge:py-2"
              >
                Next
              </button>
            )}
          </div>
        </div>
        {!showMessage && (
          <Image
            src="/DSC01981.jpg"
            alt=""
            width={1400}
            height={740}
            className="object-cover mt-4 col-span-full h-[300px] phone:h-[350px] tablet:h-[400px] tabletLarge:h-[550px] desktopSmall:col-span-1 desktopSmall:h-[300px] desktopSmall:row-start-3 desktopSmall:mt-0"
          />
        )}
      </div>
      <ContactMap cssClasses="w-full mt-10 h-[350px] phone:h-[400px] tabletLarge:h-[500px]" />
    </>
  );
};

export default Contact;
