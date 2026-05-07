import { useState } from "react";
import axios from "axios";

function Form({ course, close }) {

  const [form, setForm] = useState({

    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    location: "",
    school: "",
    course: course,

  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    /* ===== CLEAR OLD MESSAGES ===== */

    setError("");
    setSuccess("");

    /* ===== VALIDATION ===== */

    if (
      !form.studentName ||
      !form.parentName ||
      !form.phone ||
      !form.email ||
      !form.grade ||
      !form.location ||
      !form.school
    ) {

      setError("Please fill all fields");
      return;
    }

    /* ===== PHONE VALIDATION ===== */

    if (!/^[0-9]{10}$/.test(form.phone)) {

      setError(
        "Enter valid 10-digit phone number"
      );

      return;
    }

    /* ===== EMAIL VALIDATION ===== */

    if (!form.email.includes("@")) {

      setError("Enter valid email");

      return;
    }

    try {

      await axios.post(

        "https://script.google.com/macros/s/AKfycbySAJQGu_xWS0Ft7wCjqB-ZiT-pL75p5g10Ihu4A8M-xy-KDBUZgwvn_COfrMRnKP4fCQ/exec",

        JSON.stringify(form),

        {
          headers: {
            "Content-Type":
              "text/plain;charset=utf-8",
          },
        }

      );

      /* ===== SUCCESS ===== */

      setSuccess(
        "Form submitted successfully!"
      );

      /* ===== CLEAR FORM ===== */

      setForm({

        course: course,
        studentName: "",
        parentName: "",
        phone: "",
        email: "",
        grade: "",
        location: "",
        school: "",

      });

      /* ===== AUTO CLOSE ===== */

      setTimeout(() => {

        close();

      }, 2000);

    }

    catch (err) {

      console.log(err);

      setError(
        "Something went wrong!"
      );

    }
  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        {/* ===== CLOSE BUTTON ===== */}

        <button
          className="close-btn"
          onClick={close}
        >
          ×
        </button>

        {/* ===== TITLE ===== */}

        <h2>
          Enroll for {course}
        </h2>

        {/* ===== ERROR MESSAGE ===== */}

        {
          error &&
          <p className="error">
            {error}
          </p>
        }

        {/* ===== SUCCESS MESSAGE ===== */}

        {
          success &&
          <p className="success">
            {success}
          </p>
        }

        {/* ===== FORM ===== */}

        <form onSubmit={handleSubmit}>

          {/* ===== COURSE FIELD ===== */}

          <input
            type="text"
            value={`Selected Course: ${form.course}`}
            readOnly
            className="course-input"
          />

          {/* ===== STUDENT NAME ===== */}

          <input
            type="text"
            placeholder="Student Name"
            value={form.studentName}
            onChange={(e) =>
              setForm({
                ...form,
                studentName:
                  e.target.value,
              })
            }
          />

          {/* ===== PARENT NAME ===== */}

          <input
            type="text"
            placeholder="Parent Name"
            value={form.parentName}
            onChange={(e) =>
              setForm({
                ...form,
                parentName:
                  e.target.value,
              })
            }
          />

          {/* ===== PHONE ===== */}

          <input
            type="text"
            placeholder="Contact Number"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone:
                  e.target.value,
              })
            }
          />

          {/* ===== EMAIL ===== */}

          <input
            type="email"
            placeholder="Mail ID"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target.value,
              })
            }
          />

          {/* ===== GRADE ===== */}

          <input
            type="text"
            placeholder="Grade"
            value={form.grade}
            onChange={(e) =>
              setForm({
                ...form,
                grade:
                  e.target.value,
              })
            }
          />

          {/* ===== LOCATION ===== */}

          <input
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({
                ...form,
                location:
                  e.target.value,
              })
            }
          />

          {/* ===== SCHOOL ===== */}

          <input
            type="text"
            placeholder="School"
            value={form.school}
            onChange={(e) =>
              setForm({
                ...form,
                school:
                  e.target.value,
              })
            }
          />

          {/* ===== SUBMIT BUTTON ===== */}

          <button
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
}

export default Form;