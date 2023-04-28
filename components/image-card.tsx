import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "./button";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  title: string;
  buttonText?: string | "View More";
  mobileButtonWidth?: string;
  image: string;
  imageLeft?: boolean;
  imageRight?: boolean;
  imageTop?: boolean;
  imageBottom?: boolean;
  flip?: boolean;
  thin?: boolean;
  link: string;
  mobileCard?: boolean;
}

const ImageCard = ({
  cssClasses,
  title,
  buttonText,
  mobileButtonWidth,
  image,
  flip,
  thin,
  imageLeft,
  imageRight,
  imageBottom,
  imageTop,
  link,
  mobileCard,
}: Props) => {
  const [cardMove, setCardMove] = useState(false);

  return (
    <section
      className={classNames(
        `grid gap-10 grid-rows-3 tabletLarge:grid-rows-3 ${
          imageLeft
            ? "bg-left"
            : imageRight
            ? "bg-right"
            : imageBottom
            ? "bg-bottom"
            : imageTop
            ? "bg-top"
            : "bg-center"
        } bg-cover bg-no-repeat ${image} place-items-center tabletLarge:place-items-start ${cssClasses}`,
        {
          "tabletLarge:place-items-end ": flip,
          "h-[300px] phone:h-[325px] tablet:h-[425px] tabletLarge:h-[550px] desktopSmall:h-[425px] desktop:h-[550px]":
            !thin,
          "h-[300px] phone:h-[325px] tablet:h-[325px] tabletLarge:h-[450px] desktopSmall:h-[300px] desktop:h-[400px]":
            thin,
        }
      )}
    >
      {/* mobile view */}
      {mobileCard && (
        <div className="tabletLarge:hidden row-start-3 bg-white/75 w-full h-full">
          <Button
            url="#"
            cssClasses="mx-auto mt-5 text-[16px] text-center"
            width={mobileButtonWidth}
          >
            {buttonText}
          </Button>
        </div>
      )}
      <div className="row-start-2">
        {/* desktop view */}
        <Link
          href={link}
          onMouseEnter={() => setCardMove(true)}
          onMouseLeave={() => setCardMove(false)}
          className={classNames(
            "hidden tabletLarge:block bg-white/[85%] py-10 desktopSmall:py-7 desktop:py-10 pr-20 pl-10 duration-300 ease-in-out",
            {
              "pl-20 pr-10": flip,
              "pl-14": cardMove && !flip,
              "pr-24": cardMove && flip,
            }
          )}
        >
          <h2
            className={classNames("text-[32px]", {
              "text-brown": cardMove,
            })}
          >
            {title}
          </h2>
          <div className="flex gap-2">
            <p className="uppercase text-[13px] text-pureBlack font-350 tracking-widest">
              {buttonText || "View More"}
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
    </section>
  );
};

export default ImageCard;
