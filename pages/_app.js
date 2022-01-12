import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "../styles/globals.css";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  Image: ResponsiveImage,
  CustomLink: Link,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Head>
        <title>Na kopec</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </MDXProvider>
  );
}
