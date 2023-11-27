import "../App.css";
import naama from "../assets/naama_crop.png";

function Home() {
  return (
    <article>
      <div id="home">
        <img id="face" src={naama} alt="naama" />
        <h1>Topias Saari</h1>
        <p>
          Located in Tampere, Finland. I currently work as a frontend developer
          for Kela and during off-hours on various visual projects.
        </p>
      </div>
    </article>
  );
}

export default Home;
