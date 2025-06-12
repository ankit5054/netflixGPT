import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    accesstoken: "",
    refreshtoken: "",
    displayName: "",
    email: "",
    uid: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { accessToken, refreshToken, displayName, email, uid } =
        action.payload;
      state.accesstoken = accessToken;
      state.refreshtoken = refreshToken;
      state.displayName = displayName;
      state.email = email;
      state.uid = uid;
    },
    removeUser: (state) => {
      state.accesstoken = "";
      state.refreshtoken = "";
      state.displayName = "";
      state.uid = "";
      state.email = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
