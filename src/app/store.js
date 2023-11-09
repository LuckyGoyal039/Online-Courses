import globalReducer from "../store/index";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default store;
