import { useEffect } from "react";
import Router from "./Router";
import setTheme from "./utils/theme";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}
