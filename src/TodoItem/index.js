/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  // *Esta funcion era de prueba, la original viene del elemento padre
  // const onComplete = () => {
  //   alert("Complete task: " + props.text);
  // }

  // const onDelete = () => {
  //   alert("Delete task: " + props.text);
  // }

  return (
    <li className="TodoItem">
      {/* si el completed se envia como true, entonces agregamos la clase css */}
      <img
        src={require("../images/check.png")}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <img
        src={require("../images/remove.png")}
        className="Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
