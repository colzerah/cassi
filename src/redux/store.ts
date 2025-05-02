import { configureStore } from "@reduxjs/toolkit";
import cassiReducer from "./cassi/slice";

export const store = configureStore({
  reducer: {
    cassiState: cassiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
}
