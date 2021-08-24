import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Main from "./page/main";
import About from "./page/about";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
