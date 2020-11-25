import React from "react";
import "../styles/App.scss";
import Naama from "../assets/naama_crop.png";

class About extends React.Component {
  render() {
    return (
      <article className="aboutContainer">
        <div className="aboutText">
          <img src={Naama} id="face" alt="naama" />
          <p>
            Located in Helsinki, Finland. Currently studying for a masters
            degree in Aalto University with a major in software and service
            engineering. Also working on a design system at ABB as a web
            developer.
            <br />
            <br />
            <a href="https://www.instagram.com/topias/">@topias</a> on
            instagram.
          </p>
        </div>
      </article>
    );
  }
}

export default About;
