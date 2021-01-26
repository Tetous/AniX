import React, { useState } from "react";
import Badge from "./Badge";
import StyledInput from "../styles/Input";
import { searchAnimes } from "../utils/api";
import data from "../data/top_animes.json";

const Search = ({ setAnimes, setTitle, load }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const reset = () => {
    setAnimes(data);
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
      load(
        searchAnimes(searchTerm).then((data) => {
          if (data.status === "ok") {
            setAnimes(data.animes);
            setTitle("Search Results");
          }
        })
      );
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
            className="fal fa-times fa-lg pointer text-light margin-r"
            onClick={reset}
          />
          <Badge text={searchTerm} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Search;
