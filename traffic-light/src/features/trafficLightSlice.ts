import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';

type LightState = 'red' | 'orange' | 'green' | 'yellow';
interface TrafficLightState {
  currentLight: LightState;
  message: string;
}

const initialState: TrafficLightState = {
  currentLight: 'red',
  message: 'Stop! The Light is red.',
};

const trafficLightSlice =
  createSlice({
    name: 'trafficLight',
    initialState,
    reducers: {
      changeLight: (state, action: PayloadAction<LightState>) => {
        state.currentLight = action.payload;
        switch (action.payload) {
          case 'red':
            state.message = 'Stop! The light is red.';
            break;
          case 'orange':
            state.message = 'Get ready! The light is orange.';
            break;
          case 'green':
            state.message = 'Go! The light is green.';
            break;
          case 'yellow':
            state.message = 'Caution! The light is yellow.';
            break;
        }
      }
    }
  })

export const { changeLight } = trafficLightSlice.actions;
export const selectTrafficLight = (state: RootState) => state.trafficLight;
export default trafficLightSlice.reducer;
