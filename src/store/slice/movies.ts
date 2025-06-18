import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    nowplaying: null,
    popularMovies: null,
    topRated: null,
    upcoming: null,
    aiRecommended: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowplaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
    },
    addAiRecommended: (state, action) => {
      state.aiRecommended = action.payload;
    },
    emptyMovies: (state) => {
      state.nowplaying = null;
      state.popularMovies = null;
      state.topRated = null;
      state.upcoming = null;
    },
  },
});

export const {
  addMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  emptyMovies,
  addAiRecommended,
} = movies.actions;
export default movies.reducer;
