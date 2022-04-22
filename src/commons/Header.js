import logo from "../images/final-logo.jpg";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <nav className="navbar">
      <img src={logo} alt="resim" width="100" />
      <ul className="nav-links">
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About us
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
