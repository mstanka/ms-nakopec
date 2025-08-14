import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Link from "next/link";
import {
  postFilePaths,
  POSTS_PATH,
  tagFilePaths,
  TAGS_PATH,
} from "../../utils/mdxUtils";
import NavigationMenu from "../../components/NavigationMenu";

export default function Tags({ tags, posts }) {
  return (
    <>
      <header className="sticky top-0 bg-inherit z-50">
        <NavigationMenu />
      </header>
      <h1 className="mt-6 mb-12">Kategorie</h1>
      <ul className="flex flex-wrap justify-center p-6 md:p-20 gap-5 md:gap-10">
        {tags.map((tag) => (
          <li
            key={tag.filePath}
            className="ms-tag flex flex-wrap justify-center items-stretch gap-4"
          >
            <Link href={`/tags/${tag.data.slug}`} className="link text-2xl">
              {tag.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export function getStaticProps() {
  const tags = tagFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(TAGS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
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

  return { props: { tags, posts } };
}
