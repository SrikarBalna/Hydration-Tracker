import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
            <h1>Welcome to Hydro Tracker</h1>
            <p>Your ultimate solution for tracking water consumption and staying hydrated and the value of water in our day to day activities.</p>
            <a onClick={()=> {
                navigate('/profile');
            }} className="start-button">Get Started</a>
        </div>
    );
}

export default LandingPage;