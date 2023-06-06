import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Count</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.count}</td>
            <td>{item.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Tab = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = "http://localhost:3009/live";
      const response = await axios.get(url);
      console.log(response.data);
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
    <div className="tabdiv" >
          <div className="con">
        
      <div><h6>Live Streams</h6>
      {data && <Table data={data.liveStreams} />}</div>

      <div><h6>Live Recoding</h6>
      {data && <Table data={data.liveRecoding} />}</div>

      <div><h6>Live Recoding Clips</h6>
      {data && <Table data={data.liveRecodingClips} />}</div>
      </div>

      <div className="con">
      <div><h6>Video</h6>
      {data && <Table data={data.video} />}</div>

      <div><h6>Portrait Pro</h6>
      {data && <Table data={data.portraitPro} />}</div>

      <div><h6>Video Editing</h6>
      {data && <Table data={data.videoEditing} />}</div> 
      </div>
    </div>
  );
};

export default Tab;
