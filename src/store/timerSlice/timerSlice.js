import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTimer: (state, action) => {
      state.days = action.payload.days;
      state.hours = action.payload.hours;
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
    },
    resetTimer: (state) => {
      state.days = "00";
      state.hours = "00";
      state.minutes = "00";
      state.seconds = "00";
    },
  },
});

export const { updateTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
