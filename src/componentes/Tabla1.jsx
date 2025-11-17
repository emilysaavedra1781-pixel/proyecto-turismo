import React from "react";
import "../style.css";
import Persona2 from "./Persona2";

export default function Tabla() {
  return (
    <>
      {/* Componente Persona2 separado */}
      <Persona2 />

      {/* Tabla */}
      <section className="seccion-tabla mostrar-tabla">
        <h2>Tabla Comparativa: Destinos Turísticos del Perú</h2>

        <table id="tabla-comparativa">
          <thead>
            <tr>
              <th>Departamento</th>
              <th>Clima Predominante</th>
              <th>Comida Típica Destacada</th>
              <th>Destino Turístico Clave</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Cusco</td>
              <td>Frío y Seco (Andes)</td>
              <td>Chiri Uchu, Cuy Chactado</td>
              <td>Machu Picchu</td>
            </tr>

            <tr>
              <td>Lima</td>
              <td>Templado, Húmedo (Costa Central)</td>
              <td>Ceviche, Lomo Saltado</td>
              <td>Centro Histórico, Costa Verde</td>
            </tr>

            <tr>
              <td>Puno</td>
              <td>Frío Extremo (Altiplano)</td>
              <td>Thimpu, Sopa de Quinua</td>
              <td>Lago Titicaca (Islas de los Uros)</td>
            </tr>

            <tr>
              <td>Arequipa</td>
              <td>Templado, Seco y Soleado</td>
              <td>Rocoto Relleno, Adobo Arequipeño</td>
              <td>Cañón del Colca, Monasterio de Santa Catalina</td>
            </tr>

            <tr>
              <td>Ica</td>
              <td>Cálido y Seco (Costa Sur)</td>
              <td>Carapulcra, Sopa Seca</td>
              <td>Huacachina, Reserva de Paracas</td>
            </tr>

            <tr>
              <td>Lambayeque</td>
              <td>Cálido y Húmedo (Costa Norte)</td>
              <td>Seco de Cabrito, Arroz con Pato</td>
              <td>Museo Tumbas Reales de Sipán</td>
            </tr>

            <tr>
              <td>Loreto</td>
              <td>Tropical, Lluvioso y Cálido (Selva)</td>
              <td>Juane, Tacacho con Cecina</td>
              <td>Río Amazonas, Pacaya Samiria</td>
            </tr>

            <tr>
              <td>San Martín</td>
              <td>Tropical, Húmedo (Selva Alta)</td>
              <td>Juane, Nina Juane</td>
              <td>Cataratas de Ahuashiyacu, Laguna Azul</td>
            </tr>

            <tr>
              <td>Junín</td>
              <td>Frío de Montaña</td>
              <td>Pachamanca, Trucha Frita</td>
              <td>Nevado de Huaytapallana, Valle del Mantaro</td>
            </tr>

            <tr>
              <td>Ayacucho</td>
              <td>Templado y Seco</td>
              <td>Puca Picante, Caldo de Gallina</td>
              <td>Pampas de Quinua, Retablos</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
