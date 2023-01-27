import { configureStore } from "@reduxjs/toolkit";

import uiSlice from './ui-slice';
import counterReducer from "./counter";

const store = configureStore({
    reducer: { counter: counterReducer,  active: uiSlice.reducer},
  });

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
