/* eslint-disable no-use-before-define */
import React from "react";
import { AppUI } from "./appUI";
import { TodoProvider } from "../todoContext";
import "./App.css";

function App(props) {
  // *Se crea el template -------------------------------------------------------------------------------
  return (
    // por buena practica, todos la vista de los componentes que forma una UI
    // se deben de mandar a otro componente y ya solo desde aqui enviar las props
    // para que pueda funcionar la app
    <div className="container-app">
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </div>
  );
}

export default App;
