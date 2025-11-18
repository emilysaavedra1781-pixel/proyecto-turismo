import React from "react";
import { useGlobal } from "./ContextoGlobal";
import { textos } from "../data/traducciones";

export default function Vision() {
  const { idioma } = useGlobal();

  return (
    <section className="Logistica">
      <div className="Logistica-3">
        <img
          src="Imagen/joe-green-nsy6zTjk5hM-unsplash.jpg"
          alt="Visión Perú"
        />
      </div>

      <div className="Logistica-1">
        <h2>{textos[idioma].vision_titulo}</h2>
        <p>{textos[idioma].vision_parrafo}</p>
      </div>
    </section>
  );
}
