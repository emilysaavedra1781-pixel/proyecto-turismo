import React, { useState } from "react";
import "./style.css";
import { useGlobal } from "./ContextoGlobal";

export default function Carousel() {
  const { idioma, traducciones } = useGlobal();

  if (!traducciones) return <p>Cargando...</p>;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  const [index, setIndex] = useState(0);

  const total = 10;

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">

      <div
        className="carousel"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: "transform 0.5s ease-in-out",
          display: "flex",
          width: "100%",
        }}
      >

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

      <button
        className="carousel-button carousel-button-prev"
        onClick={prevSlide}
      >
        ⬅️
      </button>

      <button
        className="carousel-button carousel-button-next"
        onClick={nextSlide}
      >
        ➡️
      </button>

      <div className="content-indicators">
        {[...Array(total)].map((_, i) => (
          <span
            key={i}
            className={`indicator ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

    </div>
  );
}



