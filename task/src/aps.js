import React, { useState, useEffect } from "react";
import axios from "axios";

function Div1() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("entering in fetch method");

      
      const url = "http://localhost:3001/streaming";

      const response = await axios.get(url);

      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data from API:", error.message);
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error fetching data from API: {error}</div>;
  }

  return (
    <div className="container">
      <h3>Dashboard</h3>
      <ul className="horizontal-list">
        {data &&
          data.map((item, index) => (
            <li key={index} className="list">
              <span className={`dot dot-${item.color}`} /> {item.text}
            </li>
          ))}
      </ul>
      <div className="flex-container">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className={`box ${index % 2 === 0 ? "" : "bgcolor"}`}
            >
              <p className="total">Total</p>
              <h5 className="head">{item.total}</h5>
              {item.minutes && <p className="total">{item.minutes}</p>}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Div1;