import React from "react";
import TopItemsChart from "./TopItemsChart";
import { items } from "../../assets/items";
import SalesLineGraph from "./SalesLineGraph";
import { week } from "../../assets/weekly";
import BarChart from "./BarChart";
import { hour } from "../../assets/hourly";
// import ParallelCoordinatesPlot from "./ParallelCoordinatesPlot";
// import { parallel } from "../../assets/parallel";
import MatchColumnsCard from "./MatchColumnsCard";

const Analysis = () => {
  return (
    <>
      <div style={{ width: "100%", height: "70vh" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "2% auto",
            fontSize: "1.5rem",
            color: "#3C2A21",
            fontWeight: "bold",
          }}
        >
          Top Selling Items
        </h1>
        <TopItemsChart dataset={items} /> {/* Pass the dataset as a prop */}
      </div>
      <div style={{ width: "100%", height: "70vh", margin: "8% 5%" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "2% auto",
            fontSize: "1.5rem",
            color: "#3C2A21",
            fontWeight: "bold",
          }}
        >
          Sales Line Graph
        </h1>
        <SalesLineGraph salesData={week} />
      </div>
      {/* <div style={{ width: "100%", height: "70vh", margin: "8% 5%" }}>
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
      </div> */}
      {/* <div className="parallel">
    <ParallelCoordinatesPlot data={parallel} />
      
    </div> */}
      <div style={{ marginTop: "10%" }}>
        <MatchColumnsCard
          leftItems={[
            "Baked Pav Bhaji",
            "Baked Vada Pav",
            "Rosella Jam With Filter Coffee Ganache Macaroon (1PIC)",
            "Calzones Veg (Calzone Paneer)",
            "Strawberry White Chocolate Ganache With Rosella Jam Macroon",
            "Baked Vada Pav",
          ]}
          rightItems={[
            "Baked Vada Pav",
            "Baked Pav Bhaji",
            "Strawberry White Chocolate Ganache With Rosella Jam Macroon",
            "Baked Vada Pav",
            "Rosella Jam With Filter Coffee Ganache Macaroon (1PIC)",
            "Calzones Veg (Calzone Paneer)",
          ]}
        />
      </div>
    </>
  );
};

export default Analysis;
