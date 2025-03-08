import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/useraction.css";
import profileImg from "../Styles/Images/profile.png";
import likedImg from "../Styles/Images/liked.png";
import cartedImg from "../Styles/Images/carted.png";

function UserAction() {
  const [recentlyViewedBooks, setRecentlyViewedBooks] = useState([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then(response => response.json())
      .then(data => {
        setRecentlyViewedBooks(data.books.slice(10, 15));
      })
  }, []);

return (
  <div className="user-action">
    <h1>User Dashboard</h1>     
      <div className="action-buttons">
        <Link to="profile" className="profile-button">
          <img src={profileImg} alt="Profile" />
          <span>Profile</span>
        </Link>
        
        <div className="secondary-buttons">
          <Link to="liked" className="action-button">
            <img src={likedImg} alt="Liked" />
            <span>Liked Books</span>
          </Link>
          <Link to="carted" className="action-button">
            <img src={cartedImg} alt="Carted" />
            <span>Carted Books</span>
          </Link>
        </div>
      </div>

      <div className="recently-viewed">
        <h2>Recently Viewed Books</h2>
        <div className="books-grid">
          {recentlyViewedBooks.map((book, index) => (
            <div key={index} className="book-card">
              <div className="book-actions">
                <img src={likedImg} alt="Like" className="action-icon" />
                <img src={cartedImg} alt="Add to cart" className="action-icon" />
              </div>
              <img src={book.image} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
              <Link to={"#"} className="read-more">Read More</Link>
            </div>
          ))}
        </div>
      </div>      
      <Outlet />
    </div>
  );
}
  
export default UserAction;
