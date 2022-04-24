import React, { useState } from "react";
import Header from "../commons/Header";
import Home from "../components/Home";
import Courusel from "../components/Courusel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Spinner } from "reactstrap";
const House = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 5000);
  return (
    <div style={{ backgroundColor: "#36688D" }}>
      <Header />
      {loading ? (
        <div>
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
      ) : (
        <div>
          <Spinner color="primary" type="grow">
            Loading...
          </Spinner>
          <Spinner color="secondary" type="grow">
            Loading...
          </Spinner>
          <Spinner color="success" type="grow">
            Loading...
          </Spinner>
          <Spinner color="danger" type="grow">
            Loading...
          </Spinner>
          <Spinner color="warning" type="grow">
            Loading...
          </Spinner>
          <Spinner color="info" type="grow">
            Loading...
          </Spinner>
          <Spinner color="light" type="grow">
            Loading...
          </Spinner>
          <Spinner color="dark" type="grow">
            Loading...
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default House;
