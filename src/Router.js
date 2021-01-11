import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HallOfFame from "./pages/HallOfFame";
import Anime from "./pages/Anime";
import Navbar from "./components/Navbar";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/:slug" component={Anime} />
        <Route path="/" component={HallOfFame} />
      </Switch>
    </Router>
  );
}
