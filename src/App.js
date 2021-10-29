import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Prize from "./Components/Prize";
import Filter from "./Components/Filter";

import "./App.css";

function App() {
  const [prizes, setPrizes] = useState([].slice(0, 10));
  const [pageNumber, setPageNumber] = useState(0);

  //pagination
  const dataPerPage = 10;
  const pageVisited = pageNumber * dataPerPage;
  const displayData = prizes
    .slice(pageVisited, pageVisited + dataPerPage)
    .map((prize, index) => {
      return (
        <Prize
          key={index}
          year={prize.year}
          category={prize.category}
          laureates={prize.laureates}
        />
      );
    });

  const pageCount = Math.ceil(prizes.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // fetching data
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
      {displayData}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
