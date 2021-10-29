import React, { useEffect } from "react";

const Appearance = ({ prizes }) => {
  const count = {};
  useEffect(() => {
    const fetchItems = () => {
      prizes.forEach((data) => {
        (data.laureates ? data.laureates : []).forEach((item) => {
          const author = `${item.firstname || ""} ${item.surname || ""}`;
          if (count[author]) {
            count[author] += 1;
          } else {
            count[author] = 0;
          }
        });
      });

      // console.log("count ==>> ", count);
      console.log("count length ==>> ", Object.keys(count).length);
      Object.entries(count).forEach((data) => {
        // console.log("data 0 ==>> ", data[0]);
        console.log("data 1 ==>> ", data[1]);
        if (data[1] > 0) {
          console.log("data ==>> ", data[0]);
        }
      });
    };
    fetchItems();
  }, []);
  return <div>Hello</div>;
};

export default Appearance;
