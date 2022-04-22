import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToAPI } from "../features/musicSlice";
import DataItem from "./DataItem";
import "../App.css";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);
  useEffect(() => {
    dispatch(callToAPI());
  }, [dispatch]);

  return (
    <div className="App">
      <Grid container spacing={2}>
        {data.music.map((el, index) => {
          return (
            <Grid item sx={6} md={3} key={index}>
              <DataItem el={el} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
