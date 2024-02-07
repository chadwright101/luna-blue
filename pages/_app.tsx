import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Footer from "@/components/navigation/footer/footer";
import Header from "@/components/navigation/header/header";
import Layout from "@/components/layout";
import WindowWidthListener from "@/components/utils/window-width-listeners";
import RageDisclaimer from "@/components/rage-disclaimer";
import useScrollPosition from "@/components/utils/scroll-position";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const scrollPosition = useScrollPosition();
  const { locale } = router;

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const expirationTime = Date.now() + 15 * 60 * 1000;
    const storedExpirationTime = localStorage.getItem("expirationTime");
    const shownDisclaimer = localStorage.getItem("shownDisclaimer");

    if (
      (currentMonth <= 11 &&
        !shownDisclaimer &&
        !storedExpirationTime &&
        locale === "en") ||
      (showDisclaimer &&
        storedExpirationTime &&
        Date.now() < +storedExpirationTime &&
        locale === "en")
    ) {
      setTimeout(() => {
        setShowDisclaimer(true);
        localStorage.setItem("shownDisclaimer", "true");
        localStorage.setItem("expirationTime", expirationTime.toString());
      }, 4000);
    } else if (storedExpirationTime && Date.now() > +storedExpirationTime) {
      localStorage.removeItem("shownDisclaimer");
      localStorage.removeItem("expirationTime");
    }
  }, []);
  return (
    <WindowWidthListener>
      {showDisclaimer && (
        <RageDisclaimer setShowDisclaimer={setShowDisclaimer} />
      )}
      <Header
        cssClasses={`sticky z-20 px-8 py-4 ${
          scrollPosition !== 0 ? "-top-3 tabletLarge:-top-6" : "top-0"
        } ${currentRoute !== "/" && "mb-8"}`}
      />
      <Layout>
        <Component {...pageProps} />
        <Footer cssClasses="mt-10" />
      </Layout>
    </WindowWidthListener>
  );
};
export default App;
