import IndividualSlide from "./hero-slider-mobile/individual-slide";

interface Props {
  cssClasses?: string;
}

const HomeHeroMobile = ({ cssClasses }: Props) => {
  return (
    <div
      className={`snap-y snap-proximity h-[88vh] -mx-8 overflow-scroll scrollbar-hide ${cssClasses}`}
    >
      <IndividualSlide
        arrow
        title="Which view would you like to wake up to during your next holiday?"
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
      <IndividualSlide title="About us">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          minima, veritatis eius illum non dolore tempore explicabo! Fugiat,
          suscipit veniam!
        </p>
        <ul className="list-disc ml-4">
          <li>Blah</li>
          <li>Blah Blah</li>
          <li>Blah Blah Blah</li>
        </ul>
      </IndividualSlide>
    </div>
  );
};

export default HomeHeroMobile;
