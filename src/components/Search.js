import React, { useState } from "react";
import Badge from "./Badge";
import StyledInput from "../styles/Input";
import { searchAnimes } from "../utils/api";
import data from "../data/top_animes.json";

const Search = ({ setAnimes, setTitle, setLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const reset = () => {
    setAnimes(data);
    setLoading(false);
    setTitle("Top Animes");
    setSearchTerm("");
  };

  const handleInput = (e) => {
    const searchTerm = e.target.value.trim();
    setSearchTerm(searchTerm);

    if (!searchTerm) {
      reset();
    }
  };

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
    <React.Fragment>
      <StyledInput
        type="text"
        placeholder="search"
        onChange={handleInput}
        onKeyPress={handleSearch}
      />
      {searchTerm && (
        <div className="flex-center space-x">
          <i
            className="fal fa-times fa-lg pointer text-light"
            onClick={reset}
          />
          <Badge text={searchTerm} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Search;
