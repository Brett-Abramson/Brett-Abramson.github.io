import Layout from "@/context/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactGA from "react-ga"

import * as ga from "../lib/ga"

export default function App({ Component, pageProps }) {
  const router = useRouter()

  // Attempt to use Google Analytics w/o React-GA
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url)
  //   }
  //   // When the component is mounted, subscribe to router changes and log those page views
  //   router.events.on("routeChangeComplete", handleRouteChange)

  //   // If the component is unmounted, unsubsrive from the event with the "off" method - help prevents memory leaks
  //   return () => {
  //     router.events.off("routerChangeComplete", handleRouteChange)
  //   }
  // }, [router.events])

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
    const handleRouteChange = (url) => {
      ReactGA.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routerChangeComplete", handleRouteChange)
    }
  }, [router.events])
  
  return (
    <>
      <Head>
        <title>Brett Abramson</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
