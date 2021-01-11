import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HallOfFame from "./pages/HallOfFame";
import Anime from "./pages/Anime";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/:slug" component={Anime} />
        <Route path="/" component={HallOfFame} />
      </Switch>
    </Router>
  );
}
