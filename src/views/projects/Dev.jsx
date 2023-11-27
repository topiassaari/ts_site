import { Link } from "react-router-dom";
import "../../App.css";
import herneviha from "../../assets/projects/herneviha.jpg";

function Dev() {
  return (
    <article>
      <div id="dev">
        <div className="preface">
          <h2>Web development</h2>
          <p>
            As stated on <Link to="/projects/work">Work</Link>, basically all
            code I&apos;ve done for money is under an NDA. Here&apos;s some of
            the projects I&apos;ve done for myself and friends. If you are
            interested in seeing half-baked code go over to my{" "}
            <a href="https://github.com/topiassaari">github</a>.
          </p>
        </div>
        <div className="items">
          <div>
            <img src="https://github.com/topiassaari/ts_gallery/blob/main/planning/design/screenshot_gallery.png?raw=true" />
            <h3>Gallery</h3>
            <p>
              I made a <a href="http://gallery.topiassaari.com">gallery</a> for
              the visual-art project I did from 2017 to 2021. If you want to
              read more about it, see{" "}
              <Link to="/projects/personal">Personal</Link>. Its made with the{" "}
              <a href="https://www.mongodb.com/mern-stack">MERN</a>-stack.
              Please note that the whole thing is currently running in Heroku,
              so there might be some boot-up time.
            </p>
          </div>
          <div>
            <img src={herneviha} />
            <h3>Herneviha</h3>
            <p>
              <a href="https://herneviha.github.io/">Herneviha</a>, which
              roughly translates to &ldquo;hate of peas&rdquo;, is a service
              with a very limited target audience of one. My friend is allergic
              to peas, and he wanted to have a quick way of seeing which foods
              he can eat at the cafeterias of University of Helsinki. I like
              this project because we made it as a joke together with my
              friends, and apparently it is of actual use.
            </p>
          </div>
          <div>
            <img src="https://github.com/topiassaari/bk_reitti_bot/raw/master/assets/example_2.png" />
            <h3>BK reitti-bot</h3>
            <p>
              Its a{" "}
              <a href="https://github.com/topiassaari/bk_reitti_bot">
                telegram-bot
              </a>{" "}
              I made for our climbing-group. Every time there&apos;s new routes
              available at{" "}
              <a href="https://www.boulderkeskus.com/">Boulderkeskus</a>, the
              bot sends a message. Huge thanks to{" "}
              <a href="https://github.com/jannunen">jannunen</a> for letting
              giving me permission to scrape this stuff.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Dev;
