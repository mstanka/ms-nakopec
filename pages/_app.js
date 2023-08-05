import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import Script from "next/script";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import CustomImage from "../components/CustomImage";
import "../styles/globals.css";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  Image: ResponsiveImage,
  CustomLink: Link,
  CustomImage: CustomImage,
};

export default function MyApp({ Component, pageProps }) {
  const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={components}>
        <Head>
          <title>Na kopec</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
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
        <Layout>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}
