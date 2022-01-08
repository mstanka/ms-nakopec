import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="cs-cz">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
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
        </Head>
        <body className="text-stone-900 font-kumbh">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
