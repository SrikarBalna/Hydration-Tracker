import React, { useState } from "react";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landing";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";

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
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/profile" element={<Profile onSubmit={handleProfileSubmit} />} />
        <Route path="/homepage" element={<><Navbar /><HomePage /></> } />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/services" element={<><Navbar /><Services /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/blog" element={<><Navbar /><Blog /></>} />
        {/* <Route path="/homepage" element={isProfileFilled ? <><Navbar /><HomePage /></> } /> */}
      </Routes>
    </Router>
  );
}

export default App;