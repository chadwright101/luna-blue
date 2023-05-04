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
          link="#"
          image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/9U7A0772-HDR.webp')]"
        />
      </div>
      <p>
        Our rooms are designed to provide you with an unforgettable experience
        that will exceed your expectations. From the moment you step into your
        room, you&#39;ll be surrounded by elegance and comfort. Our upmarket
        rooms feature only the finest amenities and furnishings, including plush
        bedding, top-of-the-line electronics, and high-quality toiletries.
        <br />
        <br />
        You&#39;ll feel pampered and indulged as you sink into our soft,
        comfortable beds and enjoy a restful night&#39;s sleep. Our attention to
        detail is unmatched, and we strive to ensure that every aspect of your
        stay is perfect. Whether you&#39;re here for business or pleasure, our
        upmarket rooms will provide you with the ultimate in comfort and luxury.
      </p>
      <Button url="/" cssClasses="tabletLarge:hidden">
        View More
      </Button>
    </section>
  );
};

export default OurRooms;
