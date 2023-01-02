import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/krugerlogo.png"

const NavBarComponent = () => {
//   const linkState = (isActive) => {
//     let color = "545e6f";
//     let textDecoration = "None";
//     if (isActive) {      
//       textDecoration = "Underline";
//     } else {
//       textDecoration = "none";
//     }
//     return { color, textDecoration };
//   };
  return (
    <div className="NavBar__container">
      <div className="NavBar__wrapper">
        <NavLink
          className="Navbar__link"
          style={({ isActive }) => ({
            color: isActive ? '#545e6f' : '#000',
            textDecoration: isActive?'Underline':'none'  
          })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="Navbar__link"
          style={({ isActive }) => ({
            color: isActive ? '#545e6f' : '#000',
            textDecoration: isActive?'Underline':'none'     
          })}
          to="/imc"
        >
          IMC Calculator
        </NavLink> 
        <NavLink
          className="Navbar__link"
          style={({ isActive }) => ({
            color: isActive ? '#545e6f' : '#000',
            textDecoration: isActive?'Underline':'none'     
          })}
          to="/age"
        >
          Age Calculator
        </NavLink>
        <div className="NavBar__title">
            <img className="NavBar__image" src={Logo} alt="logo" />
            <p className="NavBar__name">
                KrugerStar
            </p>
        </div>
        <NavLink
          className="Navbar__link"
          style={({ isActive }) => ({
            color: isActive ? '#545e6f' : '#000',
            textDecoration: isActive?'Underline':'none'     
          })}
          to="/clock"
        >
          My Clock
        </NavLink>
        <NavLink
          className="Navbar__link"
          style={({ isActive }) => ({
            color: isActive ? '#545e6f' : '#000',
            textDecoration: isActive?'Underline':'none'     
          })}
          to="/about"
        >
          About me
        </NavLink>
        <NavLink
          className="Navbar__link"
          style={({ isActive }) => ({
            color: isActive ? '#545e6f' : '#000',
            textDecoration: isActive?'Underline':'none'     
          })}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarComponent;
