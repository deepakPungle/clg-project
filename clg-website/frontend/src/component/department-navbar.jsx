import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";

const Dept_Navbar = () => {
  return (
    <div
      style={{
        height: "93vh",
        display: "none", // Initially hide the div
        "@media (minWidth: 768px)": {
          display: "flex", // Show the div on screens larger than or equal to 768px
        },
      }}
      className="flex-column flex-shrink-0 p-3 text-bg-dark overflow-hidden"
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Departments</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/department/computer-department"
            className="nav-link text-white"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Computer Department
          </Link>
        </li>
        <li>
          <Link
            to="/department/mechanical-department"
            className="nav-link text-white"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Mechanical Department
          </Link>
        </li>
        <li>
          <Link
            to="/department/electrical-department"
            className="nav-link text-white"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Electrical_Department
          </Link>
        </li>
        <li>
          <Link
            to="/department/chemical-department"
            className="nav-link text-white"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Chemical Department
          </Link>
        </li>
        <li>
          <Link
            to="/department/civil-department"
            className="nav-link text-white"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Civil Department
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Dept_Navbar;
