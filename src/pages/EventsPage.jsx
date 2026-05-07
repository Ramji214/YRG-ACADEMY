import React from "react";
import "../styles/style.css";

import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";

function EventsPage() {

  const events = [

    {
      image: event1,
      title: "Student Achievement Ceremony",
      desc:
        "Encouraging students through recognition and awards for academic excellence.",
    },

    {
      image: event2,
      title: "Skill Development Workshop",
      desc:
        "Interactive learning activities designed to improve student confidence and creativity.",
    },

    {
      image: event3,
      title: "Academic Motivation Program",
      desc:
        "Special events conducted to inspire and motivate students towards future success.",
    },

  ];

  return (

    <div className="events-page">

      {/* ===== HERO ===== */}

      <div className="events-hero">

        <h1>
          Student Events & Achievements
        </h1>

        <p>
          Celebrating student success,
          talent, participation, and growth.
        </p>

      </div>

      {/* ===== EVENTS GRID ===== */}

      <section className="events-section">

        <div className="events-grid">

          {events.map((event, index) => (

            <div
              className="event-card"
              key={index}
            >

              <div className="event-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

              </div>

              <div className="event-content">

                <h3>{event.title}</h3>

                <p>{event.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default EventsPage;