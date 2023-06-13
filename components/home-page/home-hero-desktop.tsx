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
  const [showHillStreet, setHillStreet] = useState(false);
  const [showRobbergRidge, setRobbergRidge] = useState(false);

  return (
    <>
      <section
        className={classNames(
          `hero-grid-split ease-in-out duration-700 delay-200 ${cssClasses}`,
          {
            "hero-grid-hill-street": showHillStreet,
            "hero-grid-robberg-ridge": showRobbergRidge,
          }
        )}
      >
        <div
          className={classNames(
            "col-span-2 -mb-[780px] z-10 place-self-center transition ease-in-out duration-500 grid gap-2 place-items-center bg-beige/80 w-[400px] h-[400px] p-8 rounded-full",
            {
              "opacity-0 scale-[25%]": showHillStreet || showRobbergRidge,
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

        {/* Hill Street */}
        <div
          className="overflow-hidden bg-black"
          onMouseEnter={() => setHillStreet(true)}
          onMouseLeave={() => setHillStreet(false)}
        >
          <div
            className={classNames(
              "h-[83vh] bg-[url('/Keurbooms-lagoon-Plettenberg-Bay-20191222_144127.jpg')] bg-cover bg-center flex place-items-center justify-center duration-1000 delay-500 ease-in-out",
              {
                "scale-110": showHillStreet,
                "opacity-70": showRobbergRidge,
              }
            )}
          >
            <TextBox
              whiteText
              title="Hill Street"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              perspiciatis consectetur, tenetur aperiam adipisci accusantium
              dignissimos. Necessitatibus rem fugit minus recusandae? Deserunt impedit
              delectus minus."
              buttonUrl="/hill-street"
              cssClasses={classNames(
                "opacity-0 transition ease-in-out duration-700 delay-150",
                {
                  "opacity-100": showHillStreet,
                }
              )}
            />
          </div>
        </div>

        {/* Robberg Ridge */}
        <div
          className="overflow-hidden bg-black"
          onMouseEnter={() => setRobbergRidge(true)}
          onMouseLeave={() => setRobbergRidge(false)}
        >
          <div
            className={classNames(
              "h-[83vh] w-full bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Slideshow/9U7A0672-HDR.jpg')] bg-cover bg-center flex place-items-center justify-center duration-1000 delay-500 ease-in-out",
              {
                "scale-110": showRobbergRidge,
                "opacity-70": showHillStreet,
              }
            )}
          >
            <TextBox
              title="Robberg Ridge"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        perspiciatis consectetur, tenetur aperiam adipisci accusantium
        dignissimos. Necessitatibus rem fugit minus recusandae? Deserunt impedit
        delectus minus."
              buttonUrl="/robberg-ridge"
              cssClasses={classNames(
                "opacity-0 transition ease-in-out duration-700 delay-150",
                {
                  "opacity-100": showRobbergRidge,
                }
              )}
            />
          </div>
        </div>
      </section>
      <div id="about-us" className="-translate-y-24"></div>
      <HomePageAboutUs cssClasses="my-16" />
      <div id="contact" className="-translate-y-24"></div>
      <HomePageContact cssClasses="hidden desktopSmall:block mb-16" />
    </>
  );
};

export default HomeHeroDesktop;
