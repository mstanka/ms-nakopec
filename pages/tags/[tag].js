import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import CustomLink from "../../components/CustomLink";
import PostCard from "../../components/PostCard";
import {
  postFilePaths,
  POSTS_PATH,
  tagFilePaths,
  TAGS_PATH,
} from "../../utils/mdxUtils";

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

export default function TagPage({ posts, frontMatter }) {
  return (
    <>
      <header>
        <nav className="pb-6">
          <CustomLink href="/">
            <a className="link">➡️ Domů</a>
          </CustomLink>
          <CustomLink href="/posts">
            <a className="link"> ➡️ Nejnovější příspěvky</a>
          </CustomLink>
          <CustomLink href="/tags">
            <a className="link"> ➡️ Kategorie</a>
          </CustomLink>
        </nav>
      </header>
      <main>
        <h1 className="mb-6">{frontMatter.title}</h1>
        <ul className="flex flex-wrap items-stretch justify-center gap-4">
          {posts
            .filter((post) => post.data.tags === frontMatter.title)
            .sort((a, b) => {
              if (a.data.date < b.data.date) {
                return 1;
              }
              if (a.data.date > b.data.date) {
                return -1;
              }
              return 0;
            })
            .map((post) => (
              <PostCard post={post} key={post.filePath} />
            ))}
        </ul>
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const tagFilePath = path.join(TAGS_PATH, `${params.tag}.mdx`);
  const source = fs.readFileSync(tagFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return {
    props: {
      posts,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = tagFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((tag) => ({ params: { tag } }));

  return {
    paths,
    fallback: false,
  };
};
