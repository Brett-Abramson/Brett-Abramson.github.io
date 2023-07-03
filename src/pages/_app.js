import Layout from "@/context/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brett Abramson</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics-inline"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}", {
              page_path: window.location.pathname,
            });
            `,
        }}
      /> */}
    </>
  );
}
