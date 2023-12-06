import Head from "next/head";
import { useRouter } from "next/router";
import { DataProps } from "./home-page/home-page";

interface Props extends DataProps {
  pageName?: string;
}

const MetaComponent = ({
  pageName,
  data: {
    general: {
      propertyName,
      meta: { description, keywords, images },
    },
  },
}: Props) => {
  const { locale, pathname } = useRouter();
  return (
    <Head>
      <title>
        {pageName
          ? `${pageName} - ${propertyName} | Plettenberg Bay Accommodation`
          : `${propertyName} | Plettenberg Bay Accommodation`}
      </title>
      <meta
        name="description"
        content={locale === "en" ? description.en : description.de}
      />
      <meta name="keywords" content={keywords} />
      {images.map((image, index) => (
        <meta property="og:image" content={image} key={index} />
      ))}
      <meta
        property="og:title"
        content={`${propertyName} by Luna Blue - Plettenberg Bay`}
      />
      <meta
        property="og:url"
        content={`https://www.lunarblue.co.za${pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description.en} />
      <meta
        property="og:site_name"
        content={`${
          pageName ? `${pageName} - ` : ""
        }${propertyName} | Plettenberg Bay`}
      />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
    </Head>
  );
};

export default MetaComponent;
