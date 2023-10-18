import { useRouter } from "next/router";

import BasicSlider from "@/components/sliders/basic-slider";

import imageData from "@/data/general-data.json";

import { CssProps } from "@/components/property-pages/home-page/home-page";

const {
  mainHomePage: {
    gallery,
    aboutUs: {
      en: { paragraphs: enParagraphs },
      de: { paragraphs: deParagraphs },
    },
  },
} = imageData;

const HomePageAboutUs = ({ cssClasses }: CssProps) => {
  const { locale } = useRouter();
  return (
    <article
      className={`hidden desktopSmall:grid grid-cols-[400px_1fr] desktop:grid-cols-[450px_1fr] gap-10 ${cssClasses}`}
    >
      <div className="bg-brown flex flex-col gap-8 p-8 h-[525px] desktop:h-[500px]">
        <h2 className="text-white text-center text-35px border-y-2 py-2 border-white">
          About us
        </h2>
        {locale === "en"
          ? enParagraphs.map((paragraph, index) => (
              <p key={index} className="text-center text-white">
                {paragraph}
              </p>
            ))
          : deParagraphs.map((paragraph, index) => (
              <p key={index} className="text-center text-white">
                {paragraph}
              </p>
            ))}
      </div>

      {/* slider */}
      <BasicSlider
        imageData={gallery}
        slideHeight="h-[525px] desktop:h-[500px]"
      />
    </article>
  );
};

export default HomePageAboutUs;
