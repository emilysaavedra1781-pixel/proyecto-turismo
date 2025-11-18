import React from "react";
import { useGlobal } from "./ContextoGlobal";
import { textos } from "../data/traducciones";

export default function Primero() {
  const { idioma } = useGlobal();

  return (
    <main id="primero" className="Primero">
      <div className="Primero-content container">
        
        <h2>{textos[idioma].primero_titulo}</h2>

        <div className="Primero-grupo">
          
          <div className="Primero-1">
            <img src="Imagen/lulu.png" alt="Patrimonio" />
            <h3>{textos[idioma].primero_pat_titulo}</h3>
          </div>

          <div className="Primero-2">
            <img src="Imagen/3-removebg-preview.png" alt="Gastronomía" />
            <h3>{textos[idioma].primero_gast_titulo}</h3>
          </div>

          <div className="Primero-3">
            <img src="Imagen/2.png" alt="Cultura Viva" />
            <h3>{textos[idioma].primero_cultura_titulo}</h3>
          </div>
        </div>

        <p>{textos[idioma].primero_parrafo}</p>

        <a href="#" className="btn-1">
          {textos[idioma].primero_boton}
        </a>
      </div>
    </main>
  );
}
