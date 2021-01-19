import React from 'react';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import useAppContext from "../../useAppContext";
import './SelectedComics.scss';

function SelectedComics() {
  const {
    selectedModalOpen,
    setSelectedModalOpen,
    favoriteComics
  } = useAppContext();

  return (
    <ReactModal className="SelectedComics" overlayClassName="overlay" isOpen={selectedModalOpen}>
      <button onClick={() => setSelectedModalOpen(false)} className="close-button">
        Fechar
      </button>
      {favoriteComics.length && favoriteComics.map(comic => (
        <>
          <h4 className="modal-title">{comic.title}</h4>
        </>
      ))}
      <button onClick={() => toast('Teste de TOATESr')}>toast</button>
    </ReactModal>
  );
}

export default SelectedComics;