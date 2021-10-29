import React, { useState, useEffect } from "react";
import axios from "axios";
import Prize from "./Components/Prize";
import Filter from "./Components/Filter";

import "./App.css";

function App() {
  const [prizes, setPrizes] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://api.nobelprize.org/v1/prize.json`);
      setPrizes(result.data.prizes);
    };
    fetchItems();
  }, []);

  return (
    <div className="nobel-app">
      <aside>
        <Filter prizes={prizes} setPrizes={setPrizes} />
      </aside>

      {prizes.map((prize) => {
        return (
          <Prize
            year={prize.year}
            category={prize.category}
            laureates={prize.laureates}
          />
        );
      })}
      {/*  */}
    </div>
  );
}

export default App;
