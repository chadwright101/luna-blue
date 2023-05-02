import BasicSlider from "@/components/sliders/basic-slider";

import imageData from "../data/image-data.json";
import About from "@/components/home-page/about";
import OurRooms from "@/components/home-page/our-rooms";
import MoreInfoAvailability from "@/components/home-page/more-info-availability";

export default function Home() {
  const {
    homePage: { heroSlider },
  } = imageData;
  return (
    <>
      <BasicSlider imageData={heroSlider} />
      <About cssClasses="my-10 desktopSmall:my-16" />
      <OurRooms cssClasses="pt-4" />
      <hr className="text-black my-10 desktopSmall:my-16" />
      <MoreInfoAvailability cssClasses="my-10 desktopSmall:my-16" />
    </>
  );
}
