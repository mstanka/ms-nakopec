import Home from "../components/Home";
import NavigationMenu from "../components/NavigationMenu";

export default function Index() {
  return (
    <main>
      <header className="sticky top-0 bg-stone-200 z-50">
        <NavigationMenu />
      </header>
      <Home />
    </main>
  );
}
