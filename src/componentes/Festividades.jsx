import React from "react";
import { textos } from "../data/traducciones.js";
import { useGlobal } from "./ContextoGlobal.jsx";

export default function Festividades() {
  const { idioma } = useGlobal();
  const t = textos[idioma].festividades;

  return (
    <section className="blog-container">
      <h2>{t.titulo}</h2>

      <p>{t.parrafo_intro}</p>

      <div className="blog-content">

        {/* INTI RAYMI */}
        <div className="blog-item">
          <img src="Imagen/images (3).jpeg" alt="Inti Raymi" />
          <h3>{t.inti_titulo}</h3>
          <p>{t.inti_desc}</p>
        </div>

        {/* CANDELARIA */}
        <div className="blog-item">
          <img src="Imagen/calendaria.jpg" alt="Candelaria" />
          <h3>{t.candelaria_titulo}</h3>
          <p>{t.candelaria_desc}</p>
        </div>

        {/* QUYLLURIT’I */}
        <div className="blog-item">
          <img src="Imagen/Peregrinacion-al-Senor-de-Qoyllur-Riti.webp" alt="Quyllurit’i" />
          <h3>{t.quyllur_titulo}</h3>
          <p>{t.quyllur_desc}</p>
        </div>

      </div>

      <a href="#" className="btn-1">{t.boton_info}</a>
    </section>
  );
}
