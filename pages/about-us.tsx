import Image from "next/image";

import ImageCard from "@/components/image-card";
import LightboxSlider from "@/components/sliders/lightbox-slider";

import imageData from "../data/image-data.json";
import HeroSplit from "@/components/hero-split";

const AboutUs = () => {
  const { aboutUsSlider } = imageData;

  return (
    <>
      <h1 className=" mb-6 tabletLarge:text-center desktopSmall:mb-8">
        About Us
      </h1>
      <div className="mb-10 desktopSmall:mb-16 grid grid-cols-3 tabletLarge:grid-cols-4 desktop:grid-cols-5 gap-4">
        <HeroSplit
          url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/9U7A0520-HDR.jpg"
          cssClasses="hidden tabletLarge:block"
        />
        <HeroSplit
          url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/Plett_Imagery-03669.jpg"
          cssClasses="hidden desktop:block"
        />
        <HeroSplit url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/9U7A0428-HDR.jpg" />
        <HeroSplit url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/9U7A0632-HDR.jpg" />
        <HeroSplit url="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/hero/9U7A0460-HDR.jpg" />
      </div>
      <article className=" max-w-[900px] mx-auto">
        <h2 className="text-43px tabletLarge:text-center mb-10">
          Located on the magnificent, unspoilt shores of the Indian Ocean.
        </h2>
        <p className="tabletLarge:text-center">
          There is no older or greater love story than that of the moon and the
          sea, with this relationship covered by both mythology and science.
          Whether apart or together they have the power to entrance with their
          beauty, gently touch our souls or simply make us stop and give us a
          greater perspective of how we fit into this world. This is the magic
          we want you to feel when you visit our villas.
        </p>
      </article>
      <div id="gallery" className="-translate-y-20"></div>
      <section className="my-10 desktopSmall:my-16">
        <h2 className="mb-10">Gallery</h2>
        <LightboxSlider
          imageList={aboutUsSlider}
          singleImageFast={false}
          singleImageMedium={false}
          singleImageSlow={false}
        />
      </section>
      <main>
        <p>
          Located the Tsitsikamma Marine Protected Area, Plettenburg Bay in the
          Garden Route is known for it&#39;s crystal clear seas and white sand
          beaches. Our Villas offer majestic views of the coast and were built
          to offer a cultivated experience of the things that we love. Luna Blue
          Villas is the passion project of Nikki and Heath, who together found
          their home in Plettenburg Bay. While their work experience has been
          vast, the one consistent factor throughout is their hospitality and
          passion for dealing with people. The Villas are a reflection of the
          things that they most care for, including the environment, fitness,
          animals, vegan cuisine and a deep love for Africa. Located outside of
          the hustle and bustle of central Plettenburg Bay, your stay with us
          will be a peaceful, soul restoring experience, while giving you quick
          access of a 5 minute drive to the airport, 7 minute drive to town and
          10 minute drive to the beautiful beaches.
        </p>
        <article className="my-10 desktopSmall:my-16">
          <h2 className="mb-10">Facilities</h2>
          <ul className="list-disc pl-4 grid gap-y-1 gap-x-10 tablet:grid-cols-2 desktopSmall:grid-cols-3">
            <li>Solar powered</li>
            <li>Swimming pool</li>
            <li>Pet Friendly</li>
            <li>Pillow Library</li>
            <li>Underfloor Heating</li>
            <li>Coffee Machine</li>
            <li>Garden</li>
            <li>Smart TVs</li>
            <li>BBQ Facilities</li>
            <li>Free Wifi</li>
            <li>Patio</li>
            <li>Linen & Towels</li>
            <li>
              Personal Chef (
              <span className="italic">available on request</span>)
            </li>
            <li>
              Gym (
              <span className="italic">
                personal trainer available on request
              </span>
              )
            </li>
            <li>
              Sustainable Tourism &#8212; Solar power, rainwater harvesting and
              the use of recycled / recyclable products only
            </li>
          </ul>
        </article>
      </main>
      <section>
        <div className="max-w-[900px] mx-auto mb-10">
          <h3 className="tabletLarge:text-center mb-10">Things To Do</h3>
          <p className="tabletLarge:text-center">
            This beautiful region offers you access to top rated golf courses,
            hiking trails, vineyards, kayaking, surfing, wildlife sanctuaries,
            ocean tours, markets and numerous adrenalin inducing activities,
            including paragliding.
          </p>
        </div>
        <div className="grid tabletLarge:grid-cols-2 desktop:grid-cols-3 gap-10">
          <div>
            <h2 className="mb-8 tabletLarge:hidden">Activities</h2>
            <ImageCard
              title="Activities"
              image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/activities.webp"
              link="https://www.plett-tourism.co.za/do/activities/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidth="w-[161px]"
              center
            />
          </div>
          <div>
            <h2 className="mb-8 tabletLarge:hidden">Restaurants</h2>
            <ImageCard
              title="Restaurants"
              image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/plett-food.webp"
              link="https://www.plett-tourism.co.za/eat/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidth="w-[161px]"
              center
            />
          </div>
          <div>
            <h2 className="mb-8 tabletLarge:hidden">Events</h2>
            <ImageCard
              title="Events"
              image="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/IMG_6545.webp"
              link="https://www.plett-tourism.co.za/do/event/"
              targetBlank
              thinDesktopOnly
              buttonText="Read More"
              mobileButtonWidth="w-[161px]"
              cssClasses="tabletLarge:col-span-2 desktop:col-span-1"
              center
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
