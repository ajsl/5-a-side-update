import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import List from "./Components/List";
import Skill from "./Components/Skill";
import FourOhFour from "./Components/FourOhFour";
import Footer from "./Components/Footer";

function App() {

  return (
    <React.Fragment>
      <section className="wrapper">
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>

            <Route exact path="/skill" component={Skill} />

            <Route path="*" component={FourOhFour} />
          </Switch>
        </Router>

        <Footer />
      </section>
    </React.Fragment>
  );
}

export default App;
