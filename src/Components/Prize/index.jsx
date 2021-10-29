import React from "react";
import "./prize.css";

let laureateId = [];
const Prize = ({ year, category, laureates }) => {
  console.log(" laureates =>", laureates);
  laureates &&
    laureates.map((laureate) => {
      laureateId.push(laureate.id);
    });
  console.log(laureateId);
  return (
    <div className="prize-container">
      <div className="prize-row">
        <div className="prize">
          <h1>{category}</h1>
          <p className="prize-symbol"></p>
        </div>
        <div className="prize-data">
          <p className="prize-price">{year}</p>
          {laureates &&
            laureates.map((laureate) => (
              <p className="prize-volume">
                {laureate.firstname} <br />
                {laureate.surname}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Prize;
