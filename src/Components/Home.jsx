import React from "react";
import { Link } from "react-router-dom";
import "../Styles/home.css";

function Home(){
    fetch("https://api.itbook.store/1.0/new")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
  
    return(
        <div className="home-main">
            <div className="welcome">
                <h1>"A reader lives a thousand lives before he dies. The man who never reads lives only one."</h1>
                <h3>- George R.R. Martin</h3>
            </div>
            <div className="featuredbooks">
                <div>
                    <h1>Featured Books</h1>
                    <div className="featuredbooks-list">
                        <div className="featuredbooks-item">
                            <img src="https://itbook.store/img/books/9781617294136.png" alt="book"/>
                            <h3>React Native in Action</h3>
                            <Link to="/book/9781617294136">Read More</Link>
                        </div>
                        <div className="featuredbooks-item">
                            <img src="https://itbook.store/img/books/9781617295867.png" alt="book"/>
                            <h3>React in Action</h3>
                            <Link to="/book/9781617295867">Read More</Link>
                        </div>
                        <div className="featuredbooks-item">
                            <img src="https://itbook.store/img/books/9781617296802.png" alt="book"/>
                            <h3>React Hooks in Action</h3>
                            <Link to="/book/9781617296802">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
