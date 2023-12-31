import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Features/customerSlice.js";

const store = configureStore({
  reducer: {
    customer: customerReducer
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
