import { configureStore } from "@reduxjs/toolkit";
import trafficLightReducer from "./features/trafficLightSlice";

export const store = configureStore({
  reducer: {
    trafficLight: trafficLightReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch