import { useGlobalContext } from "../context";

export default function Search() {
  const { query, setQuery } = useGlobalContext();
  return (
    <input
      type="text"
      placeholder="Search for Products"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="rounded-md p-2 shadow-md"
    />
  );
}
