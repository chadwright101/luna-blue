import Translated from "@/components/utils/translated";
import Link from "next/link";

const BookEntireProperty = () => {
  return (
    <div className="bg-brown -mx-8 px-8 py-8 grid gap-8 desktopSmall:col-span-2 desktopSmall:mx-0 desktopSmall:gap-4 desktopSmall:py-4">
      <div className="flex flex-col items-center gap-8 desktopSmall:flex-row justify-center">
        <h3 className="text-center text-lightBeige">
          <Translated german="Möchten Sie unser gesamtes Anwesen buchen?">
            Want to book our entire property?
          </Translated>
        </h3>
        <Link
          href="https://book.nightsbridge.com/35555?special=LBSUMMER"
          target="_blank"
          className="px-4 pt-[6px] pb-1 bg-lightBeige border-2 rounded-xl text-25px text-brown font-500 desktopSmall:hover:bg-brown desktopSmall:hover:border-2 border-lightBeige ease-in-out duration-300 desktopSmall:hover:text-white desktopSmall:text-[20px]"
        >
          <Translated german="klicken Sie hier">Click here</Translated>
        </Link>
      </div>
      <p className="text-center text-white italic">
        <Translated german="Verfügbare Termine">Available dates</Translated>:{" "}
        <span className="font-500">
          <Translated german="Dezember 2024 – 12. Januar 2025">
            13 Dec 2024 - 12 Jan 2025
          </Translated>
        </span>{" "}
        (
        <Translated german="Mindestaufenthalt 3 Wochen">
          minimum stay 3 weeks
        </Translated>
        )
      </p>
    </div>
  );
};

export default BookEntireProperty;
