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
    const shownDisclaimer = localStorage.getItem("shownDisclaimer");

    if (locale === "en" && !shownDisclaimer) {
      setTimeout(() => {
        setShowDisclaimer(true);
        localStorage.setItem("shownDisclaimer", "true");
      }, 4000);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("shownDisclaimer");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [locale]);

  return (
    <WindowWidthListener>
      {showDisclaimer && (
        <RageDisclaimer
          setShowDisclaimer={(value: React.SetStateAction<boolean>) => {
            setShowDisclaimer(value);
            if (!value) {
              localStorage.setItem("shownDisclaimer", "true");
            }
          }}
        />
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
