import changeTheme from "../utils/theme";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ToggleTheme() {
  const [theme, setTheme] = useLocalStorage("dark", "theme");

  const toggleTheme = () => {
    if (theme === "dark") {
      changeTheme("light");
      setTheme("light");
    } else {
      changeTheme("dark");
      setTheme("dark");
    }
  };

  return (
    <i
      className="fal fa-toggle-on fa-lg pointer"
      style={{ fontSize: "1.6rem" }}
      onClick={toggleTheme}
    />
  );
}
