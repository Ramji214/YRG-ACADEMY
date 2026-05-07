import React, { useState } from "react";
import "../styles/style.css";
import logo from "../assets/logo.jpeg";

import {
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      {/* ===== LOGO ===== */}

      <div className="logo-section">

        <img
          src={logo}
          alt="YRG Academy"
          className="logo-img"
        />

        <div>

          <h2 className="logo-text">
            YRG Academy
          </h2>

          <p className="tagline">
            Grow With Knowledge
          </p>

        </div>

      </div>

      {/* ===== MOBILE MENU ICON ===== */}

      <div
        className="menu-icon"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {
          menuOpen
            ? <FaTimes />
            : <FaBars />
        }

      </div>

      {/* ===== NAVIGATION LINKS ===== */}

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

        <li>
          <Link to="/courses">
            Courses
          </Link>
        </li>

        <li>
          <Link to="/events">
            Events
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

        {/* ===== MOBILE BUTTON ===== */}

        <a
          href="https://wa.me/919884092011?text=Hi%20YRG%20Academy"
          className="mobile-btn"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          Enroll Now
        </a>

      </ul>

      {/* ===== DESKTOP BUTTON ===== */}

      <a
        href="https://wa.me/919884092011?text=Hi%20YRG%20Academy"
        className="btn desktop-btn"
        target="_blank"
        rel="noreferrer"
      >
        Enroll Now
      </a>

    </nav>
  );
}

export default Navbar;