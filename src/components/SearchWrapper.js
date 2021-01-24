import { useState } from "react";
import Search from "./Search";
import ToggleTheme from "./ToggleTheme";

export default function SearchWrapper({ setTitle, setAnimes, setLoading }) {
  return (
    <div className="relative">
      <Search
        setTitle={setTitle}
        setAnimes={setAnimes}
        setLoading={setLoading}
      />
      <ToggleTheme />
    </div>
  );
}
