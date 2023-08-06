import { useState } from "react";
import NavigationMenu from "../../components/NavigationMenu";
import Search from "../../components/Search";
import { getSortedPostsData } from "../../lib/posts";

export default function Posts({ posts }) {
  const [sliceValues, setSliceValues] = useState([0, 8]);

  return (
    <>
      <header className="sticky top-0 bg-inherit z-50">
        <NavigationMenu />
      </header>

      <h1 className="mb-8 mt-6">Nejnovější příspěvky</h1>
      <Search
        posts={posts.slice(sliceValues[0], sliceValues[1])}
        isSearchable={true}
      />

      <div className="flex justify-center my-5">
        <button onClick={() => setSliceValues([0, sliceValues[1] + 8])}>
          Načíst další příspěvky
        </button>
      </div>
    </>
  );
}

export function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}
