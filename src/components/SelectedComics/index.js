import React from 'react';
import ReactModal from 'react-modal';
import useAppContext from "../../useAppContext";
import EmailForm from '../EmailForm';
import './SelectedComics.scss';

function SelectedComics() {
  const {
    selectedModalOpen,
    setSelectedModalOpen,
    favoriteComics,
    removeFavoriteComic,
  } = useAppContext();

  const handleRemove = comic => {
    removeFavoriteComic(comic);

    if(favoriteComics.length === 1) {
      setSelectedModalOpen(false);
    }
  }

  return (
    <ReactModal className="SelectedComics" overlayClassName="overlay" isOpen={selectedModalOpen}>
      <button onClick={() => setSelectedModalOpen(false)} className="close-button">
        Fechar
      </button>
      <div>
        {favoriteComics.length && favoriteComics.map(comic => (          
          <div className="item" key={comic.id}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <p>{comic.title}</p>
            <button onClick={() => handleRemove(comic)}>Remover</button>
          </div>
        ))}
      </div>
      <EmailForm />
    </ReactModal>
  );
}

export default SelectedComics;