import Link from "next/link";
import Home from "../components/Home";

export default function Index() {
  return (
    <main>
      <Home />
      <Link href="/posts">
        <a className="link">➡️ Nejnovější příspěvky </a>
      </Link>
      <Link href="/tags">
        <a className="link">➡️ Kategorie</a>
      </Link>
    </main>
  );
}
