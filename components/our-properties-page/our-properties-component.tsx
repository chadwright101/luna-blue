import Link from "next/link";

import ImageContainer from "../utils/image-container";
import { DataProps } from "../property-pages/home-page/home-page";
import Button from "../button";

interface Props extends DataProps {
  cssClasses?: string;
  featuredImage: string;
}

const OurPropertiesComponent = ({
  cssClasses,
  featuredImage,
  data: {
    general: { propertyName, address },
    homePage: { url },
  },
}: Props) => {
  return (
    <article
      className={`grid gap-6 tabletLarge:gap-5 tabletLarge:text-center ${cssClasses}`}
    >
      <Link
        prefetch={false}
        target="_blank"
        href={url}
        className="overflow-hidden"
      >
        <ImageContainer
          src={featuredImage}
          alt={`${propertyName} by Luna Blue`}
          width={800}
          height={600}
          cssClasses="h-[300px] tablet:h-[450px] desktopSmall:h-[550px] object-cover desktopSmall:hover:scale-105 desktopSmall:hover:ease-in-out duration-500"
        />
      </Link>
      <Link
        prefetch={false}
        target="_blank"
        href={url}
        className="tabletLarge:place-self-center"
      >
        <h2 className="text-35px desktopSmall:hover:text-brown ease-in-out duration-150">
          {propertyName}
        </h2>
      </Link>
      {propertyName === "Cliffside Suites" ? (
        <address className="-mt-5 tabletLarge:-mt-3 desktopSmall:-mt-1">
          <p>
            <Link
              prefetch={false}
              href={address.googleMapsUrl}
              target="_blank"
              className="text-blueLink"
            >
              {address.street}
            </Link>{" "}
            ({address.town})
          </p>
        </address>
      ) : (
        <address className="-mt-5 tabletLarge:-mt-3 desktopSmall:-mt-1">
          <Link
            prefetch={false}
            href={address.googleMapsUrl}
            target="_blank"
            className="text-blueLink"
          >
            {address.street}, {address.town}
          </Link>
        </address>
      )}
      <Button
        targetBlank
        cssClasses="tabletLarge:place-self-center"
        url={url}
      />
    </article>
  );
};

export default OurPropertiesComponent;
