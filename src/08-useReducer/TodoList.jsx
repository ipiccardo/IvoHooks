import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], onDeletTodo, onToggleTodo }) => {
  return (
    <>
      <ul>
        {todos.map((todos) => (
          <TodoItem
            onToggleTodo={onToggleTodo}
            key={todos.id}
            todos={todos}
            onDeletTodo={(id) => onDeletTodo(id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
