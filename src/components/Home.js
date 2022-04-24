import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToAPI } from "../features/musicSlice";
import DataItem from "./DataItem";
import "../App.css";

function Home({ text }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  console.log(data);
  useEffect(() => {
    dispatch(callToAPI(text));
  }, [text]);

  return (
    <div className="App">
      <Grid container spacing={2} margin="auto" width="90%">
        {data.music.map((el, index) => {
          return (
            <Grid item sx={6} md={3} key={index} margin={0}>
              <DataItem el={el} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
