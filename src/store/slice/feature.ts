import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    gptSearch: false,
    language: "English",
  },
  reducers: {
    toggleGpt: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleGpt, setLanguage } = featureSlice.actions;
export default featureSlice.reducer;
