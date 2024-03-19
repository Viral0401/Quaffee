import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TopItemsChart = ({ dataset }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      // Destroy the previous chart instance
      chartInstance.current.destroy();
    }

    if (chartContainer.current && dataset) {
      const labels = dataset.slice(0, 20).map(item => item.item);
      const data = dataset.slice(0, 20).map(item => item.count);

      const ctx = chartContainer.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Top 8 Selling Items',
            data: data,
            backgroundColor: '#561C24', // Blue color
            borderColor: '#561C24',
            borderWidth: 1
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
              beginAtZero: true,
              ticks: {
                color: 'black', // Change color of x-axis interval markings to red
                fontSize: 24
              }
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current !== null) {
        // Destroy the chart instance when the component is unmounted
        chartInstance.current.destroy();
      }
    };
  }, [dataset]);

  return <canvas ref={chartContainer} />;
};

export default TopItemsChart;
