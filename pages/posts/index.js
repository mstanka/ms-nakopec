import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CustomLink from "../../components/CustomLink";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Image from 'next/image'

export default function Posts({ posts }) {
  return (
    <>
      <CustomLink href="/" className="block mb-6">
        <a className="link">⬅️ Domů</a>
      </CustomLink>
      <h1>Nejnovější příspěvky</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath} className="py-2">
            <CustomLink
              as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              <a>
                <div className="flex flex-col sm:flex-row items-center justify-between border border-stone-300 px-4 py-6 rounded-sm shadow-md">
                    <Image
                      src={post.data.coverImage}
                      alt={post.data.title}
                      width={230}
                      height={140}
                      priority
                      className="next-image"
                    />
                    <div className="flex-1 p-6 text-center">
                      <h2>{post.data.title.substring(11)}</h2>
                      <h3>{post.data.title.substring(0,11)}</h3>
                  </div>
                  <div className="bg-cyan-700 text-stone-200 px-2 py-1 rounded-full ml-4"> {post.data.tags}</div>
                </div>
              </a>
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
