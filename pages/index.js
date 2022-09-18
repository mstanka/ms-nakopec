import Home from "../components/Home";
import NavigationMenu from "../components/NavigationMenu";

export default function Index() {
  return (
    <main>
      <div className="mt-6">
        <NavigationMenu />
      </div>
      <Home />
    </main>
  );
}
