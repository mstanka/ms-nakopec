import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CustomLink from "../../components/CustomLink";
import {
  postFilePaths,
  POSTS_PATH,
  tagFilePaths,
  TAGS_PATH,
} from "../../utils/mdxUtils";

export default function Tags({ tags, posts }) {
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
        </nav>
      </header>
      <h1>Kategorie</h1>
      <ul className="flex flex-wrap justify-center border p-32 gap-10">
        {tags.map((tag) => (
          <li
            key={tag.filePath}
            className="flex flex-wrap justify-center items-stretch gap-4 border rounded-full px-6 py-2 bg-cyan-700 text-stone-200"
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
