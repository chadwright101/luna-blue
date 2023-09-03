import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/core";
import ImageContainer from "../utils/image-container";

interface Props {
  cssClasses?: string;
  imageData?: Array<string>;
  propertyName?: string;
  slideHeight?: string;
}

const BasicSlider = ({
  cssClasses,
  imageData,
  propertyName,
  slideHeight,
}: Props) => {
  return (
    <>
      <Splide
        options={{
          autoplay: true,
          type: "loop",
          interval: 4500,
          speed: 2000,
          gap: "1.75em",
          rewind: true,
          dragMinThreshold: { mouse: 50, touch: 150 },
          breakpoints: {
            900: {
              arrows: false,
            },
          },
        }}
        className={`desktop:max-w-[1400px] desktop:mx-auto ${cssClasses}`}
        hasTrack={false}
      >
        <div className="splide__arrows splide__arrows--ltr">
          <button
            className="splide__arrow splide__arrow--prev"
            type="button"
            aria-label="Previous slide"
            aria-controls="splide02-track"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="35"
              height="35"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
          <button
            className="splide__arrow splide__arrow--next"
            type="button"
            aria-label="Next slide"
            aria-controls="splide02-track"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="35"
              height="35"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
        </div>
        <SplideTrack>
          {imageData!.map((url, index) => (
            <SplideSlide
              key={index}
              className={
                slideHeight
                  ? slideHeight
                  : "h-[275px] phone:h-[350px] tablet:h-[450px] tabletLarge:h-[525px] desktop:h-[625px]"
              }
            >
              <ImageContainer
                src={url}
                alt={`${
                  propertyName ? propertyName : "Luna Blue Plettenberg Bay"
                } - Image ${index + 1}`}
                width={1400}
                height={1000}
                cssClasses="object-cover h-full w-full max-w-[1400px]"
                quality={60}
                eager={index < 2 ? true : false}
                smallest={85}
                phone={80}
                tablet={70}
                tabletLarge={60}
                desktopSmall={60}
                desktop={90}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
};

export default BasicSlider;
