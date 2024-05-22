import Script from "next/script";

import HomePage from "@/components/property-pages/home-page/home-page";
import MetaComponent from "@/components/property-pages/meta-component";

import data from "@/data/lagoon-villa-data.json";

export default function LagoonVilla() {
  return (
    <>
      <Script id="facebook-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1105845360676104');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          alt="facebook-pixel"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=1105845360676104&ev=PageView&noscript=1`}
        />
      </noscript>
      <MetaComponent data={data} />
      <HomePage data={data} />
    </>
  );
}
