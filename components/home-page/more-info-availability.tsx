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
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/luna-blue1.jpg')]"
            flip
            thin
            buttonText="View our calendar"
            mobileButtonWidth="w-[249px]"
            imageTop
            mobileCard
          />
        </div>
      </div>

      <div>
        <div>
          <h2 className="mb-8 tabletLarge:hidden">About Plettenberg Bay</h2>
          <ImageCard
            title="About Plettenberg Bay"
            link="#"
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/footprints-in-the-sand.jpg')]"
            mobileButtonWidth="w-[158px]"
            thin
            imageLeft
            mobileCard
          />
        </div>
      </div>
    </section>
  );
};

export default MoreInfoAvailability;
