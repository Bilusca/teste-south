import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export default ({ children }) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    
  }, []);

  const defaultContext = {
    comics,
    setComics,
  };

  return <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>;
};
