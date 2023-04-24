import Image from "next/image";

import Button from "../button";

import imageData from "../../data/image-data.json";

interface Props {
  cssClasses?: string;
}

const About = ({ cssClasses }: Props) => {
  const { amenityIcons } = imageData;
  return (
    <main className={`grid desktopSmall:grid-cols-2 gap-10 ${cssClasses}`}>
      <article>
        <h2>About</h2>
        <p className="mt-4 mb-8">
          There is no older or greater love story than that of the moon and the
          sea, with this relationship covered by both mythology and science.
          Whether apart or together they have the power to entrance with their
          beauty, gently touch our souls or simply make us stop and give us a
          greater perspective of how we fit into this world. This is the magic
          we want you to feel when you visit our villas.
        </p>
        <Button url="/" />
      </article>
      <article className="bg-beige py-8 px-4">
        <ul className="grid grid-cols-2 gap-y-8 tablet:grid-cols-3">
          {amenityIcons.map(({ url, title }, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-3 text-center"
            >
              <Image
                src={url}
                alt={`${title} icon`}
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
