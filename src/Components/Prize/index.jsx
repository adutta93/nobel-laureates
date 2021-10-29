import React from "react";
import "./prize.css";

let laureateId = [];

const Prize = ({ year, category, laureates }) => {
  // console.log(" laureates =>", laureates);
  laureates &&
    laureates.map((laureate) => {
      laureateId.push(laureate.id);
      return true;
    });

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
              laureates.map((laureate) => (
                <div className="laureate-list">
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
