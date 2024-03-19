import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import BarChart from "scenes/analysis/BarChart";
import { hour } from "../../assets/hourly";
import Predict3 from "components/Predict3";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      {/* <Box height="75vh">
        <OverviewChart view={view} />
      </Box> */}
      <div style={{ width: "100%", height: "70vh", margin: "4% 5%" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "2% auto",
            fontSize: "1.5rem",
            color: "#3C2A21",
            fontWeight: "bold",
          }}
        >
          Hourly Sales Bar Graph
        </h1>
        <BarChart data={hour} />
      </div>
      <Predict3 />
    </Box>
  );
};

export default Overview;
