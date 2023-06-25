import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            onClick={handleLinkClick}
            className={activeLink === "Home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/listen"
            onClick={handleLinkClick}
            className={activeLink === "Listen" ? "active" : ""}
          >
            Listen
          </Link>
        </li>
        <li>
          <Link
            to="/shows"
            onClick={handleLinkClick}
            className={activeLink === "Shows" ? "active" : ""}
          >
            Shows
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            onClick={handleLinkClick}
            className={activeLink === "Shop" ? "active" : ""}
          >
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
