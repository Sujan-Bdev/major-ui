import React from "react";

import "./App.css";
import Typography from "@material-ui/core/Typography";
import NavBar from "./components/NavBar";
import Demo from "./components/demo";

export default function App() {
  return (
    <div>
        <NavBar/>
      <Typography variant={"h4"} style={{ textAlign: "center" }}>
        Building Footprint Extraction
      </Typography>
    </div>
  );
}
