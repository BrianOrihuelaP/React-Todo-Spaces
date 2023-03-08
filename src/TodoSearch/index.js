import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../todoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChanged = (event) => {
    // con lo siguiente podemos capturar el valor escrito del input
    console.log("evento del teclado: " + event.target.value);
    setSearchValue(event.target.value);
  };

  // si no se desea usar el React.Fragment,
  // entonces podemos retornar un array de elementos jsx
  // return [
  //   <input
  //     className="TodoSearch"
  //     placeholder="Cebolla"
  //     value={searchValue}
  //     onChange={onSearchValueChanged}
  //   />,
  //   <p>{searchValue}</p>
  // ];
  // * De esta manera y con ayuda de los estados, podemos conectar
  // los elementos y asi compartir informacion entre estos.
  // En este ejemplo se traslado la info del input al p
  // *Con los estados podemos compartir y enlazar componentes

  // como se movio el estado al padre entonces:
  return (
    <input
      className="TodoSearch"
      placeholder="Buscar una tarea"
      value={searchValue}
      onChange={onSearchValueChanged}
    />
  );
}

export { TodoSearch };
