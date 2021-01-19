import React, { useEffect } from 'react';
import './App.scss';
import AppContext from './AppContext';
import ComicModal from './components/ComicModal';
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
      <ComicModal />
    </AppContext>
  );
}

export default App;
