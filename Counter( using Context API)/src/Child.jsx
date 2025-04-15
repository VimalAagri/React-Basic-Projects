import React, { useContext } from 'react';
import CounterContext from './store/CounterContext';

function Child() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Child;
