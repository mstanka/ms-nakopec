import { useState } from "react";
import Image from "next/image";
import NavigationMenu from "../components/NavigationMenu";
import { CustomLink } from "../components/CustomLink";
import Search from "../components/Search";
import { getSortedPostsData } from "../lib/posts";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { tagFilePaths, TAGS_PATH } from "../utils/mdxUtils";

export default function Index({ posts, tags }) {
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
          o něco snažím a k čemu je to vlastně dobré.
        </p>
        <div className="text-center">
          <CustomLink as={`/about`} href={`/about`}>
            <button className="link text-sm">Číst dál</button>
          </CustomLink>
        </div>
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

      <h2 className="mb-8 mt-32 text-center">Nejnovější příspěvky</h2>
      <Search posts={posts.slice(sliceValues[0], sliceValues[1])} />

      <div className="text-center text-sm my-5">
        <button onClick={() => setSliceValues([0, sliceValues[1] + 8])}>
          Načíst další příspěvky
        </button>
      </div>

      <h2 className="mb-8 mt-32 text-center">Kategorie</h2>
      <ul className="flex flex-wrap justify-center p-5 gap-5">
        {tags.map((tag) => (
          <li
            key={tag.filePath}
            className="flex flex-wrap justify-center items-stretch gap-4 border rounded-lg px-6 py-2 bg-cyan-700 text-stone-200"
          >
            <CustomLink href={`/tags/${tag.data.slug}`}>
              <a className="link text-xl"> {tag.data.title}</a>
            </CustomLink>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function getStaticProps() {
  const posts = getSortedPostsData();

  const tags = tagFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(TAGS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts, tags } };
}
