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
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/9U7A0440-HDR-cropped.webp')]"
            flip
            thin
            buttonText="View our calendar"
            mobileButtonWidth="w-[249px]"
            mobileCard
          />
        </div>
      </div>

      <div>
        <div>
          <h2 className="mb-8 tabletLarge:hidden">About Plettenberg Bay</h2>
          <ImageCard
            title="About Plettenberg Bay"
            link="https://www.plett-tourism.co.za/"
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/footprints-in-the-sand.webp')]"
            mobileButtonWidth="w-[158px]"
            thin
            imageLeft
            mobileCard
            targetBlank
          />
        </div>
      </div>
    </section>
  );
};

export default MoreInfoAvailability;
