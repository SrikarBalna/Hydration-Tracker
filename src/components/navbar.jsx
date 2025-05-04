import React from "react";
import '../styles/navbar.css';

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <h1>Hydro Tracker</h1>
            <ul className="navbar-links">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;