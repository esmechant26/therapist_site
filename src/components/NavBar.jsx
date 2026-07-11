import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import nobanLogo from "../assets/nobannowhite.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Servicios en Español", path: "/servicios" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={nobanLogo} alt="Noban" className="brand-logo" />
        <div className="brand-text">
          <strong>Raíz</strong>
          <span>Psychotherapy</span>
        </div>
      </div>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)}>
        {menuOpen ? "Close" : "Menu"}
      </button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
