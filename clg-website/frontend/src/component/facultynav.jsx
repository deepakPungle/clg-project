import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ThemedNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-eeeeee my-5">
      <div className="container">
        <Link className="navbar-brand" to="#!"></Link>

        <div
          id="navbarsExample08"
          className="navbar-collapse justify-content-end"
        >
          <ul className="navbar-nav flex-wrap">
            <li className="nav-item">
              <Link className="nav-link" to="faculty">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="labs">
                Labs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Event-Program">
                Events/Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="workshop">
                Workshops
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ThemedNavbar;
