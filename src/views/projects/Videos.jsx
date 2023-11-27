import "../../App.css";

function Videos() {
  return (
    <article>
      <div id="videos">
        <div className="preface">
          <h2>Videos</h2>
          <p>
            Among the event photography, I&apos;ve been involved in a handful of
            video projects. Usually behind the camera. Most of them have been
            for fun.
          </p>
        </div>
        <div className="items">
          <div>
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/8XJiY7FP0Jg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Popboy - Stormzy, Choreography by Nelli Karmila</h3>
            <p>
              Choreography by{" "}
              <a href="https://www.instagram.com/nelli.karmila">
                Nelli Karmila
              </a>{" "}
              that I shot and edited. We&apos;ve done these for over seven years
              now, and personally I think every time they get better.
            </p>
          </div>

          <div>
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/JepI20GtaL8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3>Entäs Peltonen? - Nurkkapöytä</h3>
              <p>
                Music video for{" "}
                <a href="https://www.instagram.com/entaspeltonen/">
                  Entäs Peltonen?
                </a>{" "}
                that I filmed, edited and directed. I&apos;ve been working with
                them since 2015, really nice people and good music. Go see them
                live if you can. In hindsight the best part of this video is
                that I convinced my dear friend to eat a banana with the peel
                on.
              </p>
            </div>
          </div>
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube-nocookie.com/embed/nh9P5Kfq0ng"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>Valo Climb</h3>
            <p>
              Ad for an interactive climbing wall{" "}
              <a href="https://valomotion.com/valoclimb/">Valo Climb</a>. I
              filmed and edited, the product is really cool.
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube-nocookie.com/embed/rVZzQGRTT7c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>Poets of the Fall - Moonlight Kissed</h3>
            <p>
              Music video for Poets of the Fall where for some weird reason I
              ended up being the grip assist / runner. I mostly got everyone
              coffee, but since the video has over 2m views, so its pretty funny
              to add here.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Videos;
