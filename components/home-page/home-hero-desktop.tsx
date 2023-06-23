import Image from "next/image";
import { useState } from "react";

import TextBox from "./text-box";
import HomePageAboutUs from "./desktop/home-page-about-us";

import classNames from "classnames";
import HomePageContact from "./desktop/home-page-contact";

interface Props {
  cssClasses?: string;
}

const HomeHeroDesktop = ({ cssClasses }: Props) => {
  const [showLunaBlue2, setShowLunaBlue2] = useState(false);
  const [showLunaBlue1, setshowLunaBlue1] = useState(false);

  return (
    <main>
      <section
        className={classNames(
          `hero-grid-split ease-in-out duration-700 delay-200 ${cssClasses}`,
          {
            "hero-grid-hill-street": showLunaBlue1,
            "hero-grid-robberg-ridge": showLunaBlue2,
          }
        )}
      >
        <div
          className={classNames(
            "col-span-2 -mb-[780px] z-10 place-self-center transition ease-in-out duration-500 grid gap-2 place-items-center bg-beige/80 w-[425px] h-[425px] p-8 rounded-full",
            {
              "opacity-0 scale-[25%]": showLunaBlue2 || showLunaBlue1,
            }
          )}
        >
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
            alt="Luna Blue Off-grid Guesthouse logo"
            className="-translate-y-[2px]"
            width={75}
            height={100}
            priority
            sizes="(max-width: 1400px) 10vw, 10vw"
          />
          <h3 className="text-[38px] text-center transition ease-in-out duration-500">
            Which view would you like to wake up to during your next holiday?
          </h3>
        </div>

        {/* Robberg Ridge */}
        <div
          className="overflow-hidden bg-black"
          onMouseEnter={() => setshowLunaBlue1(true)}
          onMouseLeave={() => setshowLunaBlue1(false)}
        >
          <div
            className={classNames(
              "h-[83vh] w-full bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Slideshow/9U7A0672-HDR.jpg')] bg-cover bg-center flex place-items-center justify-center duration-1000 delay-500 ease-in-out",
              {
                "scale-110": showLunaBlue1,
                "opacity-70": showLunaBlue2,
              }
            )}
          >
            <TextBox
              title="Luna Blue I"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        perspiciatis consectetur, tenetur aperiam adipisci accusantium
        dignissimos. Necessitatibus rem fugit minus recusandae? Deserunt impedit
        delectus minus."
              buttonUrl="/luna-blue-1"
              cssClasses={classNames(
                "opacity-0 transition ease-in-out duration-700 delay-150",
                {
                  "opacity-100": showLunaBlue1,
                }
              )}
            />
          </div>
        </div>

        {/* Hill Street */}
        <div
          className="overflow-hidden bg-black"
          onMouseEnter={() => setShowLunaBlue2(true)}
          onMouseLeave={() => setShowLunaBlue2(false)}
        >
          <div
            className={classNames(
              "h-[83vh] bg-[url('/Keurbooms-lagoon-Plettenberg-Bay-20191222_144127.jpg')] bg-cover bg-center flex place-items-center justify-center duration-1000 delay-500 ease-in-out",
              {
                "scale-110": showLunaBlue2,
                "opacity-70": showLunaBlue1,
              }
            )}
          >
            <TextBox
              whiteText
              title="Luna Blue II"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              perspiciatis consectetur, tenetur aperiam adipisci accusantium
              dignissimos. Necessitatibus rem fugit minus recusandae? Deserunt impedit
              delectus minus."
              buttonUrl="/luna-blue-2"
              cssClasses={classNames(
                "opacity-0 transition ease-in-out duration-700 delay-150",
                {
                  "opacity-100": showLunaBlue2,
                }
              )}
            />
          </div>
        </div>
      </section>
      <div id="about-us" className="-translate-y-24"></div>
      <HomePageAboutUs cssClasses="my-16" />
      <div id="contact" className="-translate-y-32"></div>
      <HomePageContact cssClasses="hidden desktopSmall:block mb-16" />
    </main>
  );
};

export default HomeHeroDesktop;
