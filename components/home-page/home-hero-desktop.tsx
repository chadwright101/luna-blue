import { useState } from "react";
import { useRouter } from "next/router";

import TextBox from "./text-box";
import HomePageAboutUs from "./hero-split-desktop/home-page-about-us";
import ImageContainer from "../utils/image-container";

import classNames from "classnames";

import generalData from "../../data/general-data.json";

interface Props {
  cssClasses?: string;
}

const HomeHeroDesktop = ({ cssClasses }: Props) => {
  const [showHillStreet, setHillStreet] = useState(false);
  const [showRobbergRidge, setRobbergRidge] = useState(false);

  return (
    <>
      <section className={`grid-cols-2 ${cssClasses}`}>
        <h3
          className={classNames(
            "text-[46px] text-center col-span-2 -mb-[785px] z-10 bg-beige/80 place-self-center w-[400px] desktop:w-[500px] px-16 py-8 transition ease-in-out duration-500",
            {
              "opacity-0 scale-[25%]": showHillStreet || showRobbergRidge,
            }
          )}
        >
          Which view would you like to wake up to during your next holiday?
        </h3>

        {/* Hill Street */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setHillStreet(true)}
          onMouseLeave={() => setHillStreet(false)}
        >
          <div
            className={classNames(
              "h-[83vh] bg-[url('/Keurbooms-lagoon-Plettenberg-Bay-20191222_144127.jpg')] bg-cover bg-center flex place-items-center justify-center blur-[2.5px] duration-1000 ease-in-out",
              {
                "blur-[0px] bg-right": showHillStreet,
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
                "opacity-0 transition ease-in-out duration-700",
                {
                  "opacity-100": showHillStreet,
                }
              )}
            />
          </div>
        </div>

        {/* Robberg Ridge */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setRobbergRidge(true)}
          onMouseLeave={() => setRobbergRidge(false)}
        >
          <div
            className={classNames(
              "h-[83vh] w-full bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Slideshow/9U7A0672-HDR.jpg')] bg-cover bg-center flex place-items-center justify-center blur-[2.5px] duration-1000 ease-in-out",
              {
                "blur-[0px] bg-right": showRobbergRidge,
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
                "opacity-0 transition ease-in-out duration-700",
                {
                  "opacity-100": showRobbergRidge,
                }
              )}
            />
          </div>
        </div>
      </section>
      <HomePageAboutUs cssClasses="my-16" />
    </>
  );
};

export default HomeHeroDesktop;
