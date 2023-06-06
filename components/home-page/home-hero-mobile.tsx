import Image from "next/image";

import IndividualSlide from "./hero-slider-mobile/individual-slide";

const HomeHeroMobile = () => {
  return (
    <div className="snap-y snap-mandatory h-[88vh] -mx-8 overflow-scroll scrollbar-hide">
      <IndividualSlide
        title="Which view would you like to wake up to during your next holiday?"
        paragraph=""
      />
      <IndividualSlide
        backgroundImage="bg-[url('/Keurbooms-lagoon-Plettenberg-Bay-20191222_144127.jpg')]"
        whiteText
        title="Hill Street"
        paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
    perspiciatis consectetur, tenetur aperiam adipisci accusantium
    dignissimos. Necessitatibus rem fugit minus recusandae? Deserunt impedit
    delectus minus."
        buttonUrl="/"
      />

      <IndividualSlide
        backgroundImage="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Slideshow/9U7A0672-HDR.jpg')]"
        title="Robberg Ridge"
        paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      perspiciatis consectetur, tenetur aperiam adipisci accusantium
      dignissimos. Necessitatibus rem fugit minus recusandae? Deserunt impedit
      delectus minus."
        buttonUrl="/luna-blue-1"
      />
      <IndividualSlide
        title="About us"
        paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, voluptatem. Harum quos vitae sunt doloribus autem quidem vel facere perferendis."
      />
    </div>
  );
};

export default HomeHeroMobile;
