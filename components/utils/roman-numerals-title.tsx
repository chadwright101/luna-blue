import classNames from "classnames";

interface Props {
  index: number;
  title: string;
  mobile?: boolean;
}

const RomanNumeralsTitle = ({ index, title, mobile }: Props) => {
  if (index === 0) {
    return (
      <>
        {title}{" "}
        <span
          className={classNames("font-Comorant font-500 text-[17px]", {
            "text-[20px]": mobile,
          })}
        >
          I
        </span>
      </>
    );
  } else if (index === 1) {
    return (
      <>
        {title}{" "}
        <span
          className={classNames(
            "font-Comorant font-500 text-[17px] tracking-widest",
            {
              "text-[20px]": mobile,
            }
          )}
        >
          II
        </span>
      </>
    );
  } else {
    return <>{title}</>;
  }
};

export default RomanNumeralsTitle;
