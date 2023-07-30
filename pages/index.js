import Home from "../components/Home";
import NavigationMenu from "../components/NavigationMenu";
import { CustomLink } from "../components/CustomLink";

export default function Index() {
  return (
    <main>
      <header className="sticky top-0 bg-stone-200 dark:bg-gray-800 z-50">
        <NavigationMenu />
      </header>
      <Home />
      <CustomLink as={`/posts`} href={`/posts`}>
        <button>Nejnovější příspěvky</button>
      </CustomLink>
      <CustomLink as={`/tags`} href={`/tags`}>
        <button>Kategorie</button>
      </CustomLink>
    </main>
  );
}
