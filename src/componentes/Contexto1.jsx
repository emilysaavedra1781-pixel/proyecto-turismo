import React from "react";
import MapaPeru from "./MapaPeru";
import "../style.css";
import Carrusel from "./Carrusel";
import { useGlobal } from "./ContextoGlobal.jsx";

function Contexto() {
  const { idioma, traducciones } = useGlobal();

 if (!traducciones) return <p>Cargando...</p>;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  return (
    <div className="contexto-container">
      <h1>{t("contexto_titulo")}</h1>

      <p>{t("contexto_parrafo1")}</p>

      {/* 📍 Mapa */}
      <div className="mapa-section">
        <MapaPeru />
      </div>

      <p>{t("contexto_parrafo2")}</p>

      {/* 🖼️ Carrusel */}
      <div className="carousel-section">
        <h3>{t("contexto_galeria")}</h3>
        <Carrusel />
      </div>
    </div>
  );
}

export default Contexto;
