import React from "react";
import "./style.css";
import { useGlobal } from "./ContextoGlobal";

export default function Carousel() {
  const { idioma, traducciones } = useGlobal();

 if (!traducciones) return <p>Cargando...</p>;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  return (
    <div className="carousel-container">
      <div className="carousel">

        <div className="carousel-item">
          <img src="/Imagen-carrusel/1.jpg" alt={t("carousel_1")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/2.jpg" alt={t("carousel_2")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/3.jpg" alt={t("carousel_3")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/4.jpeg" alt={t("carousel_4")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/5.jpg" alt={t("carousel_5")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/6.jpg" alt={t("carousel_6")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/7.jpg" alt={t("carousel_7")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/8.jpg" alt={t("carousel_8")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/9.jpg" alt={t("carousel_9")} />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/10.jpg" alt={t("carousel_10")} />
        </div>

      </div>

      <button className="carousel-button carousel-button-prev">⬅️</button>
      <button className="carousel-button carousel-button-next">➡️</button>

      <div className="content-indicators" id="indicators"></div>
    </div>
  );
}


