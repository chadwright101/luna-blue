import Slider from "@/components/slider";

import imageData from "../data/image-data.json";
import About from "@/components/home-page/about";

export default function Home() {
  const {
    homePage: { heroSlider },
  } = imageData;
  return (
    <>
      <Slider imageData={heroSlider} />
      <About cssClasses="my-10" />
    </>
  );
}
