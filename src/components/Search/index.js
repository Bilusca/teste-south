import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import comicsService from "../../services/comics";

function Search() {
  const [comic, setComic] = useState('');

  const searchComic = () => {
    comicsService.getComics(comic).then((resp) => {
      console.log(resp);
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
