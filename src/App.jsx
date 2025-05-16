import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage"; // Import the LandingPage component
import HomePage from "./components/HomePage";
import Profile from "./components/profile";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing page at root path */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;