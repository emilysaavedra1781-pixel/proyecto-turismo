import React from "react";
import { useGlobal } from "./ContextoGlobal";
import { textos } from "../data/traducciones";

export default function Mision() {
  const { idioma } = useGlobal();

  return (
    <section className="Logistica">
      <div className="Logistica-1">
        <h2>{textos[idioma].mision_titulo}</h2>

        <p>{textos[idioma].mision_descripcion}</p>
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
