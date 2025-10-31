import React from "react";
import "animate.css";
import "swiper/css";
import "swiper/css/bundle";


function Header() {
  return (
    <header className="header">
      <div className="menu container">
        <a href="#" className="logo">
          Turismo-Perú
        </a>

        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src="/Imagen/menu.png" className="menu-icono" alt="Ícono de menú" />
        </label>

        <nav className="navbar">
          <ul>
            <li>
              <a href="#"><i className="fa-solid fa-house"></i>Inicio</a>
            </li>
            <li>
              <a href="#"><i className="fa-solid fa-map-location-dot"></i>Contexto</a>
            </li>
            <li>
              <a href="#"><i className="fa-solid fa-envelope"></i>Contacto</a>
            </li>
            <li>
              <a href="#"><i className="fa-solid fa-table"></i>Tablas</a>
            </li>
            <li>
              <a href="#"><i className="fa-solid fa-city"></i>Departamentos</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-content container">
        <h1 id="titulo" className="animate__animated animate__fadeInDown">
          “Explora lo Mejor del Perú”
        </h1>
        <p id="descripcion" className="animate__animated animate__fadeInUp">
          “Perú es un destino lleno de historia, cultura y naturaleza. Desde la majestuosidad de
          Machu Picchu y las misteriosas Líneas de Nazca, hasta la belleza del Amazonas y la
          gastronomía reconocida mundialmente, cada región ofrece experiencias únicas. Nuestro
          objetivo es guiarte en la aventura de descubrir los 10 departamentos más representativos
          del país, mostrando sus atractivos, tradiciones y la calidez de su gente 👌.”
        </p>

        <a href="#" className="btn-1">
          Contexto
        </a>
      </div>
    </header>
  );
}

export default Header;
