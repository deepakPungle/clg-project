import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HODCard = ({ department }) => {
  const [hodData, setHODData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../tempdata/compdata.json");
        const jsonData = await response.json();

        const hodsForDepartment = jsonData.hodData.filter(
          (hod) => hod.department === department
        );

        setHODData(hodsForDepartment.length > 0 ? hodsForDepartment[0] : null);
      } catch (error) {
        console.error("Error fetching HOD data:", error);
      }
    };

    fetchData();
  }, [department]);

  return (
    <div className="container mt-5">
      <div className="card shadow">
        {hodData ? (
          <div className="row g-0">
            <div className="col-md-4 text-center">
              <img
                src={hodData.photoUrl || "placeholder.jpg"}
                alt={hodData.name}
                className="img-fluid"
                style={{ maxHeight: "200px" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  {hodData.name}
                </h5>
                <p className="card-text" style={{ fontSize: "1.2rem" }}>
                  Department: {hodData.department}
                  <br />
                  Designation: {hodData.designation}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading HOD data...</p>
        )}
      </div>
    </div>
  );
};

export default HODCard;
