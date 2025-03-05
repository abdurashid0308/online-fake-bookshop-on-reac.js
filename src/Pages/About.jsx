import React from "react";
import "../Styles/about.css";
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import locationImg from "../Styles/Images/location.png"

function About() {
    return (
        <div className="about-main">
            <div className="about-header">
                <h1>About Our Bookstore</h1>
                <p>Discover the world through pages</p>
            </div>
            <div className="about-content">
                <div className="about-description">
                    <h2>Our Story</h2>
                    <p>Founded in 2010, our bookstore has been a haven for book lovers for over a decade. We believe in the power of literature to inspire, educate, and transform lives.</p>
                    <p>Our carefully curated collection spans across genres, ensuring there's something for every reader. From classic literature to contemporary bestsellers, we've got you covered.</p>
                </div>
                <div className="about-image">
                    <img src={locationImg} alt="Our Bookstore" />
                </div>
            </div>
            <div className="about-info">
                <div className="info-card">
                    <MapPin size={24} />
                    <h3>Location</h3>
                    <p>123 Book Street, Reading City, RC 12345</p>
                </div>
                <div className="info-card">
                    <Clock size={24} />
                    <h3>Hours</h3>
                    <p>Mon-Fri: 9am - 8pm</p>
                    <p>Sat-Sun: 10am - 6pm</p>
                </div>
                <div className="info-card">
                    <Phone size={24} />
                    <h3>Contact</h3>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="info-card">
                    <Mail size={24} />
                    <h3>Email</h3>
                    <p>info@ourbookstore.com</p>
                </div>
            </div>
        </div>
    );
}

export default About;