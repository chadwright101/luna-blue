import Image from "next/image";
import Link from "next/link";

import generalData from "../data/general-data.json";
import navData from "../data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const {
  contact: { phone, email },
  address: { areaCode, province, street, town },
  social: { facebook, instagram, tripAdvisor },
} = generalData;

const Footer = ({ cssClasses }: Props) => {
  return (
    <footer className={`${cssClasses}`}>
      <hr className="mb-10" />
      <div className="flex flex-wrap gap-10 tabletLarge:grid grid-cols-[250px_300px_1fr] desktopSmall:grid-cols-[250px_300px_250px_1fr]">
        <div className="hidden tabletLarge:block">
          <h4>Navigation</h4>
          <ul className="mt-6 flex flex-col gap-2 tabletLarge:grid grid-flow-row tabletLarge:h-[200px] tabletLarge:gap-0">
            {navData.map(({ title, url }, index) => (
              <li key={index}>
                <Link
                  href={url}
                  className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="flex flex-col gap-4 mt-6 tabletLarge:grid grid-rows-[40px_40px_1fr] tabletLarge:h-[200px] tabletLarge:gap-0">
            <li>
              <Link
                href={`tel:${phone}`}
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
              >
                {phone}
              </Link>
            </li>
            <li>
              <Link
                href={`mailto:${email}`}
                className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
              >
                {email}
              </Link>
            </li>
            <li>
              <address>
                {street}, {town}
                <br />
                {province}, {areaCode}
              </address>
            </li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <div className="flex gap-6 items-center mt-6 desktopSmall:gap-3">
            <Link
              href={facebook}
              className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 desktopSmall:hover:scale-105 desktopSmall:hover:opacity-90 transition-all duration-500"
            >
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/facebook-logo.png"
                alt="Facebook logo"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href={instagram}
              className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 desktopSmall:hover:scale-105 desktopSmall:hover:opacity-90 transition-all duration-500"
            >
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/instagram-logo.png"
                alt="Instagram logo"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href={tripAdvisor}
              className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0 desktopSmall:hover:scale-105 desktopSmall:hover:opacity-90 transition-all duration-500"
            >
              <Image
                src="/icons/tripadvisor.svg"
                alt="Trip Advisor logo"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/Luna-Blue-Logo.png"
            alt="Luna Blue logo"
            width={150}
            height={193}
            className="hidden w-16 h-auto ml-auto desktopSmall:block"
          />
        </div>
      </div>
      <p className="text-14px text-center py-4 mt-8 bg-darkBeige tabletLarge:mt-4">
        © Copyright <Link href="/">Luna Blue Holiday Villas</Link>
      </p>
    </footer>
  );
};

export default Footer;
