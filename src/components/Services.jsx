import React from "react";
import '../styles/services.css'; 
import Navbar from "../components/Navbar";

function Services() {
    return (
        <>
        <Navbar />
        <div className="services-container">
            <div className="services-wrapper">
                <h1 className="services-title">Our Services</h1>
                <p className="services-subtitle">We offer a range of services to help you stay hydrated and healthy.</p>
                <div className="services-grid">
                    <div className="service-item">Personalized hydration plans</div>
                    <div className="service-item">Water intake tracking</div>
                    <div className="service-item">Hydration reminders</div>
                    <div className="service-item">Health tips and articles</div>
                    <div className="service-item">Expert consultation</div>
                    <div className="service-item">Community support</div>
                    <div className="service-item">Customizable goals</div>
                    <div className="service-item">Progress tracking</div>
                    <div className="service-item">Data analysis and insights</div>
                    <div className="service-item">24/7 customer support</div>
                    <div className="service-item">Regular updates and improvements</div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Services;
