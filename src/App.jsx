import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile"
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";
import Help from "./components/Help";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./styles/App.css";

function App() {
  const [isProfileFilled, setIsProfileFilled] = useState(false);

  const handleProfileSubmit = () => {
    setIsProfileFilled(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile onSubmit={handleProfileSubmit} />} />
        <Route path="/" element={<><HomePage /></> } />
        <Route path="/about" element={<><About /></>} />
        <Route path="/services" element={<><Services /></>} />
        <Route path="/help" element={<><Help /></>} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/blog" element={<><Blog /></>} />
      </Routes>
    </Router>
  );
}

export default App;