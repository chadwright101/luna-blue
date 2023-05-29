import Image from "next/image";

import Button from "../button";

import imageData from "../../data/image-data.json";

interface Props {
  cssClasses?: string;
}

const About = ({ cssClasses }: Props) => {
  const { amenityIcons } = imageData;
  return (
    <main
      className={`grid desktopSmall:grid-cols-[1fr_2fr] desktop:grid-cols-[2fr_1fr] gap-10 ${cssClasses}`}
    >
      <div className="grid tabletLarge:grid-cols-[360px_1fr] gap-10 desktopSmall:col-span-2 desktop:col-span-1">
        <video
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna+Blue+Showreel.mp4"
          controls
          className="w-[360px] h-[400px] justify-self-center order-1 tabletLarge:order-none"
          poster="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna+Blue+-+Video+poster.jpg"
        ></video>
        <article>
          <h2>About Us</h2>
          <p className="mt-4 mb-8">
            There is no older or greater love story than that of the moon and
            the sea, with this relationship covered by both mythology and
            science. Whether apart or together they have the power to entrance
            with their beauty, gently touch our souls or simply make us stop and
            give us a greater perspective of how we fit into this world. This is
            the magic we want you to feel when you visit our guesthouses.
          </p>
          <Button url="about-us" />
        </article>
      </div>

      <article className="desktopSmall:row-start-2 desktopSmall:col-span-2 desktop:row-start-auto desktop:col-span-1">
        <ul className="grid grid-cols-2 bg-beige py-8 px-4 gap-y-8 tablet:grid-cols-3 tabletLarge:grid-cols-4  desktop:gap-y-16">
          {amenityIcons.map(({ url, title }, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-3 text-center"
            >
              <Image
                src={url}
                alt={`${title}{' '} icon`}
                width={60}
                height={60}
                className={`desktopSmall:w-[50px] desktopSmall:h-auto ${
                  index === 0 && "pt-1.5 -mb-1.5"
                }`}
              />
              {title}
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};
export default About;
