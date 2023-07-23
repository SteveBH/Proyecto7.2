import React from "react";
import "../Stylesheets/item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Link
      to={
        "/personaje/" +
        props.nombre +
        "/" +
        props.nombreOriginalJapones +
        "/" +
        props.afiliacion +
        "/" +
        props.imagen3 +
        "/" +
        props.ubicacion +
        "/" +
        props.salud +
        "/" +
        props.recompensa +
        "/" +
        props.ecosDeSangreObtenidos +
        "/" +
        props.defensaFisica +
        "/" +
        props.defContundente +
        "/" +
        props.defensaContraataque +
        "/" +
        props.defensaFuego +
        "/" +
        props.defensaRelampago +
        "/" +
        props.defensaSangre +
        "/" +
        props.defensaArcana +
        "/" +
        props.defensaVenenoLento +
        "/" +
        props.defensaVenenoRapido +
        "/" +
        props.puntoDebil +
        "/" +
        props.debilidad +
        "/" +
        props.fasesDurantePelea +
        "/" +
        props.imagen4
      }
    >
      <div className="contenedor-testimonio">
        <article>
          <img
            className="imgen-testimonio"
            src={require(`../images/${props.imagen}.jpg`)}
            alt={"foto de " + props.nombre}
          />
          <img
            className="imagen2"
            src={require(`../images/${props.imagen2}.jpg`)}
            alt={"foto de" + props.nombre}
          />
        </article>
        <h2>{props.nombre}</h2>
        <p>{props.afiliacion}</p>
      </div>
    </Link>
  );
}

export default Item;

