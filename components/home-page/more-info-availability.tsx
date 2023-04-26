import Button from "../button";

import ImageCard from "../image-card";

interface Props {
  cssClasses?: string;
}

const MoreInfoAvailability = ({ cssClasses }: Props) => {
  return (
    <section className={`grid gap-8 desktopSmall:gap-10 ${cssClasses}`}>
      <div>
        <div>
          <h2 className="mb-8 tabletLarge:hidden">Check Availability</h2>
          <ImageCard
            title="Check Availability"
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/luna-blue1.jpg')]"
            flip
            thin
            buttonText="View our calendar"
          />
        </div>
        <Button url="/" cssClasses="mt-8 tabletLarge:hidden" width="w-[228px]">
          View our calendar
        </Button>
      </div>

      <div>
        <div>
          <h2 className="mb-8 tabletLarge:hidden">About Plettenberg Bay</h2>
          <ImageCard
            title="About Plettenberg Bay"
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/footprints-in-the-sand.jpg')]"
            thin
            imageLeft
          />
        </div>
        <Button url="/" cssClasses="mt-8 tabletLarge:hidden">
          View More
        </Button>
      </div>
    </section>
  );
};

export default MoreInfoAvailability;
