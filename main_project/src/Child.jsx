import React, { useContext } from 'react';
import UserContext from './store/UserContext';

function Child() {
  const user = useContext(UserContext);
  return <h3>Hello, {user}</h3>;
}

export default Child;
