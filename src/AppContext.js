import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default ({ children }) => {
  const [comics, setComics] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComic, setSelectedComic] = useState({});
  const [selectedComics, setSelectedComics] = useState([]);

  const addSelectedComic = comic => {
    setSelectedComic([ ...comics, comic ]);
  } 

  const defaultContext = {
    comics,
    setComics,
    isOpen,
    setIsOpen,
    selectedComic,
    setSelectedComic,
    selectedComics,
    addSelectedComic,
  };

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};
