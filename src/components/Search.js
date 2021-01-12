import { useState } from "react";
import { searchAnimes } from "../utils/api";

export default function Search({ data, setAnimes, setTitle, setLoading }) {
  const [searchTerm, setSearchTerm] = useState("");

  const reset = () => {
    setSearchTerm("");
    setTitle("Top Animes");
    setAnimes(data);
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setLoading(true);

      const { status, animes } = await searchAnimes(searchTerm);

      if (status === "ok") {
        setTitle("Search Results");
        setAnimes(animes);
      }

      setLoading(false);
    }
  };

  return (
    <div className="mb-10 relative">
      <i className="fal fa-search absolute top-3 left-4 text-sm text-black-700 dark:text-gray-700" />

      <input
        className="search"
        type="text"
        placeholder="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
      />

      {searchTerm && (
        <div className="pt-4 space-x-4 flex items-center">
          <i
            className="fal fa-times text-lg font-bold text-black-700 dark:text-gray-700 cursor-pointer"
            onClick={reset}
          />
          <span className="bg-blue text-white-neutral p-1 px-4 text-xs rounded-full">
            {searchTerm}
          </span>
        </div>
      )}
    </div>
  );
}
