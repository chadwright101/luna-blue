import type { AppProps } from "next/app";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header cssClasses="sticky top-0 z-20 px-8 py-4 mb-4 tabletLarge:mb-6 desktop:mb-8" />
      <Layout>
        <Component {...pageProps} />
        <Footer cssClasses="mt-10" />
      </Layout>
    </>
  );
}
