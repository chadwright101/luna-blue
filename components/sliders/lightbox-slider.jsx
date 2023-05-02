import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import classNames from "classnames";

import "@splidejs/react-splide/css/core";

const LightboxSlider = ({ imageList }) => {
  const slider1 = useRef();
  const slider2 = useRef();

  const [toggleLightbox, setToggleLightbox] = useState(false);

  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);
  return (
    <>
      {/* lightbox */}
      <div
        className={classNames(
          "fixed top-0 left-0 w-full h-full bg-darkBeige z-40 px-10 place-items-center",
          {
            "hidden ": !toggleLightbox,
            "grid ": toggleLightbox,
          }
        )}
      >
        <Splide
          ref={(slider) => (slider1.current = slider)}
          options={{
            rewind: true,
            type: "fade",
            rewind: true,
            pagination: false,
            speed: 2000,
            interval: 6500,
            autoplay: true,
            dragMinThreshold: 10,
            breakpoints: {
              900: {
                arrows: false,
              },
            },
          }}
          className="max-w-[1200px]"
        >
          <button
            onClick={() => setToggleLightbox(false)}
            className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
          >
            <Image
              src="/icons/close.svg"
              alt="Close icon"
              width={45}
              height={45}
              className="fixed top-6 right-10"
            />
          </button>
          {imageList.map(({ url }, index) => (
            <SplideSlide key={index} className="max-h-[750px]">
              <Image
                src={url}
                alt="Luna Blue guesthouse"
                width={1400}
                height={1000}
                className="object-cover h-full w-full"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* slider */}
      <Splide
        options={{
          type: "slide",
          rewind: true,
          pagination: false,
          perPage: 2,
          perMove: 1,
          speed: 2000,
          interval: 6500,
          autoplay: true,
          dragMinThreshold: 10,
          gap: "1rem",
          fixedHeight: 500,
          arrows: true,
          breakpoints: {
            1100: {
              perPage: 1,
            },
            900: {
              arrows: false,
              fixedHeight: 400,
            },
            425: {
              fixedHeight: 325,
            },
          },
        }}
        className="h-[325px] phone:h-[400px] tabletLarge:h-[500px]"
        ref={(slider) => (slider2.current = slider)}
      >
        {imageList.map(({ url }, index) => (
          <SplideSlide key={index} className="h-full w-full">
            <div className="w-full bg-white h-full flex justify-center overflow-hidden object-cover">
              <Image
                src={url}
                alt="Luna Blue guesthouse"
                width={200}
                height={200}
                className="object-cover h-full w-full cursor-pointer px-1 pt-2"
                onClick={() => (
                  slider1.current.go(index), setToggleLightbox(true)
                )}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default LightboxSlider;
