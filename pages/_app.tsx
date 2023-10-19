import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Footer from "@/components/navigation/footer/footer";
import Header from "@/components/navigation/header/header";
import Layout from "@/components/layout";
import WindowWidthListener from "@/components/utils/window-width-listeners";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <WindowWidthListener>
        <Header
          cssClasses={`sticky top-0 z-20 px-8 py-4 ${
            currentRoute !== "/" && "mb-8"
          }`}
        />
        <Layout>
          <Component {...pageProps} />
          <Footer cssClasses="mt-10" />
        </Layout>
      </WindowWidthListener>
    </>
  );
};
export default App;
