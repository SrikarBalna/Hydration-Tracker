import React from 'react';
import '../styles/About.css';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="about-container">
      <div className="content-wrapper">
        <section className="section">
          <h2>About HydroTracker</h2>
          <p>
            HydroTracker was initiated as a second semester capstone project under the B.Tech in Computer Science and Artificial Intelligence curriculum.
            The goal was to integrate user-centric design and hydration functionality into a seamless React-based web application that helps users track their water intake effectively.
          </p>
        </section>

        <section className="section two-column">
          <div>
            <h2>Our Mission</h2>
            <p>
              To build an engaging and intelligent hydration tracking application that encourages users to stay consistent with their health and wellness goals.
            </p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>
              To create a responsive, accessible, and tech-driven platform that evolves with the user's lifestyle, backed by continuous learning and feedback.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Meet the Developer</h2>
          <div className="developer-card">
            <div>
              <h3>Balanagu Sesha Srikar</h3>
              <p>
                A passionate B.Tech CSE & AI student at Newton School of Technology, I love building clean, scalable web applications and exploring the intersection of technology, analytics, and well-being.
                HydroTracker is my second semester project, reflecting my growth in React, JavaScript, and UI/UX principles.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
</>
  );
};

export default AboutPage;
