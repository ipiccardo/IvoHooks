import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";


export const useTodo = () => {
    
    const initialState = [];
    
    const init = () => {
    // EL PARSE ES EL OPUESTO AL STRINGIFY
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  // EN EL LOCAL STORAGE SOLO SE PUEDEN GRABAR STRINGS
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const onHandleToggle = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const totalTodos = (todos) => {
  const total =  todos.length;
  return total;
  }

  const pendsTodos = (todos) => {
  const pendientes =  todos.filter((todos) => {
    return !todos.done}).length;
  
    return pendientes;
  }
 

  return {
    initialState,
    handleDeleteTodo,
    onHandleToggle,
    handleNewTodo,
    todos,
    totalTodos,
    pendsTodos,
  };
};
