import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"; // contoh slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // tambahkan reducer lain di sini
  },
});

// Type untuk state & dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
