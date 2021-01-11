import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import Navbar from "./components/Navbar";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/:slug" component={AnimePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
