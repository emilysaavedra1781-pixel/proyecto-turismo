import React from "react";
import "../style.css";
import { useGlobal } from "./ContextoGlobal.jsx";

function Footer() {
  const { idioma, traducciones } = useGlobal();

 if (!traducciones) return <p>Cargando...</p>;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-headset icon-footer-title"></i>
            {t("footer_contactanos")}
          </h3>
          <p>
            <i className="fa-solid fa-phone icon-footer"></i>
            {t("footer_telefono")}: (01) 6167300
          </p>
          <p>
            <i className="fa-solid fa-at icon-footer"></i>
            {t("footer_email")}: info@promperu.gob.pe
          </p>
        </div>

        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-share-alt icon-footer-title"></i>
            {t("footer_redes")}
          </h3>

          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCveRrj9wB1L5BOQV-9pvqfQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube icon-social"></i>
                {t("footer_youtube")}
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/promperu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook icon-social"></i>
                {t("footer_facebook")}
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/promperu.oficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram icon-social"></i>
                {t("footer_instagram")}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-location-dot icon-footer-title"></i>
            {t("footer_canales")}
          </h3>

          <p>
            <a
              href="https://www.google.com/maps/place/Ministerio+de+Comercio+Exterior+y+Turismo+del+Perú+(MINCETUR)"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-solid fa-map-marker-alt icon-footer"></i>
              {t("footer_direccion")}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;




