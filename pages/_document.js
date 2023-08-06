import Document, { Html, Head, Main, NextScript } from "next/document";
// eslint-disable-next-line @next/next/no-script-in-document
import Script from "next/script";
export default class MyDocument extends Document {
  render() {
    const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    const NEXT_PUBLIC_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

    return (
      <Html lang="cs-cz">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;400;700&family=Tillana&display=swap"
            rel="stylesheet"
          /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap"
            rel="stylesheet"
          ></link>
          {/* <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourname" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} /> */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
              });
              `,
            }}
          />
          {/* Google Tag Manager */}
          <Script
            id="gtm-start"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        </Head>
        <body className="text-stone-900 bg-stone-100 font-nunito">
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
