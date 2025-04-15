import React from 'react';
import Parent from './Parent';
import UserContext from './store/UserContext';

function App() {
  const userName = "Vimal Aagri";

  return (
    <UserContext.Provider value={userName}>
      <Parent />
    </UserContext.Provider>
  );
}

export default App;
