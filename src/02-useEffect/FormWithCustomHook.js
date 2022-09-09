import React from "react";
import "./simpleForm.css";
import { useState, useEffect } from "react";
import Messaje from "./Messaje";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
 

  const {form, handleChange, handleSubmit, onResetForm} = useForm({
  username: '',
  email: '',
  password: ''})

  const {username, email, password} = form

  useEffect(() => {
    console.log("cambio el form");
  }, [form]);

  console.log(form);

  return (
    <>
      <h1> Formulario con Custom Hook </h1>
      <hr />
      <form className="formDiv" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          placeholder="ivan.piccardo@hotmail.com"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="*********"
          name="password"
          value={password}
          onChange={handleChange}
        ></input>

        <button onClick={onResetForm}>Borrar</button>
      </form>
      {username === "Ivo" && <Messaje />}
    </>
  );
};

export default FormWithCustomHook;
