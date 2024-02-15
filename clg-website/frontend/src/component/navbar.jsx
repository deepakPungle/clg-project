import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark sticky-top"
        aria-label="Tenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample08"
          >
            <ul className=" navbar-nav flex-grow-1 justify-content-around">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="">
                  <HomeIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About GPJ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="#">
                  Addmission
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="#">
                  Traning & Placement
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  to="/department"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Department
                </Link>
                <ul className="dropdown-menu " data-bs-popper="static">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/department/computer-department"
                    >
                      Computer Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/department/electrical-department"
                    >
                      Electrical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/department/mechanical-department"
                    >
                      Mechanical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/department/civil-department"
                    >
                      Civil Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/department/chemical-department"
                    >
                      Chemical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/department/science-department"
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/department/Library">
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/department/workshop">
                      Workshop
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/department/Office">
                      Office
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Student
                </Link>
                <ul className="dropdown-menu " data-bs-popper="static">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Exam
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Result
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Syllabus
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      ScholarShip
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  News Letter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
