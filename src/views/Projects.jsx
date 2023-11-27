import { Link } from "react-router-dom";
import "../App.css";

function Projects() {
  return (
    <article>
      <div id="projects">
        <h2>Projects</h2>
        <p>
          Here you can find a short selection of different academic, personal
          and work projects. If you are here for recruiting purposes, I suggest
          starting from <Link to="/projects/work">Work</Link> and then making
          your way down the list. If you are a friend who just wants to know
          what I&apos;m up to on my free time...start from the bottom and go up.
        </p>
        <ul>
          <li>
            <Link to="/projects/work">Work</Link>
          </li>
          <li>
            <Link to="/projects/dev">Web development</Link>
          </li>
          <li>
            <Link to="/projects/videos">Videos</Link>
          </li>
          <li>
            <Link to="/projects/personal">Personal</Link>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Projects;
