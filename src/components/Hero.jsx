import React from "react";
import logo from "../assets/logo.jpeg";

function Hero() {

  const goToCourses = () => {

    window.location.href = "/courses";

  };

  const goToContact = () => {

    window.location.href = "/contact";

  };

  return (

    <section className="hero">

      <div className="hero-content">

        <img
          src={logo}
          alt="YRG Academy"
          className="hero-logo"
        />

        <h1>
          Complete Learning From
          <span> LKG To NEET/JEE</span>
        </h1>

        <p>
          Academic Excellence • Competitive Coaching • Skill Development
        </p>

        <div className="hero-buttons">

          {/* ===== COURSES BUTTON ===== */}

          <button
            className="primary-btn"
            onClick={goToCourses}
          >

            Explore Courses

          </button>

          {/* ===== CONTACT BUTTON ===== */}

          <button
            className="secondary-btn"
            onClick={goToContact}
          >

            Contact Us

          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;