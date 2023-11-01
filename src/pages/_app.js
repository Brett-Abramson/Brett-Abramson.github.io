import Layout from "@/context/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brett Abramson - Software Developer Portfolio</title>
        <meta
          name="description"
          content="Discover Brett Abramson's impressive software development portfolio, showcasing his projects and teechnologies he has worked with. Learn more about his skills, connect, and find ways to explore his other profiles."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}
