import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CustomLink from "../../components/CustomLink";
import { tagFilePaths, TAGS_PATH } from "../../utils/mdxUtils";

export default function Tags({ tags }) {
  return (
    <>
      <CustomLink href="/" className="block mb-6">
        <a className="link">⬅️ Domů</a>
      </CustomLink>
      <ul>
        {tags.map((tag) => (
          <li key={tag.tagPath}>
            <CustomLink
              as={`/tags/${tag.filePath.replace(/\.mdx?$/, "")}`}
              href={`/tags/[tag]`}
            >
              <a>{tag.data.title}</a>
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

  return { props: { tags } };
}
