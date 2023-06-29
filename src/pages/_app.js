import Layout from "@/context/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as ga from "../lib/ga"

export default function App({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
  
  const router = useRouter()

  useEffect(() => {
    ga.initGA()
    ga.logPageView()

    const handleRouteChange = () => {
      ga.logPageView()
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
