import React from "react";
import MapaPeru from "./MapaPeru";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../style.css";
import Carrusel from './Carrusel';
import { useGlobal } from "./ContextoGlobal.jsx";
import { textos } from "../data/traducciones.js";

function Contexto() {
  const { idioma } = useGlobal();

  return (
    <div className="contexto-container">
      <h1>{textos[idioma].contexto_titulo}</h1>

      <p>{textos[idioma].contexto_parrafo1}</p>

      {/* Mapa */}
      <div className="mapa-section">
        <MapaPeru />
      </div>

      <p>{textos[idioma].contexto_parrafo2}</p>

      {/* Carrusel */}
      <div className="carousel-section">
        <h3>{textos[idioma].contexto_galeria}</h3>
        <Carrusel />
      </div>
    </div>
  );
}

export default Contexto;