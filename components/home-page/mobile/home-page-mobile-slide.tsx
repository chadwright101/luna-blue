import Image from "next/image";
import { ReactNode } from "react";

import ImageContainer from "@/components/utils/image-container";
import HomeHeroTextBox from "../home-hero-text-box";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/core";

interface Props {
  whiteText?: boolean;
  title?: string;
  titleGerman?: string;
  paragraphGerman?: string;
  paragraph?: string;
  backgroundImage?: string;
  slideBackgroundColour?: string;
  buttonUrl?: string;
  buttonText?: string;
  arrow?: boolean;
  children?: ReactNode;
  textBoxBackgroundColor?: string;
  cssClasses?: string;
  slider?: boolean;
  imageData?: Array<{ url: string }>;
  luna2?: boolean;
}

const IndividualSlide = ({
  whiteText,
  title,
  titleGerman,
  paragraph,
  paragraphGerman,
  backgroundImage,
  slideBackgroundColour,
  textBoxBackgroundColor,
  buttonText,
  buttonUrl,
  arrow,
  children,
  cssClasses,
  slider,
  imageData,
  luna2,
}: Props) => {
  if (!slider) {
    return (
      <article
        className={`snap-start h-[88vh] bg-cover bg-center ${cssClasses}`}
      >
        <div
          className={`${backgroundImage} bg-cover bg-center ${slideBackgroundColour} flex place-items-center justify-center h-full ${
            arrow && "flex-col gap-10"
          }`}
        >
          <HomeHeroTextBox
            whiteText={whiteText}
            title={title!}
            titleGerman={titleGerman}
            paragraph={paragraph!}
            paragraphGerman={paragraphGerman}
            buttonText={buttonText}
            buttonUrl={buttonUrl}
            textBoxBackgroundColor={textBoxBackgroundColor}
            luna2={luna2}
          >
            {children}
          </HomeHeroTextBox>
          {arrow && (
            <Image
              src="/icons/arrow-down.svg"
              alt="Down arrow icon"
              width={75}
              height={75}
              className=" animate-bounce"
            />
          )}
        </div>
      </article>
    );
  } else {
    return (
      <article
        className={`snap-start h-[88vh] bg-cover bg-center ${cssClasses}`}
      >
        <Splide
          options={{
            autoplay: true,
            type: "loop",
            interval: 4500,
            speed: 2000,
            gap: "1.75em",
            drag: false,
            rewind: true,
          }}
          hasTrack={false}
        >
          <SplideTrack>
            {imageData!.map(({ url }, index) => (
              <SplideSlide key={index} className="h-[88vh]">
                <ImageContainer
                  src={url}
                  alt={`Luna Blue - Image ${index + 1}`}
                  width={1400}
                  height={1000}
                  cssClasses="object-cover h-full w-full"
                  quality={60}
                  smallest={150}
                  phone={150}
                  tablet={125}
                  tabletLarge={125}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </article>
    );
  }
};

export default IndividualSlide;
