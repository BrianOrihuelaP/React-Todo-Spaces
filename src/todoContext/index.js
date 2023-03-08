import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = React.createContext();

function TodoProvider(props) {
  // *Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
  // ---llamando al custom hook cuando era vector---
  // const { todos, saveTodos } = useLocalStorage("TODOS_V1", []);
  // cuando es objeto:
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter((todo) => !!todo.complete).length;
  // las dobles (!!) se evaluan: true -> false -> "true" ; false -> true -> "false"
  const totalTodos = todos.length;

  // *FUNCION QUE ME CREA NUEVAS TAREAS---------------------------------------------
  const newTodo = (tarea) => {
    if (totalTodos >= 7) {
      alert("¡Has alcansado el limite de tareas!: " + totalTodos);
    } else {
      let tareaNueva = {
        text: tarea,
        complete: false,
      };
      let todosList = JSON.parse(localStorage.getItem("TODOS_V1"));
      todosList.push(tareaNueva);
      saveTodos(todosList);
    }
  };

  //* Busqueda y filtrado de las tareas---------------------------------------------------------
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    //tambien funciona : "searchValue.length===0" ; si no se ha buscado...
    searchedTodos = todos;
  } else {
    // *A continuacion se filtraran y compararan lo ingresado con las tareas
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
      //*Recordar que el estado se actualiza desde el componente (setSearchValue)
    });
  } // *para la busqueda de las tareas no se uso estados, solo se filtro el array*

  //*Funcion la cual nos servira al marcar como completa una tarea---------------------------------------
  // The findIndex() method returns the index of the first element in an array that satisfies
  // the provided testing function. If no elements satisfy the testing function, -1 is returned.
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((item) => item.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);
  };

  //*Funcion la cual nos servira para eliminar las tareas-----------------------------------------------
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((item) => item.text === text);
    const newTodos = [...todos];
    // con ayuda de splice eliminamos el elemento que se ha encontrado
    newTodos.splice(todoIndex, 1);
    // recordar que splice nos devuelve el elemento eliminado
    saveTodos(newTodos);
  };

  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá
  //  a toda nuestra aplicación, por eso necesitamos la prop children
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        deleteTodo,
        newTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer,
// para acceder a nuestro contexto
export { TodoContext, TodoProvider }; 
