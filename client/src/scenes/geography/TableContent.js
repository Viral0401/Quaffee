import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Review Highlights",
    "Baked Vada Pav,Banana Chips, Frappe,Filter Coffee,Coffees,Amazing Service,Vibe,Student Crowd, Excellent Service, Customizable Food, Elaborate Menu",
    "Sanitised Service, Very Affordable, Vibe, Cafe, Concept, Customizable Food"
  ),
  createData("Sponsors", "Nomad Pizza, China Gate", "Foo Thane, Foo Powai"),
  createData(
    "Average Cost",
    "₹1,000 for two people (approx.)",
    "₹700 for two people (approx.)"
  ),
  createData(
    "Cuisines",
    "Cafe, Desserts, Coffee, Bakery, Beverages, Shake",
    "Cafe, Bakery, Continental"
  ),
];

export default function TableContent() {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#3C2A21", margin: "30px", width: "90vw", textAlign: "center", marginBottom: "20px" }}
    >
      <Table sx={{  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 16 }}>Comparative Value</TableCell>
            <TableCell align="right" sx={{ fontSize: 16 }}>
              Etterra
            </TableCell>
            <TableCell align="right" sx={{ fontSize: 16 }}>
              Ananda Cafe
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: 14 }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ fontSize: 14 }}>
                {row.calories}
              </TableCell>
              <TableCell align="right" sx={{ fontSize: 14 }}>
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
