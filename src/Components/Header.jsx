import React from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";

const SearchBar = ({ onSearch }) => (
  <div className="searchBar">
    <input type="search" placeholder="Type to search..." />
    <button onClick={onSearch}>Search</button>
  </div>
);

const Header = ({ onSearch }) => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">
              <h1>Online BookStore</h1>
            </Link>
          </li>
          <li className="search-container">
            <SearchBar onSearch={onSearch} />
          </li>
          <li className="nav-buttons">
            <Link to="/about" className="button">
              About
            </Link>
          </li>
          <li>
            <Link to="/user-action" className="button">
              User Action
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;