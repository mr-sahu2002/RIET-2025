import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../style/Navbar.css";

function Navbar({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Committee",
    "Speakers",
    "Call for Papers",
    "Awards",
    "Registration",
    "Sponsors",
    "Tracks",
    "Contact Us",
  ];

  const handleNavigation = (item) => {
    // const page = item.toLowerCase().replace(/\s+/g, "");
    const page = item.toLowerCase();
    if (page === "about") {
      onNavigate("about");
    } else if (page === "committee") {
      onNavigate("committee");
    } else if (page === "speakers") {
      onNavigate("speakers");
    } else if (page === "call for papers") {
      onNavigate("call-for-papers");
    } else if (page === "tracks") {
      onNavigate("tracks");
    } else if (page === "registration") {
      onNavigate("registration");
    } else if (page === "contact us") {
      onNavigate("contact-us");
    } else {
      onNavigate("home");
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h2 className="logo-h">R I E T</h2>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={
                  item.toLowerCase() === "about"
                    ? "/about"
                    : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
