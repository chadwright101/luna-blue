import ImageContainer from "@/components/utils/image-container";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import imageData from "@/data/robberg-beach-data.json";

import "@splidejs/react-splide/css/core";

interface Props {
  cssClasses?: string;
}

const {
  images: { aboutUsSlider },
} = imageData;

const HomePageAboutUs = ({ cssClasses }: Props) => {
  return (
    <article
      className={`hidden desktopSmall:grid grid-cols-[400px_1fr] desktop:grid-cols-[450px_1fr] gap-10 ${cssClasses}`}
    >
      <div className="bg-brown flex flex-col gap-8 p-8 h-[500px]">
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

      {/* slider */}
      <Splide
        options={{
          autoplay: true,
          type: "loop",
          interval: 4500,
          speed: 2000,
          gap: "1.75em",
          dragMinThreshold: { touch: 2000, mouse: 0 },
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {aboutUsSlider.map(({ url }, index) => (
            <SplideSlide key={index} className="h-[500px]">
              <ImageContainer
                src={url}
                alt={`Luna Blue - Image ${index + 1}`}
                width={1000}
                height={800}
                cssClasses="object-cover h-full w-full"
                quality={60}
                eager={index < 2 ? true : false}
                desktopSmall={45}
                desktop={35}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </article>
  );
};

export default HomePageAboutUs;
