import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CustomLink from "../../components/CustomLink";
import PostCard from "../../components/PostCard";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

export default function Posts({ posts }) {
  return (
    <>
      <header>
        <nav className="pb-6">
          <CustomLink href="/">
            <a className="link">➡️ Domů</a>
          </CustomLink>
          <CustomLink href="/tags">
            <a className="link"> ➡️ Kategorie</a>
          </CustomLink>
        </nav>
      </header>
      <h1 className="mb-12">Nejnovější příspěvky</h1>
      <ul className="flex flex-wrap items-stretch justify-center gap-4">
        {posts
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
