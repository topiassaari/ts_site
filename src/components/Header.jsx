import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/ts_img.png";

function Header() {
  return (
    <nav id="header">
      <Link to="/">
        <img id="logo" src={logo} alt="logo" />
      </Link>
      <div className="navigation">
        <Link className="naviItem" to="/gallery">
          Gallery
        </Link>
        <Link className="naviItem" to="/projects">
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default Header;
