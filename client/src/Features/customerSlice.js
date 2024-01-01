import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        data: [],
    },
    reducers: {
        setCustomers: (state, action) => {
            state.data = action.payload;
        },
        addCustomer: (state, action) => {
            state.data.push(action.payload);
        },
        deleteCustomer: (state, action) => {
            state.data = state.data.filter(
                (customer) => customer.id !== action.payload
            );
        },
        setSelectedCustomerId: (state, action) => {
            state.selectedCustomerId = action.payload;
        },
    },
});

export const {
    setCustomers,
    addCustomer,
    deleteCustomer,
    setSelectedCustomerId,
} = customerSlice.actions;
export const selectCustomers = (state) => state.customer.data;
export const selectCustomersId = (state) => state.customer.selectedCustomerId;


export default customerSlice.reducer;
