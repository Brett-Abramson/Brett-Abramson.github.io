import Layout from "@/context/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brett Abramson</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}
