import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "animes3.p.rapidapi.com",
    "X-RapidAPI-Key": "d75ae8d86cmsh6c169d1c815de61p1b7774jsn0101c492a8ed",
  },
};

export const callToAPI = createAsyncThunk(
  "api/music",
  async (obj, { state, error }) => {
    try {
      const response = await fetch("https://animes3.p.rapidapi.com/", options);
      const request = await response.json();

      return request;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

const musicSlice = createSlice({
  name: "music",
  initialState: [],
  reducers: {},
  extraReducers: {
    [callToAPI.fulfilled]: (state, action) => {
      return action.payload;
    },
    [callToAPI.rejected]: (state, action) => {
      return [];
    },
  },
});

export const actions = musicSlice.actions;
export default musicSlice;
