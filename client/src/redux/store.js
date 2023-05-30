import { configureStore } from "@reduxjs/toolkit";

import { heroReducer } from "./slice";

export const store = configureStore({
  reducer: {
    heroes: heroReducer,
  },
});
