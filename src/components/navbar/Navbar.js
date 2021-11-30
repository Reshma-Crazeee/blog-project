import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
  };

  const navLink = [
    { label: "Home", to: "/home" },
    { label: "Bollywood", to: "/Bollywood" },
    { label: "Technology", to: "/Technology" },
    { label: "Hollywood", to: "/Hollywood" },
    { label: "Fitness", to: "/Fitness" },
    { label: "Food", to: "/Food" },
    { label: "Login", to: "/login" },
  ];
  return (
    <div>
      <nav className="navbar">
        <div className="nav_container">
          <NavLink exact to="/" className="nav-logo">
            <span className="vertical">The</span>Siren
          </NavLink>
          <ul className={change ? "nav-menu active" : "nav-menu"}>
            <li className="nav_item">
              {navLink.map((link) => {
                return (
                  <NavLink
                    to={link.to}
                    exact
                    activeClassName="active"
                    onClick={handleChange}
                    className="nav-link"
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </li>
          </ul>
          <div className="menu-bar" onClick={handleChange}>
            <i className={change ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
      <hr className="nav-hr" />
    </div>
  );
}
