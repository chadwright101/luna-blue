import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  pageName?: string;
  data: {
    general: {
      propertyName: string;
      meta: {
        description: {
          en: string;
          de: string;
        };
        keywords: string;
        images: string[];
      };
    };
  };
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
          ? `${pageName} - ${propertyName} | Plettenberg Bay`
          : `${propertyName} | Plettenberg Bay`}
      </title>
      <meta
        name="description"
        content={locale === "en" ? description.en : description.de}
      />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={images[0]} />
      <meta property="og:image" content={images[1]} />
      <meta property="og:image" content={images[2]} />
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
        content={`${pageName} - ${propertyName} | Plettenberg Bay`}
      />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
    </Head>
  );
};

export default MetaComponent;
