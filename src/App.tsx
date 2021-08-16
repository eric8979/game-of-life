import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Main from "./page/main";
import About from "./page/about";
// style
import "./style/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
