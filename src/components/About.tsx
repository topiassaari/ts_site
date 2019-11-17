import React from "react";
import "../styles/App.scss";
import Naama from "../assets/ts_naama.jpeg";

class About extends React.Component {
  render() {
    return (
      <article className="aboutContainer">
        <div className="aboutText">
          <img src={Naama} id="face" alt="naama" />
          <p>
            Located in Helsinki, Finland. Currently working on a design system
            at ABB as a web developer.
            <br />
            <br />
            Packed and shipped frequency converters at a warehouse for a few
            years, then got a BBA from Haaga-Helia University of Applied
            Sciences with a focus on user centered design. Spent half a year in
            an exchange programme at Hanze in Groningen, Netherlands learning
            how to make video-games. Wrote a
            <a href="https://www.theseus.fi/handle/10024/227894">
              {" "}
              thesis on design tokens.
            </a>
            <br />
            <br />
            Formerly a part of Studio Kraft - a professional photo-team for
            business events and private occasions such as graduations. Former
            clients include Nordic Business Forum and LOGY Ry.
            <br />
            <br />
            As a passion project learning to draw and make pretty pictures.
            <a href="https://www.instagram.com/topias/">@topias</a> on
            instagram.
          </p>
        </div>
      </article>
    );
  }
}

export default About;
