import { useCallback, useRef, useState } from "react";
import PostCard from "./PostCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ posts }) {
  const searchRef = useRef(null);

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(event.target.value);

    if (query.length) {
      console.log(searchEndpoint(query));

      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setResults(res.results);
          console.log(results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div ref={searchRef}>
      <div className="flex items-center justify-center mb-10">
        <MagnifyingGlassIcon className="h-6 w-6 text-cyan-700 mr-2" />
        <input
          onChange={onChange}
          onFocus={onFocus}
          placeholder="Hledej název příspěvku..."
          type="text"
          value={query}
          className="text-cyan-700 bg-stone-100 p-1 max-w-xs w-full rounded"
        />
      </div>

      {query.length === 0 && (
        <ul className="grid gap-2 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard post={post} key={post.filePath} />
          ))}
        </ul>
      )}

      {active && results.length > 0 && (
        <ul className="grid gap-2 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {results.map((post) => (
            <PostCard post={post} key={post.filePath} />
          ))}
        </ul>
      )}

      {query.length > 0 && results.length === 0 && (
        <p className="text-center text-stone-500">Příspěvek s tímto názvem nebyl nalezen :( </p>
      )}
    </div>
  );
}
