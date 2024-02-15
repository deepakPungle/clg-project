import Location from "./location";
import CollegeCode from "./collegecode";
const Header = () => {
  return (
    <>
      <div className="multi-color-bg">
        <div className="container ">
          <header className="d-flex flex-wrap justify-content-center py-3  header-container">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis gap-3 text-decoration-none"
            >
              <img
                src="../../images/msbte1.png"
                alt=""
                className="msbte-logo"
              />
              <img
                src="../../images/msbte2.png"
                alt=""
                className="msbte-logo"
              />
              <h3
                style={{ fontStyle: "oblique" }}
                className="header-college-name"
              >
                Government Polytechnic Jalna
              </h3>
            </a>

            <ul className="nav nav-pills ">
              <li className="nav-item">
                <span>
                  <Location />
                </span>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};
export default Header;
