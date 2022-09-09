import React from "react";
import { useTodo } from "../hooks/useTodo";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";


const TodoApp = () => {

  const {todos, handleDeleteTodo, onHandleToggle, handleNewTodo, pendsTodos, totalTodos} = useTodo()


  return (
    <>
      <h1>UseReducer</h1>
      <h2><span>Total Todos: {totalTodos(todos)}</span>, <span>Todos Pendientes {pendsTodos(todos)}</span></h2>
      <hr />
      <div>
        <TodoList todos={todos} onDeletTodo={(id) => handleDeleteTodo(id)} onToggleTodo={onHandleToggle} />
      </div>

      <div>
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};

export default TodoApp;
