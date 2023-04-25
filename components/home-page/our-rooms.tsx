import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "../button";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const OurRooms = ({ cssClasses }: Props) => {
  const [cardMove, setCardMove] = useState(false);
  return (
    <section
      className={`grid gap-10 desktopSmall:grid-cols-[2fr_1fr] ${cssClasses}`}
    >
      <div className="grid gap-y-8">
        {/* desktop view */}
        <Link
          href="/"
          onMouseEnter={() => setCardMove(true)}
          onMouseLeave={() => setCardMove(false)}
          className={classNames(
            "hidden tabletLarge:block absolute bg-white/[85%] py-10 desktopSmall:py-7 desktop:py-10 px-20 translate-y-[200px] -ml-12 desktopSmall:translate-y-36 desktop:translate-y-48 duration-300 ease-in-out",
            {
              "-ml-6": cardMove,
            }
          )}
        >
          <h2
            className={classNames("text-[32px]", {
              "text-brown": cardMove,
            })}
          >
            Our Rooms
          </h2>
          <div className="flex gap-2">
            <p className="uppercase text-[13px] text-pureBlack font-350 tracking-widest">
              View More
            </p>
            <Image
              src="/icons/plus.svg"
              alt="Plus sign icon"
              width={13}
              height={13}
              className="-translate-y-[1.5px] ease-in-out duration-500"
            />
          </div>
        </Link>

        {/* mobile view */}

        <h2 className="tabletLarge:hidden">Our Rooms</h2>
        <Image
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Home+page/Bedroom-2.jpg"
          alt="Luna Blue rooms"
          width={1000}
          height={750}
          className="h-[300px] phone:h-[325px] tablet:h-[425px] tabletLarge:h-[550px] desktopSmall:h-[425px] desktop:h-[550px] object-cover"
        />
        <p className="tabletLarge:hidden">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          commodi beatae recusandae reprehenderit maiores dicta tenetur ipsam
          fugit, autem culpa ducimus perferendis natus necessitatibus quisquam
          vel officia non laborum id totam dignissimos similique perspiciatis
          veniam nesciunt. Obcaecati totam consectetur accusantium accusamus
          labore minima excepturi. Asperiores dignissimos illum reprehenderit
          molestiae explicabo voluptatem molestias voluptas sed, maiores qui
          earum atque tempora repudiandae ab non, voluptatum unde maxime? Fugit
          officiis assumenda minus odio optio maiores minima in quisquam?
        </p>
        <Button url="/" cssClasses="tabletLarge:hidden">
          View More
        </Button>
      </div>

      {/* desktop view */}
      <p className="hidden tabletLarge:block">
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
    </section>
  );
};

export default OurRooms;
