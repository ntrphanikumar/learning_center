import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <table  className="table">
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

const Tables = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = "http://localhost:3001/livestream";
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
        <div>
            <div className="table-container">
                <div  >
                    <h2>Live Streams</h2><br />
                    {data && <Table  data={data.liveStreams} />}
                </div>
                <div >
                    <h2 border='none'>Live Recoding</h2><br />
                    {data && <Table   data={data.liveRecoding} />}
                </div>
                <div  >
                    <h2>Live Recoding Clips</h2><br />
                    {data && <Table data={data.liveRecodingClips} />}
                </div>
            </div>
            <div className="table-container">
                <div >
                    <h2>Video</h2><br />
                    {data && <Table  data={data.video} />}
                </div>
                <div >
                    <h2>Portrait Pro</h2><br />
                    {data && <Table   data={data.portraitPro} />}
                </div>
                <div >
                    <h2>Video Editing</h2><br />
                    {data && <Table  data={data.videoEditing} />}
                </div>
            </div>
        </div>
    );
};

export default Tables;