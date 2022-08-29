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
      <CustomLink href="/" className="block mb-6">
        <a className="link">⬅️ Domů</a>
      </CustomLink>
      <ul>
        {tags.map((tag) => (
          <li key={tag.filePath}>
            <h2>{tag.data.title}</h2>
            {posts
              .filter((post) => post.data.tags === tag.data.title)
              .map((post) => (
                <li key={post.filePath}>
                  <CustomLink
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/posts/[slug]`}
                  >
                    <a>{post.data.title}</a>
                  </CustomLink>
                </li>
              ))}
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
