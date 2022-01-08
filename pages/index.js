import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import path from "path";
import Layout from "../components/Layout";
import CustomLink from "../components/CustomLink";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import Home from "./Home";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  Image: ResponsiveImage,
  CustomLink: Link,
};

export default function Index({ posts }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Head>
          <title>Na kopec</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Home />
        <ul>
          {posts.map((post) => (
            <li key={post.filePath}>
              <CustomLink
                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/posts/[slug]`}
              >
                <a>{post.data.title}</a>
              </CustomLink>
            </li>
          ))}
        </ul>
      </Layout>
    </MDXProvider>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
