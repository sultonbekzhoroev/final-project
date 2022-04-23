import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToAPI } from "../features/musicSlice";
import DataItem from "./DataItem";
import "../App.css";
import { Spinner } from "reactstrap";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [loading, setLoading] = useState(false);

  console.log(data);
  useEffect(() => {
    dispatch(callToAPI());
    setLoading(true);
  }, [dispatch, loading]);

  return (
    <div className="App">
      {loading ? (
        <Grid container spacing={2} margin="auto" width="90%">
          {data.music.map((el, index) => {
            return (
              <Grid item sx={6} md={3} key={index} margin={0}>
                <DataItem el={el} />
              </Grid>
            );
          })}
        </Grid>
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
}

export default Home;
