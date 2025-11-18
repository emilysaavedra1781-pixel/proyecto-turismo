// src/componentes/Tabla.jsx (verificar importación y uso)

import React from "react";
import "../style.css";
import Persona2 from "./Persona2"; // <--- ESTE DEBE APUNTAR A './Persona2.jsx'
import { useGlobal } from "./ContextoGlobal";
import { textos } from "../data/traducciones";

export default function Tabla() {
    const { idioma } = useGlobal();
    // ...
    
    return (
        <>
            <Persona2 /> {/* <-- Aquí se renderizan Carrusel, Buscador y Destinos */}

            <section className="seccion-tabla mostrar-tabla">
            {/* ... (Tabla Comparativa) */}
            </section>
        </>
    );
}
