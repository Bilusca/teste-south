import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { toast } from "react-toastify";

import loadingImg from "../../images/loading.gif";
import comicsService from "../../services/comics";
import useAppContext from "../../useAppContext";
import "./Search.scss";

function Search() {
  const [comic, setComic] = useState("");
  const [loading, setLoading] = useState(false);
  const { setComics } = useAppContext();

  const searchComic = () => {
    comicsService.getComics(comic).then((resp) => {
      if (resp.data.code === 200 && resp.data.data.results.length) {
        setComics(resp.data.data.results);
        setLoading(false);
      } else {
        toast.error("Nenhum quadrinho encontrado!");
        setLoading(false);
      }
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(debounce(searchComic, 500), [comic]);

  useEffect(() => {
    if (comic) {
      debounceSearch();
      return debounceSearch.cancel;
    } else {
      setLoading(false);
    }
  }, [comic, debounceSearch]);

  const handleChange = (event) => {
    setLoading(true);
    setComic(event.target.value);
  };

  const clearSearch = () => {
    setComics([]);
    setComic("");
  };

  return (
    <div className="Search">
      <div className="input-box">
        <input
          type="text"
          value={comic}
          onChange={handleChange}
          placeholder="Digite o quadrinho desejado"
        />
        {loading && <img src={loadingImg} alt="Loading" />}
      </div>
      <button onClick={() => clearSearch()}>Limpar busca</button>
    </div>
  );
}

export default Search;
