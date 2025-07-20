import React from "react";
import '../styles/navbar.css';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <Link to="/" className="logo">Hydro Tracker</Link>
            <div className="navbar-links">
                <Link to = "/homepage">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/services">Services</Link>
                <Link to = "/contact">Contact</Link>
            </div>
        </nav>
        </>
    );
}

export default Navbar;