import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = {
  labels: ["1 star", "2 star", "3 star", "4 star", "5 star"],
  datasets: [
    {
      label: "Number of ratings",
      data: [0, 11, 1, 5, 195],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
      ],
    },
  ],
};

const EtterraChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    let chartInstance;

    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: "pie",
        data: data,
        options: {
          maintainAspectRatio: false,
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default EtterraChart;
