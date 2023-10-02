import Image from "next/image";
import { ReactNode } from "react";

import HomeHeroTextBox from "../home-hero-text-box";

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
  arrow?: boolean;
  children?: ReactNode;
  textBoxBackgroundColor?: string;
  cssClasses?: string;
  slider?: boolean;
  imageData?: Array<string>;
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
  buttonUrl,
  arrow,
  children,
  cssClasses,
  slider,
  imageData,
}: Props) => {
  if (!slider) {
    return (
      <article
        className={`snap-start h-[88vh] bg-cover bg-center tablet:snap-none tablet:h-[750px] ${cssClasses}`}
      >
        <div
          className={`${backgroundImage} bg-cover bg-center ${
            slideBackgroundColour ? slideBackgroundColour : ""
          } flex place-items-center justify-center h-full ${
            arrow ? "flex-col gap-10" : ""
          }`}
        >
          <HomeHeroTextBox
            whiteText={whiteText}
            title={title!}
            titleGerman={titleGerman}
            paragraph={paragraph!}
            paragraphGerman={paragraphGerman}
            buttonUrl={buttonUrl}
            textBoxBackgroundColor={textBoxBackgroundColor}
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
