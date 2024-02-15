// NotFound.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PageNotFound = () => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "50vh" }}
    >
      <div className="text-center">
        <h1>404: Page Not Found</h1>
        <p>Sorry, the page you requested could not be found.</p>
        <button
          onClick={() => (window.location.href = "/")}
          type="button"
          className="btn btn-primary btn-lg px-4 me-md-2"
          fdprocessedid="2ugzk"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
