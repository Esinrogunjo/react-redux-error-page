import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./errorSlice";

const store = configureStore({
  reducer: {
    errorReducer: errorSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
