import type { AppProps } from "next/app";

import Footer from "@/components/navigation/footer/footer";
import Header from "@/components/navigation/header/header";
import Layout from "@/components/layout";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header cssClasses="sticky top-0 z-20 px-8 py-4 desktop:mb-8" />
      <Layout>
        <Component {...pageProps} />
        <Footer cssClasses="mt-10" />
      </Layout>
    </>
  );
};
export default App;
