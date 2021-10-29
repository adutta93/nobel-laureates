import React from "react";
import "./prize.css";

const Prize = ({ year, category, laureates }) => {
  return (
    <>
      <div className="prize-container">
        <div className="prize-row">
          <div className="prize">
            <h1>{category}</h1>
          </div>
          <div className="prize-data">
            <p className="prize-yr">{year}</p>
            {laureates &&
              laureates.map((laureate, index) => (
                <div className="laureate-list" key={index}>
                  <div className="prize-laureate">
                    <span>{laureate.firstname}</span>{" "}
                    <span>{laureate.surname}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prize;
