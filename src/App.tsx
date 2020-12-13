import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/Header";
import "./styles/App.scss";

class App extends React.Component {
  public state = {
    activeItem: "home",
  };

  public render() {
    return (
      <>
        <Header />
        <div className="contentContainer">
          <Switch>
            <Redirect path="/" exact to="/about" />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App as any);
