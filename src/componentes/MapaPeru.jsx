import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useGlobal } from "./ContextoGlobal";
import "../style.css";

// 📍 Coordenadas principales de 10 regiones del Perú
const ciudades = [
  { nombre: "Lima", lat: -12.0464, lon: -77.0428 },
  { nombre: "Cusco", lat: -13.5319, lon: -71.9675 },
  { nombre: "Puno", lat: -15.8402, lon: -70.0219 },
  { nombre: "Arequipa", lat: -16.409, lon: -71.5375 },
  { nombre: "Ica", lat: -14.0678, lon: -75.7286 },
  { nombre: "Lambayeque", lat: -6.7011, lon: -79.9061 },
  { nombre: "Loreto", lat: -3.7491, lon: -73.2538 },
  { nombre: "San Martín", lat: -6.4921, lon: -76.3655 },
  { nombre: "Junín", lat: -11.1605, lon: -75.993 },
  { nombre: "Ayacucho", lat: -13.1588, lon: -74.2232 },
];

const MapaPeru = () => {
  const { idioma, traducciones } = useGlobal();
  const [clima, setClima] = useState({});
  const apiKey = "hola mundo";  // 🔑 pon tu clave de OpenWeather

  // ⚠️ Evitar errores si aún no cargan traducciones
 if (!traducciones) return <p>Cargando...</p>;

  const t = (clave) => traducciones[clave]?.[idioma] || "";

  // 🔍 Consultar clima de la ciudad
  const obtenerClima = async (ciudad) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ciudad.lat}&lon=${ciudad.lon}&appid=${apiKey}&units=metric&lang=${idioma}`;
      const { data } = await axios.get(url);

      setClima({
        nombre: ciudad.nombre,
        temp: data.main.temp,
        humedad: data.main.humidity,
        descripcion: data.weather[0].description,
        icono: data.weather[0].icon,
      });
    } catch (error) {
      console.error("Error al obtener el clima:", error);
    }
  };

  // 📍 Icono de marcador
  const icono = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
  });

  return (
    <MapContainer
      center={[-9.19, -75.0152]}
      zoom={5}
      style={{ height: "90vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {ciudades.map((ciudad, i) => (
        <Marker
          key={i}
          position={[ciudad.lat, ciudad.lon]}
          icon={icono}
          eventHandlers={{
            click: () => obtenerClima(ciudad),
          }}
        >
          <Popup>
            <h3>{ciudad.nombre}</h3>

            {clima.nombre === ciudad.nombre ? (
              <>
                <p>🌡️ {t("clima_temperatura")}: {clima.temp} °C</p>
                <p>💧 {t("clima_humedad")}: {clima.humedad}%</p>
                <p>☁️ {t("clima_descripcion")}: {clima.descripcion}</p>

                <img
                  src={`https://openweathermap.org/img/wn/${clima.icono}@2x.png`}
                  alt="icono clima"
                  width="50"
                />
              </>
            ) : (
              <p>{t("clima_hazClick")}</p>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapaPeru;

