import Link from "next/link";
import { usePathname } from "next/navigation";

import ImageContainer from "../../../utils/image-container";
import Translated from "../../../utils/translated";
import classNames from "classnames";

const Policies = () => {
  const currentRoute = usePathname();

  return (
    <div className="desktopSmall:col-span-2">
      <div
        className={classNames("grid gap-8", {
          "desktopSmall:grid-cols-2":
            currentRoute === "/keurbooms-lagoon-villa",
        })}
      >
        {currentRoute === "/keurbooms-lagoon-villa" && (
          <div className="grid gap-8 tabletLarge:grid-cols-[2fr_1fr] tabletLarge:gap-6 desktopSmall:grid-cols-1">
            <div>
              <h3 className="mb-8">
                <Translated german="Nutzung der Outdoor-Ausrüstung">
                  Outdoor gear use
                </Translated>
              </h3>
              <p>
                <Translated german="Die folgende Outdoor-Ausrüstung steht den Gästen zur Verfügung (vorbehaltlich der Unterzeichnung eines Haftungsausschlusses).">
                  The following outdoor gear is available for guest use (subject
                  to the signing of a liability form):
                </Translated>
              </p>
              <ul className=" list-disc list-inside pl-4">
                <li>
                  <Translated german="2 x Mountainbikes">
                    2 x mountain bikes
                  </Translated>
                </li>
                <li>
                  <Translated german="2 x Surfbretter">
                    2 x surf boards
                  </Translated>
                </li>
                <li>
                  <Translated german="2 x SUP-Boards">
                    2 x standup paddleboards
                  </Translated>
                </li>
              </ul>
            </div>
            <ImageContainer
              src="/assets/images/lagoon-villa/images/luna-gear.jpeg"
              alt="Outdoor gear use"
              width={900}
              height={600}
              cssClasses="object-cover desktopSmall:aspect-video"
            />
          </div>
        )}
        <div>
          <h3 className="mb-8">
            <Translated german="Richtlinien">Policies</Translated>
          </h3>
          <ul className="grid gap-8">
            <li
              className={classNames("flex gap-2 flex-col", {
                "desktopSmall:flex-row":
                  currentRoute !== "/keurbooms-lagoon-villa",
              })}
            >
              <h4 className="text-18px font-Josefin_Sans font-500 underline underline-offset-4 decoration-[0.5px]">
                <Translated german="Kautionsrichtlinie:">
                  Breakage deposit policy:
                </Translated>
              </h4>
              <p>
                {currentRoute === "/keurbooms-lagoon-villa" ? (
                  <Translated german="Bitte beachten Sie, dass für jeden Aufenthalt vor dem Check-in eine erstattbare Kaution in Höhe von R2500 zu hinterlegen ist.">
                    Please note that a{" "}
                    <span className="font-350 italic">
                      refundable breakage deposit of R2500
                    </span>{" "}
                    is required to be paid for each stay before check-in.
                  </Translated>
                ) : currentRoute === "/cliffside-suites" ? (
                  <Translated german="Bitte beachten Sie, dass für jeden Aufenthalt vor dem Check-in eine erstattbare Kaution in Höhe von R1000 zu hinterlegen ist.">
                    Please note that a{" "}
                    <span className="font-350 italic">
                      refundable breakage deposit of R1000
                    </span>{" "}
                    is required to be paid for each stay before check-in.
                  </Translated>
                ) : null}
              </p>
            </li>
            <li
              className={classNames("flex gap-2 flex-col", {
                "desktopSmall:flex-row":
                  currentRoute !== "/keurbooms-lagoon-villa",
              })}
            >
              <h4 className="text-18px font-Josefin_Sans font-500 underline underline-offset-4 decoration-[0.5px]">
                <Translated german="Raucherrichtlinie:">
                  Smoking policy:
                </Translated>
              </h4>
              <Translated german="Das Rauchen im Innenbereich ist strengstens untersagt, jedes Zimmer ist mit einem sensiblen Rauchmelder ausgestattet. Im Außenbereich stehen Aschenbecher zur Verfügung.">
                Smoking indoors is strictly prohibited, each room is fitted with
                a sensitive smoke detector. Ashtrays will be be provided
                outdoors.
              </Translated>
            </li>
            <li
              className={classNames("flex gap-2 flex-col", {
                "desktopSmall:flex-row":
                  currentRoute !== "/keurbooms-lagoon-villa",
              })}
            >
              <h4 className="text-18px font-Josefin_Sans font-500 underline underline-offset-4 decoration-[0.5px]">
                <Translated german="Besucherpolitik:">
                  Visitors policy:
                </Translated>
              </h4>
              <Translated german="Ohne vorherige Zustimmung der Geschäftsleitung sind keine Besucher zugelassen.">
                No visitors will be allowed without prior consent from
                management.
              </Translated>
            </li>
            <li
              className={classNames("flex gap-2 flex-col", {
                "desktopSmall:flex-row":
                  currentRoute !== "/keurbooms-lagoon-villa",
              })}
            >
              <h4 className="text-18px font-Josefin_Sans font-500 underline underline-offset-4 decoration-[0.5px]">
                <Translated german="Haustierrichtlinie:">
                  Pets policy:
                </Translated>
              </h4>
              <Link
                prefetch={false}
                href="/assets/luna-blue-dog-policy-2023.pdf"
                className="flex gap-2 hover:desktopSmall:text-brown p-3 text-blueLink -m-3 desktopSmall:p-0 desktopSmall:m-0"
                target="_blank"
              >
                <Translated german="Herunterladen">Download</Translated>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policies;
