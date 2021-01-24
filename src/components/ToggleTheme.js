import { useState } from "react";
import changeTheme from "../utils/theme";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      changeTheme("light");
    } else {
      setTheme("dark");
      changeTheme("dark");
    }
  };

  return (
    <i
      className="fal fa-toggle-on fa-lg absolute pointer"
      style={{ right: "0", top: "35px", fontSize: "1.6rem" }}
      onClick={toggleTheme}
    />
  );
}
