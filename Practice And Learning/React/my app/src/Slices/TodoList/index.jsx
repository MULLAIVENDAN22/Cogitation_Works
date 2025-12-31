import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { v4 as generateId } from "uuid";

const initialState = {
  tasks: [
   
  ],
};

const TodoSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    AddTask(state, action) {
      state.tasks.push({
        id: generateId(),
        name: action.payload,
        status: false,
      });
    },
    ChangeStatus(state, action) {
      state.tasks.forEach((element) => {
        if (element.id == action.payload) {
          element.status = !element.status;
        }
      });
    },
    EditTask(state, action) {
      state.tasks.forEach((element) => {
        if (element.id == action.payload.id) {
          element.name = action.payload.name;
        }
      });
    },
    DeleteTask(state, action) {
      state.tasks.forEach((element, index) => {
        if (element.id == action.payload) {
          state.tasks.splice(index, 1);
          return;
        }
      });
    },
  },
});

export const { AddTask, ChangeStatus, EditTask, DeleteTask } =
  TodoSlice.actions;

const TodoReducer = TodoSlice.reducer;
export default TodoReducer;
