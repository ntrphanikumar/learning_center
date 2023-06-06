import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { FiFilter, FiDownload } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";  
import axios from 'axios';
import {Chart as ChartJS,Title, Tooltip, LineElement, Legend,CategoryScale, LinearScale, PointElement} from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

function LineChart() {
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/resgistrations');
      const apiData = response.data;

      const totalRegistrationsData = apiData.totalRegistrations?.map(entry => entry.COUNT);
      const initialRegistrationsData = apiData.initialregistrations?.map(entry => entry.COUNT);
      const completedRegistrationsData = apiData.completedRegistrations?.map(entry => entry.COUNT);
      console.log(apiData.totalRegistrations?.map(entry => entry.COUNT))

      setData({
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Total Registrations",
            data: totalRegistrationsData || [],
            backgroundColor: "blue",
            borderColor: 'red'
          },
          {
            label: "initialregistrations",
            data: initialRegistrationsData || [],
            backgroundColor: "yellow",
            borderColor: 'blue'
          },
          {
            label: "Completed Registrations",
            data: completedRegistrationsData || [],
            backgroundColor: "pink",
            borderColor: 'green'
          }
        ]
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ width: '800px', height: '500px',paddingTop:"30px" }}>
  
      <div className="overview-bar">
      <h3 className="overview">Overview</h3>
      <div className='button-container'>
        <button className='button-style'>Filter<FiFilter /></button>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
        <button className='button-style'>Export<FiDownload /></button>
      </div>
      </div>
      
      {data ? <Line data={data} /> : 'Loading...'}
    </div>
  );
}

export default LineChart;