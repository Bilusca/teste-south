import React from "react";

import wolverine from "../../images/wolverine.png";
import "./BlankState.scss";

function BlankState() {
  return (
    <div className="BlankState">
      <img src={wolverine} alt="Wolverine" />
      <h2>
        Ta esperando o que?!
        <br /> Ache logo seu quadrinho favorito!
      </h2>
    </div>
  );
}

export default BlankState;
