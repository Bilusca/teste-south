import React from 'react';
import useAppContext from '../../useAppContext';

function Favorites() {
  const {
    setSelectedModalOpen,
    favoriteComics
  } = useAppContext();

  return (
    <button onClick={() => setSelectedModalOpen(true)}>
      Favoritos selecionados ({favoriteComics.length})
    </button>
  );
}

export default Favorites;