import React from "react";
import { Routes, Route } from "react-router-dom";
// 1. IMPORTAR EL PROVIDER DEL CONTEXTO
import { GlobalProvider } from './ContextoGlobal'; 

// Importación de componentes de Persona 1 y otros
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Contexto from "./componentes/Contexto";
import Contacto from "./componentes/Contacto";
import Departamentos from "./componentes/Departamentos";
import Footer from "./componentes/Footer";
import Tabla from "./componentes/Tabla"; 
import Estadisticas from "./componentes/Estadisticas"; // <<< IMPORTACIÓN DE ESTADISTICAS (PERSONA 5)
import "./style.css";

function App() {
  return (
    // 2. ENVOLVER TODA LA APLICACIÓN CON EL GLOBAL PROVIDER
    <GlobalProvider> 
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contexto" element={<Contexto />} />
          {/* Componente de Contacto (Tarea Persona 5) */}
          <Route path="/contacto" element={<Contacto />} /> 
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/tablas" element={<Tabla />} />
          {/* Componente de Estadísticas (Tarea Persona 5 - Gráfico) */}
          <Route path="/estadisticas" element={<Estadisticas />} /> 
        </Routes>
      </main>
      <Footer />
    </GlobalProvider>
  );
}

export default App;