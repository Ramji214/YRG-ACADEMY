import Form from "./Form.jsx";
import { useState } from "react";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { title: "Tuition (1–12)", desc: "All subjects with strong basics" },
    { title: "NEET/JEE", desc: "Coaching from 6–12" },
    { title: "Bharatanatyam", desc: "Classical dance training" },
    { title: "Abacus", desc: "From LKG brain development" },
    { title: "Silambam", desc: "Traditional martial art" },
    { title: "Yoga", desc: "Mental & physical wellness" },
     { title: "Numbers & nucleus", desc: "Improve number skills and logical thinking" }
  ];

  return (
    <section>
      <h2>Our Courses</h2>

      <div className="grid">
        {courses.map((c, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelectedCourse(c.title)}
          >
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <Form
          course={selectedCourse}
          close={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
}

export default Courses;