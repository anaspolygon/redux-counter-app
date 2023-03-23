import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  increamentCounter,
  resetCounter,
} from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncreament = () => {
    dispatch(increamentCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count : {count}</h3>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecrement}>Decreament</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
