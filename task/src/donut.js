import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);



function DoughnutGraph() {
  const [walletData, setWalletData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3007/wallets')
      .then(response => {
        const { activeWallet, negativeWallets, unusedWallets } = response.data;
        setWalletData([activeWallet, negativeWallets, unusedWallets]);
      })
      .catch(error => {
        console.error('Error fetching wallet data:', error);
      });
  }, []);

  const data = {
    labels: ['Active Wallets', 'Negative Wallets', 'Unused Wallets'],
    datasets: [
      {
        data: walletData,
        backgroundColor: ['#21d59b', '#fd7795', '#adadad'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  return (
    <div style={{ width: '400px', height: '300px' }}>
      {walletData ? <Doughnut data={data} /> : 'Loading...'}
    </div>
  );
}

export default DoughnutGraph;