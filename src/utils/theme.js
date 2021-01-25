import light from "../themes/light";
import dark from "../themes/dark";
import shared from "../themes/shared";

export default function changeTheme(type = "dark") {
  const root = document.querySelector(":root");
  const theme =
    type === "dark" ? { ...dark, ...shared } : { ...light, ...shared };

  const keys = Object.keys(theme);
  keys.forEach((key) => root.style.setProperty(key, theme[key]));
}
