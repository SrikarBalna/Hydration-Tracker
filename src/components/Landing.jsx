import React from "react";
import { Link } from "react-router-dom";
import '../styles/landingPage.css'; // Import your CSS for styling

function LandingPage() {
    return (
        <div className="landing-page">
            <h1>Welcome to Hydro Tracker</h1>
            <p>Your ultimate solution for tracking water consumption and staying hydrated.</p>
            <Link to="/home" className="get-started-button">Get Started</Link>
        </div>
    );
}

export default LandingPage;