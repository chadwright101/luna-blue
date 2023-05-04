import Image from "next/image";

interface Props {
  cssClasses?: string;
}

const OurRooms = ({ cssClasses }: Props) => {
  return (
    <div className={`${cssClasses}`}>
      <h1 className=" mb-4 tabletLarge:text-center desktopSmall:mb-6">
        Our Rooms
      </h1>
      <div className="mb-10 desktopSmall:mb-16 grid grid-cols-3 tablet:grid-cols-4 desktopSmall:grid-cols-5 gap-4">
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Our+rooms/Bedroom+2/9U7A0792-HDR.jpg"
          alt=""
          width={1400}
          height={750}
          className="object-cover h-[250px] phone:h-[300px] tablet:h-[350px] tabletLarge:h-[425px] desktop:h-[525px] object-center"
          priority
        />
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Our+rooms/Bedroom+1/9U7A0836-HDR.jpg"
          alt=""
          width={1400}
          height={750}
          className="object-cover h-[250px] phone:h-[300px] tablet:h-[350px] tabletLarge:h-[425px] desktop:h-[525px] object-center"
          priority
        />
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Our+rooms/Bedroom+1/9U7A0804-HDR.jpg"
          alt=""
          width={1400}
          height={750}
          className="hidden desktopSmall:block object-cover h-[250px] phone:h-[300px] tablet:h-[350px] tabletLarge:h-[425px] desktop:h-[525px] object-center"
          priority
        />
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Our+rooms/9U7A0848-HDR.jpg"
          alt=""
          width={1400}
          height={750}
          className="object-cover h-[250px] phone:h-[300px] tablet:h-[350px] tabletLarge:h-[425px] desktop:h-[525px] object-center desktopSmall:order-5"
          priority
        />
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Our+rooms/Bedroom+1/9U7A0820-HDR.jpg"
          alt=""
          width={1400}
          height={750}
          className="hidden tablet:block object-cover h-[250px] phone:h-[300px] tablet:h-[350px] tabletLarge:h-[425px] desktop:h-[525px] object-center"
          priority
        />
      </div>
      <main className="grid desktopSmall:grid-cols-[3fr_2fr] gap-10">
        <article className="bg-beige p-8">
          <div className="grid gap-4">
            <p>
              Our rooms are designed to provide you with an unforgettable
              experience that will exceed your expectations. From the moment you
              step into your room, you&#39;ll be surrounded by elegance and
              comfort.
            </p>
            <p>
              Our upmarket rooms feature only the finest amenities and
              furnishings, including plush bedding, top-of-the-line electronics,
              and high-quality toiletries. You&#39;ll feel pampered and indulged
              as you sink into our soft, comfortable beds and enjoy a restful
              night&#39;s sleep.
            </p>
            <p>
              Our attention to detail is unmatched, and we strive to ensure that
              every aspect of your stay is perfect. Whether you&#39;re here for
              business or pleasure, our upmarket rooms will provide you with the
              ultimate in comfort and luxury.
            </p>
          </div>
        </article>
        <article>
          <h2 className="mb-10">Each Room Boasts the following facilities:</h2>
          <ul className="list-disc pl-4">
            <li>En-suite bathroom with shower and bath</li>
            <li>Magnificent views</li>
            <li>Free Wifi</li>
            <li>Smart TV</li>
            <li>Underfloor Heating</li>
            <li>Pillow Library</li>
          </ul>
        </article>
      </main>
    </div>
  );
};

export default OurRooms;
