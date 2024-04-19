import "../../App.css";
import vw from "../../assets/projects/vw.png";
import p from "../../assets/projects/p.png";

function Personal() {
  return (
    <article>
      <div id="personal">
        <div className="preface">
          <h2>Personal</h2>
          <p>
            These are some of the personal projects I&apos;ve been working on
            over the years. I tried calling this category &ldquo;Visual&rdquo;,
            &ldquo;Other&rdquo;, &ldquo;Misc&rdquo; and so on. As you will find
            out by reading further, I&apos;m not that great at naming these
            things. What differs these projects from other things on this site
            is that I made these purely for myself and they turned out pretty
            nice.
          </p>
        </div>
        <div className="items">
          <div>
            <img src="https://topias.kuvat.fi/kuvat/vj/875782BB-E854-444E-A7EE-328D8FAE133B.heic?img=smaller" />
            <h3>VJ-gigs</h3>
            <p>
              During the pandemic I started messing around with audioreactive
              visuals and since 2021 I&apos;ve been doing gigs as a VJ. This has
              been, and still is, a fully non-profit endeavour.{" "}
              <a href="https://topias.kuvat.fi/kuvat/vj/">Previous venues</a>{" "}
              include; a cellar, a garage and a barn.
            </p>
          </div>
          <div>
            <img src={vw} />
            <h3>VW-project</h3>
            <p>
              In early 2022 I got into learning about video synthesisers and
              feedback loops. As a result, here&apos;s a{" "}
              <a href="https://topias.kuvat.fi/kuvat/vw/">
                collection of videos
              </a>{" "}
              combining those. Its a work in progress. What you see and hear is
              a combination of video synthesis, found footage, video mixing.
              Honestly if you are interested in me as a potential employee, the
              chance of this project being targeted for you is fairly low. Well
              also if you are a friend...the chance of this being for you is
              still pretty low. This is mostly material I use for VJ-sets. If it
              does happen to be something you enjoy or want to work on, please
              contact me and we can figure something out together.
            </p>
          </div>
          <div>
            <img src={p} />
            <h3>P-project</h3>
            <p>
              Despite working on this project for almost six years, I never got
              around to actually naming it. In 2017 I began drawing on the
              photos I&apos;ve taken. This turned into around 300 files named
              &ldquo;P123&rdquo; etc. P stands for &ldquo;picture&rdquo;. Few of
              the images ended up being framed on the walls of my friends, a
              couple were even album covers. I made a book that&apos;s really
              fancy, but unfortunately there&apos;s only a handful of copies and
              I don&apos;t have the resources to make more. You can see some of
              the images in this{" "}
              <a href="https://topias.kuvat.fi/kuvat/p/">gallery</a>.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Personal;
