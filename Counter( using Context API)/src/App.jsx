import React, { useState } from 'react';
import CounterContext from './store/CounterContext';
import Parent from './Parent';

function App() {
  const state  = useState(0);

  return (
    <CounterContext.Provider value={state}>
        <h1>Counter App using Context</h1>
        <Parent />
    </CounterContext.Provider>
  );
}

export default App;
