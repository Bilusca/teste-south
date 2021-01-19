import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import AppContext from './AppContext';
import ComicModal from './components/ComicModal';
import ComicsList from './components/ComicsList';
import Favorites from './components/Favorites';
import Header from './components/Header';
import Search from './components/Search';
import SelectedComics from './components/SelectedComics';

function App() {

  return (
    <AppContext>
      <div className="App">
        <Header />
        <Search />
        <ComicsList />
        <Favorites />
      </div>
      <ComicModal />
      <SelectedComics />
      <ToastContainer />
    </AppContext>
  );
}

export default App;
