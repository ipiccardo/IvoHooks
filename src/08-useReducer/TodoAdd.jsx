import React from "react";
import useForm from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const {description, handleChange, onResetForm } = useForm({
    description: ''
  })

  const onSubmit = (event) => {
    event.preventDefault(event);
    if (description.lenght <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }

    console.log(newTodo.description)

    onNewTodo(newTodo);
  };

  return (
    
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <button>Borrar</button>
      </form>
   
  );
};

export default TodoAdd;
