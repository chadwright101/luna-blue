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
}: Props) => {
  return (
    <div
      className={`snap-start h-[88vh] ${layeredBackgroundImage} bg-cover bg-center`}
    >
      <div
        className={`${backgroundImage} bg-cover bg-center ${backgroundColour} flex place-items-center justify-center h-full`}
      >
        <TextBox
          whiteText={whiteText}
          title={title}
          paragraph={paragraph!}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
        />
      </div>
    </div>
  );
};

export default IndividualSlide;
