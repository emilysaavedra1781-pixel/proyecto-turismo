import React from "react";
import { Routes, Route } from "react-router-dom";

// CONTEXTO GLOBAL
import { GlobalProvider } from "./componentes/ContextoGlobal.jsx";

// Importación de componentes
import Header from "./componentes/Header1.jsx";
import Inicio from "./componentes/Inicio1.jsx";
import Contexto from "./componentes/Contexto1.jsx";
import Contacto from "./componentes/Contacto2.jsx";
import Departamentos from "./componentes/Departamentos1.jsx";
import Footer from "./componentes/Footer1.jsx";
import Tabla from "./componentes/Tabla1.jsx";

function App() {
  return (
    <GlobalProvider> 
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contexto" element={<Contexto />} />
          <Route path="/contacto" element={<Contacto />} /> 
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/tablas" element={<Tabla />} />
        </Routes>
      </main>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
