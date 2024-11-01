import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import CustomImage from "../components/CustomImage";
import "../styles/globals.css";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  Image: ResponsiveImage,
  CustomImage: CustomImage,
};

export default function MyApp({ Component, pageProps }) {
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
        <Layout>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}
