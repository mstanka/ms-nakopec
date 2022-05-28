import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import CustomLink from "../../components/CustomLink";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import("../../components/TestComponent")),
  Image,
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <header>
        <nav className="pb-6">
          <CustomLink href="/">
            <a className="link">⬅️ Domů</a>
          </CustomLink>
          <CustomLink href="/posts">
            <a className="link"> ⬅️ Nejnovější příspěvky</a>
          </CustomLink>
        </nav>
      </header>
      <div>
        <h1>{frontMatter.title.substring(11)}</h1>
        <h3 className="text-center mb-10">
          <date>{frontMatter.date}</date>
        </h3>
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
      <div className="flex justify-center mt-8">
        <CustomLink
          as={`/tags/${(frontMatter.tags).toLowerCase()}`}
          href={`/tags/[tag]`}
        >
          <a className="bg-cyan-700 text-stone-200 px-4 py-2 rounded-full">{frontMatter.tags}</a>
        </CustomLink>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
