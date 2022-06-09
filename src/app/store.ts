import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { fakeApiSlice } from "../features/fakeApi/fakeApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [fakeApiSlice.reducerPath]: fakeApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(fakeApiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
