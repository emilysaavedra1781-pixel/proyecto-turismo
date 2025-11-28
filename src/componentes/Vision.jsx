import React from "react";
import "../style.css";
import { useGlobal } from "./ContextoGlobal";

export default function Vision() {
  const { idioma, traducciones } = useGlobal();

  if (!traducciones) return <p>Cargando...</p>;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  return (
    <section className="Logistica">
      <div className="Logistica-3">
        <img
          src="Imagen/joe-green-nsy6zTjk5hM-unsplash.jpg"
          alt="Visión Perú"
        />
      </div>

      <div className="Logistica-1">
        <h2>{t("vision_titulo")}</h2>
        <p>{t("vision_parrafo")}</p>
      </div>
    </section>
  );
}

