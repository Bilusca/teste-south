import React from "react";
import './Comic.scss';

function Comic(props) {
  const {
    comic: { title, thumbnail },
  } = props;

  return (
    <div className="Comic">
      <p>{title}</p>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} />
    </div>
  );
}

export default Comic;
