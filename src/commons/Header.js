import logo from "../images/logo-lg.jpg";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <nav className="navbar">
      <img src={logo} alt="resim" width="150" height="75" className="logo" />
      <ul className="nav-links">
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            History Of Cinema
          </Link>
          <Link to="/news" className="nav-link">
            News
          </Link>
        </nav>
      </ul>
    </nav>
  );
}

export default Header;
