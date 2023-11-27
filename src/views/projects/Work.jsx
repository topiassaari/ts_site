import "../../App.css";
import thesis from "../../assets/projects/thesis.png";

function Work() {
  return (
    <article>
      <div id="work">
        <div className="preface">
          <h2>Work</h2>
          <p>
            Currently working at Kela with the title &ldquo;IT specialist&rdquo;
            which means that I deal with frontend development and UI design.
            Finished my MSc in 2022. I&apos;ve worked as a frontend JavaScript
            developer since 2018 and before that as a part-time event
            photographer for a couple years. Unfortunately most of the actual
            code and photos are behind NDAs. Instead, this is a small sample of
            projects I&apos;ve been involved in. If you want to see the full CV
            or discuss more, you can contact me on{" "}
            <a href="https://www.linkedin.com/in/topiassaari">LinkedIn</a> even
            though I don&apos;t check it that often.
          </p>
        </div>
        <div className="items">
          <div>
            <img src={thesis} />
            <h3>
              Usability evaluation and complexity in the public procurement of
              IT systems
            </h3>
            <p>
              I did my
              <a href=" http://urn.fi/URN:NBN:fi:aalto-202301291689">
                masters thesis
              </a>
              at Aalto University on this. The thesis focuses mostly on
              investigating how in theory complexity and usability are/should be
              covered in the context of public procurement of large and
              complicated IT systems.
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube-nocookie.com/embed/DOovGTAumlc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>ABB&apos;s CommonUX Design System</h3>
            <p>
              After working at their warehouse packaging water pumps I got a job
              at ABB as an web-dev intern and later full-time. For my bachelors{" "}
              <a href="https://www.theseus.fi/handle/10024/227894">thesis</a> I
              designed and implemented a design token library for ABB&apos;s
              internal design system. If you want to read more about the project
              itself I recommend reading{" "}
              <a href="https://www.frog.co/work/abb-humanizing-technology-with-design">
                this article
              </a>{" "}
              by a consultancy firm that got the official okey-dokey to tell
              more about the whole thing.
            </p>
          </div>

          <div>
            <img src="https://topias.kuvat.fi/kuvat/website%20gallery/nbf16-thu-press-001-by-TopiasSaari-1929.jpg?img=smaller" />
            <h3>Studio Kraft</h3>
            <p>
              From 2014 to 2018 as a part-time job I worked as an event
              photographer. Our clients included the likes of Nordic Business
              Forum, Nuoret Yrittäjät and LOGY ry among others. While not
              running around events, I spent my time at our studio helping with
              IT and taking passport photos. Infinite gratitude for{" "}
              <a href="https://www.paulaojansuu.com/">Paula Ojansuu</a> for
              everything.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Work;
