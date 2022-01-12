import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CustomLink from "../../components/CustomLink";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

export default function Posts({ posts }) {
  return (
    <>
      <CustomLink href="/">
        <a className="link">👈 Domů</a>
      </CustomLink>
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
    </>
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
