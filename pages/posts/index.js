import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CustomLink from "../../components/CustomLink";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Image from "next/image";

export default function Posts({ posts }) {
  return (
    <>
      <CustomLink href="/" className="block mb-6">
        <a className="link">⬅️ Domů</a>
      </CustomLink>
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
            <li
              key={post.filePath}
              className="flex flex-col justify-between text-center border border-stone-300 px-4 py-6 rounded-sm shadow-md"
            >
              <div>
                <CustomLink
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/posts/[slug]`}
                >
                  <Image
                    src={post.data.coverImage}
                    alt={post.data.title}
                    width={230}
                    height={140}
                    priority
                    className="next-image"
                  />
                </CustomLink>
              </div>
              <div className="py-6 text-center">
                <h2 className="w-52 m-auto">{post.data.title.substring(11)}</h2>
                <h3>{post.data.date}</h3>
              </div>
              <div className="bg-cyan-700 text-stone-200 px-4 py-1 rounded-full -mt-1">
                {" "}
                {post.data.tags}
              </div>
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
