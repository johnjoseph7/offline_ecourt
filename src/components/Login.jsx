import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = (str) => {
    if (str === "LawyerReg") {
      navigate("/lawyerReg");
    } else if (str === "ClientReg") {
      navigate("/clientReg");
    } else if (str === "signin") {
      navigate("/signin");
    } 
  };
  return (
    <div className="container-fluid position-relative" style={{ height: "100vh" }}>
      <div className="triangle-top-left"></div>
      <div className="row mt-5 mb-5 justify-content-center align-item-center">
        <div className="col-12 col-md-6 col-lg-4 mt-3 mb-5">
          <div className="text-center">
            <div className="app-logo mb-5 mt-4">
              <img
                src="assets\images.jpg"
                className="mx-auto d-block"
                alt="court logo"
                style={{ width: "120px" }}
              ></img>
            </div>
            <div className="mt-3">
              <button
                className="btn btn-danger btn-fixed-width p-2 login-btn"
                onClick={() => handleClick("LawyerReg")}
              >
                Lawyer registration
              </button>
            </div>
            <div className="mt-3 mb-5">
              <button
                className="btn btn-danger btn-fixed-width p-2 login-btn"
                onClick={() => handleClick("ClientReg")}
              >
                Client registration
              </button>
            </div>

            <div className="mb-5">
              <small className="me-2 fw-500">Already have and account?</small>
              <Link to="/signin">
                Login
              </Link>
            </div>
            <div className="triangle-bottom-right mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
