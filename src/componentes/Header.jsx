import React, { useContext } from "react";
import "animate.css";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import { GlobalContext } from "./ContextoGlobal"; // 👈 Importamos el contexto

function Header() {
  const { darkMode, toggleDarkMode, language, toggleLanguage, translations } = useContext(GlobalContext);

  return (
    <header className={`header ${darkMode ? "dark-mode" : ""}`}>
      <div className="menu container">
        <Link to="/" className="logo">Turismo-Perú</Link>

        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src="/Imagen/menu.png" className="menu-icono" alt="Ícono de menú" />
        </label>

        <nav className="navbar">
          <ul>
            <li><Link to="/"><i className="fa-solid fa-house"></i> {translations[language].inicio}</Link></li>
            <li><Link to="/contexto"><i className="fa-solid fa-map-location-dot"></i> {translations[language].contexto}</Link></li>
            <li><Link to="/contacto"><i className="fa-solid fa-envelope"></i> {translations[language].contacto}</Link></li>
            <li><Link to="/tablas"><i className="fa-solid fa-table"></i> {translations[language].tablas}</Link></li>
            <li><Link to="/departamentos"><i className="fa-solid fa-city"></i> {translations[language].departamentos}</Link></li>
          </ul>
        </nav>

        {/* 🔘 Botones de idioma y modo oscuro */}
        <div className="controles-header">
          <button onClick={toggleLanguage} className="btn-lang">
            🌐 {language === "es" ? "ES" : "EN"}
          </button>

          <button onClick={toggleDarkMode} className="btn-dark">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <div className="header-content container">
        <h1 id="titulo" className="animate__animated animate__fadeInDown">
          {translations[language].titulo}
        </h1>
        <p id="descripcion" className="animate__animated animate__fadeInUp">
          {translations[language].descripcion}
        </p>

        <Link to="/contexto" className="btn-1">{translations[language].btnContexto}</Link>
      </div>
    </header>
  );
}

export default Header;




/*/
import React from "react";
import "animate.css";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom"; // 👈 ESTA LÍNEA ES CLAVE

function Header() {
  return (
    <header className="header">
      <div className="menu container">
        <Link to="/" className="logo">Turismo-Perú</Link>

        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src="/Imagen/menu.png" className="menu-icono" alt="Ícono de menú" />
        </label>

        <nav className="navbar">
  <ul>
    <li>
      <Link to="/"><i className="fa-solid fa-house"></i> Inicio</Link>
    </li>
    <li>
      <Link to="/contexto"><i className="fa-solid fa-map-location-dot"></i> Contexto</Link>
    </li>
    <li>
      <Link to="/contacto"><i className="fa-solid fa-envelope"></i> Contacto</Link>
    </li>
    <li>
      <Link to="/tablas"><i className="fa-solid fa-table"></i> Tablas</Link>
    </li>
    <li>
      <Link to="/departamentos"><i className="fa-solid fa-city"></i> Departamentos</Link>
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

        <Link to="/contexto" className="btn-1">Contexto</Link>
      </div>
    </header>
  );
}

export default Header;
/*/
