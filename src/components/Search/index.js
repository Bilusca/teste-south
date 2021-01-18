import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import comicsService from "../../services/comics";
import useAppContext from '../../useAppContext';

function Search() {
  const [comic, setComic] = useState('');
  const { setComics } = useAppContext();

  const searchComic = () => {
    comicsService.getComics(comic).then((resp) => {
      console.log(resp.data)
      setComics(resp.data.data.results)
    });
  }

  const debounceSearch = useCallback(debounce(searchComic, 500), [comic]);

  useEffect(() => {
    if(comic) {
      debounceSearch();
      return debounceSearch.cancel;
    }
  }, [comic, debounceSearch]);

  const handleChange = event => {
    setComic(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={comic}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
