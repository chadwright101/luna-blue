import Image from "next/image";

import ImageCard from "@/components/image-card";
import LightboxSlider from "@/components/sliders/lightbox-slider";

import imageData from "../data/image-data.json";

const AboutUs = () => {
  const { aboutUsSlider } = imageData;

  return (
    <>
      <h1 className="text-center">About Us</h1>
      <Image
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/Slider/LB-Front-Garden-to-House-view_done.jpg"
        alt="Luna Blue guesthouse"
        width={1400}
        height={750}
        className="my-10 desktopSmall:my-16 object-cover h-[250px] phone:h-[300px] tablet:h-[350px] tabletLarge:h-[425px] desktop:h-[525px]"
      />
      <article className=" max-w-[900px] mx-auto">
        <h2 className="text-43px text-center mb-10">
          Located on the magnificent, unspoilt shores of the Indian Ocean.
        </h2>
        <p className="text-center">
          There is no older or greater love story than that of the moon and the
          sea, with this relationship covered by both mythology and science.
          Whether apart or together they have the power to entrance with their
          beauty, gently touch our souls or simply make us stop and give us a
          greater perspective of how we fit into this world. This is the magic
          we want you to feel when you visit our villas.
        </p>
      </article>
      <div className="my-10 desktopSmall:my-16">
        <LightboxSlider imageList={aboutUsSlider} />
      </div>
      <main>
        <p>
          Located on the magnificent, unspoilt shores of the Indian Ocean, in
          particular the Tsitsikamma Marine Protected Area, Plettenburg Bay in
          the Garden Route is known for it&#39;s crystal clear seas and white
          sand beaches. Our Villas offer majestic views of the coast and were
          built to offer a cultivated experience of the things that we love.
          Luna Blue Villas is the passion project of Nikki and Heath, who
          together found their home in Plettenburg Bay. While their work
          experience has been vast, the one consistent factor throughout is
          their hospitality and passion for dealing with people. The Villas are
          a reflection of the things that they most care for, including the
          environment, fitness, animals, vegan cuisine and a deep love for
          Africa. Located outside of the hustle and bustle of central
          Plettenburg Bay, your stay with us will be a peaceful, soul restoring
          experience, while giving you quick access of a 5 minute drive to the
          airport, 7 minute drive to town and 10 minute drive to the beautiful
          beaches.
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
            <li>Garder</li>
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
          <h3 className="text-center mb-10">Things To Do</h3>
          <p className="text-center">
            This beautiful region offers you access to top rated golf courses,
            hiking trails, vineyards, kayaking, surfing, wildlife sanctuaries,
            ocean tours, markets and numerous adrenalin inducing activities,
            including paragliding.
          </p>
        </div>
        <div className="grid tabletLarge:grid-cols-2 desktop:grid-cols-3 gap-10">
          <ImageCard
            title="Activities"
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/activities.jpg')]"
            link="https://www.plett-tourism.co.za/do/activities/"
            targetBlank
            thinDesktopOnly
            buttonText="Read More"
            mobileButtonWidth="w-[158px]"
            mobileCard
            center
          />
          <ImageCard
            title="Restaurants"
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/plett-food.jpg')]"
            link="https://www.plett-tourism.co.za/eat/"
            targetBlank
            thinDesktopOnly
            buttonText="Read More"
            mobileButtonWidth="w-[158px]"
            mobileCard
            center
          />
          <ImageCard
            title="Events"
            image="bg-[url('https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/luna-blue/About+us/IMG_6545.jpg')]"
            link="https://www.plett-tourism.co.za/do/event/"
            targetBlank
            thinDesktopOnly
            buttonText="Read More"
            mobileButtonWidth="w-[158px]"
            mobileCard
            center
            cssClasses="tabletLarge:col-span-2 desktop:col-span-1"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
