import React from "react";
import logo from "../assets/logo.jpeg";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (

    <footer className="footer">

      <div className="footer-container">

        {/* ===== LEFT ===== */}

        <div className="footer-about">

          <div className="footer-logo">

            <img
              src={logo}
              alt="YRG Academy"
            />

            <div>

              <h2>YRG Academy</h2>

              <p>Grow With Knowledge</p>

            </div>

          </div>

          <p className="footer-desc">
            Empowering students through
            academic excellence, competitive
            coaching, and skill development
            programs for future success.
          </p>

          {/* ===== SOCIAL ICONS ===== */}

          <div className="footer-socials">

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            {/* ===== WHATSAPP ===== */}

           <a
            href="https://wa.me/919884092011?text=Hi%20YRG%20Academy"
            target="_blank"
            rel="noreferrer"
            >
            <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* ===== QUICK LINKS ===== */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/about">About</a>

          <a href="/courses">Courses</a>

          <a href="/events">Events</a>

          <a href="/contact">Contact</a>

        </div>

        {/* ===== PROGRAMS ===== */}

        <div className="footer-links">

          <h3>Programs</h3>

          <a href="#">NEET/JEE</a>

          <a href="#">Tuition (6–12)</a>

          <a href="#">Yoga</a>

          <a href="#">Bharatanatyam</a>

          <a href="#">Abacus</a>

        </div>

        {/* ===== CONTACT ===== */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <div className="footer-contact-item">

            <FaPhoneAlt />

            <span>
              +91 98840 92011
            </span>

          </div>

          <div className="footer-contact-item">

            <FaEnvelope />

            <span>
              yrgacademy@gmail.com
            </span>

          </div>

          <div className="footer-contact-item">

            <FaMapMarkerAlt />

            <span>
              K.K. Nagar, Chennai
            </span>

          </div>

        </div>

      </div>

      {/* ===== FOOTER BOTTOM ===== */}

      <div className="footer-bottom">

        <p>
          © 2026 YRG Academy.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;