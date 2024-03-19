import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SalesLineGraph = ({ salesData }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      // Destroy the previous chart instance
      chartInstance.current.destroy();
    }

    if (chartContainer.current && salesData) {
      const days = salesData.map(data => data.weekday);
      const sales = salesData.map(data => data.Transaction);

      const ctx = chartContainer.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: days,
          datasets: [{
            label: 'Sales',
            data: sales,
            fill: false,
            borderColor: '#3E3232',
            tension: 0.1
          }]
        },
        options: {
            plugins: {
                legend: {
                  labels: {
                    color: '#3E3232' // Change color of the legend items to purple
                  }
                }
              },
            scales: {
                x: {
                    ticks: {
                        color: 'black', // Change color of x-axis interval markings to red
                        fontSize: 24
                      }
                },
              y: {
                beginAtZero: true, // Ensure y-axis starts from zero
                ticks: {
                    color: 'black', // Change color of x-axis interval markings to red
                    fontSize: 24
                  }
              }
            }
          }
      });
    }

    return () => {
      if (chartInstance.current !== null) {
        // Destroy the chart instance when the component is unmounted
        chartInstance.current.destroy();
      }
    };
  }, [salesData]);

  return <canvas ref={chartContainer} />;
};

export default SalesLineGraph;
