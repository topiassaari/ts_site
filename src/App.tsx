import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Projects from "./components/Projects";
import Logo from "./assets/ts_img.png";
import "./styles/App.scss";

type props = {
  history: any;
};

class App extends Component<props> {
  constructor(props: any) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.naviClick = this.naviClick.bind(this);
  }
  public state = {
    activeItem: "home"
  };

  navigateTo(target: any) {
    this.props.history.push(target);
  }

  public render() {
    return (
      <div>
        <div className="headerContainer">
          <span className="headerLogo">
            <img
              src={Logo}
              alt="logo"
              id="logo"
              onClick={this.naviClick}
              data-id="about"
            />
          </span>
          <div className="navigation">
            <span className="naviItem" onClick={this.naviClick} data-id="about">
              About
            </span>
            <span
              className="naviItem"
              onClick={this.naviClick}
              data-id="gallery"
            >
              Gallery
            </span>
            <span
              className="naviItem"
              onClick={this.naviClick}
              data-id="projects"
            >
              Projects
            </span>
          </div>
        </div>
        <Redirect exact from="/" to="/about" />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    );
  }

  private naviClick(e: any) {
    console.log(e.target);
    this.navigateTo(e.target.getAttribute("data-id"));
  }
}

export default withRouter(App as any);
