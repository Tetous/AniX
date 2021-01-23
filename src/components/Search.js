import React, { useState } from "react";
import { searchAnimes } from "../utils/api";
import StyledInput from "../styles/Input";

const Search = ({ setAnimes, setTitle, setLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setLoading(true);

      const { status, animes } = await searchAnimes(searchTerm);
      setLoading(false);

      if (status === "ok") {
        setTitle("Search Results");
        setAnimes(animes);
      }
    }
  };

  return (
    <StyledInput
      type="text"
      placeholder="search"
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={handleSearch}
    />
  );
};

export default Search;
