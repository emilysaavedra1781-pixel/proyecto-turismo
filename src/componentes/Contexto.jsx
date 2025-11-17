import React from "react";
import MapaPeru from "../componentes/MapaPeru";
import Carrusel from "../componentes/Carrusel"; // ⬅️ importas el carrusel
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../style.css";

function Contexto() {
  return (
    <div className="contexto-container">
      <h1>Contexto Turístico del Perú</h1>

      <p>
        El Perú es un país lleno de diversidad cultural, geográfica y natural.
        Cada región ofrece atractivos únicos, desde la costa hasta la selva.
        A continuación puedes explorar el mapa para conocer más sobre cada zona.
      </p>

      {/* Mapa */}
      <div className="mapa-section">
        <MapaPeru />
      </div>

      <p>
        Haz clic en las regiones o marcadores para ver información del clima y
        atractivos turísticos.
      </p>

      {/* Carrusel agregado aquí */}
      <div className="carousel-section">
        <h3>Galería de Imágenes Turísticas</h3>
        <Carrusel />
      </div>
    </div>
  );
}

export default Contexto;
