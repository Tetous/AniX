import Search from "./Search";
import ToggleTheme from "./ToggleTheme";

export default function SearchWrapper({ setTitle, setAnimes, load }) {
  return (
    <div className="relative">
      <Search setTitle={setTitle} setAnimes={setAnimes} load={load} />
      <ToggleTheme />
    </div>
  );
}
