import React from "react";
import "../App.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="dashboard-header">
      <div className="dashboard-left-container">
        <div>
          <img className="dashboard-logo" src={logo} />
        </div>
      </div>

      <div className="dashboard-right-container">
        <div className="dashboard-left-options"> Launch Exercises</div>
        <div className="dashboard-left-options">
          <i className="far fa-user"></i>
        </div>
        <div className="dashboard-left-options">
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  );
}
