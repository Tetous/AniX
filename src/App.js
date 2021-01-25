import { useEffect } from "react";
import Router from "./Router";
import setTheme from "./utils/theme";
import useLocalStorage from "./hooks/useLocalStorage";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  const [theme] = useLocalStorage("dark", "theme");

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}
