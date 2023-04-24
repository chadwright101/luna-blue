import Slider from "@/components/slider";

import imageData from "../data/image-data.json";

export default function Home() {
  const {
    homePage: { heroSlider },
  } = imageData;
  return (
    <>
      <Slider imageData={heroSlider} />
    </>
  );
}
