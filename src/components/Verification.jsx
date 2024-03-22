import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Verification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/clientDashboard");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="container-fluid position-relative d-flex flex-column justify-content-end align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="triangle-top-left"></div>
      <div className="icon-top-left">
        <img
          src="assets\images.jpg"
          className="d-block"
          alt="court logo"
          style={{ width: "70px", borderRadius: "25px" }}
        />
      </div>
      <div className="mb-auto mt-auto">
        <div className="row justify-content-center text-center">
          <div className="col">
            <img
              src="assets\Rigt.jpg"
              style={{ width: "100px" }}
              alt="Success"
            />
            <p>Verification Completed</p>
          </div>
        </div>
      </div>
      <div className="triangle-bottom-right mt-2 "></div>
    </div>
  );
};
