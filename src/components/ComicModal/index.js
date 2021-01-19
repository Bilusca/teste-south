import React from 'react';
import ReactModal from 'react-modal';
import useAppContext from '../../useAppContext';
import './ComicModal.scss';

ReactModal.setAppElement('#root');

function ComicModal() {
  const { isOpen, setIsOpen, selectedComic, setSelectedComic } = useAppContext();

  const handleClose = () => {
    setIsOpen(false);
    setSelectedComic({});
  }

  return (
    <ReactModal className="ComicModal" overlayClassName="overlay" isOpen={isOpen} >
      <button onClick={() => handleClose()} className="close-button">Fechar</button>
      { selectedComic.id && (
        <>
          <h4 className="modal-title">{selectedComic.title}</h4>
          <div className="modal-infos">
            <img src={`${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`} alt={selectedComic.title} />
            <div className="basic-infos">
              <p className="title">Criadores:</p>
              { selectedComic.creators && selectedComic.creators.items.map(creator => (
                <p key={creator.resourceURI}>{creator.name} ({creator.role})</p>
              ))}
              <p className="title">Número de páginas:</p>
              <p>{selectedComic.pageCount}</p>
            </div>
          </div>
        </>
      )}
    </ReactModal>
  )
}

export default ComicModal;