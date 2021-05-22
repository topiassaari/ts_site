import React from "react";
import "../styles/App.scss";
import Logo from "../assets/ts_img.png";
import { Component } from "react";
import { withRouter } from "react-router-dom";

type props = {
  history: any;
};

class Header extends Component<props> {
  constructor(props: any) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.naviClick = this.naviClick.bind(this);
  }

  navigateTo(target: any) {
    this.props.history.push(target);
  }
  render() {
    return (
      <div className="headerContainer">
        <span className="headerLogo" style={{ cursor: "pointer" }}>
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
          <span className="naviItem" onClick={this.naviClick} data-id="gallery">
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
    );
  }
  public naviClick(e: any) {
    this.navigateTo(e.target.getAttribute("data-id"));
  }
}

export default withRouter(Header as any);
