import Home from "../../components/Home";
import NavigationMenu from "../../components/NavigationMenu";

export default function About() {
  return (
    <main>
      <header className="sticky top-0 bg-stone-200 dark:bg-gray-800 z-50">
        <NavigationMenu />
      </header>

      <Home />
    </main>
  );
}
