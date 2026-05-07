import React, { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {

  const [form, setForm] = useState({

    name: "",
    phone: "",
    course: "",

  });

  /* ===== SUBMIT FUNCTION ===== */

  const handleSubmit = (e) => {

    e.preventDefault();

    /* ===== VALIDATION ===== */

    if (
      !form.name ||
      !form.phone ||
      !form.course
    ) {

      alert("Please fill all fields");

      return;

    }

    /* ===== WHATSAPP MESSAGE ===== */

    const message =

`Hi YRG Academy,

Student / Parent Name: ${form.name}

Phone Number: ${form.phone}

Interested Course: ${form.course}`;

    /* ===== WHATSAPP URL ===== */

    const whatsappURL =

`https://wa.me/919884092011?text=${encodeURIComponent(message)}`;

    /* ===== OPEN WHATSAPP ===== */

    window.open(
      whatsappURL,
      "_blank"
    );

    /* ===== CLEAR FORM ===== */

    setForm({

      name: "",
      phone: "",
      course: "",

    });

  };

  return (

    <section className="contact-modern">

      {/* ===== LEFT SIDE ===== */}

      <div className="contact-left">

        <span className="contact-small">
          CONTACT YRG ACADEMY
        </span>

        <h1>
          Let's Build Your
          <span> Future Together</span>
        </h1>

        <p>
          Join YRG Academy for quality education,
          NEET/JEE coaching, and skill development
          programs designed for future success.
        </p>

        <div className="contact-details">

          {/* ===== PHONE ===== */}

          <div className="detail-box">

            <FaPhoneAlt className="detail-icon" />

            <div>

              <h4>Call Us</h4>

              <p>
                +91 98840 92011
              </p>

            </div>

          </div>

          {/* ===== EMAIL ===== */}

          <div className="detail-box">

            <FaEnvelope className="detail-icon" />

            <div>

              <h4>Email</h4>

              <p>
                yrgacademy@gmail.com
              </p>

            </div>

          </div>

          {/* ===== ADDRESS ===== */}

          <div className="detail-box">

            <FaMapMarkerAlt className="detail-icon" />

            <div>

              <h4>Address</h4>

              <p>
                UDHAYAM OVIAYAM,
                K.K. Nagar,
                Chennai – 600078
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ===== RIGHT SIDE ===== */}

      <div className="contact-right-box">

        <h2>
          Send Enquiry
        </h2>

        <form onSubmit={handleSubmit}>

          {/* ===== NAME ===== */}

          <input
            type="text"
            placeholder="Student / Parent Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          {/* ===== PHONE ===== */}

          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          {/* ===== COURSE DROPDOWN ===== */}

          <select
            value={form.course}
            onChange={(e) =>
              setForm({
                ...form,
                course: e.target.value,
              })
            }
          >

            <option value="">
              Select Course
            </option>

            <option value="Tuition (1-12)">
              Tuition (1-12)
            </option>

            <option value="NEET/JEE">
              NEET/JEE
            </option>

            <option value="Abacus">
              Abacus
            </option>

            <option value="Bharatanatyam">
              Bharatanatyam
            </option>

            <option value="Yoga">
              Yoga
            </option>

            <option value="Silambam">
              Silambam
            </option>

          </select>

          {/* ===== SUBMIT BUTTON ===== */}

          <button type="submit">

            Submit Enquiry

          </button>

        </form>

        {/* ===== WHATSAPP BUTTON ===== */}

        <a
          href="https://wa.me/919884092011?text=Hi%20YRG%20Academy"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-contact"
        >

          <FaWhatsapp />

          Chat on WhatsApp

        </a>

      </div>

    </section>
  );
}

export default Contact;