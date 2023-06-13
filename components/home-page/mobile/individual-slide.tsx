import Image from "next/image";
import { ReactNode } from "react";

import TextBox from "../text-box";

interface Props {
  whiteText?: boolean;
  title: string;
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
}: Props) => {
  return (
    <article className={`snap-start h-[88vh] bg-cover bg-center ${cssClasses}`}>
      <div
        className={`${backgroundImage} bg-cover bg-center ${slideBackgroundColour} flex place-items-center justify-center h-full ${
          arrow && "flex-col gap-10"
        }`}
      >
        <TextBox
          whiteText={whiteText}
          title={title}
          titleGerman={titleGerman}
          paragraph={paragraph!}
          paragraphGerman={paragraphGerman}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
          textBoxBackgroundColor={textBoxBackgroundColor}
        >
          {children}
        </TextBox>
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
};

export default IndividualSlide;
