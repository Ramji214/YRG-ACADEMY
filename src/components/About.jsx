import React from "react";
import "../styles/style.css";
import studentImg from "../assets/student.jpg";

function About() {
  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section">

        <div className="about-container">

          <div className="about-image">
            <img src={studentImg} alt="YRG Students" />
          </div>

          <div className="about-text">

            <h2>About YRG Academy</h2>

            <p>
              YRG Academy is a Chennai-based educational institute
              committed to empowering students from Classes 6–12
              with strong academic foundations and competitive
              exam excellence.
            </p>

            <p>
              We provide expert coaching for NEET, JEE, board exams,
              and skill development programs through modern smart
              classrooms, experienced faculty, CCTV-secured campus,
              and student-focused learning methods.
            </p>

            <div className="about-highlights">

              <div className="highlight-card">
                <h3>6–12 Coaching</h3>
                <p>Strong academic foundation for school students.</p>
              </div>

              <div className="highlight-card">
                <h3>NEET / JEE</h3>
                <p>Competitive coaching with expert guidance.</p>
              </div>

              <div className="highlight-card">
                <h3>Smart Learning</h3>
                <p>Technology-enabled classrooms and training.</p>
              </div>

              <div className="highlight-card">
                <h3>Safe Campus</h3>
                <p>CCTV and biometric-enabled learning environment.</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section">

        <h2>Why Choose YRG Academy</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Experienced Faculty</h3>
            <p>
              Learn from skilled teachers with years of coaching experience.
            </p>
          </div>

          <div className="why-card">
            <h3>Smart Classrooms</h3>
            <p>
              Interactive digital learning environment for better understanding.
            </p>
          </div>

          <div className="why-card">
            <h3>NEET & JEE Coaching</h3>
            <p>
              Specialized preparation strategies for competitive success.
            </p>
          </div>

          <div className="why-card">
            <h3>Safe Environment</h3>
            <p>
              CCTV monitoring and biometric systems ensure student safety.
            </p>
          </div>

          <div className="why-card">
            <h3>Progress Tracking</h3>
            <p>
              Continuous assessments and performance monitoring.
            </p>
          </div>

          <div className="why-card">
            <h3>Skill Development</h3>
            <p>
              Bharatanatyam, Yoga, Abacus, and Silambam training.
            </p>
          </div>

        </div>

      </section>

      {/* ===== VISION SECTION ===== */}
      <section className="vision-section">

        <div className="vision-box">

          <h2>Our Vision</h2>

          <p>
            To become one of Chennai’s most trusted educational institutions
            by creating future-ready learners through academic excellence,
            disciplined learning, and technology-enabled education.
          </p>

        </div>

      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section className="founder-section">

        <div className="founder-container">

          <div className="founder-content">

            <h2>Founder & Academic Leadership</h2>

            <h3>Mrs. Vijayalakshmi</h3>

            <span>Founder & Proprietor — YRG Academy</span>

            <p>
              With over 9 years of educational experience,
              Mrs. Vijayalakshmi leads YRG Academy with
              a vision to build confident, disciplined,
              and academically strong students.
            </p>

            <div className="founder-points">

              <div className="founder-card">
                Academic Excellence
              </div>

              <div className="founder-card">
                Student-Centric Learning
              </div>

              <div className="founder-card">
                Future-Ready Education
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default About;