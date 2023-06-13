import ImageContainer from "@/components/utils/image-container";

interface Props {
  cssClasses?: string;
}

const HomePageAboutUs = ({ cssClasses }: Props) => {
  return (
    <article
      className={`hidden desktopSmall:grid grid-cols-[400px_1fr] desktop:grid-cols-[450px_1fr] gap-10 ${cssClasses}`}
    >
      <div className="bg-brown flex flex-col gap-8 p-8">
        <h2 className="text-white text-center text-35px border-y-2 py-2 border-white">
          About us
        </h2>
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
      </div>
      <ImageContainer
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Slideshow/9U7A0824-HDR.jpg"
        alt="Luna Blue"
        width={750}
        height={300}
        cssClasses="object-cover h-[400px] w-full"
      />
    </article>
  );
};

export default HomePageAboutUs;
