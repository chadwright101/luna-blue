import { useRouter } from "next/router";

interface Props {
  setShowDisclaimer: React.Dispatch<React.SetStateAction<boolean>>;
}

const RageDisclaimer = ({ setShowDisclaimer }: Props) => {
  const { locale } = useRouter();
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  if (locale === "en") {
    return (
      <div className="fixed top-0 left-0 z-50 bg-white/90 w-full h-full grid place-items-center">
        <div className="max-w-[700px] mx-8 flex flex-col gap-4 p-8 bg-darkBeige drop-shadow-md border-4 border-brown">
          <h3 className="text-center">Guest age policy</h3>
          <p>
            Please note that guests booking our properties has an age
            requirement of 21 and above for all bookings; guests under 21 must
            be accompanied by an adult. Any guest/s who do not meet this
            requirement will be turned away.
            <br />
            <br />
            Additionally, we do not accept bookings from guests attending the{" "}
            <span className=" font-500">
              Plett Rage{" "}
              {currentMonth === 11 && currentDate >= 1 && currentDate <= 6
                ? currentYear + 1
                : currentYear}
            </span>
            . We prioritize a peaceful atmosphere for all guests, and the nature
            of this event is not aligned with the ambiance we aim to maintain.
          </p>
          <button
            className="uppercase text-18px px-6 pt-2 pb-1 bg-lightBrown tabletLarge:hover:bg-lightBrown/75"
            onClick={() => setShowDisclaimer(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  } else return null;
};

export default RageDisclaimer;
