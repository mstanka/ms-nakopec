import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import NavigationMenu from "../../components/NavigationMenu";
import CustomImage from "../../components/CustomImage";
import { StarIcon } from "@heroicons/react/24/solid";
import LayoutGrid3Col from "../../components/LayoutGrid3Col";
import LayoutGrid2Col from "../../components/LayoutGrid2Col";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  CustomImage,
  LayoutGrid2Col,
  LayoutGrid3Col,
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
      <header className="sticky top-0 bg-inherit z-50">
        <NavigationMenu />
      </header>
      <div className="relative">
        {frontMatter.favorite && (
          <StarIcon className="h-6 w-6 text-amber-400 absolute top-2 left-2" />
        )}
        <h1 className="my-6">{frontMatter.title.substring(11)}</h1>
        <h3 className="text-center mb-10">
          <div>{frontMatter.date}</div>
        </h3>
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
      <div className="flex justify-center mt-8">
        <Link as={`/posts`} href={`/posts`} passHref>
          <span className="bg-cyan-700 text-stone-200 px-6 py-2 rounded-lg mr-2">
            Nejnovější příspěvky
          </span>
        </Link>
        <Link
          as={`/tags/${toBasicLatin(frontMatter.tags)}`}
          href={`/tags/[tag]`}
          passHref
        >
          <span className="bg-cyan-700 text-stone-200 px-6 py-2 rounded-lg">
            {frontMatter.tags}
          </span>
        </Link>
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

function toBasicLatin(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "");
}
