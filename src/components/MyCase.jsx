import React from "react";
import { Link } from "react-router-dom";

export const MyCase = () => {
  return (
    <>
      <div className="container mt-3" style={{height:"100vh"}}>
        <div key={1} className="card mb-3">
          <div className="card-body">
            <h6 className="card-title">{"Civil"}</h6>
            <small className="card-text">Lawyer: {"Arjun"}</small>
            <br></br>
            <small className="card-text">
              Next Hiring Date: {"28-03-2024"}
            </small>
          </div>
        </div>
      </div>
      <div
        className="home-page"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
      >
        <Link to="/chatbot">
          <img
            src="assets\chatbot logo.jpg"
            alt="caet"
            style={{ width: "54px", float: "right" }}
          />
        </Link>
      </div>
    </>
  );
};
