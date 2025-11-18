import React from "react";
import { useGlobal } from "./ContextoGlobal";
import { textos } from "../data/traducciones";

export default function Intro() {
  const { idioma } = useGlobal(); // ← controla ES / EN

  return (
    <section id="Intro" className="intro">
      <div
        className="intro-content container"
        style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}
      >
        {/* TITULO PRINCIPAL */}
        <h2>{textos[idioma].intro_titulo}</h2>

        {/* PARRAFO PRINCIPAL */}
        <p className="txt-p">{textos[idioma].intro_parrafo}</p>
      </div>

      {/* TARJETAS */}
      <div className="intro-grupo container grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        {/* TARJETA 1 - Música */}
        <div className="intro-1 text-center p-4 rounded-2xl shadow">
          <img src="Imagen/musica-como-identidad-1024x1024-removebg-preview.png" alt="Musica" className="mx-auto" />
          <h3 className="text-xl font-semibold mt-3">{textos[idioma].intro_musica_titulo}</h3>
          <p>{textos[idioma].intro_musica_desc}</p>
        </div>

        {/* TARJETA 2 - Historia */}
        <div className="intro-1 text-center p-4 rounded-2xl shadow">
          <img src="Imagen/Fondo_3-removebg-preview.png" alt="Historia" className="mx-auto" />
          <h3 className="text-xl font-semibold mt-3">{textos[idioma].intro_historia_titulo}</h3>
          <p>{textos[idioma].intro_historia_desc}</p>
        </div>

        {/* TARJETA 3 - Gastronomía */}
        <div className="intro-1 text-center p-4 rounded-2xl shadow">
          <img src="Imagen/ceviche.png" alt="Gastronomía" className="mx-auto" />
          <h3 className="text-xl font-semibold mt-3">{textos[idioma].intro_gastronomia_titulo}</h3>
          <p>{textos[idioma].intro_gastronomia_desc}</p>
        </div>
      </div>

      {/* BOTÓN */}
      <div className="intro-boton container text-center mt-6">
        <button
          className="btn-1 px-6 py-2 rounded-xl shadow bg-blue-500 text-white"
          onClick={() => mostrarDepartamento()}
        >
          {textos[idioma].intro_boton}
        </button>
      </div>
    </section>
  );
}
