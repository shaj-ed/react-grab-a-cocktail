import { NavLink } from "react-router-dom";
import { GrHome, GrContact } from "react-icons/gr";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li className="nav__list">
          <NavLink to="/" className="nav__link">
            <span className="nav__link--icon">
              <GrHome />
            </span>
            <span className="nav__link--text">home</span>
          </NavLink>
        </li>
        <li className="nav__list">
          <NavLink to="about" className="nav__link">
            <span className="nav__link--icon">
              <GrContact />
            </span>
            <span className="nav__link--text">about</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
