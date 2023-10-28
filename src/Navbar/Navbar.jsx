import "./Navbar.css";
import { FaDog } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg   bg-body-tertiary">
        <div className="container justify-content-between">
          <Link to="/" className="navbar-brand d-flex align-center" href="#">
            Cartoon
            <FaDog className="mx-2" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link " to="/">
                  Rick and Morty
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/StarWar">
                  StarWar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
