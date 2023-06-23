import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "./button";

import classNames from "classnames";
import ImageContainer from "./utils/image-container";
import Translated from "./utils/translated";

interface Props {
  cssClasses?: string;
  title: string;
  titleGerman: string;
  buttonText?: string;
  buttonTextGerman?: string;
  mobileButtonWidth?: string;
  image: string;
  flip?: boolean;
  center?: boolean;
  thinDesktopOnly?: boolean;
  link: string;
  targetBlank?: boolean;
  blankMobileCard?: boolean;
}

const ImageCard = ({
  cssClasses,
  title,
  titleGerman,
  buttonText,
  buttonTextGerman,
  mobileButtonWidth,
  image,
  link,
  flip,
  center,
  targetBlank,
  blankMobileCard,
}: Props) => {
  const [cardMove, setCardMove] = useState(false);

  return (
    <article
      className={`h-[275px] phone:h-[325px] tablet:h-[375px] tabletLarge:h-[475px] desktop:h-[400px] ${cssClasses}`}
    >
      <ImageContainer
        src={image}
        alt="Luna Blue Off-grid Guesthouse"
        width={900}
        height={500}
        cssClasses="h-full w-full object-cover -mb-[275px] phone:-mb-[325px] tablet:-mb-[375px] tabletLarge:-mb-[475px] desktop:-mb-[400px]"
        smallest={95}
        desktopSmall={center ? 40 : undefined}
        desktop={center ? 30 : 85}
      />

      {/* mobile view */}
      <div
        className={classNames("h-full grid grid-rows-4 tabletLarge:hidden", {
          "hidden ": blankMobileCard,
        })}
      >
        <div className="bg-white/75 row-start-4 grid grid-rows-3">
          <Button
            url={link}
            cssClasses="mx-auto text-[16px] text-center row-start-2"
            width={mobileButtonWidth}
          >
            <Translated german={buttonTextGerman || "Mehr sehen"}>
              {buttonText || "View More"}
            </Translated>
          </Button>
        </div>
      </div>

      {/* desktop view */}
      <div
        className={classNames(
          "hidden tabletLarge:grid grid-rows-3 tabletLarge:place-items-start",
          {
            "tabletLarge:place-items-end": flip,
            "desktop:place-items-center": center,
          }
        )}
      >
        <Link
          href={link}
          onMouseEnter={() => setCardMove(true)}
          onMouseLeave={() => setCardMove(false)}
          className={classNames(
            `bg-white/[85%] tabletLarge:mt-3 desktopSmall:mt-7 desktop:-mt-2 row-start-2 py-10 desktopSmall:py-7 desktop:py-10 px-10 duration-300 ease-in-out`,
            {
              "px-12": cardMove && center,
              "pl-[80px]": flip && !center,
              "pr-[80px]": !flip && !center,
              "pl-14": cardMove && !flip && !center,
              "pr-14": cardMove && flip && !center,
            }
          )}
          target={targetBlank ? "_blank" : "_self"}
        >
          <h2
            className={classNames("text-[32px]", {
              "text-brown": cardMove,
              "text-right": flip,
            })}
          >
            <Translated german={titleGerman}>{title}</Translated>
          </h2>
          <div
            className={classNames("flex gap-2", {
              "justify-end": flip,
            })}
          >
            <p className="uppercase text-[13px] text-pureBlack font-350 tracking-widest">
              <Translated german={buttonTextGerman || "Mehr sehen"}>
                {buttonText || "View More"}
              </Translated>
            </p>
            <Image
              src="/icons/plus.svg"
              alt="Plus sign icon"
              width={13}
              height={13}
              className="-translate-y-[1.5px] ease-in-out duration-500"
            />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default ImageCard;
