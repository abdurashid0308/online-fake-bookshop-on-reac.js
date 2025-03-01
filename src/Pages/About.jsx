import React from "react";
import "../Styles/about.css";

function About() {
    return (
        <div className="about-main">
            <div className="about-content">
                <h1>About Our Online Store</h1>
                <p>Welcome to our online store! We offer a wide range of quality products with fast delivery.</p>
                <p>Visit our physical location shown below:</p>
            </div>
            <div className="about-location">
                <img src="../Styles/Images/location.jpg" alt="Store Location" />
            </div>
        </div>
    );
}

export default About;
