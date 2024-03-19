import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        // If a Chart instance already exists, destroy it
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.map((item) => item.hour_bins),
          datasets: [
            {
              label: "Data",
              data: data.map((item) => item.Transaction),
              backgroundColor: "#113946",
              borderColor: "#113946",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "#3E3232", // Change color of the legend items to purple
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "black", // Change color of x-axis interval markings to red
                fontSize: 24,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: "black", // Change color of x-axis interval markings to red
                fontSize: 24,
              },
            },
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); // This effect depends on the data prop.

  return <canvas ref={chartRef} />;
};

export default BarChart;
