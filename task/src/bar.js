import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Bor() {
    const [creditData, setCreditData] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3004/credits')
            .then(response => {
                const { issued, consumed, negativeBalance } = response.data;
                setCreditData({ issued, consumed, negativeBalance });
            })
            .catch(error => {
                console.error('Error fetching credit data:', error);
            });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April'];
    console.log('creditData:', creditData);
    const issuedData = creditData ? creditData.issued.map(data => data.COUNT) : [];
    const consumedData = creditData ? creditData.consumed.map(data => data.COUNT) : [];
    const negativeBalanceData = creditData ? creditData.negativeBalance.map(data => data.COUNT) : [];


    const data = {
        labels,
        datasets: [
            {
                label: 'Issued',
                data: issuedData,
                backgroundColor:'#36a2ec ',
            },
            {
                label: 'Consumed',
                data: consumedData,
                backgroundColor: '#fd9f40',
            },
            {
                label: 'Negative Balance',
                data: negativeBalanceData,
                backgroundColor: '#fd7795',
            },
        ],
    };

    return (
        <div className='bar'>
            <h2>Bar Graph</h2>
            {creditData ? <Bar options={options} data={data} /> : 'Loading...'}
        </div>
    );
}

export default Bor;