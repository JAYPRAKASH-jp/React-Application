import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="border-top">
        <div className="container  footer ">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5">
            <div className="col mb-2">
              <p className="text-muted">
                @2021 Copyright <b>GET-FIT Health Club</b>
              </p>
            </div>

            <div className="col mb-2">
              <h5>Useful Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/home" className="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/viewappointment" className="nav-link p-0 text-muted">
                    View Appointment
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/placeappointment" className="nav-link p-0 text-muted">
                    Place Appointment
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact" className="nav-link p-0 text-muted">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col mb-2">
              <h5>Contacts</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <spaa className="nav-link p-0 text-muted">
                    Health Club
                  </spaa>
                </li>
                <li className="nav-item mb-2">
                  <spaa className="nav-link p-0 text-muted">
                    Hapipur Bihar, India
                  </spaa>
                </li>
                <li className="nav-item mb-2">
                  <spaa className="nav-link p-0 text-muted">
                    Phone : +91-9988776655
                  </spaa>
                </li>
                <li className="nav-item mb-2">
                  <spaa  className="nav-link p-0 text-muted">
                    FAQs On
                  </spaa>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
