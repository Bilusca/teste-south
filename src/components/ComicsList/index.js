import React, { useEffect } from 'react';
import useAppContext from '../../useAppContext';
import Comic from '../Comic';
import './ComicsList.scss';

function ComicsList() {
  const { comics, favoriteComics } = useAppContext();

  useEffect(() => {
    console.log(favoriteComics)
  }, [favoriteComics])

  return (
    <div className="ComicsList">
      {comics && comics.map(comic => (
        <Comic key={comic.id} comic={comic} />
      ))}
    </div>
  )
}

export default ComicsList;