import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {Chart as ChartJS,Title, Tooltip, LineElement, Legend,CategoryScale, LinearScale, PointElement} from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

function LineChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // Reload every 10 seconds (10000 milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/registrations');
      const apiData = response.data;

      const totalRegistrationsData = apiData.totalRegistrations?.map(entry => entry.COUNT);
      const initialRegistrationsData = apiData.initialRegistrations?.map(entry => entry.COUNT);
      const completedRegistrationsData = apiData.completedRegistrations?.map(entry => entry.COUNT);

      setData({
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Total Registrations",
            data: totalRegistrationsData || [],
            backgroundColor: "blue",
            borderColor: 'red',
            tension: 0.4
          },
          {
            label: "Initial Registrations",
            data: initialRegistrationsData || [],
            backgroundColor: "yellow",
            borderColor: 'blue',
            tension: 0.4
          },
          {
            label: "Completed Registrations",
            data: completedRegistrationsData || [],
            backgroundColor: "pink",
            borderColor: 'green',
            tension: 0.4
          }
        ]
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ width: '2000px', height: '500px' }}>
      {data ? <Line data={data} /> : 'Loading...'}
    </div>
  );
}

export default LineChart;
