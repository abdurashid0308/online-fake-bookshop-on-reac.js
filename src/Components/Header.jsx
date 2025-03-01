import { Link } from "react-router-dom";
import React from "react";
import "../Styles/header.css";

function Header(){
    return(
        <header>
            <ul>
                <li>
                    <Link to="/"><h1>Online BookStore</h1></Link>
                </li>
                <li className="searchBar">
                    <input type="search" placeholder="Type to search..."/>
                    <button>Search</button>
                </li>
                <li className="button">
                    <Link to="/about">About</Link>
                </li>
                <li className="button">
                    <Link to="/user-action">User Action</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;