import React from "react";

import useAppContext from "../../useAppContext";
import BlankState from "../BlankState";
import Comic from "../Comic";
import "./ComicsList.scss";

function ComicsList() {
  const { comics } = useAppContext();

  return (
    <>
      <div className="ComicsList">
        {comics &&
          comics.map((comic) => <Comic key={comic.id} comic={comic} />)}
      </div>
      {!comics.length && <BlankState />}
    </>
  );
}

export default ComicsList;
