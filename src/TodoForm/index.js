import React from "react";
import { TodoContext } from "../todoContext";
import './TodoForm.css';

function TodoForm(params) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { newTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onAdd = (event) => {
    event.preventDefault();
    newTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <>
      <form onSubmit={onAdd}>
        <label>Escribe tu nueva tarea</label>
        <textarea
          placeholder="¿Qué tarea vas a hacer?"
          value={newTodoValue}
          onChange={onChange}
        />
        <div className="TodoForm-buttonContainer">
          <button
            onClick={onCancel}
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Crear
          </button>
        </div>
      </form>
    </>
  );
}

export { TodoForm };
