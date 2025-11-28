import React from "react";
import "./style.css";
import { useGlobal } from "./ContextoGlobal";

export default function Primero() {
  const { idioma, traducciones } = useGlobal();

  if (!traducciones) return null;

  // 🔹 Helper para obtener texto traducido
  const t = (clave) => traducciones[clave]?.[idioma] || "";

  return (
    <main id="primero" className="Primero">
      <div className="Primero-content container">
        
        <h2>{t("primero_titulo")}</h2>

        <div className="Primero-grupo">
          
          <div className="Primero-1">
            <img src="Imagen/lulu.png" alt="Patrimonio" />
            <h3>{t("primero_pat_titulo")}</h3>
          </div>

          <div className="Primero-2">
            <img src="Imagen/3-removebg-preview.png" alt="Gastronomía" />
            <h3>{t("primero_gast_titulo")}</h3>
          </div>

          <div className="Primero-3">
            <img src="Imagen/2.png" alt="Cultura Viva" />
            <h3>{t("primero_cultura_titulo")}</h3>
          </div>
        </div>

        <p>{t("primero_parrafo")}</p>

        <a href="#" className="btn-1">
          {t("primero_boton")}
        </a>
      </div>
    </main>
  );
}


