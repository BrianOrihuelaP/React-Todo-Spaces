import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// se obtiene la raiz del index en la cual se insertara el componente
const root = ReactDOM.createRoot(document.getElementById("root"));
// aqui podemos observar que se renderiza un componente llamado app
root.render(
  <App />
);

// al componente le mando una propiedad con un string
