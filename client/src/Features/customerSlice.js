import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    data: [],
    customerId: null
  },
  reducers: {
    setCustomers: (state, action) => {
      state.data = action.payload;
    },
    addCustomer: (state, action) => {
      state.data.push(action.payload);
    },
    deleteCustomer: (state, action) => {
      const deleteCustomerId = action.payload;
      state.data.splice(deleteCustomerId, 1);
      if (state.customerId === deleteCustomerId) {
        state.customerId = null;
      }
    },
    updatedCustomer: (state, action) => {
      const newCustomer = action.payload;
      const index = state.data.findIndex(
        (customer) => customer._id === newCustomer._id
      );
      if (index !== -1) {
        state.data[index] = newCustomer;
      }
    },
    setCustomerId: (state, action) => {
      state.customerId = action.payload;
    }
  }
});

export const {
  setCustomers,
  addCustomer,
  setCustomerId,
  deleteCustomer,
  updatedCustomer
} = customerSlice.actions;

export const selectCustomers = (state) => state.customer.data;
export const selectCustomerId = (state) => state.customer.customerId;
export default customerSlice.reducer;
