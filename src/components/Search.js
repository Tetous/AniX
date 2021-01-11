import { useState } from "react";
import { fetchWrapper } from "../utils";

export default function Search({ data, setAnimes, setTitle }) {
  const [searchTerm, setSearchTerm] = useState("");

  const reset = () => {
    setSearchTerm("");
    setTitle("Top Animes");
    setAnimes(data);
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      let endpoint = process.env.REACT_APP_SEARCH_ENDPOINT;
      endpoint += `?url=https://4anime.to/?s=${searchTerm}`;
      endpoint += `&spider_name=search_animes`;

      const { status, items: animes } = await fetchWrapper(endpoint);

      if (status === "ok") {
        setTitle("Search Results");
        setAnimes(animes);
      }
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
