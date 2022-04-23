import React, { useState } from "react";
import Header from "../commons/Header";
import Home from "../components/Home";
import Courusel from "../components/Courusel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const House = () => {
  return (
    <div style={{ backgroundColor: "#36688D" }}>
      <Header />
      <Courusel />
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "auto",
          marginTop: "25px",
          backgroundColor: "#fff",
        }}
      >
        <TextField fullWidth label="Search..." id="fullWidth" />
      </Box>
      <Home />
    </div>
  );
};

export default House;
