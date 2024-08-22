import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    isOpen: false,
    error: "",
    success: "",
    loading: false,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetForm: (state) => {
      state.error = "";
      state.success = "";
      state.loading = false;
    },
  },
});

export const { setIsOpen, setError, setSuccess, setLoading, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
