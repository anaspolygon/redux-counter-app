import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

export const increamentCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
