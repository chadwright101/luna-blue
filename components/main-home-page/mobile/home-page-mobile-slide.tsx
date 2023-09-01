import Image from "next/image";
import { ReactNode } from "react";

import ImageContainer from "@/components/utils/image-container";
import HomeHeroTextBox from "../home-hero-text-box";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/core";
import BasicSlider from "@/components/sliders/basic-slider";

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
  lagoonVilla?: boolean;
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
  lagoonVilla,
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
            lagoonVilla={lagoonVilla}
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
        <BasicSlider imageData={imageData} slideHeight="h-[88vh]" />
      </article>
    );
  }
};

export default IndividualSlide;
