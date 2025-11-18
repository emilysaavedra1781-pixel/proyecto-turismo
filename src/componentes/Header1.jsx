import React from "react";
import "animate.css";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import { useGlobal } from "./ContextoGlobal"; 
import { textos } from "../data/traducciones";

function Header() {
  const { idioma, cambiarIdioma, modoOscuro, cambiarModo } = useGlobal();

  return (
    <header className={`header ${modoOscuro ? "modo-oscuro" : ""}`}>
      <div className="menu container">
        <Link to="/" className="logo">
          Turismo-Perú
        </Link>

        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src="/Imagen/menu.png" className="menu-icono" alt="Ícono de menú" />
        </label>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/"><i className="fa-solid fa-house"></i> {textos[idioma].inicio}</Link>
            </li>
            <li>
              <Link to="/contexto"><i className="fa-solid fa-map-location-dot"></i> {textos[idioma].contexto}</Link>
            </li>
            <li>
              <Link to="/contacto"><i className="fa-solid fa-envelope"></i> {textos[idioma].contacto}</Link>
            </li>
            <li>
              <Link to="/tablas"><i className="fa-solid fa-table"></i> {textos[idioma].tablas}</Link>
            </li>
            <li>
              <Link to="/departamentos"><i className="fa-solid fa-city"></i> {textos[idioma].departamentos}</Link>
            </li>
          </ul>
        </nav>

        {/* Botones de idioma y modo oscuro */}
        <div className="controles-header">
          <button onClick={cambiarIdioma} className="btn-lang">
            🌐 {idioma === "es" ? "ES" : "EN"}
          </button>

          <button onClick={cambiarModo} className="btn-dark">
            {modoOscuro ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <div className="header-content container">
        <h1 id="titulo" className="animate__animated animate__fadeInDown">
          {textos[idioma].titulo}
        </h1>
        <p id="descripcion" className="animate__animated animate__fadeInUp">
          {textos[idioma].descripcion}
        </p>

        <Link to="/contexto" className="btn-1">
          {textos[idioma].btnContexto}
        </Link>
      </div>
    </header>
  );
}

export default Header;




