import React from "react";
import {Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar  navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
              <img src={process.env.PUBLIC_URL+"hc-logo.jpg"} alt="" width="50" height="50" />        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/viewappointment">
                  View Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/placeappointment">
                  Place Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">
                  Contact Us
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
