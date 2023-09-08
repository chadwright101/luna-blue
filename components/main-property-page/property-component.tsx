import Link from "next/link";

import ImageContainer from "../utils/image-container";
import { DataProps } from "../property-pages/home-page/home-page";
import Button from "../button";

interface Props extends DataProps {
  cssClasses?: string;
  featuredImage: string;
}

const PropertyComponent = ({
  cssClasses,
  featuredImage,
  data: {
    general: { propertyName, address },
    homePage: { url },
  },
}: Props) => {
  return (
    <article
      className={`grid gap-6 tabletLarge:gap-4 desktopSmall:gap-2 tabletLarge:text-center ${cssClasses}`}
    >
      <ImageContainer
        src={featuredImage}
        alt={`${propertyName} by Luna Blue`}
        width={800}
        height={600}
        cssClasses="h-[300px] tablet:h-[450px] desktopSmall:h-[550px] object-cover"
      />
      <h2 className="text-35px tabletLarge:place-self-center">
        {propertyName}
      </h2>
      <address className="-mt-5 tabletLarge:-mt-3 desktopSmall:-mt-1">
        <Link
          href={address.googleMapsUrl}
          target="_blank"
          className="text-blueLink"
        >
          {address.street}, {address.town}
        </Link>
      </address>
      <Button targetBlank cssClasses="tabletLarge:place-self-center" url={url}>
        View More
      </Button>
    </article>
  );
};

export default PropertyComponent;
