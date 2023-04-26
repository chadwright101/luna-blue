import Button from "../button";

import ImageCard from "../image-card";

interface Props {
  cssClasses?: string;
}

const OurRooms = ({ cssClasses }: Props) => {
  return (
    <section
      className={`grid gap-8 desktopSmall:gap-10 desktopSmall:grid-cols-[2fr_1fr] ${cssClasses}`}
    >
      <div>
        <h2 className="mb-8 tabletLarge:hidden">Our Rooms</h2>
        <ImageCard
          title="Our Homes"
          image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Bedroom-2.jpg')]"
        />
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        commodi beatae recusandae reprehenderit maiores dicta tenetur ipsam
        fugit, autem culpa ducimus perferendis natus necessitatibus quisquam vel
        officia non laborum id totam dignissimos similique perspiciatis veniam
        nesciunt. Obcaecati totam consectetur accusantium accusamus labore
        minima excepturi. Asperiores dignissimos illum reprehenderit molestiae
        explicabo voluptatem molestias voluptas sed, maiores qui earum atque
        tempora repudiandae ab non, voluptatum unde maxime? Fugit officiis
        assumenda minus odio optio maiores minima in quisquam?
      </p>
      <Button url="/" cssClasses="tabletLarge:hidden">
        View More
      </Button>
    </section>
  );
};

export default OurRooms;
