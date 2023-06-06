// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FiFilter, FiDownload } from 'react-icons/fi';
// import DatePicker from 'react-date-picker';
// import 'react-date-picker/dist/DatePicker.css'
// import LineChart from './Linechart';
// import Doughnutgraph from './Doughnutgraph';
// import BarGraph from './BarGraph';
// import Tables from "./Tables";

// function Task1() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null)


//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       console.log("entering into fetch method");


//       const url = "http://localhost:3001/streams";

//       const response = await axios.get(url);

//       console.log(response);
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data from API:", error.message);
//       setError(error.message);
//     }
//   };

//   if (error) {
//     return <div>Error fetching data from API: {error}</div>;
//   }


//   return (
//     <div>
//       <div className="container">
//         <h3>Dashboard</h3>
//         <ul className="horizontal-list">
//           {data &&
//             data.map((item, index) => (
//               <li key={index} className="list">
//                 <span className={`dot dot-${item.color}`} /> {item.text}
//               </li>
//             ))}
//         </ul>
//         <div className="flex-container">
//           {data &&
//             data.map((item, index) => (
//               <div
//                 key={index}
//                 className={`box ${index % 2 === 0 ? "" : "bgcolor"}`}
//               >
//                 <p className="total">Total</p>
//                 <h5 className="head">{item.total}</h5>
//                 {item.minutes && <p className="total">{item.minutes}</p>}
//               </div>
//             ))}
//         </div>
//         <div className="overview-bar">
//           <p className="overview">Overview</p>
//           <div className='button-container'>
//             <button className='button-style'><FiFilter /> Filter</button>
//             {/* <button className='button-style'><FiCalendar /> Date</button> */}
//             <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
//             <button className='button-style'> <FiDownload /> Export</button>
//           </div>
//         </div>
//         <div className="linegraph-container">
//           <LineChart /><br />

//         </div>
//       </div>
//       <div className="graph-container">
//         <div className="doughnut-container">
//           <Doughnutgraph />

//         </div>
//         <div className="bargraph-container">

//           <BarGraph />
//         </div>
//       </div>
//       <div className="table-container">
//         <Tables/>
//       </div>
//     </div>
//   );
// }

// export default Task1;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiFilter, FiDownload } from 'react-icons/fi';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import LineChart from './Linechart';
import Doughnutgraph from './Doughnutgraph';
import BarGraph from './BarGraph';
import Tables from "./Tables";

function Task1() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // Reload every 10 seconds (10000 milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  });

  const fetchData = async () => {
    try {
      const url = "http://localhost:3001/streams";
      const response = await axios.get(url);
      const newData = response.data;

      if (!data || JSON.stringify(newData) !== JSON.stringify(data)) {
        setData(newData);
      }
    } catch (error) {
      console.error("Error fetching data from API:", error.message);
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error fetching data from API: {error}</div>;
  }

  return (
    <div>
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
        <div className="overview-bar">
          <p className="overview">Overview</p>
          <div className='button-container'>
            <button className='button-style'><FiFilter /> Filter</button>
            {/* <button className='button-style'><FiCalendar /> Date</button> */}
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            <button className='button-style'> <FiDownload /> Export</button>
          </div>
        </div>
        <div className="linegraph-container">
          <LineChart /><br />
        </div>
      </div>
      <div className="graph-container">
        <div className="doughnut-container">
          <Doughnutgraph />
        </div>
        <div className="bargraph-container">
          <BarGraph />
        </div>
      </div>
      <div className="table-container">
        <Tables/>
      </div>
    </div>
  );
}

export default Task1;
