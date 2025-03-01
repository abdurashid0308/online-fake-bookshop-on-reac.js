import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/useraction.css";

function UserAction() {
  return (
    <div className="user-action">
      <h1>User Action Page</h1>
      <div className="action-buttons">
        <ul>
          <li><Link to="profile">Profile <img src={"../Styles/Images/profile.png"} alt="" /></Link></li>
          <li><Link to="liked">Liked Books <img src={"../Styles/Images/liked.png"} alt="" /></Link></li>
          <li><Link to="carted">Carted Books <img src={"../Styles/Images/carted.png"} alt="" /></Link></li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default UserAction;
