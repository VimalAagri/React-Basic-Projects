import React, { createContext, useReducer } from "react";

// Initial State
const initialState = 0;

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

// Create Context
export const CounterContext = createContext();

// Context Provider
export function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
