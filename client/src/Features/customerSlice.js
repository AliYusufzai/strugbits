import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    data: []
  },
  reducers: {
    setCustomers: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setCustomers } = customerSlice.actions;
export const selectCustomers = (state) => state.customer.data;

export default customerSlice.reducer;
