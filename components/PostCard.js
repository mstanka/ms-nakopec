import { CustomLink } from "./CustomLink";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export default function PostCard({ post }) {
  return (
    <>
      <li
        key={post.filePath}
        className="flex flex-col sm:flex-row md:flex-col justify-between items-center text-center bg-stone-200 border border-stone-300 px-4 py-6 rounded-sm shadow-md transition ease-in-out duration-500 hover:scale-95 hover:bg-stone-100 relative z-0"
      >
        <div className="relative">
          <CustomLink
            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <Image
              src={post.data.coverImage}
              alt={post.data.title}
              width={415}
              height={230}
              priority
              className="next-image"
            />
            {post.data.favorite && (
              <StarIcon className="h-6 w-6 text-amber-400 absolute top-2 left-2" />
            )}
          </CustomLink>
        </div>
        <div className="py-6 px-2 text-center">
          <CustomLink
            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <h3 className="w-52 m-auto">{post.data.title.substring(11)}</h3>

            <small className="text-stone-500">{post.data.date}</small>
          </CustomLink>
          <div className="border border-stone-300 text-stone-500 mt-1 rounded-lg">
            {" "}
            {post.data.tags}
          </div>
        </div>
      </li>
    </>
  );
}
