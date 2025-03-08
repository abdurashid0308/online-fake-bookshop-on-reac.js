import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  "../Styles/carted.css";
import likedImg from "../Styles/Images/liked.png";
import cartedImg from "../Styles/Images/carted.png";

function Carted() {
    const [cartedBooks, setCartedBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/new")
            .then(response => response.json())
            .then(data => {
                setCartedBooks(data.books.slice(18, 20));
                setLoading(false);
            })
            .catch(error => console.error("Error:", error));
    }, []);

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="carted-main">
            <h1>Carted Books</h1>
            <div className="carted-books-grid">
                {cartedBooks.map((book, index) => (
                    <div key={index} className="book-card">
                        <div className="book-actions">
                            <img src={likedImg} alt="Like" className="action-icon" />
                            <button className="remove-button">×</button>
                        </div>
                        <img src={book.image} alt={book.title} className="book-image" />
                        <h3>{book.title}</h3>
                        <div className="book-price">{book.price}</div>
                        <Link to={`/book/#`} className="read-more">
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
            
            <div className="cart-summary">
                <div className="cart-total">
                    <span>Total:</span>
                    <span>$199.99</span>
                </div>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Carted;
