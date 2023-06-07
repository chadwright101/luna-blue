import { ReactNode } from "react";

import Button from "../../button";

import classNames from "classnames";

interface Props {
  title: string;
  paragraph: string;
  whiteText?: boolean;
  buttonUrl?: string;
  buttonText?: string;
  children?: ReactNode;
}

const TextBox = ({
  title,
  paragraph,
  whiteText,
  buttonUrl,
  buttonText,
  children,
}: Props) => {
  return (
    <div
      className={classNames("grid gap-8 p-8 max-w-[280px]", {
        "bg-black/40": whiteText,
        "bg-white/[65%]": !whiteText,
      })}
    >
      <h2
        className={classNames("text-center text-35px border-y-2 py-2", {
          "border-black text-black": !whiteText,
          "border-white text-white": whiteText,
        })}
      >
        {title}
      </h2>
      {paragraph && (
        <p
          className={classNames("text-center", {
            "text-black": !whiteText,
            "text-white": whiteText,
          })}
        >
          {paragraph}
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
