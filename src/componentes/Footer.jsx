import React from "react";
import "../style.css"; // Asegúrate de tener los estilos o agregarlos al final

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* --- Sección Contacto --- */}
        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-headset icon-footer-title"></i> Contáctanos
          </h3>
          <p>
            <i className="fa-solid fa-phone icon-footer"></i> Teléfono: (01) 6167300
          </p>
          <p>
            <i className="fa-solid fa-at icon-footer"></i> Email: info@promperu.gob.pe
          </p>
        </div>

        {/* --- Sección Redes Sociales --- */}
        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-share-alt icon-footer-title"></i> Redes Sociales
          </h3>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCveRrj9wB1L5BOQV-9pvqfQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube icon-social"></i> YouTube: @promPeru
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/promperu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook icon-social"></i> Facebook: PromPeru Official
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/promperu.oficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram icon-social"></i> Instagram: @promperu
              </a>
            </li>
          </ul>
        </div>

        {/* --- Sección Ubicación --- */}
        <div className="footer-section">
          <h3>
            <i className="fa-solid fa-location-dot icon-footer-title"></i> Canales de Atención
          </h3>
          <p>
            <a
              href="https://www.google.com/maps/place/Ministerio+de+Comercio+Exterior+y+Turismo+del+Perú+(MINCETUR)/@-12.0971593,-77.0168962,16z"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-solid fa-map-marker-alt icon-footer"></i> Sede Central - Calle 1 Oeste,
              N° 50, pisos 13 y 14 - Edificio MINCETUR-PRODUCE - San Isidro - Lima
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


