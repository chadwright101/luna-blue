import Image from "next/image";
import { ReactNode } from "react";

import TextBox from "./text-box";

interface Props {
  whiteText?: boolean;
  title: string;
  paragraph?: string;
  backgroundImage?: string;
  layeredBackgroundImage?: string;
  backgroundColour?: string;
  buttonUrl?: string;
  buttonText?: string;
  arrow?: boolean;
  children?: ReactNode;
}

const IndividualSlide = ({
  whiteText,
  title,
  paragraph,
  backgroundImage,
  layeredBackgroundImage,
  backgroundColour,
  buttonText,
  buttonUrl,
  arrow,
  children,
}: Props) => {
  return (
    <div
      className={`snap-start h-[88vh] ${layeredBackgroundImage} bg-cover bg-center`}
    >
      <div
        className={`${backgroundImage} bg-cover bg-center ${backgroundColour} flex place-items-center justify-center h-full ${
          arrow && "flex-col gap-10"
        }"}}`}
      >
        <TextBox
          whiteText={whiteText}
          title={title}
          paragraph={paragraph!}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
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
    </div>
  );
};

export default IndividualSlide;
