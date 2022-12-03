import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { useState } from "react";
import PostCard from "../../components/PostCard";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import NavigationMenu from "../../components/NavigationMenu";
import Pagination from "../../components/Pagination";

export default function Posts({ posts }) {
  const offset = 12;
  const totalPages = posts.length;
  const [fromItem, setFromItem] = useState(1);
  const [toItem, setToItem] = useState(offset);

  const handlePrev = () => {
    if (toItem === totalPages && totalPages % fromItem !== 0) {
      setFromItem(totalPages - (totalPages % fromItem) - offset);
      setToItem(totalPages - (totalPages % fromItem) - 1);
    } else {
      setFromItem(fromItem - offset);
      setToItem(toItem - offset);
    }
  };

  const handleNext = () => {
    setFromItem(fromItem + offset);
    if (toItem + offset > totalPages) {
      setToItem(totalPages);
    } else {
      setToItem(toItem + offset);
    }
  };

  return (
    <>
      <header className="sticky top-0 bg-inherit z-50">
        <NavigationMenu />
      </header>
      <h1 className="mb-12 mt-6">Nejnovější příspěvky</h1>
      <ul className="grid gap-2 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
          .filter((post) => {
            return (
              posts.indexOf(post) + 1 >= fromItem &&
              posts.indexOf(post) + 1 <= toItem
            );
          })
          .map((post) => (
            <PostCard post={post} key={post.filePath} />
          ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        offset={offset}
        toItem={toItem}
        fromItem={fromItem}
        handlePrevPage={handlePrev}
        handleNextPage={handleNext}
      />
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
