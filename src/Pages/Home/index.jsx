import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return <div className="coin-app"></div>;
}

export default App;
