import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardContent = () => {
  return (
    <>
    <div className="col- mt-5 ">
    <select
      name="cars"
      id="cars"
      style={{
        width: "40%",
        margin: "10px",
        backgroundColor: "#80808052",
      }}
    >
      <option value="volvo">Select court</option>
      <option value="volvo">Subordinate court</option>
      <option value="saab">High Courts</option>
      <option value="opel">Supreme Court</option>
    </select>
    <select
      name="cars"
      id="cars"
      style={{
        width: "40%",
        margin: "10px",
        backgroundColor: "#80808052",
      }}
    >
      <option value="volvo">Select bench</option>
      <option value="volvo">Division</option>
      <option value="saab">Full</option>
      <option value="opel">Constitutional</option>
    </select>
  </div>
  <div className="container-fluid mt-4">
    <div className="row">
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets\case type logo.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='case'
        ></img>
        <h6>case number</h6>
      </div>
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets\party logo.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='party'
        ></img>
        <h6>Party</h6>
      </div>
    </div>
    <div className="row">
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets\case type logo.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='casetype'
        ></img>
        <h6>Filing Number</h6>
      </div>
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets\FIR DOCUMENT LOGO.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='FIR'
        ></img>
        <h6>FIR Number</h6>
      </div>
    </div>
    <div className="row">
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets\advocate logo.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='advocate'
        ></img>
        <h6>Advocate</h6>
      </div>
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets\act logo.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='act'
        ></img>
        <h6>Act</h6>
      </div>
    </div>
    <div className="row">
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets\case type logo.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='casetype'
        ></img>
        <h6>Case type</h6>
      </div>
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets\hearing date logo.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='hearing'
        ></img>
        <h6>Hearing Dates</h6>
      </div>
    </div>
    <div className="row justify-content-center">
      <div
        className="col-6 mb-1 custom-div text-center"
        style={{ backgroundColor: "#80808052" }}
      >
        <img
          src="assets/notofication logo.jpg"
          className="p-2"
          style={{ width: "50px" }}
          alt='notif'
        ></img>
        <h6>Notification</h6>
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
        style={{ width: "54px", float: "right" }}
        alt='chat'
      />
    </Link>
  </div>
    </>
  )
}
