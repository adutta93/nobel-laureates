import React from "react";

const Filter = ({ prizes, setPrizes }) => {
  // console.log(prizes);
  const filterItem = (itemCategory) => {
    const updatedFilterItems = prizes.filter((currentElem) => {
      return currentElem.category === itemCategory;
    });
    setPrizes(updatedFilterItems);
  };
  return (
    <div>
      <select id="prize">
        {prizes.map((prize) => (
          <option
            onClick={() => filterItem("chemistry")}
            value={prize.category}
          >
            {prize.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

// axios
//   .get("http://api.nobelprize.org/v1/prize.json")
//   .then((res) => {
//     setPrizes(res.data.prizes);
//     // console.log(res.data.prizes);
//   })
//   .catch((error) => console.log(error));
