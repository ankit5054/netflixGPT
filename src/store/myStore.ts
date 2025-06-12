import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user";
const NetflixGPTStore = configureStore({
  reducer: {
    user:userSlice
  },
});

export default NetflixGPTStore;
