import React from "react";
import { Link } from "react-router-dom";

export const CNRPage = () => {
  return (
    <>
      <div className="col- mt-3 mb-4 d-flex align-items-center justify-content-center">
        <div className="input-group" style={{ width: "60%" }}>
          <input
            type="text"
            name="bench"
            id="bench"
            placeholder="Search by CNR"
            className="form-control"
            style={{
              backgroundColor: "#80808052",
              border: "none",
              borderRadius: "4px",
            }}
          />
          <button
            className="btn btn-outline-secondary"
            style={{
              backgroundColor: "#80808052",
            }}
            type="button"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", position: "relative" }}>
        <hr style={{ width: "100%", borderTop: "1px solid #000" }} />
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "0 20px",
          }}
        >
          or
        </span>
      </div>
      <div class="qr-container">
        <div class="qr-img">
          <img
            src="assets\QR.png"
            alt="Dummy QR Code"
            style={{ width: "18px" }}
          />
          <span>scan QR code</span>
        </div>
      </div>

      <div class="container-fluid mt-4">
        <div class="row">
          <ol class="list-unstyled">
            <li>
              <small>
                Use configure option in nside menu to manage your cases from
                majority of the high courts or district courts or both
              </small>
            </li>
            <li>
              <small>
                If you know the CNR number of the case, enter the 16
                alphanumaric CNR number without any- (hypergen) or space
              </small>
            </li>
            <li>
              <small>
                If you dont have the CNR number of the case then it can be
                searched by other options licke case registrationNumber,Party
                name, Advocate Name, etc, For this, click on the case Status
                image
              </small>
            </li>
            <li>
              <small>
                Click on Case Number to view current status,entire history, and
                orders/judgements delivered in the case
              </small>
            </li>
            <li>
              <small>
                When you view the history of the case you have option to "Save
                the case" and can create your own portfolio of cases
              </small>
            </li>
            <li>
              <small>
                For Future reference, your saved cases can be seen by my cases
              </small>
            </li>
          </ol>
        </div>
      </div>
      <div
        className="home-page"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
      >
        <Link to="/chatbot">
          <img
            src="assets\chatbot logo.jpg"
            style={{ width: "54px", float: "right" }}
            alt="cgar"
          />
        </Link>
      </div>
    </>
  );
};
