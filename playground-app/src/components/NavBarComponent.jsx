import React from "react";
import { NavLink } from "react-router-dom";


const NavBarComponent = () => {
  return (
    <div className="NavBar__container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">INMC Calculator</NavLink>
      <NavLink to="/">Age Calculator</NavLink>
      <NavLink to="/">My Clock</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default NavBarComponent;
