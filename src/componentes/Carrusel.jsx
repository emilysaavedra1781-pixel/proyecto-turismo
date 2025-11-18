// src/componentes/Carrusel.jsx
import React, { useState, useEffect } from "react";
// Importar datos del carrusel
import { destinosCarrusel } from "../data/destinosCarrusel"; 

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = destinosCarrusel.length;

  useEffect(() => {
    // Función para avanzar al siguiente slide
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const intervalId = setInterval(nextSlide, 4000); // Cambio automático

    // Función de limpieza: CLAVE para evitar problemas de renderizado al desmontar
    return () => clearInterval(intervalId);
  }, [totalSlides]);

  const translateX = -currentIndex * 100;

  // Botones de navegación manual (opcional, pero útil)
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {destinosCarrusel.map((item) => (
          <div className="carousel-item" key={item.id}>
            <img src={item.url} alt={item.alt} />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button className="carousel-button carousel-button-prev" onClick={goToPrev}>
        &#10094; {/* Icono de flecha izquierda */}
      </button>
      <button className="carousel-button carousel-button-next" onClick={goToNext}>
        &#10095; {/* Icono de flecha derecha */}
      </button>

      {/* Indicadores (Dots) */}
      <div className="content-indicators">
        {destinosCarrusel.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
