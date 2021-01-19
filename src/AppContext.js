import React, { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const AppContext = createContext();

export default ({ children }) => {
  const [comics, setComics] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComic, setSelectedComic] = useState({});
  const [favoriteComics, setFavoriteComics] = useState([]);
  const [selectedModalOpen, setSelectedModalOpen] = useState(false);

  const addFavoriteComic = (comic) => {
    const comicExists = favoriteComics.findIndex(fComic => comic.id === fComic.id );

    if(comicExists === -1) {
      setFavoriteComics([...favoriteComics, comic]);
      toast.success('Quadrinho adicionado aos favoritos!');
    } else {
      toast.error('Esse quadrinho já foi adicionado!');
    }
  };

  const defaultContext = {
    comics,
    setComics,
    isOpen,
    setIsOpen,
    selectedComic,
    setSelectedComic,
    favoriteComics,
    addFavoriteComic,
    selectedModalOpen,
    setSelectedModalOpen
  };

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};
