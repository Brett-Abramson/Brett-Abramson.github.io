import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  return (
    <Html lang="en">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "${GA_MEASUREMENT_ID}", {
              page_path: window.location.pathname,
            });
            `,
          }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
