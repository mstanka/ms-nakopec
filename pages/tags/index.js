import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { CustomLink } from "../../components/CustomLink";
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
      <ul className="flex flex-wrap justify-center border p-20 gap-10">
        {tags.map((tag) => (
          <li
            key={tag.filePath}
            className="flex flex-wrap justify-center items-stretch gap-4 border rounded-lg px-6 py-2 bg-cyan-700 text-stone-200"
          >
            <CustomLink href={`/tags/${tag.data.slug}`}>
              <a className="link text-2xl"> {tag.data.title}</a>
            </CustomLink>
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
