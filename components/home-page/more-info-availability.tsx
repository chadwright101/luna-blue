import ImageCard from "../image-card";

interface Props {
  cssClasses?: string;
}

const MoreInfoAvailability = ({ cssClasses }: Props) => {
  return (
    <section className={`grid gap-10 ${cssClasses}`}>
      <div>
        <div>
          <h2 className="mb-8 tabletLarge:hidden">Check Availability</h2>
          <ImageCard
            title="Check Availability"
            link="#"
            image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/9U7A0440-HDR-cropped.webp"
            flip
            buttonText="View our calendar"
            mobileButtonWidth="w-[249px]"
          />
        </div>
      </div>

      <div>
        <div>
          <h2 className="mb-8 tabletLarge:hidden">About Plettenberg Bay</h2>
          <ImageCard
            title="About Plettenberg Bay"
            link="https://www.plett-tourism.co.za/"
            image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/footprints-in-the-sand.webp"
            mobileButtonWidth="w-[158px]"
            targetBlank
          />
        </div>
      </div>
    </section>
  );
};

export default MoreInfoAvailability;
