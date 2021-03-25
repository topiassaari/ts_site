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
            degree in software and service engineering at Aalto University. Also
            working on a design system as a front-end web developer at ABB.
            <br />
            <br />
            <a href="https://www.instagram.com/topias/">@topias</a> on instagram
            and <a href="https://github.com/topiassaari">topiassaari</a> on
            github.
          </p>
        </div>
      </article>
    );
  }
}

export default About;
