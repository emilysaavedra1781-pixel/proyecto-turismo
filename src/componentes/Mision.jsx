import React from "react";
import "../style.css";
import { useGlobal } from "./ContextoGlobal";

export default function Mision() {
  const { idioma, traducciones } = useGlobal();

  if (!traducciones) return null;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  return (
    <section className="Logistica">
      <div className="Logistica-1">
        <h2>{t("mision_titulo")}</h2>
        <p>{t("mision_descripcion")}</p>
      </div>

      <div className="Logistica-2">
        <img
          src="Imagen/sofia-guaico-PgwVk4P5F3I-unsplash.jpg"
          alt="Misión Perú"
        />
      </div>
    </section>
  );
}


