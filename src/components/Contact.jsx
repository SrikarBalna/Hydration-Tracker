import React from "react";
import '../styles/contact.css'; 
function Contact() {
    return (
        <div className="contact-container">
            <h1 className="title">Contact Us</h1>
            <p className="text">If you have any questions or feedback, feel free to reach out!</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <input id="message" name="message" required></input>
                
                <label htmlFor="num">Ph No:</label>
                <input type="number" id="num" name="num" pattern="[0-9]{10}" min={0} max={10} required />
                <br></br>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
export default Contact;