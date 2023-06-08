import { ReactNode } from "react";
import { useRouter } from "next/router";

import Button from "../../button";

import classNames from "classnames";

interface Props {
  title: string;
  titleGerman?: string;
  paragraph: string;
  paragraphGerman?: string;
  whiteText?: boolean;
  buttonUrl?: string;
  buttonText?: string;
  children?: ReactNode;
  textBoxBackgroundColor?: string;
}

const TextBox = ({
  title,
  titleGerman,
  paragraph,
  paragraphGerman,
  whiteText,
  buttonUrl,
  buttonText,
  children,
  textBoxBackgroundColor,
}: Props) => {
  const { locale } = useRouter();
  return (
    <div
      className={classNames(
        "grid gap-8 p-8 w-[280px] phone:w-[325px] tablet:w-[400px] tabletLarge:w-[500px]",
        {
          [`${textBoxBackgroundColor}`]: textBoxBackgroundColor,
          "bg-black/40": whiteText,
          "bg-white/[65%]": !whiteText && !textBoxBackgroundColor,
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
          cssClasses="mx-auto"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default TextBox;
