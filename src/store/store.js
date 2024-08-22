import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice/timerSlice";
import formSlice from "./Slices/formSlice";
import EsHamadzaynEmSlice from "./Slices/EsHamadzaynEmSlice";

const store = configureStore({
  reducer: {
    form: formSlice,
    timer: timerReducer,
    esHamadzaynEm: EsHamadzaynEmSlice,
  },
});

export default store;
