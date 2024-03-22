import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchLawyer = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to manage the search query

  const cases = [
    {
      id: 1,
      case_type: "Civil",
      lawyer_name: "Arun",
      COmpleted_date: "07-03-2024",
    },
    {
      id: 2,
      case_type: "Crime",
      lawyer_name: "ram",
      COmpleted_date: "18-01-2024",
    },
    {
      id: 3,
      case_type: "Civil",
      lawyer_name: "Arun",
      COmpleted_date: "07-03-2024",
    },
    {
      id: 4,
      case_type: "Crime",
      lawyer_name: "Gogul",
      COmpleted_date: "8-12-2024",
    },
    {
      id: 5,
      case_type: "Civil",
      lawyer_name: "ArunNath",
      COmpleted_date: "07-03-2024",
    },
    {
      id: 6,
      case_type: "Crime",
      lawyer_name: "ram",
      COmpleted_date: "9-01-2023",
    },
    {
      id: 7,
      case_type: "Civil",
      lawyer_name: "Arun",
      COmpleted_date: "07-03-2024",
    },
    {
      id: 8,
      case_type: "Crime",
      lawyer_name: "ram",
      COmpleted_date: "18-01-2024",
    },
    {
      id: 9,
      case_type: "Criminal",
      lawyer_name: "Arun",
      COmpleted_date: "02-03-2024",
    },
    {
      id: 10,
      case_type: "Crime",
      lawyer_name: "ram",
      COmpleted_date: "28-01-2024",
    },
  ];

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  const filteredCases = cases.filter((caseItem) =>
    caseItem.case_type.toLowerCase().includes(searchQuery.toLowerCase())
  ); // Filter cases based on the entered case type

  const sortedCases = filteredCases.sort(
    (a, b) => new Date(b.COmpleted_date) - new Date(a.COmpleted_date)
  ); // Sort filtered cases by completion date in descending order

  return (
    <>
      <div className="col- mt-3 mb-4 d-flex align-items-center justify-content-center">
        <div className="input-group" style={{ width: "60%" }}>
          <input
            type="text"
            name="bench"
            id="bench"
            placeholder="Enter your case type"
            className="form-control"
            style={{
              backgroundColor: "#80808052",
              border: "none",
              borderRadius: "4px",
            }}
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="container mt-3">
        {/* Display filtered and sorted cases */}
        {sortedCases.map((caseItem) => (
          <div key={caseItem.id} className="card mb-3">
            <div className="card-body">
              <h6 className="card-title">{caseItem.case_type}</h6>
              <small className="card-text">
                Lawyer: {caseItem.lawyer_name}
              </small>
              <br></br>
              <small className="card-text">
                Completed Date: {caseItem.COmpleted_date}
              </small>
            </div>
          </div>
        ))}
      </div>
      <div
        className="home-page"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
      >
        <Link to="/chatbot">
          <img
            src="assets\chatbot logo.jpg"
            style={{ width: "54px", float: "right" }}
            alt="cgat"
          />
        </Link>
      </div>
    </>
  );
};
