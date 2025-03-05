import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/home.css";

import likedImg from "../Styles/Images/liked.png";
import cartedImg from "../Styles/Images/carted.png";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/new")
            .then(response => response.json())
            .then(data => setBooks(data.books.slice(0,10)))
    }, []);

    return (
        <div className="home-main">
            <div className="welcome">
                <h1 className="animate-text">"A reader lives a thousand lives before he dies. The man who never reads lives only one."</h1>
                <h3 className="animate-author">- George R.R. Martin</h3>
            </div>
            <div className="featuredbooks">
                <div>
                    <h1>Featured Books</h1>
                    <div className="featuredbooks-list">
                        {books.map((book, index) => (
                            <div key={index} className="featuredbooks-item">
                                <div className="book-actions">
                                    <img src={likedImg} alt="Like" className="action-icon" />
                                    <img src={cartedImg} alt="Add to cart" className="action-icon" />
                                </div>
                                <img src={book.image} alt={book.title} className="book-cover" />
                                <h3>{book.title}</h3>
                                <Link to={"#"}>Read More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;