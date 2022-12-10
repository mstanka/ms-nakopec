import NavigationMenu from "../../components/NavigationMenu";
import Search from "../../components/Search";
import { getSortedPostsData } from "../../lib/posts";

export default function Posts({ posts }) {
  return (
    <>
      <header className="sticky top-0 bg-inherit z-50">    
        <NavigationMenu />
      </header>
      <h1 className="mb-12 mt-6">Nejnovější příspěvky</h1>
      <Search posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}
