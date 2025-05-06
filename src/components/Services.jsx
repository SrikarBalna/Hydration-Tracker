import React from "react";
import '../styles/services.css'; 

function Services() {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p className="data">We offer a range of services to help you stay hydrated and healthy.</p>
            <ul>
                <p>Personalized hydration plans</p>
                <p>Water intake tracking</p>
                <p>Hydration reminders</p>
                <p>Health tips and articles</p>
            </ul>
        </div>
    );
}

export default Services;