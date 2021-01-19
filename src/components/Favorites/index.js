import React from "react";

import useAppContext from "../../useAppContext";
import "./Favorites.scss";

function Favorites() {
  const { setSelectedModalOpen, favoriteComics } = useAppContext();

  return (
    <div className="Favorites">
      {favoriteComics.length > 0 && (
        <button onClick={() => setSelectedModalOpen(true)}>
          Favoritos selecionados
        </button>
      )}
    </div>
  );
}

export default Favorites;
