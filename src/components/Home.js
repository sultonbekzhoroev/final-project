import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToAPI } from "../features/musicSlice";
import Pagination from "./Pagination";
import DataItem from "./DataItem";
import "../App.css";

function Home({ text }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const [pageNow, setPageNow] = useState(0);
  const howManyElementsPerPage = 8;
  const [howManyPages, setHowManyPages] = useState(0);

  const start = pageNow * howManyElementsPerPage;
  const end = start + howManyElementsPerPage;
  const dataToShow = data.music.slice(start, end);

  useEffect(() => {
    dispatch(callToAPI(text));
  }, [text]);

  useEffect(() => {
    setHowManyPages(Math.ceil(data.music.length / howManyElementsPerPage));
  }, [dataToShow]);

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        margin="auto"
        width="90%"
        maxWidth="1300px"
        justifyContent="center"
      >
        {dataToShow.map((el, index) => {
          return (
            <Grid item sx={12} md={3} key={index} margin={0}>
              <DataItem el={el} />
            </Grid>
          );
        })}
      </Grid>
      <Grid mt={5}>
        <Pagination
          howManyPages={howManyPages}
          howManyElementsPerPage={howManyElementsPerPage}
          pageNow={pageNow}
          setPageNow={setPageNow}
        />
      </Grid>
    </div>
  );
}

export default Home;
