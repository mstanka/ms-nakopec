import { CustomLink } from "./CustomLink";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <>
      <li
        key={post.filePath}
        className="flex flex-col justify-between items-center text-center border border-stone-300 px-4 py-6 rounded-sm shadow-md  transition ease-in-out duration-500 hover:scale-105 hover:bg-stone-100"
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
          <CustomLink
            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <h2 className="w-52 m-auto">{post.data.title.substring(11)}</h2>
            <small className="text-stone-500">{post.data.date}</small>
          </CustomLink>
        </div>
        <div className="border border-stone-300 text-stone-500 px-6 py-1 rounded-full">
          {" "}
          {post.data.tags}
        </div>
      </li>
    </>
  );
}
