import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/liked.css";
import likedImg from "../Styles/Images/liked.png";
import cartedImg from "../Styles/Images/carted.png";

function Liked() {
    const [likedBooks, setLikedBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/new")
            .then(response => response.json())
            .then(data => {
                setLikedBooks(data.books.slice(15, 18));
                setLoading(false);
            })
            .catch(error => console.error("Error:", error));
    }, []);

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="liked-main">
            <h1>Liked Books</h1>
            <div className="liked-books-grid">
                {likedBooks.map((book, index) => (
                    <div key={index} className="book-card">
                        <div className="book-actions">
                            <img src={likedImg} alt="Like" className="action-icon" />
                            <img src={cartedImg} alt="Cart" className="action-icon" />
                        </div>
                        <img src={book.image} alt={book.title} className="book-image" />
                        <h3>{book.title}</h3>
                        <Link to={`/book/#`} className="read-more">
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Liked;