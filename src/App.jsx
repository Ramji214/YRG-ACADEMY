import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";

import { FaWhatsapp } from "react-icons/fa";

function App() {

  return (

    <BrowserRouter>

      {/* ===== NAVBAR ===== */}

      <Navbar />

      {/* ===== ROUTES ===== */}

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT PAGE */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* COURSES PAGE */}
        <Route
          path="/courses"
          element={<CoursesPage />}
        />

        {/* EVENTS PAGE */}
        <Route
          path="/events"
          element={<EventsPage />}
        />

        {/* CONTACT PAGE */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

      {/* ===== FOOTER ===== */}

      <Footer />

      {/* ===== WHATSAPP BUTTON ===== */}

      <a
        href="https://wa.me/919884092011?text=Hi%20YRG%20Academy"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >

        <FaWhatsapp size={22} />

      </a>

    </BrowserRouter>
  );
}

export default App;