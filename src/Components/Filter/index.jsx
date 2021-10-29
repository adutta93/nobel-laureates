import React, { useState, useEffect } from "react";
import Select from "react-select";
import Appearance from "../Appearance";
import "./filter.css";

const Filter = ({ prizes, setPrizes }) => {
  const [items, setItems] = useState("");
  //fiilter functions
  const filterItem = (itemCategory) => {
    const updatedFilterItems = prizes.filter((currentElem) => {
      return currentElem.category === itemCategory;
    });
    setPrizes(updatedFilterItems);
  };
  console.log("Prizes from filter", items);
  return (
    <div className="filter-container">
      <div className="select">
        <select
          className="select-cat"
          onChange={(e) => {
            const selectedItem = e.target.value;
            setItems(selectedItem);
            filterItem(selectedItem);
          }}
        >
          <option value="">Category</option>
          <option value="peace">Peace</option>
          <option value="chemistry">Chemistry</option>
          <option value="physics">Physics</option>
          <option value="medicine">Medicine</option>
          <option value="economics">Economics</option>
          <option value="literature">Litarature</option>
        </select>
      </div>
      <div className="select">
        <select
          className="select-yr"
          onChange={() => {
            filterItem("2002");
          }}
        >
          <option value="">Year</option>
          {prizes.map((prize) => {
            return <option value={prize.year}>{prize.year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
