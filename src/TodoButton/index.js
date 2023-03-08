import React from "react";
import "./TodoButton.css";
import { TodoContext } from "../todoContext";

function TodoButton() {
  // consumiendo el procesamieto del proveedor para crear tareas
  const { setOpenModal } = React.useContext(TodoContext);
  // Se crea un expretion function la cual se asignara o ejecutara
  // al dar click con ayuda del evento
  const miClic = () => {
    // if (!openModal) {
    //   setOpenModal(true);
    // } else {
    //   setOpenModal(false);
    // }
    setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={miClic}>
      +
    </button>
  );
}

export { TodoButton };
