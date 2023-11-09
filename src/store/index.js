import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setSignout: (state) => {
      state.user = null;
    },
  },
});

export const { setUserLogin, setSignout } = globalSlice.actions;

export default globalSlice.reducer;
