import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment } from "../Slices/Counter";

const ReduxTesting = () => {
  const { count } = useSelector((state) => state.Counter);
  console.log(count);

  const dispatch = useDispatch();

  function addCount() {
    dispatch(Increment());
  }
  function removeCount() {
    dispatch(Decrement());
  }

  return (
    <div>
      <button className="btn btn-primary" type="button" onClick={removeCount}>
        -
      </button>
      <span className="mx-4">{count}</span>
      <button className="btn btn-primary" type="button" onClick={addCount}>
        +
      </button>
    </div>
  );
};

export default ReduxTesting;
