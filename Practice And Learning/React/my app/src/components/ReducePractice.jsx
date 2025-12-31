import React, { useReducer } from "react";
import { useState } from "react";

const initialState = {
  itemss: [],
};
const ReducePractice = () => {
  const [{itemss}, setItem] = useReducer(reducer, initialState);
  function reducer(state, {data,type}) {
    switch (type) {
      case "additem":
        return {
          ...state,
          itemss: [...state.itemss, { id: Date.now(), name: data }],
        };
      case "deleteitem":
        return {
          ...state,
          itemss: state.itemss.filter((val) => val.id != data),
        };
      case "updateitem":
        return {
          ...state,
          itemss: state.itemss.map((val) =>
            val.id == data.id ? { ...val, name: data.name } : val
          ),
        };
      default:
        return state
    }
  }
  return (
    <div>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setItem({ type: "additem", data: e.target.value });
            e.target.value = "";
          }
        }}
      />
      <div>
        <ul>
          {itemss.map((val) => (
            <li key={val.id}>
              {val.id + "      " + val.name}{" "}
              <button
                onClick={() => {
                  setItem({
                    type: "updateitem",
                    data: {
                      name: prompt("enter the name", val.name),
                      id: val.id,
                    },
                  });
                }}
              >
                update
              </button>
              <button
                onClick={() => {
                  setItem({ type: "deleteitem", data: val.id });
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReducePractice;
