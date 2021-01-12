import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/:slug" component={AnimePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
