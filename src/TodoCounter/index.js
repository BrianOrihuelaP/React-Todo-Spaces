import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../todoContext";
// *para colocar estilos en linea se deben de colocar por medio de
// un objeto y con al siguiente sintaxis:
// const styles = {
//   color: "red",
//   textDecoration: "underline",
// };

//*Antes del use context : function TodoCounter({ total, completed })
function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    //   <h2 style={styles}>Has completado 2/3 TODO´s</h2>
    <h2 className="titulo">
      Has completado {completedTodos}/{totalTodos} tareas
    </h2>
  );
}

// el siguente tipo de export nos permite renombrar al importar
// con el nombre que sea
// *export default TodoCounter;

// la siguiente manera de export nos forza a usar el mismo nombre
// de la exportacion al importar
export { TodoCounter };
