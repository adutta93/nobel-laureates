import React, { useState, useEffect } from "react";
import axios from "axios";
import Prize from "./Components/Prize";
import Filter from "./Components/Filter";
import Appearance from "./Components/Appearance";

import "./App.css";

function App() {
  const [prizes, setPrizes] = useState([]);
  //   const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://api.nobelprize.org/v1/prize.json`);
      setPrizes(result.data.prizes);
    };
    fetchItems();
  }, []);
  console.log("Prize ==>", prizes);
  return (
    <div className="nobel-app">
      <Filter prizes={prizes} setPrizes={setPrizes} />
      <Appearance prizes={prizes} />
      {prizes.map((prize) => {
        return (
          <Prize
            year={prize.year}
            category={prize.category}
            laureates={prize.laureates}
          />
        );
      })}
    </div>
  );
}

export default App;
