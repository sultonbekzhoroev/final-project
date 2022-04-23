import React from "react";
import Header from "../commons/Header";
import Home from "../components/Home";
import Courusel from "../components/Courusel";

const House = () => {
  return (
    <div style={{ backgroundColor: "#36688D" }}>
      <Header />
      <Courusel />
      <Home />
    </div>
  );
};

export default House;
