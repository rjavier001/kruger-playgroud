import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/krugerlogo.png";

const NavBarComponent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/imc"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                IMC Calculator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/age"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Age Calculator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/clock"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                My Clock
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarComponent;
