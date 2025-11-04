import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Contexto from "./componentes/Contexto";
import Contacto from "./componentes/Contacto";
import Departamentos from "./componentes/Departamentos";
import Footer from "./componentes/Footer";
import Tabla from "./componentes/Tabla"; // si tienes ese componente
import "./style.css";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;






