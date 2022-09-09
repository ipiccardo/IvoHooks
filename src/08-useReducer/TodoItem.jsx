import React from "react";
import './reducer.css';


const TodoItem = ({ todos, onDeletTodo, onToggleTodo }) => {
  return (
    <li>
      <span className={`${todos.done && 'textDecoration'}`} onClick={() => onToggleTodo(todos.id)}>{todos.description}</span>
      <button onClick={() => onDeletTodo(todos.id)}>Borrar</button>
    </li>
  );
};

export default TodoItem;
