import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    Increment: (state) => {
      return { count: state.count + 1 };
    },

    Decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { Increment, Decrement } = CounterSlice.actions;

const CounterReducer = CounterSlice.reducer;

export default CounterReducer;
