import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const dataMap = {
  abcoffee: {
    labels: ["1 star", "2 star", "3 star", "4 star", "5 star"],
    values: [6, 10, 54, 20, 27],
  },
  amanda: {
    labels: ["1 star", "2 star", "3 star", "4 star", "5 star"],
    values: [0, 2, 2, 6, 29],
  },
  "earth cafe": {
    labels: ["1 star", "2 star", "3 star", "4 star", "5 star"],
    values: [0, 14, 5, 3, 140],
  },
};

const PieChart = () => {
  const [selectedOption, setSelectedOption] = useState("abcoffee");
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx.chart) {
        ctx.chart.destroy();
      }
      ctx.chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: dataMap[selectedOption].labels,
          datasets: [
            {
              label: "Number of ratings",
              data: dataMap[selectedOption].values,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
              ],
            },
          ],
        },
        options: {
          //   responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          className="block pieselect w-full px-4 py-2 text-black bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="abcoffee">abcoffee</option>
          <option value="amanda">ananda</option>
          <option value="earth cafe">earth cafe</option>
        </select>
        <canvas ref={chartRef} id="pie-chart"></canvas>
      </div>
      <canvas ref={chartRef} />
    </>
  );
};

export default PieChart;
