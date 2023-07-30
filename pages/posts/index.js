import { useState } from "react";
import NavigationMenu from "../../components/NavigationMenu";
import Search from "../../components/Search";
import { CustomLink } from "../../components/CustomLink";
import { getSortedPostsData } from "../../lib/posts";

export default function Posts({ posts }) {
  const [sliceValues, setSliceValues] = useState([0, 6]);

  return (
    <>
      <header className="sticky top-0 bg-inherit z-50">
        <NavigationMenu />
      </header>

      <h1 className="mb-8 mt-6">Nejnovější příspěvky</h1>
      <Search posts={posts.slice(sliceValues[0], sliceValues[1])} />

      <div className="flex justify-center my-5">
        <button onClick={() => setSliceValues([0, sliceValues[1] + 6])}>
          Načíst další příspěvky
        </button>
      </div>

      {/* <div>
        <h2 className="text-center text-4xl py-5">Proč na kopec</h2>

        <p>
          Na kopec je blog, který vypráví můj příběh, proč jdu &#34;na
          kopec&#34;. Je to příběh o tom, jak nacházím svoji cestu přes
          jednotlivé &#34;kopečky života&#34; a jak hledám důvod, proč se pořád
          o něco snažím a k čemu je to vlastně dobré....{" "}
          <CustomLink as={"/"} href={"/"}>
            <button>
              <small>Číst dál </small>
            </button>
          </CustomLink>
        </p>
      </div> */}
    </>
  );
}

export function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}
