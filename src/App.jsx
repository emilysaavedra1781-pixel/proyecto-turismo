import React from "react";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Contexto from "./componentes/Contexto";
import Departamentos from "./componentes/Departamentos";
import Footer from "./componentes/Footer";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <Contexto />
        <Departamentos />
      </main>
      <Footer />
    </>
  );
}

export default App;





