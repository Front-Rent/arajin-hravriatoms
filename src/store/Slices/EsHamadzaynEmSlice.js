// esHamadzaynEmSlice.js
import { createSlice } from "@reduxjs/toolkit";

const esHamadzaynEmSlice = createSlice({
  name: "esHamadzaynEm",
  initialState: {
    isOpen: true,
    error: null,
    success: null,
    index: 0,
    showGallery: false,
    buttonVisible: false,
  },
  reducers: {
    closeForm(state) {
      state.isOpen = false;
      state.showGallery = false;
      state.buttonVisible = true;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
    setShowGallery(state, action) {
      state.showGallery = action.payload;
    },
    incrementIndex(state) {
      state.index = (state.index + 1) % 4;
    },
  },
});

export const {
  closeForm,
  setError,
  setSuccess,
  setShowGallery,
  incrementIndex,
} = esHamadzaynEmSlice.actions;
export default esHamadzaynEmSlice.reducer;
