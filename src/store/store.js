import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "../features/musicSlice";

const store = configureStore({
  reducer: {
    music: musicSlice.reducer,
  },
});

export default store;
