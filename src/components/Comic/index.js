import React from "react";

import useAppContext from "../../useAppContext";
import "./Comic.scss";

function Comic(props) {
  const {
    comic: { title, thumbnail },
    comic,
  } = props;
  const { setSelectedComic, setIsOpen } = useAppContext();

  const handleSelection = () => {
    setSelectedComic(comic);
    setIsOpen(true);
  };

  return (
    <div className="Comic" onClick={() => handleSelection()}>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      <div className="hover-item">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Comic;
