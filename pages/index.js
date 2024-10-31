import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../components/NavigationMenu";
import Search from "../components/Search";
import { getFavoritePostsData, getSortedPostsData } from "../lib/posts";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { tagFilePaths, TAGS_PATH } from "../utils/mdxUtils";

export default function Index({ posts, favoritePosts, tags }) {
  const [sliceValues, setSliceValues] = useState([0, 8]);
  return (
    <main>
      <header className="sticky top-0 bg-stone-200 dark:bg-gray-800 z-50">
        <NavigationMenu />
      </header>
      <div className="mt-6">
        <h1>Na kopec</h1>
        <p>
          Na kopec je blog, který vypráví můj příběh, proč jdu &#34;na
          kopec&#34;. Je to příběh o tom, jak nacházím svoji cestu přes
          jednotlivé &#34;kopečky života&#34; a jak hledám důvod, proč se pořád
          o něco snažím a k čemu je to vlastně dobré...
          <Link as={`/about`} href={`/about`} passHref>
            <span className="text-sm text-stone-500 border border-stone-300 px-4 py-1 rounded-lg ms-2">
              číst dál
            </span>
          </Link>
        </p>
        <br />
        <Image
          src="/images/general/rohace.jpg"
          alt="Na kopec"
          width={1280}
          height={390}
          priority
          className="next-image"
        />
      </div>

      <h2 className="mb-6 mt-28 text-center">Oblíbené příspěvky</h2>
      <p className="mb-3">
        Výběr několika mých oblíbených příspěvků. Většinou se jedná o velmi
        zajímavá místa, která se dobře fotí. Ale někdy se může jednat o místa,
        která nejsou ničím výjimečná, ale váže se k nim silný zážitek. A někdy
        oboje zároveň :){" "}
      </p>
      <Search posts={favoritePosts} />

      <h2 className="mb-8 mt-32 text-center">Kategorie</h2>
      <ul className="flex flex-wrap justify-center p-5 gap-5">
        {tags.map((tag) => (
          <li
            key={tag.filePath}
            className="flex flex-wrap justify-center items-stretch gap-4 border rounded-lg px-6 py-2 bg-cyan-700 text-stone-200"
          >
            <Link href={`/tags/${tag.data.slug}`} className="link text-xl">
              {tag.data.title}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-8 mt-32 text-center">Nejnovější příspěvky</h2>
      <Search
        posts={posts.slice(sliceValues[0], sliceValues[1])}
        isSearchable={true}
      />

      <div className="text-center text-sm my-5">
        <button onClick={() => setSliceValues([0, sliceValues[1] + 8])}>
          Načíst další příspěvky
        </button>
      </div>
    </main>
  );
}

export function getStaticProps() {
  const posts = getSortedPostsData();
  const favoritePosts = getFavoritePostsData();

  const tags = tagFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(TAGS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts, favoritePosts, tags } };
}
