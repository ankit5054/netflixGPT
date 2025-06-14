import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import movieReducer from "./slice/movies";
const NetflixGPTStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
  devTools:true  
});

export default NetflixGPTStore;
