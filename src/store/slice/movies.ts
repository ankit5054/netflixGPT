import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    nowplaying: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowplaying = action.payload;
    },
    emptyMovies: (state, action) => {
      state.nowplaying = null;
    },
  },
});

export const { addMovies } = movies.actions;
export default movies.reducer;
