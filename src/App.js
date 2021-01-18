import React, { useEffect } from 'react';
import './App.scss';
import AppContext from './AppContext';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  useEffect(() => {
    
  }, [])

  return (
    <AppContext>
      <div className="App">
        <Header />
        <Search />
      </div>
    </AppContext>
  );
}

export default App;
