import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import movieReducer from "./slice/movies";
import featureReducer from "./slice/feature";
const NetflixGPTStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    feature: featureReducer,
  },
  devTools: false,
});

export default NetflixGPTStore;
