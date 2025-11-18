import React from "react";
import "./style.css";


export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel">

        <div className="carousel-item">
          <img src="/Imagen-carrusel/1.jpg" alt="Calles antiguas en Cusco" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/2.jpg" alt="Valle del Colca" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/3.jpg" alt="Costa de Lima" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/4.jpeg" alt="Catedral de Arequipa" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/5.jpg" alt="Catedral de Cusco" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/6.jpg" alt="Iglesia de San Francisco" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/7.jpg" alt="Ceviche peruano" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/8.jpg" alt="Uros Puno" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/9.jpg" alt="Lago Titicaca" />
        </div>
        <div className="carousel-item">
          <img src="/Imagen-carrusel/10.jpg" alt="Mirador Huajsapata" />
        </div>

      </div>

      <button className="carousel-button carousel-button-prev">⬅️</button>
      <button className="carousel-button carousel-button-next">➡️</button>

      <div className="content-indicators" id="indicators"></div>
    </div>
  );
}

