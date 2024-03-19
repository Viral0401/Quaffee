import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { weekly } from "../assets/week";

const OverviewChart = ({ salesData1 }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const [selectedWeek, setSelectedWeek] = useState("week1");

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    if (chartContainer.current && weekly) {
      const filteredWeek =
        selectedWeek === "all"
          ? weekly
          : weekly.find((w) => w.week === selectedWeek)?.data || [];
      console.log("Filtered Week:", filteredWeek); // Debugging
      const days = filteredWeek.map((data) => data.weekday);
      console.log("Days:", days); // Debugging
      const sales = filteredWeek.map((data) => data.Transaction);
      console.log("Sales:", sales); // Debugging

      const ctx = chartContainer.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: days,
          datasets: [
            {
              label: "Sales",
              data: sales,
              fill: false,
              borderColor: "#3E3232",
              tension: 0.1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "#3E3232",
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "black",
                fontSize: 12,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: "black",
                fontSize: 12,
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedWeek]);

  const handleWeekChange = (e) => {
    setSelectedWeek(e.target.value);
  };

  return (
    <div>
      <div>
        <label style={{ color: "black" }} htmlFor="week-select">
          Select Week:{" "}
        </label>
        <select
          style={{ color: "black", borderRadius: "5px", padding: "0.5%" }}
          id="week-select"
          onChange={handleWeekChange}
          value={selectedWeek}
        >
          {weekly.map((w) => (
            <option key={w.week} value={w.week}>
              {w.week}
            </option>
          ))}
        </select>
      </div>
      <canvas ref={chartContainer} style={{ paddingBottom: "6%" }} />
    </div>
  );
};

export default OverviewChart;
