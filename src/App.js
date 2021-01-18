import React, { useEffect } from 'react';
import './App.scss';
import AppContext from './AppContext';
import ComicsList from './components/ComicsList';
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
        <ComicsList />
      </div>
    </AppContext>
  );
}

export default App;
