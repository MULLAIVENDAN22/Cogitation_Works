import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Slices/Counter";
import TodoReducer from "../Slices/TodoList";

const Store = configureStore({
  reducer: {
    Counter: CounterReducer,
    TodoList: TodoReducer,
  },
});

export default Store;
