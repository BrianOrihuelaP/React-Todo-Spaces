import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { TodoContext } from "../todoContext";
import { Modal } from "../Modal/index.";
import { TodoForm } from "../TodoForm";

function AppUI() {
  // *searchedTodos es el vector de arrays filtrado de acuerdo a la entrada de los usuarios

  // *comienza sweetAlert
  useEffect(() => {
    if (loading) {
      mostrarAlerta();
    } else {
      mostrarAlertaError();
    }
  }, []);

  const mostrarAlerta = () => {
    let timerInterval;
    Swal.fire({
      title: "Cargando, por favor espere...",
      html: "La ventana se cerrara en <b></b> millisegundos.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  const mostrarAlertaError = () => {
    console.log("Cargadoo");
  };

  // *Usando reactHooks para el context
  const { loading, searchedTodos, completeTodos, deleteTodo, openModal } =
    React.useContext(TodoContext);
  // alternativa : const value = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {!loading &&
          !searchedTodos.length && [
            <p className="msjNew">Crea tu primer todo</p>,
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={require("../images/todo.png")} className="todoImage" />,
          ]}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.complete}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoButton />
    </React.Fragment>
  );
}

export { AppUI };
