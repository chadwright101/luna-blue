import Button from "../button";

import ImageCard from "../image-card";
import Translated from "../utils/translated";

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
          title="Our Rooms"
          titleGerman="Unsere Zimmer"
          link="/our-rooms"
          image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/9U7A0772-HDR.webp"
          mobileButtonWidth="w-[158px]"
          blankMobileCard
        />
      </div>
      <p>
        <Translated
          german="Jedes unserer Zimmer wurde mit dem Ziel entworfen, Ihren Aufenthalt zu
          einem unvergesslichen Erlebnis zu machen, das Ihre Erwartungen
          übertrifft. Sobald Sie einen Schritt in eines unserer zauberhaften
          Zimmer setzen, umgibt Sie ein Gefühl von Eleganz und Komfort. In
          unseren Luxuszimmern erwarten Sie erstklassige Einrichtungen,
          Plüschbettwäsche, hochwertige elektronische Geräte und
          Toilettenartikel."
        >
          Our rooms are designed to provide you with an unforgettable experience
          that will exceed your expectations. From the moment you step into your
          room, you&#39;ll be surrounded by elegance and comfort. Our upmarket
          rooms feature only the finest amenities and furnishings, including
          plush bedding, top-of-the-line electronics, and high-quality
          toiletries.
        </Translated>
        <br />
        <br />
        <Translated
          german="Lassen Sie sich von unseren weichen und bequemen Betten verwöhnen und
          genießen Sie einen wohlverdienten, erholsamen Schlaf. Wir achten auf
          jedes Detail, damit jeder Aspekt Ihres Aufenthalts perfekt wird. Ob
          Geschäfts- oder Vergnügungsreise, unsere Luxuszimmer vereinen Komfort
          und Luxus auf höchstem Niveau."
        >
          You&#39;ll feel pampered and indulged as you sink into our soft,
          comfortable beds and enjoy a restful night&#39;s sleep. Our attention
          to detail is unmatched, and we strive to ensure that every aspect of
          your stay is perfect. Whether you&#39;re here for business or
          pleasure, our upmarket rooms will provide you with the ultimate in
          comfort and luxury.
        </Translated>
      </p>
      <Button url="/our-rooms" cssClasses="tabletLarge:hidden">
        <Translated german="Mehr sehen">View More</Translated>
      </Button>
    </section>
  );
};

export default OurRooms;
