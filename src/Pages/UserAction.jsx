import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/useraction.css";

function UserAction() {
  const [recentlyViewedBooks, setRecentlyViewedBooks] = useState([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then(response => response.json())
      .then(data => {
        setRecentlyViewedBooks(data.books.slice(0, 5));
      })
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="user-action">
      <h1>User Dashboard</h1>
      
      <div className="action-buttons">
        <Link to="profile" className="profile-button">
          <img src="/placeholder.svg?height=50&width=50" alt="Profile" />
          <span>Profile</span>
        </Link>
        
        <div className="secondary-buttons">
          <Link to="liked" className="action-button">
            <img src="/placeholder.svg?height=30&width=30" alt="Liked" />
            <span>Liked Books</span>
          </Link>
          <Link to="carted" className="action-button">
            <img src="/placeholder.svg?height=30&width=30" alt="Carted" />
            <span>Carted Books</span>
          </Link>
        </div>
      </div>

      <div className="recently-viewed">
        <h2>Recently Viewed Books</h2>
        <div className="book-list">
          {recentlyViewedBooks.map((book) => (
            <div key={book.isbn13} className="book-item">
              <img src={book.image || "/placeholder.svg"} alt={book.title} />
              <p>{book.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default UserAction;