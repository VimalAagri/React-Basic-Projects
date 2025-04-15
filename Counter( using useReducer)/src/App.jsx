import React from "react";
import { CounterProvider } from "./store/CounterContext";
import Counter from "./Counter";

function App() {
  return (
    <CounterProvider>
      <Counter>
        <h1>Counter App using Context</h1>
      </Counter>
    </CounterProvider>
  );
}

export default App;
