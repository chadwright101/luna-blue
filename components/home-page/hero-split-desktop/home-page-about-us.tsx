import TextBox from "../text-box";
import ImageContainer from "@/components/utils/image-container";

interface Props {
  cssClasses?: string;
}

const HomePageAboutUs = ({ cssClasses }: Props) => {
  return (
    <article className={`grid grid-cols-3 place-items-center ${cssClasses}`}>
      <ImageContainer
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Slideshow/9U7A0824-HDR.jpg"
        alt="Luna Blue"
        width={500}
        height={500}
      />
      <TextBox
        title="About us"
        titleGerman="Über uns"
        textBoxBackgroundColor="bg-brown"
        whiteText
      >
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          minima, veritatis eius illum non dolore tempore explicabo! Fugiat,
          suscipit veniam!
        </p>
        <ul className="list-disc ml-4 text-white">
          <li>Blah</li>
          <li>Blah Blah</li>
          <li>Blah Blah Blah</li>
        </ul>
      </TextBox>
      <ImageContainer
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Slideshow/9U7A0824-HDR.jpg"
        alt="Luna Blue"
        width={500}
        height={500}
      />
    </article>
  );
};

export default HomePageAboutUs;
