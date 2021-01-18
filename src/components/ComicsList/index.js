import React from 'react';
import useAppContext from '../../useAppContext';
import Comic from '../Comic';
import './ComicsList.scss';

function ComicsList() {
  const { comics } = useAppContext();

  return (
    <div className="ComicsList">
      {comics && comics.map(comic => (
        <Comic comic={comic} />
      ))}
    </div>
  )
}

export default ComicsList;