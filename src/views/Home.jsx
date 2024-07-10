import "../App.css";
import naama from "../assets/naama_crop.png";

function Home() {
  return (
    <article>
      <div id="home">
        <img id="face" src={naama} alt="naama" />
        <h1>Topias Saari</h1>
        <p>
          Located in Helsinki. I do UI/UX design and frontend dev by day,
          various visual work by night.
        </p>
      </div>
    </article>
  );
}

export default Home;
