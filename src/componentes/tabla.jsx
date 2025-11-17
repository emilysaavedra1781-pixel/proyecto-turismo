import React from "react";
import "../style.css";

export default function Tabla() {
  return (
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
            <td data-label="Departamento">Cusco</td>
            <td data-label="Clima Predominante">Frío y Seco (Andes)</td>
            <td data-label="Comida Típica Destacada">Chiri Uchu, Cuy Chactado</td>
            <td data-label="Destino Turístico Clave">Machu Picchu</td>
          </tr>

          <tr>
            <td data-label="Departamento">Lima</td>
            <td data-label="Clima Predominante">Templado, Húmedo (Costa Central)</td>
            <td data-label="Comida Típica Destacada">Ceviche, Lomo Saltado</td>
            <td data-label="Destino Turístico Clave">Centro Histórico, Costa Verde</td>
          </tr>

          <tr>
            <td data-label="Departamento">Puno</td>
            <td data-label="Clima Predominante">Frío Extremo (Altiplano)</td>
            <td data-label="Comida Típica Destacada">Thimpu, Sopa de Quinua</td>
            <td data-label="Destino Turístico Clave">Lago Titicaca (Islas de los Uros)</td>
          </tr>

          <tr>
            <td data-label="Departamento">Arequipa</td>
            <td data-label="Clima Predominante">Templado, Seco y Soleado</td>
            <td data-label="Comida Típica Destacada">Rocoto Relleno, Adobo Arequipeño</td>
            <td data-label="Destino Turístico Clave">
              Cañón del Colca, Monasterio de Santa Catalina
            </td>
          </tr>

          <tr>
            <td data-label="Departamento">Ica</td>
            <td data-label="Clima Predominante">Cálido y Seco (Costa Sur)</td>
            <td data-label="Comida Típica Destacada">Carapulcra, Sopa Seca</td>
            <td data-label="Destino Turístico Clave">
              Oasis de Huacachina, Reserva de Paracas
            </td>
          </tr>

          <tr>
            <td data-label="Departamento">Lambayeque</td>
            <td data-label="Clima Predominante">Cálido y Húmedo (Costa Norte)</td>
            <td data-label="Comida Típica Destacada">
              Seco de Cabrito, Arroz con Pato
            </td>
            <td data-label="Destino Turístico Clave">
              Museo Tumbas Reales de Sipán
            </td>
          </tr>

          <tr>
            <td data-label="Departamento">Loreto</td>
            <td data-label="Clima Predominante">Tropical, Lluvioso y Cálido (Selva)</td>
            <td data-label="Comida Típica Destacada">Juane, Tacacho con Cecina</td>
            <td data-label="Destino Turístico Clave">
              Río Amazonas, Reserva Nacional Pacaya Samiria
            </td>
          </tr>

          <tr>
            <td data-label="Departamento">San Martín</td>
            <td data-label="Clima Predominante">Tropical, Húmedo (Selva Alta)</td>
            <td data-label="Comida Típica Destacada">Juane, Nina Juane</td>
            <td data-label="Destino Turístico Clave">
              Cataratas de Ahuashiyacu, Laguna Azul
            </td>
          </tr>

          <tr>
            <td data-label="Departamento">Junín</td>
            <td data-label="Clima Predominante">Frío de Montaña (Sierra Central)</td>
            <td data-label="Comida Típica Destacada">Pachamanca, Trucha Frita</td>
            <td data-label="Destino Turístico Clave">
              Nevado de Huaytapallana, Valle del Mantaro
            </td>
          </tr>

          <tr>
            <td data-label="Departamento">Ayacucho</td>
            <td data-label="Clima Predominante">Templado y Seco (Sierra Sur)</td>
            <td data-label="Comida Típica Destacada">Puca Picante, Caldo de Gallina</td>
            <td data-label="Destino Turístico Clave">
              Pampas de Quinua, Artesanía Retablos
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
