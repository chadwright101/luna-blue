import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";

import WindowWidthContext from "../utils/window-width-context";

import Button from "../button";

import classNames from "classnames";

interface Props {
  title: string;
  titleGerman?: string;
  paragraph?: string;
  paragraphGerman?: string;
  whiteText?: boolean;
  buttonUrl?: string;
  children?: ReactNode;
  textBoxBackgroundColor?: string;
  cssClasses?: string;
}

const HomeHeroTextBox = ({
  title,
  titleGerman,
  paragraph,
  paragraphGerman,
  whiteText,
  buttonUrl,
  children,
  textBoxBackgroundColor,
  cssClasses,
}: Props) => {
  const { locale } = useRouter();
  const router = useRouter();
  const currentRoute = router.pathname;

  const { windowWidth } = useContext(WindowWidthContext);

  return (
    <div
      className={classNames(
        `grid gap-8 p-8 w-[280px] phone:w-[325px] tablet:w-[400px] tabletLarge:w-[500px] desktopSmall:w-[400px] desktopSmall:max-w-[400px] desktop:w-[450px] max-w-[450px] ${cssClasses} ${textBoxBackgroundColor}`,
        {
          "bg-black/75": whiteText && !textBoxBackgroundColor,
          "bg-white/80": !whiteText && !textBoxBackgroundColor,
        }
      )}
    >
      <h2
        className={classNames("text-center text-35px border-y-2 py-2", {
          "border-black text-black": !whiteText,
          "border-white text-white": whiteText,
        })}
      >
        {locale === "en" ? title : titleGerman || title}
      </h2>
      {paragraph && (
        <p
          className={classNames("text-center", {
            "text-black": !whiteText,
            "text-white": whiteText,
          })}
        >
          {locale === "en" ? paragraph : paragraphGerman || paragraph}
        </p>
      )}
      <>{children}</>
      {buttonUrl && (
        <Button
          url={buttonUrl!}
          whiteText={whiteText ? true : false}
          cssClasses={`mx-auto desktopSmall:place-self-center ${
            currentRoute === "/" && windowWidth <= 1225 && whiteText
              ? "bg-brown/75"
              : ""
          }`}
        />
      )}
    </div>
  );
};

export default HomeHeroTextBox;
