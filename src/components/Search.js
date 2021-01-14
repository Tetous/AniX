import React, { useState } from "react";
import { searchAnimes } from "../utils/api";
import StyledInput from "../styles/Input";

const Search = ({ setAnimes, setTitle }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const { status, animes } = await searchAnimes(searchTerm);

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
