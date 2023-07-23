import React from "react";
import "../Stylesheets/Detail.css";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const {
    nombre,
    nombreOriginalJapones,
    afiliacion,
    imagen3,
    ubicacion,
    salud,
    recompensa,
    ecosDeSangreObtenidos,
    defensaFisica,
    defContundente,
    defensaContraataque,
    defensaFuego,
    defensaRelampago,
    defensaSangre,
    defensaArcana,
    defensaVenenoLento,
    defensaVenenoRapido,
    puntoDebil,
    debilidad,
    fasesDurantePelea,
  } = useParams();

  const navigate = useNavigate();

  const handleOnClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/bryan-heredia-86639a241/";
  };

  return (
    <div className="detail-container">
      <nav>
        <br />
        <br />
        <button className="buttonMenu" onClick={() => navigate("/")}>
          Cerrar Sesion
        </button>
        <br />
        <br />
        <button className="buttonMenu" onClick={() => navigate("/Listado")}>
          item
        </button>
        <br />
        <br />
      </nav>

      <div className="contenedor-title">
        <h1>Pelea contra: {nombre}</h1>
        <div className="contenedor-caracteristicas">
          <div className="contenedor-imagen">
            <img
              className="imagen"
              src={require(`../images/${imagen3}.jpg`)}
              alt={"foto de " + nombre}
            />
          </div>

          <div className="contenedor-texto">
            <p className="caracteristicas">
              <strong>Nombre: {nombre}</strong>
              <br />
              <strong>Nombre en Japonés: {nombreOriginalJapones}</strong>
              <br />
              <strong>Afiliación: {afiliacion}</strong>
              <br />
              <strong>Ubicación: {ubicacion}</strong>
              <br />
              <strong>Salud: {salud}</strong>
              <br />
              <strong>Recompensa: {recompensa}</strong>
              <br />
              <strong>Ecos de Sangre: {ecosDeSangreObtenidos}</strong>
              <br />
              <strong>Defensa Física: {defensaFisica}</strong>
              <br />
              <strong>Defensa contra daño contundente: {defContundente}</strong>
              <br />
              <strong>Defensa contraataque: {defensaContraataque}</strong>
              <br />
              <strong>Defensa daños de fuego: {defensaFuego}</strong>
              <br />
              <strong>Defensa daños de relámpago: {defensaRelampago}</strong>
              <br />
              <strong>Defensa daños de sangre: {defensaSangre}</strong>
              <br />
              <strong>Defensa arcana: {defensaArcana}</strong>
              <br />
              <strong>Defensa contra veneno lento: {defensaVenenoLento}</strong>
              <br />
              <strong>Defensa contra veneno rápido: {defensaVenenoRapido}</strong>
              <br />
              <strong>Punto débil: {puntoDebil}</strong>
              <br />
              <strong>Debilidad: {debilidad}</strong>
              <br />
              <strong>Fases durante la Pelea: {fasesDurantePelea}</strong>
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="box">
        <strong>
          <p className="creador">
            Sobre creador
            <br />
            Bryan Heredia
            <br /> Estudiante Front End
            <br /> Universidad Distrital Francisco José de Caldas
          </p>
        </strong>
        <strong>
          <p className="siguenos">Apoyo a futuros proyectos</p>
        </strong>

        <button className="canal" onClick={handleOnClick}>
          Contactanos
        </button>
      </div>

      <footer className="pie-pagina">
        <br />
        <br />
        <div className="box">
          <strong>
            <p className="creador">
              Sobre creador
              <br />
              Bryan Heredia
              <br /> Estudiante Front End
              <br /> Universidad Distrital Francisco José de Caldas
            </p>
          </strong>
          <strong>
            <p className="apoyo">Apoyo a futuros proyectos</p>
          </strong>

          <button className="contacto" onClick={handleOnClick}>
            Contactanos
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Detail;