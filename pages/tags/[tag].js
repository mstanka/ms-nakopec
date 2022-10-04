import fs from "fs";
import matter from "gray-matter";
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import { CustomLink } from "../../components/CustomLink";
import PostCard from "../../components/PostCard";
import {
  postFilePaths,
  POSTS_PATH,
  tagFilePaths,
  TAGS_PATH,
} from "../../utils/mdxUtils";
import NavigationMenu from "../../components/NavigationMenu";
import Pagination from "../../components/Pagination";

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
  const postsWithTag = posts.filter(
    (post) => post.data.tags === frontMatter.title
  );

  const offset = 12;
  const totalPages = postsWithTag.length;
  const [fromItem, setFromItem] = useState(1);
  const [toItem, setToItem] = useState(offset);

  const handlePrev = () => {
    if (toItem === totalPages && totalPages % fromItem !== 0) {
      setFromItem(totalPages - (totalPages % fromItem) - offset);
      setToItem(totalPages - (totalPages % fromItem) - 1);
    } else {
      setFromItem(fromItem - offset);
      setToItem(toItem - offset);
    }
  };

  const handleNext = () => {
    setFromItem(fromItem + offset);
    if (toItem + offset > totalPages) {
      setToItem(totalPages);
    } else {
      setToItem(toItem + offset);
    }
  };

  return (
    <>
      <header>
        <NavigationMenu />
      </header>
      <main>
        <h1 className="mb-12 mt-6">{frontMatter.title}</h1>
        <ul className="flex flex-wrap items-stretch justify-center gap-4">
          {postsWithTag
            .sort((a, b) => {
              if (a.data.date < b.data.date) {
                return 1;
              }
              if (a.data.date > b.data.date) {
                return -1;
              }
              return 0;
            })
            .filter((post) => {
              return (
                postsWithTag.indexOf(post) + 1 >= fromItem &&
                postsWithTag.indexOf(post) + 1 <= toItem
              );
            })
            .map((post) => (
              <PostCard post={post} key={post.filePath} />
            ))}
        </ul>
        {totalPages > offset && (
          <Pagination
            totalPages={totalPages}
            offset={offset}
            toItem={toItem}
            fromItem={fromItem}
            handlePrevPage={handlePrev}
            handleNextPage={handleNext}
          />
        )}
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
