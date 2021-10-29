import React, { useState, useEffect } from "react";
import axios from "axios";
import Prize from "./Components/Prize";

import "./App.css";
function App() {
  const [prizes, setPrizes] = useState([]);
  //   const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://api.nobelprize.org/v1/prize.json")
      .then((res) => {
        setPrizes(res.data.prizes);
        console.log(res.data.prizes);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="nobel-app">
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
