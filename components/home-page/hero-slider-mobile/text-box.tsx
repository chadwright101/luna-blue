import classNames from "classnames";
import Button from "../../button";

interface Props {
  title: string;
  paragraph: string;
  whiteText?: boolean;
  buttonUrl?: string;
  buttonText?: string;
}

const TextBox = ({
  title,
  paragraph,
  whiteText,
  buttonUrl,
  buttonText,
}: Props) => {
  return (
    <div
      className={classNames("grid gap-8 p-8 min-w-[75px] max-w-[300px]", {
        "bg-black/40": whiteText,
        "bg-beige/75": !whiteText,
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
      <p
        className={classNames("text-center", {
          "text-black": !whiteText,
          "text-white": whiteText,
        })}
      >
        {paragraph}
      </p>
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
