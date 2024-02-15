import React, { useState, useEffect } from "react";

const StaffCard = () => {
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/v1/searchLecturer");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setStaffData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="shadow d-flex flex-wrap justify-content-center">
          {staffData && staffData.length > 0 ? (
            staffData.map((staffMember, index) => (
              <div
                key={index}
                className="card flex-grow-1"
                style={{ maxWidth: "30%" }}
              >
                <img
                  src={staffMember.photoUrl}
                  className="card-img-top img-fluid"
                  alt={staffMember.name}
                  style={{ maxHeight: "200px" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {staffMember.name}
                  </h5>
                  <p className="card-text" style={{ fontSize: "1.2rem" }}>
                    Department: {staffMember.Department}
                  </p>
                  <p className="card-text" style={{ fontSize: "1.2rem" }}>
                    Designation: {staffMember.designation}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading staff data...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default StaffCard;
