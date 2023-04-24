import Slider from "@/components/slider";

import imageData from "../data/image-data.json";
import About from "@/components/home-page/about";
import OurRooms from "@/components/home-page/our-rooms";

export default function Home() {
  const {
    homePage: { heroSlider },
  } = imageData;
  return (
    <>
      <Slider imageData={heroSlider} />
      <About cssClasses="my-10 desktopSmall:my-16" />
      <OurRooms cssClasses="pt-4" />
    </>
  );
}
