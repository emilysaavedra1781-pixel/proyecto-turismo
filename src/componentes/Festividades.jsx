import React from "react";
import "../style.css";
import { useGlobal } from "./ContextoGlobal.jsx";

export default function Festividades() {
  const { idioma, traducciones } = useGlobal();

 if (!traducciones) return <p>Cargando...</p>;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  return (
    <section className="blog-container">
      <h2>{t("festividades_titulo")}</h2>

      <p>{t("festividades_parrafo_intro")}</p>

      <div className="blog-content">

        {/* INTI RAYMI */}
        <div className="blog-item">
          <img src="Imagen/images (3).jpeg" alt="Inti Raymi" />
          <h3>{t("festividades_inti_titulo")}</h3>
          <p>{t("festividades_inti_desc")}</p>
        </div>

        {/* CANDELARIA */}
        <div className="blog-item">
          <img src="Imagen/calendaria.jpg" alt="Candelaria" />
          <h3>{t("festividades_candelaria_titulo")}</h3>
          <p>{t("festividades_candelaria_desc")}</p>
        </div>

        {/* QUYLLURIT’I */}
        <div className="blog-item">
          <img 
            src="Imagen/Peregrinacion-al-Senor-de-Qoyllur-Riti.webp"
            alt="Quyllurit’i"
          />
          <h3>{t("festividades_quyllur_titulo")}</h3>
          <p>{t("festividades_quyllur_desc")}</p>
        </div>

      </div>

      <a href="#" className="btn-1">{t("festividades_boton_info")}</a>
    </section>
  );
}

