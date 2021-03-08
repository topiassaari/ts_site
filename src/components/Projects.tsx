import React from "react";
import "../styles/App.scss";

class Projects extends React.Component {
  render() {
    return (
      <article className="links">
        <ul>
          <div>
            <li>
              <b>Current</b>
            </li>
            <li>
              <a href="https://www.idean.com/work/abb-humanizing-technology-with-design">
                ABB CommonUX Design System (article by Idean)
              </a>
            </li>
            <li>
              <a href="https://www.theseus.fi/handle/10024/227894">
                Creating a Design Token Library for ABB’s CommonUX Design System
              </a>
            </li>
          </div>
          <div>
            <li>
              <b>Web</b>
            </li>
            <li>
              <a href="https://herneviha.github.io/">Herneviha</a>
            </li>
            <li>
              <a href="https://topiassaari.github.io/co2-calc/">
                CO2 Calculator POC
              </a>
            </li>
            {/* <li>
              <a href="http://ding-me.com/">Ding</a>
            </li> */}
            <li>
              <a href="https://topiassaari.github.io/is_it_seven/">
                Is it seven?
              </a>
            </li>
            <li>
              <a href="https://topiassaari.github.io/dots/">Dots</a>
            </li>
          </div>
          <div>
            <li>
              <b>Games</b>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=8hBD8ywxK8Q">
                Protocol: Bird Cage
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=BqmUf1abX8E&feature=emb_title">
                The Left Hand
              </a>
            </li>
          </div>
          <div>
            <li>
              <b>Photography</b>
            </li>
            <li>
              <span>
                <a href="https://www.nbforum.com/past-events/nordic-business-forum-2016/">
                  Nordic Business Forum (2014-2016)
                </a>
                - with Studio Kraft
              </span>
            </li>
            <li>
              <a href="https://uskallayrittaa.fi/suomen-parhaat-nuoret-yrittajat-palkittiin-uskalla-yrittaa-finaalissa-etela-pohjanmaalle-kaksoisvoitto/">
                NY Uskalla yrittää - finaali (2015)
              </a>
            </li>
            <li>
              <a href="https://www.fullsteam.fi/fi/artistit/entas-peltonen">
                Fullsteam Agency: Entäs Peltonen?
              </a>
            </li>
          </div>
          <div>
            <li>
              <b>Videos</b>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=nh9P5Kfq0ng">
                Games 2017: ValoClimb® – Interactive game platform for climbing
                walls | Valo Motion
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=8phbX6HgFEY">
                Pikseli Arcade - Koe mitä haluat
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=bTDVoPMe3zI">
                Yeah right - Vince Staples, Freestyle | Nelli Karmila
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=JepI20GtaL8">
                Entäs Peltonen? - Nurkkapöytä (Virallinen musiikkivideo)
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=ZzYLEzxPkQA">
                BAK - 3+4=6
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=fJXt_spPHsY">
                Michael Shié - Kelloo / Niimonii
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=eitaG4bi-RU">
                Lauantai - Olkkarin sohvalta etelään (musiikkivideo)
              </a>
            </li>
            <li>
              <span>
                <a href="https://www.youtube.com/watch?v=rVZzQGRTT7c">
                  Poets of the Fall - Moonlight Kissed (Official 4K Video w/
                  Lyrics)
                </a>
                - As a grip assistant / runner
              </span>
            </li>
          </div>
        </ul>
      </article>
    );
  }
}

export default Projects;
