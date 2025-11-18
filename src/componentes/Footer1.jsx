import React from "react";
import { useGlobal } from "./ContextoGlobal.jsx";
import { textos } from "../data/traducciones.js";
import "../style.css";

function Footer() {
  const { idioma } = useGlobal();
  const t = textos[idioma].footer;

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* --- Sección Contacto --- */}
        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-headset icon-footer-title"></i> {t.contactanos}
          </h3>
          <p>
            <i className="fa-solid fa-phone icon-footer"></i> {t.telefono}: (01) 6167300
          </p>
          <p>
            <i className="fa-solid fa-at icon-footer"></i> {t.email}: info@promperu.gob.pe
          </p>
        </div>

        {/* --- Redes Sociales --- */}
        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-share-alt icon-footer-title"></i> {t.redes}
          </h3>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCveRrj9wB1L5BOQV-9pvqfQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube icon-social"></i> {t.youtube}
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/promperu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook icon-social"></i> {t.facebook}
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/promperu.oficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram icon-social"></i> {t.instagram}
              </a>
            </li>
          </ul>
        </div>

        {/* --- Ubicación --- */}
        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-location-dot icon-footer-title"></i> {t.canales}
          </h3>

          <p>
            <a
              href="https://www.google.com/maps/place/Ministerio+de+Comercio+Exterior+y+Turismo+del+Perú+(MINCETUR)/@-12.0971593,-77.0168962,16z"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-solid fa-map-marker-alt icon-footer"></i>
              {t.direccion}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;


