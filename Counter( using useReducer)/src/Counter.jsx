import React, { useContext } from "react";
import { CounterContext } from "./store/CounterContext";

function CounterComponent() {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
      <button onClick={() => dispatch({ type: "RESET" })}>🔁</button>
    </div>
  );
}

export default CounterComponent;
